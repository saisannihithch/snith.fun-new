import { useEffect, useRef } from "react";
import Globe from "globe.gl";
import * as THREE from "three";
import React from "react";

export default function ThreeScene() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Create globe instance
    const globe = new Globe(containerRef.current)
      .globeImageUrl(
        "//cdn.jsdelivr.net/npm/three-globe/example/img/earth-dark.jpg"
      )
      .backgroundColor("#000") // match your current dark theme
      .showAtmosphere(true)
      .atmosphereColor("#10B981") // Changed from blue to emerald green for the new theme
      .atmosphereAltitude(0.25);

    const controls = globe.controls();
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.5;

    // Disable user interaction
    controls.enableZoom = false;
    controls.enablePan = false;
    controls.enableRotate = false;

    const canvasInterval = setInterval(() => {
      const canvas = containerRef.current?.querySelector('canvas');
      if (canvas) {
        (canvas as HTMLCanvasElement).style.pointerEvents = 'none';
        clearInterval(canvasInterval);
      }
    }, 50);

    // Access the Three.js scene from Globe.GL
    const scene = globe.scene();

    // Add blinking stars to the background
    const starsGeometry = new THREE.BufferGeometry();
    const starCount = 2000;
    const positions = new Float32Array(starCount * 3);
    const sizes = new Float32Array(starCount);
    const phases = new Float32Array(starCount); // For blinking animation

    for (let i = 0; i < starCount; i++) {
      const x = (Math.random() - 0.5) * 2000;
      const y = (Math.random() - 0.5) * 2000;
      const z = (Math.random() - 0.5) * 2000;
      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
      sizes[i] = Math.random() * 2 + 0.5; // Random size between 0.5 and 2.5
      phases[i] = Math.random() * Math.PI * 2; // Random phase for blinking
    }

    starsGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );
    starsGeometry.setAttribute("size", new THREE.BufferAttribute(sizes, 1));
    starsGeometry.setAttribute("phase", new THREE.BufferAttribute(phases, 1));

    const starsMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 3,
      transparent: true,
      opacity: 0.7,
      sizeAttenuation: false, // Keep size constant regardless of distance
    });

    const stars = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(stars);

    // Animation loop for blinking stars
    let animationId: number | null = null;
    const animateStars = () => {
      animationId = requestAnimationFrame(animateStars);
      const time = Date.now() * 0.005; // Slow down the blinking speed
      for (let i = 0; i < starCount; i++) {
        const phase = starsGeometry.attributes.phase.array[i];
        const opacity = Math.sin(time + phase) * 0.5 + 0.5; // Oscillate between 0 and 1
        starsMaterial.opacity = opacity * 0.5 + 0.2; // Vary opacity between 0.2 and 0.7
      }
      // We don't need to update the geometry attributes manually as opacity is handled by material
    };

    animateStars();

    // Load GeoJSON countries and display hex polygons
    fetch("/datasets/ne_110m_admin_0_countries.geojson")
      .then((res) => res.json())
      .then((countries) => {
        (globe as any)
          .hexPolygonsData(countries.features)
          .hexPolygonResolution(3)
          .hexPolygonMargin(0.3)
          .hexPolygonUseDots(true)
          .hexPolygonColor(() => {
            // Generate shades of green instead of random colors
            const greenShade = Math.round(Math.random() * 50 + 100); // Between 100-150 for green value
            return `#${Math.round(Math.random() * 50 + 10)
              .toString(16)
              .padStart(2, "0")}${greenShade
              .toString(16)
              .padStart(2, "0")}${Math.round(Math.random() * 50 + 10)
              .toString(16)
              .padStart(2, "0")}`;
          })
          .hexPolygonLabel(
            ({
              properties: d,
            }: {
              properties: { ADMIN: string; ISO_A2: string; POP_EST: number };
            }) => `
            <b>${d.ADMIN} (${d.ISO_A2})</b> <br />
            Population: <i>${d.POP_EST}</i>
          `
          );
      });

    // Handle resize
    const handleResize = () => {
      globe.width(window.innerWidth);
      globe.height(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      if (animationId !== null) {
        cancelAnimationFrame(animationId);
      }
      window.removeEventListener("resize", handleResize);
      if (containerRef.current) {
        containerRef.current.innerHTML = ""; // cleanup globe canvas
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none"
      aria-hidden="true"
    />
  );
}
