import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState<string | null>(null);
  const [slapKey, setSlapKey] = useState(0);

  if (submitted) {
    return <SlapScreen name={submitted} key={slapKey} onAgain={() => { setSubmitted(null); setName(""); }} onReplay={() => setSlapKey(k => k + 1)} />;
  }

  return (
    <main className="relative min-h-screen overflow-hidden flex items-center justify-center p-6"
      style={{ background: "radial-gradient(circle at 20% 20%, oklch(0.85 0.22 90) 0%, transparent 50%), radial-gradient(circle at 80% 80%, oklch(0.7 0.27 0) 0%, transparent 50%), oklch(0.98 0.02 95)" }}>

      {/* Floating blobs */}
      <div className="pointer-events-none absolute -top-32 -left-32 w-96 h-96 opacity-60 animate-blob"
        style={{ background: "linear-gradient(135deg, oklch(0.75 0.2 220), oklch(0.88 0.22 130))" }} />
      <div className="pointer-events-none absolute -bottom-32 -right-32 w-[28rem] h-[28rem] opacity-60 animate-blob"
        style={{ background: "linear-gradient(135deg, oklch(0.7 0.27 0), oklch(0.85 0.22 90))", animationDelay: "2s" }} />

      {/* Decorative emojis */}
      <div className="absolute top-10 right-10 text-6xl animate-float select-none">✋</div>
      <div className="absolute bottom-16 left-12 text-5xl animate-float select-none" style={{ animationDelay: "1.5s" }}>💥</div>
      <div className="absolute top-1/3 left-8 text-4xl animate-wiggle select-none">⭐</div>
      <div className="absolute bottom-1/4 right-16 text-4xl animate-wiggle select-none" style={{ animationDelay: "0.3s" }}>🔥</div>

      <div className="relative z-10 w-full max-w-xl">
        <div className="bg-background border-[3px] border-foreground rounded-3xl p-8 sm:p-12 shadow-[12px_12px_0px_0px_oklch(0.18_0.04_25)] animate-pop">
          <div className="inline-block px-3 py-1 mb-4 bg-foreground text-background text-xs font-bold tracking-widest rounded-full">
            SIMRAN INC.
          </div>
          <h1 className="font-display text-5xl sm:text-7xl leading-[0.95] mb-3"
            style={{ background: "linear-gradient(90deg, oklch(0.7 0.27 0), oklch(0.62 0.25 12), oklch(0.75 0.2 220))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            HEY BOY,<br/>WHAT'S UR NAME?
          </h1>
          <p className="text-muted-foreground mb-8 text-base sm:text-lg">
            Type your name below. Something <span className="font-bold text-foreground">spectacular</span> awaits. 👀
          </p>

          <form
            onSubmit={(e) => { e.preventDefault(); if (name.trim()) setSubmitted(name.trim()); }}
            className="space-y-4"
          >
            <input
              autoFocus
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Rohan..."
              className="w-full px-5 py-4 text-xl font-bold border-[3px] border-foreground rounded-2xl bg-background outline-none focus:translate-x-1 focus:translate-y-1 focus:shadow-none shadow-[6px_6px_0px_0px_oklch(0.18_0.04_25)] transition-all placeholder:text-muted-foreground/50"
            />
            <button
              type="submit"
              disabled={!name.trim()}
              className="w-full px-6 py-4 text-xl font-display tracking-wider rounded-2xl border-[3px] border-foreground bg-foreground text-background hover:-translate-y-1 hover:shadow-[6px_8px_0px_0px_oklch(0.7_0.27_0)] active:translate-y-0 active:shadow-none transition-all disabled:opacity-40 disabled:cursor-not-allowed"
            >
              CONTINUE →
            </button>
          </form>
        </div>
        <p className="text-center mt-6 text-sm text-muted-foreground font-medium">
          ⚠️ Side effects may include: redness, regret, enlightenment.
        </p>
      </div>
    </main>
  );
}

function SlapScreen({ name, onAgain, onReplay }: { name: string; onAgain: () => void; onReplay: () => void }) {
  return (
    <main className="relative min-h-screen overflow-hidden flex items-center justify-center p-6 animate-shake"
      style={{ background: "radial-gradient(circle at center, oklch(0.85 0.22 90) 0%, oklch(0.7 0.27 0) 60%, oklch(0.4 0.2 10) 100%)" }}>

      {/* Sunburst */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[120vmax] h-[120vmax] animate-spin-slow opacity-30"
          style={{ background: "repeating-conic-gradient(from 0deg, oklch(0.99 0.01 90) 0deg 10deg, transparent 10deg 20deg)" }} />
      </div>

      {/* Speed lines */}
      <div className="absolute inset-0 pointer-events-none animate-rainbow"
        style={{ background: "repeating-linear-gradient(45deg, transparent 0 40px, oklch(0.99 0.01 90 / 0.08) 40px 42px)" }} />

      {/* Flying stars */}
      <div className="absolute top-10 left-10 text-6xl animate-float">⭐</div>
      <div className="absolute top-20 right-16 text-7xl animate-float" style={{ animationDelay: "0.8s" }}>💫</div>
      <div className="absolute bottom-16 left-20 text-6xl animate-float" style={{ animationDelay: "1.2s" }}>✨</div>
      <div className="absolute bottom-24 right-10 text-7xl animate-float" style={{ animationDelay: "0.4s" }}>⭐</div>

      <div className="relative z-10 text-center max-w-2xl">
        {/* The SLAP */}
        <div className="text-[10rem] sm:text-[14rem] leading-none animate-slap drop-shadow-2xl select-none">
          ✋
        </div>

        <div className="-mt-4 mb-2 font-display text-7xl sm:text-9xl tracking-tighter animate-pop"
          style={{ color: "oklch(0.99 0.01 90)", textShadow: "6px 6px 0 oklch(0.18 0.04 25), 0 0 40px oklch(0.7 0.27 0)", animationDelay: "0.4s", opacity: 0 }}>
          SLAP!
        </div>

        <div className="bg-background border-[3px] border-foreground rounded-3xl p-6 sm:p-8 mt-8 shadow-[10px_10px_0px_0px_oklch(0.18_0.04_25)] animate-zoom-in"
          style={{ animationDelay: "0.7s", opacity: 0 }}>
          <p className="font-display text-2xl sm:text-3xl leading-tight mb-2">
            Hey <span style={{ color: "oklch(0.62 0.25 12)" }}>{name}</span> 👋
          </p>
          <p className="text-lg sm:text-xl font-bold text-foreground">
            That slap was from <span className="inline-block animate-wiggle"
              style={{ background: "linear-gradient(90deg, oklch(0.7 0.27 0), oklch(0.75 0.2 220))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Simran</span> 💥
          </p>
          <p className="text-sm text-muted-foreground mt-3">
            Delivered with love, force, and 0% remorse.
          </p>

          <div className="flex flex-wrap gap-3 justify-center mt-6">
            <button
              onClick={onReplay}
              className="px-5 py-3 font-display tracking-wider rounded-xl border-[3px] border-foreground bg-accent text-foreground hover:-translate-y-1 hover:shadow-[4px_6px_0px_0px_oklch(0.18_0.04_25)] active:translate-y-0 transition-all"
            >
              SLAP AGAIN 🔁
            </button>
            <button
              onClick={onAgain}
              className="px-5 py-3 font-display tracking-wider rounded-xl border-[3px] border-foreground bg-foreground text-background hover:-translate-y-1 hover:shadow-[4px_6px_0px_0px_oklch(0.7_0.27_0)] active:translate-y-0 transition-all"
            >
              NEW VICTIM
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
