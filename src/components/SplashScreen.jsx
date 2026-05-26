import { useEffect, useState } from 'react'

/* ─── Ícone Moto SVG customizado ──────────────────────────────── */
function MotoIcon({ size = 120, color = '#FF6B00' }) {
  return (
    <svg width={size} height={size * 0.55} viewBox="0 0 220 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Roda traseira */}
      <circle cx="50" cy="88" r="28" stroke={color} strokeWidth="6" fill="none" opacity="0.9"/>
      <circle cx="50" cy="88" r="8" fill={color} opacity="0.6"/>
      {/* Roda dianteira */}
      <circle cx="174" cy="88" r="28" stroke={color} strokeWidth="6" fill="none" opacity="0.9"/>
      <circle cx="174" cy="88" r="8" fill={color} opacity="0.6"/>
      {/* Chassi/corpo */}
      <path d="M50 88 L70 50 L120 42 L155 52 L174 88" stroke={color} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      {/* Tanque */}
      <path d="M90 50 L130 44 L145 60 L100 64 Z" fill={color} opacity="0.7"/>
      {/* Guidão */}
      <path d="M155 52 L168 38 L180 40" stroke={color} strokeWidth="4" strokeLinecap="round"/>
      {/* Piloto */}
      <ellipse cx="108" cy="32" rx="10" ry="10" fill={color} opacity="0.8"/>
      <path d="M108 42 L104 62 L118 60 L112 42 Z" fill={color} opacity="0.7"/>
      {/* Escapamento */}
      <path d="M68 82 L48 96 L38 98" stroke={color} strokeWidth="3" strokeLinecap="round" opacity="0.5"/>
    </svg>
  )
}

/* ─── Ícone Foguete SVG customizado ──────────────────────────── */
function RocketIcon({ size = 80, color = '#FF6B00' }) {
  return (
    <svg width={size * 0.6} height={size} viewBox="0 0 60 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Corpo */}
      <path d="M30 4 C30 4 10 24 10 52 L50 52 C50 24 30 4 30 4 Z" fill={color} opacity="0.9"/>
      {/* Janela */}
      <circle cx="30" cy="32" r="8" fill="#0A0A0A" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5"/>
      {/* Aletas */}
      <path d="M10 52 L2 72 L18 60 Z" fill={color} opacity="0.7"/>
      <path d="M50 52 L58 72 L42 60 Z" fill={color} opacity="0.7"/>
      {/* Fogo */}
      <path d="M18 60 C18 60 24 80 30 96 C36 80 42 60 42 60 Z" fill="rgba(255,140,0,0.6)"/>
      <path d="M22 62 C22 62 27 78 30 88 C33 78 38 62 38 62 Z" fill="rgba(255,200,50,0.7)"/>
    </svg>
  )
}

/* ─── Raio / Lightning ─────────────────────────────────────── */
function LightningBolt({ x, y, rotate = 0, opacity = 1, scale = 1 }) {
  return (
    <div style={{
      position: 'absolute',
      left: x, top: y,
      transform: `rotate(${rotate}deg) scale(${scale})`,
      opacity,
      pointerEvents: 'none',
    }}>
      <svg width="60" height="120" viewBox="0 0 60 120" fill="none">
        <filter id="glow-bolt">
          <feGaussianBlur stdDeviation="3" result="b"/>
          <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <path
          d="M36 2 L8 62 L28 62 L18 118 L56 46 L34 46 Z"
          fill="#FF6B00"
          filter="url(#glow-bolt)"
        />
        <path
          d="M36 2 L8 62 L28 62 L18 118 L56 46 L34 46 Z"
          fill="rgba(255,200,80,0.5)"
        />
      </svg>
    </div>
  )
}

/* ─── Partículas de velocidade ─────────────────────────────── */
function SpeedLines() {
  return (
    <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
      {[...Array(12)].map((_, i) => (
        <div key={i} style={{
          position: 'absolute',
          left: `${Math.random() * 60}%`,
          top: `${20 + i * 5}%`,
          width: `${60 + Math.random() * 120}px`,
          height: '1.5px',
          background: 'linear-gradient(90deg, transparent, rgba(255,107,0,0.6), transparent)',
          animation: `speed-line 0.4s ease-out ${i * 0.04}s both`,
        }} />
      ))}
      <style>{`
        @keyframes speed-line {
          from { transform: translateX(-200px); opacity: 0; }
          50%  { opacity: 1; }
          to   { transform: translateX(600px); opacity: 0; }
        }
      `}</style>
    </div>
  )
}

/* ══════════════════════════════════════════════════════════════
   SPLASH SCREEN — Animação 5s: Raio → Moto → Foguete → Logo → Login
   ══════════════════════════════════════════════════════════════ */
export default function SplashScreen({ onDone }) {
  const [phase, setPhase] = useState(0)
  const [exiting, setExiting] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const phases = [
      [150,  () => setPhase(1)],   // grid + raios
      [1500, () => setPhase(2)],   // moto entra
      [2700, () => setPhase(3)],   // foguete lança
      [3700, () => setPhase(4)],   // logo materializa
      [4500, () => setPhase(5)],   // botão + UI completa
    ]
    const timers = phases.map(([ms, fn]) => setTimeout(fn, ms))

    // Progresso contínuo até 5s
    let start = Date.now()
    const iv = setInterval(() => {
      const elapsed = Date.now() - start
      setProgress(Math.min((elapsed / 5000) * 100, 100))
      if (elapsed >= 5000) clearInterval(iv)
    }, 50)

    return () => { timers.forEach(clearTimeout); clearInterval(iv) }
  }, [])

  const handleStart = () => {
    setExiting(true)
    setTimeout(onDone, 700)
  }

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 9999,
      background: '#050505',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      opacity: exiting ? 0 : 1,
      transition: 'opacity 0.7s ease-out',
      pointerEvents: exiting ? 'none' : 'all',
      overflow: 'hidden',
      fontFamily: 'Inter, system-ui, sans-serif',
    }}>

      {/* ── Grid fundo ── */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'linear-gradient(rgba(255,107,0,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,107,0,0.05) 1px, transparent 1px)',
        backgroundSize: '52px 52px',
        opacity: phase >= 1 ? 1 : 0,
        transition: 'opacity 0.8s ease',
      }} />

      {/* ── Glow radial ── */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(255,107,0,0.10) 0%, transparent 70%)',
        opacity: phase >= 4 ? 1 : 0,
        transition: 'opacity 1s ease',
      }} />

      {/* ══ FASE 1 — 1 RAIO CENTRAL ══════════════════════════════ */}
      {phase === 1 && (
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <div style={{
            animation: 'flash-impact 1.2s ease-out both',
            filter: 'drop-shadow(0 0 40px rgba(255,107,0,1)) drop-shadow(0 0 80px rgba(255,140,0,0.6))',
          }}>
            <svg width="90" height="180" viewBox="0 0 60 120" fill="none">
              <path
                d="M36 2 L8 62 L28 62 L18 118 L56 46 L34 46 Z"
                fill="#FF6B00"
              />
              <path
                d="M36 2 L8 62 L28 62 L18 118 L56 46 L34 46 Z"
                fill="rgba(255,220,100,0.45)"
              />
            </svg>
          </div>
        </div>
      )}

      {/* ══ FASE 2 — MOTO ════════════════════════════════════════ */}
      {phase === 2 && (
        <div style={{
          position: 'absolute',
          top: '50%', left: 0, right: 0,
          transform: 'translateY(-60%)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          animation: 'moto-enter 1.1s cubic-bezier(0.22,1,0.36,1) both',
          pointerEvents: 'none',
        }}>
          <SpeedLines />
          <div style={{
            filter: 'drop-shadow(0 0 28px rgba(255,107,0,0.9)) drop-shadow(0 0 60px rgba(255,107,0,0.4))',
            animation: 'moto-glow 0.3s ease-in-out infinite alternate',
          }}>
            <MotoIcon size={180} color="#FF6B00" />
          </div>
        </div>
      )}

      {/* ══ FASE 3 — FOGUETE ══════════════════════════════════════ */}
      {phase === 3 && (
        <div style={{
          position: 'absolute',
          top: 0, bottom: 0, left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          animation: 'rocket-launch 1.0s cubic-bezier(0.55,0,1,0.45) both',
          pointerEvents: 'none',
        }}>
          {/* Rastro de fogo */}
          <div style={{
            position: 'absolute',
            top: '55%',
            width: 8,
            height: '60vh',
            background: 'linear-gradient(to bottom, rgba(255,107,0,0.8), rgba(255,200,50,0.4), transparent)',
            borderRadius: 4,
            animation: 'fire-trail 1s ease-out both',
          }} />
          <div style={{
            filter: 'drop-shadow(0 0 24px rgba(255,107,0,1)) drop-shadow(0 0 48px rgba(255,140,0,0.6))',
          }}>
            <RocketIcon size={140} color="#FF6B00" />
          </div>
        </div>
      )}

      {/* ══ FASE 4+ — LOGO + CONTEÚDO CENTRAL ══════════════════ */}
      <div style={{
        position: 'relative', zIndex: 5,
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', textAlign: 'center',
        padding: '0 1.5rem', width: '100%', maxWidth: 680,
        opacity: phase >= 4 ? 1 : 0,
        transform: phase >= 4 ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.95)',
        transition: 'all 0.8s cubic-bezier(0.34,1.56,0.64,1)',
      }}>

        {/* Pill topo */}
        <div style={{
          color: '#FF6B00', fontSize: 10, letterSpacing: '0.3em',
          fontWeight: 700, textTransform: 'uppercase',
          border: '1px solid rgba(255,107,0,0.25)',
          padding: '5px 16px', borderRadius: 999,
          background: 'rgba(255,107,0,0.05)',
          marginBottom: '2rem',
        }}>
          TM GROUP — PLATAFORMA DE MOBILIDADE ELÉTRICA
        </div>

        {/* Logo TM GROUP */}
        <div style={{
          width: '100%', maxWidth: 420,
          display: 'flex', justifyContent: 'center',
          marginBottom: '1.5rem',
          opacity: phase >= 4 ? 1 : 0,
          transform: phase >= 4 ? 'scale(1)' : 'scale(0.5)',
          transition: 'all 0.7s cubic-bezier(0.34,1.56,0.64,1)',
        }}>
          <img
            src="/logo-tm-group.svg"
            alt="TM GROUP"
            style={{
              height: 'clamp(80px, 15vw, 130px)',
              objectFit: 'contain',
              filter: 'drop-shadow(0 0 20px rgba(255,107,0,0.8))',
              animation: phase >= 4 ? 'logo-pulse 3s ease-in-out infinite' : 'none',
            }}
          />
        </div>

        {/* Conector */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: '1rem',
          marginBottom: '1.5rem', width: '100%', maxWidth: 420,
        }}>
          <div style={{ flex: 1, height: 1, background: 'linear-gradient(90deg, transparent, #FF6B00)' }} />
          <div style={{
            width: 8, height: 8, borderRadius: '50%', background: '#FF6B00',
            boxShadow: '0 0 14px 5px rgba(255,107,0,0.7)',
            animation: 'spark-beat 0.6s ease-in-out infinite',
          }} />
          <div style={{ flex: 1, height: 1, background: 'linear-gradient(90deg, #FF6B00, transparent)' }} />
        </div>

        {/* Logo Tecle Motos */}
        <div style={{
          width: '100%', maxWidth: 420,
          display: 'flex', justifyContent: 'center',
          marginBottom: '2rem',
          opacity: phase >= 4 ? 1 : 0,
          transform: phase >= 4 ? 'scale(1)' : 'scale(0.7)',
          transition: 'all 0.6s cubic-bezier(0.34,1.56,0.64,1) 0.1s',
        }}>
          <img
            src="/logo-tecle.png"
            alt="Tecle Motos"
            style={{
              height: 'clamp(52px, 10vw, 90px)',
              objectFit: 'contain',
              filter: 'drop-shadow(0 0 10px rgba(255,107,0,0.5))',
            }}
          />
        </div>

        {/* Tagline */}
        <div style={{
          width: 'clamp(80px, 20vw, 200px)',
          height: 1,
          background: 'linear-gradient(90deg, transparent, #FF6B00, transparent)',
          marginBottom: '1rem',
        }} />
        <p style={{
          color: '#8E8E93', fontSize: 'clamp(9px, 1.5vw, 11px)',
          letterSpacing: '0.25em', textTransform: 'uppercase',
          marginBottom: '2.5rem',
        }}>
          A Energia que Te Move — 2026
        </p>

        {/* ── Botão INICIAR (fase 5) ── */}
        <div style={{
          opacity: phase >= 5 ? 1 : 0,
          transform: phase >= 5 ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.9)',
          transition: 'all 0.5s cubic-bezier(0.34,1.56,0.64,1)',
        }}>
          <button
            onClick={handleStart}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 12,
              padding: '15px 44px',
              background: 'linear-gradient(135deg, #CC5500, #FF6B00, #FF8C33)',
              color: '#fff', fontWeight: 900, fontSize: 13,
              letterSpacing: '0.22em', textTransform: 'uppercase',
              border: 'none', borderRadius: 10, cursor: 'pointer',
              boxShadow: '0 0 32px rgba(255,107,0,0.6), 0 4px 20px rgba(0,0,0,0.5)',
              transition: 'all 0.25s ease',
              animation: 'btn-pulse 2s ease-in-out infinite',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'scale(1.06) translateY(-2px)'
              e.currentTarget.style.boxShadow = '0 0 48px rgba(255,107,0,0.85), 0 8px 28px rgba(0,0,0,0.5)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'scale(1) translateY(0)'
              e.currentTarget.style.boxShadow = '0 0 32px rgba(255,107,0,0.6), 0 4px 20px rgba(0,0,0,0.5)'
            }}
          >
            <span style={{ fontSize: 18 }}>⚡</span>
            INICIAR APRESENTAÇÃO
            <span style={{ fontSize: 18 }}>⚡</span>
          </button>
        </div>
      </div>

      {/* ── Barra de progresso 5s ── */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 3, background: '#1C1C1E' }}>
        <div style={{
          height: '100%',
          background: 'linear-gradient(90deg, #994000, #FF6B00, #FF8C33)',
          boxShadow: '0 0 12px rgba(255,107,0,0.8)',
          width: `${progress}%`,
          transition: 'width 0.05s linear',
        }} />
      </div>

      {/* ── Rodapé ── */}
      {phase >= 5 && (
        <>
          <div style={{ position: 'absolute', bottom: 12, left: 16, color: '#3A3A3C', fontSize: 9, letterSpacing: '0.15em', textTransform: 'uppercase' }}>
            v3.0 — CONFIDENCIAL
          </div>
          <div style={{ position: 'absolute', bottom: 12, right: 16, color: '#3A3A3C', fontSize: 9, letterSpacing: '0.15em', textTransform: 'uppercase' }}>
            TM GROUP © 2026
          </div>
        </>
      )}

      {/* ── Keyframes ── */}
      <style>{`
        @keyframes flash-impact {
          0%   { opacity: 0; }
          10%  { opacity: 1; }
          20%  { opacity: 0.3; }
          35%  { opacity: 0.9; }
          50%  { opacity: 0.1; }
          70%  { opacity: 0.6; }
          100% { opacity: 0; }
        }
        @keyframes moto-enter {
          0%   { transform: translateY(-60%) translateX(-120vw) scale(0.6); opacity: 0; }
          30%  { opacity: 1; }
          70%  { transform: translateY(-60%) translateX(0) scale(1.05); }
          85%  { transform: translateY(-60%) translateX(8px) scale(1); }
          100% { transform: translateY(-60%) translateX(0) scale(1); opacity: 1; }
        }
        @keyframes moto-glow {
          from { filter: drop-shadow(0 0 20px rgba(255,107,0,0.8)) drop-shadow(0 0 50px rgba(255,107,0,0.3)); }
          to   { filter: drop-shadow(0 0 35px rgba(255,140,0,1)) drop-shadow(0 0 80px rgba(255,107,0,0.5)); }
        }
        @keyframes rocket-launch {
          0%   { transform: translateX(-50%) translateY(80vh) scale(0.5); opacity: 0; }
          20%  { opacity: 1; }
          60%  { transform: translateX(-50%) translateY(0) scale(1.1); }
          80%  { transform: translateX(-50%) translateY(-5px) scale(1); }
          100% { transform: translateX(-50%) translateY(-110vh) scale(0.3); opacity: 0; }
        }
        @keyframes fire-trail {
          0%   { opacity: 0; transform: scaleY(0); transform-origin: top; }
          30%  { opacity: 1; }
          100% { opacity: 0; transform: scaleY(1.5); }
        }
        @keyframes logo-pulse {
          0%, 100% { filter: drop-shadow(0 0 14px rgba(255,107,0,0.6)); }
          50%       { filter: drop-shadow(0 0 30px rgba(255,107,0,1)) drop-shadow(0 0 60px rgba(255,107,0,0.3)); }
        }
        @keyframes spark-beat {
          0%, 100% { transform: scale(1);   box-shadow: 0 0 14px 5px rgba(255,107,0,0.7); }
          50%       { transform: scale(1.8); box-shadow: 0 0 22px 9px rgba(255,107,0,0.4); }
        }
        @keyframes btn-pulse {
          0%, 100% { box-shadow: 0 0 32px rgba(255,107,0,0.6), 0 4px 20px rgba(0,0,0,0.5); }
          50%       { box-shadow: 0 0 52px rgba(255,107,0,0.9), 0 4px 20px rgba(0,0,0,0.5); }
        }
      `}</style>
    </div>
  )
}
