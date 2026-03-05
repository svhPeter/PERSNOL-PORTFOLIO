"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const spring = { type: "spring" as const, stiffness: 300, damping: 24 };

const BEIGE = "#b7ab98";
const BLUE_ACCENT = "#3b82f6";
const SIDEBAR_BG = "rgba(20,30,45,0.95)";
const DARK = "#0d0d0d";
const CARD_BG = "rgba(255,255,255,0.04)";

const techStack = [
  { name: "Next.js", symbol: "▲" },
  { name: "Prisma", symbol: "◆" },
  { name: "PostgreSQL", symbol: "⬡" },
];

const posCategories = ["All Items", "Coffee", "Tea", "Bakery"];
const posProducts = [
  { name: "Classic Latte", price: "$4.50" },
  { name: "Cappuccino", price: "$4.00" },
  { name: "Double Espresso", price: "$3.00" },
];

export default function ShopPOSAnimation() {
  const [scene, setScene] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setScene((s) => (s + 1) % 5);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="shop-pos-animation"
      style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        width: "100%",
        height: "100%",
        padding: "clamp(0.5rem, 2vw, 1.5rem)",
        boxSizing: "border-box",
      }}
    >
      <AnimatePresence mode="wait">
        {scene === 0 && (
          <motion.div
            key="title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.5 }}
            style={{
              textAlign: "center",
              color: BEIGE,
              width: "100%",
              maxWidth: "100vw",
            }}
          >
            <motion.p
              initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
              animate={{ opacity: 0.9, y: 0, filter: "blur(0px)" }}
              transition={{ ...spring, delay: 0.1 }}
              style={{
                fontSize: "clamp(14px, 1.8vw, 22px)",
                letterSpacing: "0.25em",
                marginBottom: "clamp(0.75rem, 2vh, 1.5rem)",
                textTransform: "uppercase",
              }}
            >
              Coffee Shop Management
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ ...spring, delay: 0.2 }}
              style={{
                fontSize: "clamp(36px, 8vw, 96px)",
                fontWeight: 700,
                letterSpacing: "-0.03em",
                marginBottom: "clamp(0.5rem, 1.5vh, 1rem)",
                lineHeight: 0.95,
                color: BLUE_ACCENT,
              }}
            >
              SHOP-POS
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
              animate={{ opacity: 0.85, y: 0, filter: "blur(0px)" }}
              transition={{ ...spring, delay: 0.45 }}
              style={{
                fontSize: "clamp(14px, 1.5vw, 20px)",
              }}
            >
              Next.js 16 · Prisma 7 · PostgreSQL
            </motion.p>
          </motion.div>
        )}

        {scene === 1 && (
          <motion.div
            key="tech"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.4 }}
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "clamp(1.5rem, 4vw, 3rem)",
              alignItems: "stretch",
              justifyContent: "center",
              width: "min(100%, 1100px)",
            }}
          >
            {techStack.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 40, scale: 0.7, rotateY: -15 }}
                animate={{ opacity: 1, y: 0, scale: 1, rotateY: 0 }}
                transition={{ ...spring, delay: 0.1 + i * 0.15 }}
                whileHover={{ scale: 1.03, y: -4 }}
                style={{
                  textAlign: "center",
                  color: BEIGE,
                  flex: "1 1 min(180px, 100%)",
                  minWidth: 140,
                  maxWidth: 260,
                  padding: "clamp(1.25rem, 3vw, 2rem)",
                  background: "rgba(20,30,45,0.6)",
                  borderRadius: 16,
                  border: "1px solid rgba(59,130,246,0.2)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <motion.span
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ ...spring, delay: 0.25 + i * 0.15 }}
                  style={{
                    display: "block",
                    fontSize: "clamp(2rem, 4vw, 3rem)",
                    color: BLUE_ACCENT,
                    marginBottom: "clamp(0.6rem, 1.5vh, 1rem)",
                    lineHeight: 1,
                  }}
                >
                  {t.symbol}
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 0.95, y: 0 }}
                  transition={{ delay: 0.35 + i * 0.15 }}
                  style={{
                    fontSize: "clamp(1rem, 1.8vw, 1.4rem)",
                    fontWeight: 600,
                    letterSpacing: "-0.02em",
                    opacity: 0.95,
                  }}
                >
                  {t.name}
                </motion.span>
              </motion.div>
            ))}
          </motion.div>
        )}

        {scene === 2 && (
          <motion.div
            key="pos-mockup"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ ...spring }}
            style={{
              width: "min(96vw, 92vh, 900px)",
              maxHeight: "min(90vh, 600px)",
              borderRadius: "clamp(12px, 2vw, 20px)",
              overflow: "hidden",
              border: "1px solid rgba(59,130,246,0.2)",
              boxShadow: "0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(59,130,246,0.1)",
              background: "linear-gradient(180deg, rgba(20,30,45,0.9) 0%, rgba(13,13,13,0.98) 100%)",
            }}
          >
            {/* POS header */}
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...spring, delay: 0.1 }}
              style={{
                padding: "clamp(0.75rem, 2vh, 1.25rem) clamp(1rem, 2.5vw, 1.5rem)",
                borderBottom: "1px solid rgba(59,130,246,0.15)",
                display: "flex",
                alignItems: "center",
              }}
            >
              <motion.span
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 0.95, x: 0 }}
                transition={{ delay: 0.2 }}
                style={{
                  fontSize: "clamp(13px, 1.5vw, 18px)",
                  color: BEIGE,
                  opacity: 0.95,
                }}
              >
                Create New Sale (POS)
              </motion.span>
            </motion.div>
            {/* Categories */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.15 }}
              style={{
                padding: "clamp(0.6rem, 1.5vh, 1rem) clamp(1rem, 2.5vw, 1.5rem)",
                display: "flex",
                gap: "clamp(0.4rem, 1vw, 0.8rem)",
                flexWrap: "wrap",
                borderBottom: "1px solid rgba(59,130,246,0.1)",
              }}
            >
              {posCategories.map((c, i) => (
                <motion.span
                  key={c}
                  initial={{ opacity: 0, x: -20, scale: 0.8 }}
                  animate={{ opacity: 0.98, x: 0, scale: 1 }}
                  transition={{ ...spring, delay: 0.2 + i * 0.08 }}
                  style={{
                    fontSize: "clamp(11px, 1.2vw, 15px)",
                    padding: "clamp(0.4rem, 1vh, 0.6rem) clamp(0.6rem, 1.5vw, 1rem)",
                    borderRadius: 8,
                    background: i === 0 ? "rgba(59,130,246,0.25)" : "rgba(255,255,255,0.06)",
                    color: i === 0 ? BLUE_ACCENT : BEIGE,
                    opacity: 0.98,
                  }}
                >
                  {c}
                </motion.span>
              ))}
            </motion.div>
            {/* Product cards */}
            <div
              style={{
                padding: "clamp(1rem, 2.5vh, 1.5rem)",
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "clamp(0.5rem, 1.5vw, 1rem)",
              }}
            >
              {posProducts.map((p, i) => (
                <motion.div
                  key={p.name}
                  initial={{ opacity: 0, y: 24, scale: 0.85 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ ...spring, delay: 0.35 + i * 0.1 }}
                  style={{
                    background: CARD_BG,
                    borderRadius: 10,
                    padding: "clamp(0.6rem, 1.5vw, 1rem)",
                    border: "1px solid rgba(59,130,246,0.1)",
                  }}
                >
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0.5 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.45 + i * 0.1 }}
                    style={{
                      width: "100%",
                      aspectRatio: "1",
                      background: "rgba(255,255,255,0.05)",
                      borderRadius: 8,
                      marginBottom: "clamp(0.4rem, 1vh, 0.6rem)",
                    }}
                  />
                  <div
                    style={{
                      fontSize: "clamp(12px, 1.3vw, 16px)",
                      color: BEIGE,
                      opacity: 0.95,
                    }}
                  >
                    {p.name}
                  </div>
                  <div
                    style={{
                      fontSize: "clamp(13px, 1.4vw, 17px)",
                    color: BLUE_ACCENT,
                    fontWeight: 600,
                    marginTop: "0.25rem",
                    }}
                  >
                    {p.price}
                  </div>
                </motion.div>
              ))}
            </div>
            {/* Cart area */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...spring, delay: 0.6 }}
              style={{
                padding: "clamp(0.75rem, 2vh, 1.25rem) clamp(1rem, 2.5vw, 1.5rem)",
                borderTop: "1px solid rgba(59,130,246,0.15)",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 0.9, x: 0 }}
                transition={{ delay: 0.7 }}
                style={{
                  fontSize: "clamp(13px, 1.4vw, 17px)",
                  color: BEIGE,
                  opacity: 0.9,
                }}
              >
                Current Sale
              </motion.span>
              <motion.span
                initial={{ opacity: 0, scale: 0.8, x: 10 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ ...spring, delay: 0.75 }}
                style={{
                  fontSize: "clamp(16px, 2vw, 24px)",
                  fontWeight: 700,
                  color: BLUE_ACCENT,
                }}
              >
                $17.05
              </motion.span>
            </motion.div>
          </motion.div>
        )}

        {scene === 3 && (
          <motion.div
            key="dashboard"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ ...spring }}
            style={{
              width: "min(98vw, 95vh, 1600px)",
              height: "min(90vh, 700px)",
              display: "flex",
              borderRadius: "clamp(10px, 1.5vw, 16px)",
              overflow: "hidden",
              border: "1px solid rgba(59,130,246,0.2)",
              boxShadow: "0 24px 80px rgba(0,0,0,0.5)",
              background: "linear-gradient(180deg, #0d1419 0%, #0d0d0d 100%)",
            }}
          >
            <div className="shop-pos-dashboard" style={{ display: "flex", width: "100%", height: "100%", flexDirection: "row" }}>
            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ ...spring, delay: 0.1 }}
              style={{
                width: "clamp(180px, 18%, 220px)",
                minWidth: 140,
                background: SIDEBAR_BG,
                padding: "clamp(0.75rem, 2vw, 1.25rem)",
                display: "flex",
                flexDirection: "column",
                gap: "clamp(0.5rem, 1.5vh, 1rem)",
              }}
            >
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} style={{ padding: "0 0.5rem", marginBottom: "0.5rem" }}>
                <motion.div initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.25 }} style={{ fontSize: "clamp(14px, 1.2vw, 18px)", fontWeight: 700, color: BLUE_ACCENT }}>SHOP-POS</motion.div>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.7 }} transition={{ delay: 0.3 }} style={{ fontSize: "clamp(10px, 0.9vw, 12px)", color: BEIGE }}>Admin Panel</motion.div>
              </motion.div>
              {["Dashboard", "Sales", "Inventory", "Employees", "Reports"].map((nav, i) => (
                <motion.div
                  key={nav}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: i === 0 ? 1 : 0.85, x: 0 }}
                  transition={{ ...spring, delay: 0.15 + i * 0.06 }}
                  style={{
                    fontSize: "clamp(11px, 1vw, 14px)",
                    padding: "0.5rem 0.75rem",
                    borderRadius: 8,
                    color: i === 0 ? BLUE_ACCENT : BEIGE,
                    background: i === 0 ? "rgba(59,130,246,0.15)" : "transparent",
                    opacity: i === 0 ? 1 : 0.85,
                  }}
                >
                  {nav}
                </motion.div>
              ))}
              <div style={{ flex: 1 }} />
              <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} style={{ display: "flex", alignItems: "center", gap: "0.5rem", padding: "0.5rem" }}>
                <div style={{ width: 32, height: 32, borderRadius: "50%", background: "rgba(183,171,152,0.3)" }} />
                <div>
                  <div style={{ fontSize: "clamp(11px, 1vw, 13px)", color: BEIGE }}>John Doe</div>
                  <div style={{ fontSize: "clamp(9px, 0.8vw, 11px)", color: BEIGE, opacity: 0.6 }}>john@shoppos.com</div>
                </div>
              </motion.div>
            </motion.div>
            {/* Main content */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.12 }}
              style={{
                flex: 1,
                padding: "clamp(0.75rem, 2vw, 1.5rem)",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                gap: "clamp(0.5rem, 1.5vh, 1rem)",
                background: "rgba(243,244,246,0.03)",
              }}
            >
              <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.18 }} style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "0.75rem" }}>
                <div>
                  <motion.h3 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.22 }} style={{ fontSize: "clamp(16px, 1.5vw, 22px)", fontWeight: 700, color: BEIGE, margin: 0 }}>Dashboard Overview</motion.h3>
                  <motion.p initial={{ opacity: 0 }} animate={{ opacity: 0.75 }} transition={{ delay: 0.26 }} style={{ fontSize: "clamp(11px, 1vw, 14px)", color: BEIGE, margin: "0.25rem 0 0" }}>Welcome back, here&apos;s what&apos;s happening with your store today.</motion.p>
                </div>
                <div style={{ display: "flex", gap: "0.5rem" }}>
                  {["Today", "7 Days", "30 Days"].map((d, i) => (
                    <motion.span
                      key={d}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ ...spring, delay: 0.2 + i * 0.05 }}
                      style={{
                        fontSize: "clamp(10px, 0.9vw, 12px)",
                        padding: "0.4rem 0.75rem",
                        borderRadius: 6,
                        background: i === 2 ? BLUE_ACCENT : "rgba(255,255,255,0.08)",
                        color: i === 2 ? "#fff" : BEIGE,
                      }}
                    >
                      {d}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
              {/* Metric cards */}
              <div
                className="shop-pos-metrics"
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(4, 1fr)",
                  gap: "clamp(0.5rem, 1.5vw, 1rem)",
                }}
              >
                {[
                  { label: "Total Sales", value: "$24,500", change: "+12%", color: "#22c55e" },
                  { label: "Transactions", value: "1,204", change: "+5%", color: "#22c55e" },
                  { label: "Total Expenses", value: "$8,200", change: "-2%", color: "#ef4444" },
                  { label: "Net Revenue", value: "$16,300", change: "+15%", color: "#22c55e" },
                ].map((m, i) => (
                  <motion.div
                    key={m.label}
                    initial={{ opacity: 0, y: 12, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ ...spring, delay: 0.25 + i * 0.06 }}
                    style={{
                      background: "rgba(255,255,255,0.06)",
                      borderRadius: 12,
                      padding: "clamp(0.6rem, 1.5vw, 1rem)",
                      border: "1px solid rgba(59,130,246,0.12)",
                    }}
                  >
                    <div style={{ fontSize: "clamp(10px, 0.9vw, 12px)", color: BEIGE, opacity: 0.8 }}>{m.label}</div>
                    <div style={{ fontSize: "clamp(14px, 1.4vw, 20px)", fontWeight: 700, color: BEIGE, marginTop: "0.25rem" }}>{m.value}</div>
                    <div style={{ fontSize: "clamp(10px, 0.85vw, 11px)", color: m.color, marginTop: "0.2rem" }}>{m.change}</div>
                  </motion.div>
                ))}
              </div>
              {/* Charts + Table row */}
              <div className="shop-pos-charts" style={{ flex: 1, minHeight: 0, display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: "clamp(0.5rem, 1.5vw, 1rem)" }}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.45 }}
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    borderRadius: 12,
                    padding: "clamp(0.6rem, 1.5vw, 1rem)",
                    border: "1px solid rgba(59,130,246,0.1)",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div style={{ fontSize: "clamp(12px, 1.1vw, 14px)", fontWeight: 600, color: BEIGE, marginBottom: "0.5rem" }}>Sales Trend</div>
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.55 }} style={{ flex: 1, background: "rgba(59,130,246,0.12)", borderRadius: 8, minHeight: 80 }} />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 }}
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    borderRadius: 12,
                    padding: "clamp(0.6rem, 1.5vw, 1rem)",
                    border: "1px solid rgba(59,130,246,0.1)",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div style={{ fontSize: "clamp(12px, 1.1vw, 14px)", fontWeight: 600, color: BEIGE, marginBottom: "0.5rem" }}>Expense Breakdown</div>
                  <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem" }}>
                    <motion.div initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ ...spring, delay: 0.6 }} style={{ width: "clamp(60px, 8vw, 90px)", height: "clamp(60px, 8vw, 90px)", borderRadius: "50%", border: `4px solid ${BLUE_ACCENT}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "clamp(10px, 1vw, 12px)", color: BEIGE }}>$8.2k</motion.div>
                  </div>
                </motion.div>
              </div>
              {/* Low stock */}
              <motion.div
                initial={{ opacity: 0, y: 12, x: -8 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                transition={{ ...spring, delay: 0.65 }}
                style={{
                  background: "rgba(239,68,68,0.08)",
                  borderRadius: 10,
                  padding: "clamp(0.5rem, 1.2vw, 0.75rem)",
                  border: "1px solid rgba(239,68,68,0.2)",
                  fontSize: "clamp(10px, 0.9vw, 12px)",
                  color: "#ef4444",
                }}
              >
                ▲ Low Stock Alerts — Espresso Beans (3 left), Almond Milk (8 left)
              </motion.div>
            </motion.div>
            </div>
          </motion.div>
        )}

        {scene === 4 && (
          <motion.div
            key="cta"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            style={{
              textAlign: "center",
              color: BEIGE,
              width: "min(100%, 600px)",
            }}
          >
            <motion.p
              initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
              animate={{ opacity: 0.95, y: 0, filter: "blur(0px)" }}
              transition={{ ...spring, delay: 0.1 }}
              style={{
                fontSize: "clamp(14px, 1.6vw, 22px)",
                marginBottom: "clamp(1rem, 3vh, 1.5rem)",
                opacity: 0.95,
              }}
            >
              Production-ready multi-tenant SaaS
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ ...spring, delay: 0.3 }}
            >
              <a
                href="https://shop-pos-sand.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-block",
                  padding: "clamp(0.75rem, 2vh, 1rem) clamp(2rem, 5vw, 3rem)",
                  border: `2px solid ${BLUE_ACCENT}`,
                  color: BLUE_ACCENT,
                  fontSize: "clamp(13px, 1.4vw, 18px)",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.15em",
                  textDecoration: "none",
                  borderRadius: 8,
                  transition: "background 0.3s, color 0.3s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = BLUE_ACCENT;
                  e.currentTarget.style.color = "#fff";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.color = BLUE_ACCENT;
                }}
              >
                View Live Demo
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
