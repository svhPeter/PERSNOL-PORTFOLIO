"use client";

import { useEffect, useState, useRef, useCallback } from "react";

const SCENE_DURATIONS = [5000, 4500, 6000, 6000, 5500, 5500, 6000, 5500, 5000, 7000];
const TOTAL_SCENES = 10;

const BAR_HEIGHTS = [0.72, 0.55, 0.88, 0.62, 0.95, 0.78, 0.85, 0.45, 0.68, 0.92, 0.58, 0.82];

const INV_ITEMS = [
  { icon: "☕", name: "Espresso Beans", stock: 12, max: 24 },
  { icon: "🥛", name: "Oat Milk", stock: 8, max: 12 },
  { icon: "🍫", name: "Chocolate Syrup", stock: 3, max: 10 },
  { icon: "🧊", name: "Ice Stock", stock: 22, max: 30 },
];

const STAFF_DATA = [
  { name: "Sarah", role: "Barista", shift: "9AM–5PM", color: "#3b82f6" },
  { name: "Mike", role: "Cashier", shift: "12PM–8PM", color: "#22d3ee" },
  { name: "Emma", role: "Manager", shift: "8AM–4PM", color: "#f472b6" },
];

const SHIFTS = [
  { time: "6AM", label: "Opening", width: 0.15 },
  { time: "9AM", label: "Morning", width: 0.35 },
  { time: "12PM", label: "Lunch", width: 0.55 },
  { time: "3PM", label: "Afternoon", width: 0.4 },
  { time: "6PM", label: "Closing", width: 0.25 },
];

const TENANT_NODES = [
  { icon: "🏪", name: "Downtown Cafe", meta: "42 sales" },
  { icon: "☕", name: "Brew Corner", meta: "28 sales" },
  { icon: "🥐", name: "Bakery Plus", meta: "19 sales" },
];

function playWhoosh() {
  if (typeof document === "undefined" || document.body.getAttribute("data-sound-enabled") !== "true") return;
  try {
    const ctx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
    if (ctx.state === "suspended") ctx.resume();
    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.06, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.2);
    const osc = ctx.createOscillator();
    osc.type = "sine";
    osc.frequency.setValueAtTime(400, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(80, ctx.currentTime + 0.2);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.2);
  } catch {
    /* ignore */
  }
}

function playChime() {
  if (typeof document === "undefined" || document.body.getAttribute("data-sound-enabled") !== "true") return;
  try {
    const ctx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
    if (ctx.state === "suspended") ctx.resume();
    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.08, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.12);
    const osc = ctx.createOscillator();
    osc.type = "sine";
    osc.frequency.setValueAtTime(523, ctx.currentTime);
    osc.frequency.setValueAtTime(659, ctx.currentTime + 0.03);
    osc.frequency.setValueAtTime(784, ctx.currentTime + 0.06);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.12);
  } catch {
    /* ignore */
  }
}

function playTick() {
  if (typeof document === "undefined" || document.body.getAttribute("data-sound-enabled") !== "true") return;
  try {
    const ctx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
    if (ctx.state === "suspended") ctx.resume();
    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.04, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.05);
    const osc = ctx.createOscillator();
    osc.type = "sine";
    osc.frequency.setValueAtTime(600, ctx.currentTime);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.05);
  } catch {
    /* ignore */
  }
}

const ANIMATE_IN_CONFIG: Record<number, { selectors: string[]; delays: number[] }> = {
  0: { selectors: [".line"], delays: [0, 180, 360] },
  1: { selectors: [".reveal-pre", ".reveal-bar", ".reveal-logo", ".reveal-tagline", ".sparkle"], delays: [0, 150, 250, 400, 450] },
  2: { selectors: [".dash-label", ".dash-title", ".dash-frame", ".metric-card", ".chart-bar"], delays: [0, 80, 120, 200, 350] },
  3: { selectors: [".dash-label", ".dash-title", ".dash-frame", ".pos-item", ".pos-summary", ".pos-btn"], delays: [0, 80, 120, 200, 400, 650] },
  4: { selectors: [".dash-label", ".dash-title", ".dash-frame", ".inv-card", ".inv-bar-fill"], delays: [0, 80, 120, 200, 400] },
  5: { selectors: [".dash-label", ".dash-title", ".dash-frame", ".staff-card", ".shift-time-row", ".shift-bar"], delays: [0, 80, 120, 200, 350, 500] },
  6: { selectors: [".dash-label", ".dash-title", ".dash-frame", ".metric-card", ".chart-area", ".line-path", ".line-fill", ".line-dot", ".dash-table", ".dash-table tr"], delays: [0, 80, 120, 200, 300, 400, 600, 800, 900, 950, 1000] },
  7: { selectors: [".dash-label", ".dash-title", ".dash-frame", ".tenant-cloud", ".tenant-line", ".tenant-node"], delays: [0, 80, 120, 200, 350, 450] },
  8: { selectors: [".own-badge", ".own-title", ".own-feature"], delays: [0, 120, 250] },
  9: { selectors: [".cta-logo", ".cta-sub", ".cta-btn", ".cta-note"], delays: [0, 220, 380, 550] },
};

function animateIn(sceneEl: HTMLElement | null, idx: number) {
  if (!sceneEl) return;
  sceneEl.querySelectorAll(".vis").forEach((el) => el.classList.remove("vis"));
  const cfg = ANIMATE_IN_CONFIG[idx];
  if (!cfg) return;
  const maxDelay = Math.max(...cfg.delays);
  cfg.selectors.forEach((sel, i) => {
    const els = sceneEl.querySelectorAll(sel);
    const d = cfg.delays[Math.min(i, cfg.delays.length - 1)] ?? 0;
    els.forEach((el, j) => {
      setTimeout(() => {
        el.classList.add("vis");
        if (idx === 3 && sel === ".pos-item" && j === 1) el.classList.add("highlight");
        if (idx === 7 && sel === ".tenant-node" && j === 0) el.classList.add("pulse");
      }, d + j * 50);
    });
  });
}

function useParticleCanvas(canvasRef: React.RefObject<HTMLCanvasElement | null>) {
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const particles: { x: number; y: number; vx: number; vy: number; r: number }[] = [];
    const count = 40;

    const initParticles = (w: number, h: number) => {
      particles.length = 0;
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          r: Math.random() * 1.5 + 0.5,
        });
      }
    };

    const onResize = () => {
      const dpr = window.devicePixelRatio || 1;
      const w = canvas.offsetWidth || 800;
      const h = canvas.offsetHeight || 600;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
      initParticles(w, h);
    };
    onResize();

    let raf: number;
    const loop = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      ctx.clearRect(0, 0, w, h);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(59,130,246,0.15)";
        ctx.fill();
      });
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, [canvasRef]);
}

export default function ShopPOSAnimation() {
  const [current, setCurrent] = useState(-1);
  const [exitingScene, setExitingScene] = useState<number>(-1);
  const [enteringScene, setEnteringScene] = useState<number>(-1);
  const [playing, setPlaying] = useState(true);
  const sceneTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const transitionRef = useRef<ReturnType<typeof setTimeout>[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRefs = useRef<(HTMLDivElement | null)[]>([]);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const currentRef = useRef(-1);
  const playingRef = useRef(true);
  const isTransitioningRef = useRef(false);

  useParticleCanvas(canvasRef);

  currentRef.current = current;
  playingRef.current = playing;

  const goToSceneRef = useRef<(idx: number) => void>(() => {});

  const scheduleNextAdvance = useCallback(() => {
    if (sceneTimerRef.current) {
      clearTimeout(sceneTimerRef.current);
      sceneTimerRef.current = null;
    }
    if (!playingRef.current || currentRef.current < 0) return;
    const nextIdx = (currentRef.current + 1) % TOTAL_SCENES;
    const dur = SCENE_DURATIONS[currentRef.current];
    sceneTimerRef.current = setTimeout(() => goToSceneRef.current(nextIdx), dur);
  }, []);

  const scheduleNextAdvanceRef = useRef(scheduleNextAdvance);
  scheduleNextAdvanceRef.current = scheduleNextAdvance;

  const goToScene = useCallback(
    (idx: number) => {
      const next = Math.max(0, Math.min(TOTAL_SCENES - 1, idx));
      const prev = currentRef.current;
      const isInitial = prev < 0;

      if (isTransitioningRef.current && !isInitial) return;
      if (!isInitial && prev === next) return;

      transitionRef.current.forEach(clearTimeout);
      transitionRef.current = [];
      isTransitioningRef.current = true;

      if (!isInitial && prev !== next) {
        setExitingScene(prev);
        transitionRef.current.push(
          setTimeout(() => {
            const prevEl = sceneRefs.current[prev];
            if (prevEl) prevEl.querySelectorAll(".vis").forEach((el) => el.classList.remove("vis"));
            setCurrent(next);
            currentRef.current = next;
            setExitingScene(-1);
            setEnteringScene(next);
            isTransitioningRef.current = false;
            playWhoosh();
            const sceneEl = sceneRefs.current[next];
            setTimeout(() => animateIn(sceneEl, next), 80);
            transitionRef.current.push(
              setTimeout(() => setEnteringScene(-1), 800)
            );
            scheduleNextAdvanceRef.current();
          }, 650)
        );
      } else {
        setCurrent(next);
        currentRef.current = next;
        setEnteringScene(next);
        isTransitioningRef.current = false;
        playWhoosh();
        const sceneEl = sceneRefs.current[next];
        setTimeout(() => animateIn(sceneEl, next), 80);
        transitionRef.current.push(
          setTimeout(() => setEnteringScene(-1), 800)
        );
        scheduleNextAdvanceRef.current();
      }
    },
    []
  );

  goToSceneRef.current = goToScene;

  const togglePlay = useCallback(() => {
    setPlaying((p) => !p);
    playTick();
  }, []);

  useEffect(() => {
    const t = setTimeout(() => goToScene(0), 500);
    return () => clearTimeout(t);
  }, [goToScene]);

  useEffect(() => {
    if (!playing) {
      if (sceneTimerRef.current) {
        clearTimeout(sceneTimerRef.current);
        sceneTimerRef.current = null;
      }
      return;
    }
    if (current >= 0) scheduleNextAdvance();
  }, [playing, current, scheduleNextAdvance]);

  useEffect(() => {
    return () => {
      if (sceneTimerRef.current) clearTimeout(sceneTimerRef.current);
      transitionRef.current.forEach(clearTimeout);
      transitionRef.current = [];
    };
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
      switch (e.key) {
        case "ArrowRight":
        case " ":
          e.preventDefault();
          goToScene(currentRef.current + 1);
          break;
        case "ArrowLeft":
          e.preventDefault();
          goToScene(currentRef.current - 1);
          break;
        case "p":
        case "P":
          e.preventDefault();
          togglePlay();
          break;
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [goToScene, togglePlay]);

  const sparklePositions = useRef(
    Array.from({ length: 20 }, () => ({ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`, delay: Math.random() * 0.5 }))
  ).current;

  return (
    <div className="shop-pos-animation" ref={containerRef}>
      <div className="spa-grain" aria-hidden />
      <canvas ref={canvasRef} className="spa-canvas" aria-hidden />
      <div className="spa-glow spa-glow-1" aria-hidden />
      <div className="spa-glow spa-glow-2" aria-hidden />
      <div className="spa-glow spa-glow-3" aria-hidden />

      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
        <div
          key={i}
          ref={(el) => {
            sceneRefs.current[i] = el;
          }}
          className={`spa-scene ${i === 0 ? "scene-problem" : i === 1 ? "scene-reveal" : i === 8 ? "scene-ownership" : i === 9 ? "scene-cta" : "scene-dashboard"} ${current === i ? "active" : ""} ${exitingScene === i ? "exit-up" : ""} ${enteringScene === i ? "enter-up" : ""}`}
          data-scene={i}
        >
          {i === 0 && (
            <>
              <p className="line">Running a coffee shop is <em>chaos</em>.</p>
              <p className="line">Sales, inventory, staff — all disconnected.</p>
              <p className="line sub-line">Until now.</p>
            </>
          )}
          {i === 1 && (
            <>
              <div className="reveal-pre">Introducing</div>
              <div className="reveal-bar" />
              <h1 className="reveal-logo">SHOP-POS</h1>
              <p className="reveal-tagline">One dashboard. Full control. Built for owners who care.</p>
              <div className="reveal-sparkles">
                {sparklePositions.map((s, k) => (
                  <div key={k} className="sparkle" style={{ left: s.left, top: s.top, animationDelay: `${s.delay}s` }} />
                ))}
              </div>
            </>
          )}
          {i === 2 && (
            <>
              <div className="dash-label">Dashboard</div>
              <h2 className="dash-title">Overview</h2>
              <div className="dash-frame">
                <div className="dash-chrome">
                  <span className="chrome-dot" /><span className="chrome-dot" /><span className="chrome-dot" />
                  <div className="chrome-url">app.shop-pos.com/dashboard</div>
                </div>
                <div className="dash-body">
                  <div className="dash-sidebar">
                    <div className="sidebar-brand"><span className="brand-icon">SP</span> Shop-POS</div>
                    <div className="sidebar-item active">Dashboard</div>
                    <div className="sidebar-item">Sales</div>
                    <div className="sidebar-item">Inventory</div>
                    <div className="sidebar-item">Staff</div>
                    <div className="sidebar-item">Reports</div>
                  </div>
                  <div className="dash-main">
                    <div className="metric-row">
                      {[
                        { label: "TODAY'S REVENUE", value: "$2,847", change: "+12%", up: true },
                        { label: "TRANSACTIONS", value: "124", change: "+8%", up: true },
                        { label: "AVG. TICKET", value: "$22.96", change: "-2%", up: false },
                      ].map((m, k) => (
                        <div key={k} className="metric-card">
                          <div className="metric-label">{m.label}</div>
                          <div className="metric-value">{m.value}</div>
                          <div className={`metric-change ${m.up ? "up" : "down"}`}>{m.change}</div>
                        </div>
                      ))}
                    </div>
                    <div className="chart-area">
                      <div className="chart-title">SALES TREND</div>
                      <div className="chart-bars">
                        {BAR_HEIGHTS.map((h, k) => (
                          <div key={k} className="chart-bar" style={{ height: `${h * 100}%` }} />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
          {i === 3 && (
            <>
              <div className="dash-label">Point of Sale</div>
              <h2 className="dash-title">Checkout</h2>
              <div className="dash-frame">
                <div className="dash-chrome">
                  <span className="chrome-dot" /><span className="chrome-dot" /><span className="chrome-dot" />
                  <div className="chrome-url">app.shop-pos.com/pos</div>
                </div>
                <div className="dash-body">
                  <div className="dash-main" style={{ marginLeft: 0 }}>
                    <div className="pos-layout">
                      <div className="pos-items">
                        {[
                          { icon: "☕", name: "Latte", meta: "12oz · Hot", price: "$4.50" },
                          { icon: "🥐", name: "Croissant", meta: "Plain", price: "$3.25" },
                          { icon: "🧊", name: "Iced Tea", meta: "16oz", price: "$2.99" },
                        ].map((item, k) => (
                          <div key={k} className="pos-item">
                            <div className="pos-item-icon" style={{ background: "rgba(59,130,246,.2)" }}>{item.icon}</div>
                            <div className="pos-item-info">
                              <div className="pos-item-name">{item.name}</div>
                              <div className="pos-item-meta">{item.meta}</div>
                            </div>
                            <div className="pos-item-price">{item.price}</div>
                          </div>
                        ))}
                      </div>
                      <div className="pos-summary">
                        <div className="pos-summary-title">SUMMARY</div>
                        <div className="pos-line"><span>Subtotal</span><span>$10.74</span></div>
                        <div className="pos-line"><span>Tax</span><span>$0.86</span></div>
                        <div className="pos-line total"><span>Total</span><span>$11.60</span></div>
                        <button type="button" className="pos-btn">Pay Now</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
          {i === 4 && (
            <>
              <div className="dash-label">Inventory</div>
              <h2 className="dash-title">Stock Levels</h2>
              <div className="dash-frame">
                <div className="dash-chrome">
                  <span className="chrome-dot" /><span className="chrome-dot" /><span className="chrome-dot" />
                  <div className="chrome-url">app.shop-pos.com/inventory</div>
                </div>
                <div className="dash-body">
                  <div className="dash-main" style={{ marginLeft: 0 }}>
                    <div className="inv-grid">
                      {INV_ITEMS.map((inv, k) => (
                        <div key={k} className="inv-card">
                          <div className="inv-card-icon">{inv.icon}</div>
                          <div className="inv-card-name">{inv.name}</div>
                          <div className="inv-card-stock">{inv.stock} / {inv.max} units</div>
                          <div className="inv-bar-wrap">
                            <div className="inv-bar-fill" style={{ width: `${(inv.stock / inv.max) * 100}%`, background: inv.stock < 5 ? "#f87171" : "linear-gradient(90deg,#3b82f6,#22d3ee)" }} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
          {i === 5 && (
            <>
              <div className="dash-label">Staff</div>
              <h2 className="dash-title">Team & Shifts</h2>
              <div className="dash-frame">
                <div className="dash-chrome">
                  <span className="chrome-dot" /><span className="chrome-dot" /><span className="chrome-dot" />
                  <div className="chrome-url">app.shop-pos.com/staff</div>
                </div>
                <div className="dash-body">
                  <div className="dash-main" style={{ marginLeft: 0 }}>
                    <div className="staff-grid">
                      {STAFF_DATA.map((s, k) => (
                        <div key={k} className="staff-card">
                          <div className="staff-avatar" style={{ background: s.color }}>{s.name[0]}</div>
                          <div className="staff-info">
                            <div className="staff-name">{s.name}</div>
                            <div className="staff-role">{s.role}</div>
                            <div className="staff-shift">{s.shift}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="shift-timeline">
                      {SHIFTS.map((sh, k) => (
                        <div key={k} className="shift-time-row">
                          <span className="shift-time">{sh.time}</span>
                          <div className="shift-bar" style={{ background: "linear-gradient(90deg,#3b82f6,#22d3ee)" }}>
                            <span className="shift-bar-label">{sh.label}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
          {i === 6 && (
            <>
              <div className="dash-label">Reports</div>
              <h2 className="dash-title">Sales & Analytics</h2>
              <div className="dash-frame">
                <div className="dash-chrome">
                  <span className="chrome-dot" /><span className="chrome-dot" /><span className="chrome-dot" />
                  <div className="chrome-url">app.shop-pos.com/reports</div>
                </div>
                <div className="dash-body">
                  <div className="dash-main" style={{ marginLeft: 0 }}>
                    <div className="metric-row">
                      {[
                        { label: "REVENUE", value: "$24.5K", change: "+12%", up: true },
                        { label: "EXPENSES", value: "$8.2K", change: "-2%", up: false },
                      ].map((m, k) => (
                        <div key={k} className="metric-card">
                          <div className="metric-label">{m.label}</div>
                          <div className="metric-value">{m.value}</div>
                          <div className={`metric-change ${m.up ? "up" : "down"}`}>{m.change}</div>
                        </div>
                      ))}
                    </div>
                    <div className="chart-area">
                      <div className="chart-title">TREND</div>
                      <div className="line-chart">
                        <svg viewBox="0 0 400 100" preserveAspectRatio="none">
                          <defs>
                            <linearGradient id="lineGrad" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor="rgba(59,130,246,.3)" />
                              <stop offset="100%" stopColor="rgba(59,130,246,0)" />
                            </linearGradient>
                            <linearGradient id="lineStroke" x1="0" y1="0" x2="1" y2="0">
                              <stop offset="0%" stopColor="#3b82f6" />
                              <stop offset="100%" stopColor="#22d3ee" />
                            </linearGradient>
                          </defs>
                          <path className="line-fill" d="M0,80 Q100,60 200,50 T400,30 L400,100 L0,100 Z" />
                          <path className="line-path" d="M0,80 Q100,60 200,50 T400,30" />
                          <circle className="line-dot" cx="400" cy="30" r="3.5" />
                        </svg>
                      </div>
                    </div>
                    <table className="dash-table">
                      <thead>
                        <tr><th>Product</th><th>Qty</th><th>Revenue</th></tr>
                      </thead>
                      <tbody>
                        {[
                          { product: "Latte", qty: 142, rev: "$639" },
                          { product: "Cappuccino", qty: 98, rev: "$392" },
                          { product: "Croissant", qty: 76, rev: "$247" },
                        ].map((r, k) => (
                          <tr key={k}><td>{r.product}</td><td>{r.qty}</td><td>{r.rev}</td></tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </>
          )}
          {i === 7 && (
            <>
              <div className="dash-label">Multi-Tenant</div>
              <h2 className="dash-title">One Account, Many Stores</h2>
              <div className="dash-frame">
                <div className="dash-chrome">
                  <span className="chrome-dot" /><span className="chrome-dot" /><span className="chrome-dot" />
                  <div className="chrome-url">app.shop-pos.com/tenants</div>
                </div>
                <div className="dash-body">
                  <div className="dash-main" style={{ marginLeft: 0 }}>
                    <div className="tenant-visual">
                      <div className="tenant-cloud">SHOP-POS Cloud</div>
                      <div className="tenant-lines">
                        <div className="tenant-line" />
                        <div className="tenant-line" />
                        <div className="tenant-line" />
                      </div>
                      <div className="tenant-nodes">
                        {TENANT_NODES.map((n, k) => (
                          <div key={k} className="tenant-node">
                            <div className="tenant-node-icon">{n.icon}</div>
                            <div className="tenant-node-name">{n.name}</div>
                            <div className="tenant-node-meta">{n.meta}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
          {i === 8 && (
            <>
              <div className="own-badge">✓ You own it. Forever.</div>
              <h2 className="own-title">Full ownership. <span>No subscriptions.</span></h2>
              <div className="own-features">
                <div className="own-feature"><span className="check">✓</span> One-time purchase</div>
                <div className="own-feature"><span className="check">✓</span> Self-hosted or cloud</div>
                <div className="own-feature"><span className="check">✓</span> Lifetime updates</div>
              </div>
            </>
          )}
          {i === 9 && (
            <>
              <h1 className="cta-logo">SHOP-POS</h1>
              <p className="cta-sub">Production-ready multi-tenant SaaS. Try it now.</p>
              <a href="https://shop-pos-sand.vercel.app/" target="_blank" rel="noopener noreferrer" className="cta-btn">
                View Live Demo →
              </a>
              <p className="cta-note">No credit card required</p>
            </>
          )}
        </div>
      ))}

      <div className="spa-progress" style={{ width: `${((Math.max(0, current) + 1) / TOTAL_SCENES) * 100}%` }} />
      <div className="spa-scene-counter">
        {String(Math.max(0, current) + 1).padStart(2, "0")} / {TOTAL_SCENES}
      </div>
      <div className="spa-controls">
        <button type="button" onClick={() => goToScene(current - 1)} aria-label="Previous">Prev</button>
        <button type="button" onClick={togglePlay} aria-label={playing ? "Pause" : "Play"}>
          {playing ? "Pause" : "Play"}
        </button>
        <button type="button" onClick={() => goToScene(current + 1)} aria-label="Next">Next</button>
      </div>
    </div>
  );
}
