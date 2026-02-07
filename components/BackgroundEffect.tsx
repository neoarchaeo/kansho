"use client";

import { useEffect, useRef } from "react";

export default function BackgroundEffect() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Circuit trace nodes
    interface Node {
      x: number;
      y: number;
      connections: number[];
      pulsePhase: number;
      pulseSpeed: number;
    }

    const nodes: Node[] = [];
    const nodeCount = 30;

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        connections: [],
        pulsePhase: Math.random() * Math.PI * 2,
        pulseSpeed: 0.005 + Math.random() * 0.01,
      });
    }

    // Connect nearby nodes
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 300 && nodes[i].connections.length < 3) {
          nodes[i].connections.push(j);
        }
      }
    }

    let animFrame: number;
    let time = 0;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 1;

      // Draw connections as right-angle circuit traces
      nodes.forEach((node, i) => {
        node.connections.forEach((j) => {
          const target = nodes[j];
          const pulse = Math.sin(time * node.pulseSpeed + node.pulsePhase);
          const alpha = 0.02 + pulse * 0.015;

          ctx.strokeStyle = `rgba(196, 30, 58, ${alpha})`;
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          // Right-angle path (circuit board style)
          const midX = (node.x + target.x) / 2;
          ctx.lineTo(midX, node.y);
          ctx.lineTo(midX, target.y);
          ctx.lineTo(target.x, target.y);
          ctx.stroke();
        });
      });

      // Draw nodes as small squares (IC pads)
      nodes.forEach((node) => {
        const pulse = Math.sin(time * node.pulseSpeed + node.pulsePhase);
        const alpha = 0.03 + pulse * 0.02;
        const size = 2 + pulse * 0.5;

        ctx.fillStyle = `rgba(196, 30, 58, ${alpha})`;
        ctx.fillRect(node.x - size / 2, node.y - size / 2, size, size);
      });

      animFrame = requestAnimationFrame(draw);
    };

    // Check reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (!prefersReducedMotion) {
      draw();
    } else {
      // Static draw once
      time = 50;
      draw();
      cancelAnimationFrame(animFrame);
    }

    return () => {
      cancelAnimationFrame(animFrame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      aria-hidden="true"
      style={{ opacity: 0.6 }}
    />
  );
}
