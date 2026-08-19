"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { projects, type Project } from "./projects";

function ParticleTitle({ onParticleMove }: { onParticleMove: () => void }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerRef = useRef({ x: -9999, y: -9999, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;
    let animation = 0;
    let particles: { x: number; y: number; ox: number; oy: number; vx: number; vy: number; size: number; alpha: number }[] = [];

    const build = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(rect.width * dpr);
      canvas.height = Math.round(rect.height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const off = document.createElement("canvas");
      off.width = Math.round(rect.width);
      off.height = Math.round(rect.height);
      const oc = off.getContext("2d");
      if (!oc) return;
      const fontSize = Math.min(rect.width / 7.15, rect.height * 0.72);
      oc.fillStyle = "#fff";
      oc.font = `600 ${fontSize}px Arial, Helvetica, sans-serif`;
      oc.textAlign = "center";
      oc.textBaseline = "middle";
      oc.fillText("TIFFANY. WANG", rect.width / 2, rect.height / 2);
      const pixels = oc.getImageData(0, 0, off.width, off.height).data;
      const gap = rect.width < 700 ? 5 : 4;
      const next = [];
      for (let y = 0; y < off.height; y += gap) {
        for (let x = 0; x < off.width; x += gap) {
          if (pixels[(y * off.width + x) * 4 + 3] > 120) {
            next.push({
              x: x + (Math.random() - 0.5) * 22,
              y: y + (Math.random() - 0.5) * 22,
              ox: x,
              oy: y,
              vx: 0,
              vy: 0,
              size: 0.55 + Math.random() * 1.35,
              alpha: 0.45 + Math.random() * 0.55,
            });
          }
        }
      }
      particles = next;
    };

    const draw = () => {
      const rect = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);
      const pointer = pointerRef.current;
      for (const p of particles) {
        if (pointer.active) {
          const dx = p.x - pointer.x;
          const dy = p.y - pointer.y;
          const distance = Math.sqrt(dx * dx + dy * dy) || 1;
          if (distance < 92) {
            const force = (1 - distance / 92) * 0.48;
            p.vx += (dx / distance) * force;
            p.vy += (dy / distance) * force;
          }
        }
        p.vx += (p.ox - p.x) * 0.018;
        p.vy += (p.oy - p.y) * 0.018;
        p.vx *= 0.9;
        p.vy *= 0.9;
        p.x += p.vx;
        p.y += p.vy;
        ctx.beginPath();
        ctx.fillStyle = `rgba(${p.alpha > 0.75 ? "226,232,255" : "145,164,224"},${p.alpha})`;
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }
      animation = requestAnimationFrame(draw);
    };

    build();
    draw();
    const observer = new ResizeObserver(build);
    observer.observe(canvas);
    return () => {
      cancelAnimationFrame(animation);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="particle-title-wrap">
      <h1 className="sr-only">Tiffany. Wang</h1>
      <canvas
        ref={canvasRef}
        className="particle-title"
        aria-hidden="true"
        onPointerMove={(event) => {
          const rect = event.currentTarget.getBoundingClientRect();
          pointerRef.current = { x: event.clientX - rect.left, y: event.clientY - rect.top, active: true };
          onParticleMove();
        }}
        onPointerEnter={(event) => {
          const rect = event.currentTarget.getBoundingClientRect();
          pointerRef.current = { x: event.clientX - rect.left, y: event.clientY - rect.top, active: true };
        }}
        onPointerLeave={() => {
          pointerRef.current.active = false;
        }}
      />
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const cardRef = useRef<HTMLAnchorElement>(null);
  return (
    <a
      ref={cardRef}
      className={`project-card project-${project.index}`}
      href={`/archive/${project.id}`}
      onPointerMove={(event) => {
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
        const rect = event.currentTarget.getBoundingClientRect();
        const rx = ((event.clientY - rect.top) / rect.height - 0.5) * -3.5;
        const ry = ((event.clientX - rect.left) / rect.width - 0.5) * 4.5;
        event.currentTarget.style.setProperty("--rx", `${rx}deg`);
        event.currentTarget.style.setProperty("--ry", `${ry}deg`);
      }}
      onPointerLeave={(event) => {
        event.currentTarget.style.setProperty("--rx", "0deg");
        event.currentTarget.style.setProperty("--ry", "0deg");
      }}
      aria-label={`Open project: ${project.title}`}
    >
      <span className="card-visual" aria-hidden="true">
        <span className="visual-orbit" />
        <span className="visual-signal" />
        <span className="visual-grid" />
        <span className="visual-code">{project.index} / SIGNAL</span>
      </span>
      <span className="card-meta"><span>{project.field}</span><span>{project.year}</span></span>
      <span className="card-title-row"><strong>{project.title}</strong><span aria-hidden="true">↗</span></span>
      <span className="card-summary">{project.summary}</span>
    </a>
  );
}

export default function Home() {
  const [soundOn, setSoundOn] = useState(false);
  const audioRef = useRef<AudioContext | null>(null);
  const lastNoteRef = useRef(0);
  const noteRef = useRef(0);

  const playNote = useCallback(() => {
    if (!soundOn || Date.now() - lastNoteRef.current < 540) return;
    lastNoteRef.current = Date.now();
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return;
    const audio = audioRef.current ?? new AudioContextClass();
    audioRef.current = audio;
    if (audio.state === "suspended") void audio.resume();
    const frequencies = [523.25, 659.25, 783.99, 987.77, 880, 659.25, 587.33, 783.99];
    const now = audio.currentTime;
    const master = audio.createGain();
    const filter = audio.createBiquadFilter();
    const oscillator = audio.createOscillator();
    const shimmer = audio.createOscillator();
    oscillator.type = "sine";
    shimmer.type = "sine";
    const frequency = frequencies[noteRef.current++ % frequencies.length];
    oscillator.frequency.value = frequency;
    shimmer.frequency.value = frequency * 2.01;
    filter.type = "lowpass";
    filter.frequency.value = 2400;
    master.gain.setValueAtTime(0.0001, now);
    master.gain.exponentialRampToValueAtTime(0.028, now + 0.025);
    master.gain.exponentialRampToValueAtTime(0.0001, now + 1.8);
    oscillator.connect(filter);
    shimmer.connect(filter);
    filter.connect(master);
    master.connect(audio.destination);
    oscillator.start(now);
    shimmer.start(now);
    oscillator.stop(now + 1.9);
    shimmer.stop(now + 1.9);
  }, [soundOn]);

  const toggleSound = async () => {
    const next = !soundOn;
    setSoundOn(next);
    if (next) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (AudioContextClass) {
        audioRef.current = audioRef.current ?? new AudioContextClass();
        await audioRef.current.resume();
      }
    }
  };

  return (
    <main>
      <header className="site-header">
        <a className="site-mark" href="#top" aria-label="Tiffany's Archive home">Tiffany’s Archive</a>
        <nav aria-label="Primary navigation">
          <a href="#about">About</a>
          <a href="#archive">Archive</a>
          <a href="#focus">Focus</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="depth-field" aria-hidden="true"><i /><i /><i /><i /><i /><i /></div>
        <div className="corner corner-tl" aria-hidden="true" />
        <div className="corner corner-tr" aria-hidden="true" />
        <div className="corner corner-bl" aria-hidden="true" />
        <div className="corner corner-br" aria-hidden="true" />
        <span className="system-tag tag-ready">● SYS.READY</span>
        <span className="system-tag tag-coord">NYC / 40.7128° N</span>
        <span className="system-tag tag-signal">SIGNAL 98.4%</span>
        <span className="system-tag tag-local">LOCAL TIME / EST</span>
        <button className={`sound-toggle ${soundOn ? "is-on" : ""}`} onClick={toggleSound} aria-pressed={soundOn}>
          <span className="sound-bars" aria-hidden="true"><i /><i /><i /></span>
          Sound {soundOn ? "on" : "off"}
        </button>
        <div className="hero-content">
          <ParticleTitle onParticleMove={playNote} />
          <p className="hero-subtitle">Interaction designer shaping AI-powered experiences for complex, real-world workflows across technology, healthcare, education, entertainment, and beyond.</p>
        </div>
        <a className="scroll-cue" href="#about"><span>ENTER ARCHIVE</span><i aria-hidden="true">↓</i></a>
      </section>

      <section className="about section-shell" id="about">
        <div className="section-index"><span>01</span><span>ABOUT</span></div>
        <div className="about-grid">
          <h2>I design for what’s next, turning complex systems into clear, human experiences.</h2>
          <div className="about-copy">
            <p>I’m interested in how people make sense of new technology, especially AI. As an interaction designer, I work with complex systems and emerging ideas, turning them into experiences that feel clear, intuitive, and human. I care about designing products that not only work well, but also help people understand what they’re using and why it matters.</p>
            <div className="education">
              <span>EDUCATION</span>
              <strong>New York University (NYU), New York</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="focus section-shell" id="focus">
        <div className="section-index"><span>02</span><span>FOCUS</span></div>
        <div className="focus-list">
          <article><span>01</span><h3>Human–AI Interaction</h3><p>Designing legible, controllable relationships between people and adaptive systems.</p></article>
          <article><span>02</span><h3>Complex Workflows</h3><p>Finding calm structure inside high-stakes tools, layered decisions, and fragmented information.</p></article>
          <article><span>03</span><h3>Emerging Experiences</h3><p>Prototyping new modes of interaction across spatial, ambient, and multimodal environments.</p></article>
        </div>
      </section>

      <section className="archive section-shell" id="archive">
        <div className="section-index"><span>03</span><span>SELECTED ARCHIVE / 04</span></div>
        <div className="archive-heading"><h2>Work</h2><p>Four explorations across systems, intelligence, care, and culture. Select a project to enter its field notes.</p></div>
        <div className="project-grid">
          {projects.slice(0, 4).map((project) => <ProjectCard key={project.id} project={project} />)}
        </div>
      </section>

      <footer id="contact">
        <div><span>AVAILABLE FOR SELECT COLLABORATIONS</span><h2>Let’s make complex things feel clear.</h2></div>
        <a href="mailto:tiffiyixuan0120@gmail.com">Contact: tiffiyixuan0120@gmail.com <span>↗</span></a>
        <p>© 2026 TIFFANY WANG <span>NEW YORK / 08:13</span></p>
      </footer>

    </main>
  );
}

declare global {
  interface Window {
    webkitAudioContext?: typeof AudioContext;
  }
}
