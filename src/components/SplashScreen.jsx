import { useEffect, useState } from 'react'

/* ── Raios curtos nos cantos ── */
function CornerLightning({ corner }) {
  const configs = {
    'top-left':     { top: 0,    left: 0,    rotate: 0   },
    'top-right':    { top: 0,    right: 0,   rotate: 90  },
    'bottom-left':  { bottom: 0, left: 0,    rotate: 270 },
    'bottom-right': { bottom: 0, right: 0,   rotate: 180 },
  }
  const pos = configs[corner]

  const bolts = [
    { d: 'M0,0 L18,4 L12,10 L28,8',        delay: 0,    dur: 1.8, w: 1.2, o: 0.7 },
    { d: 'M0,0 L8,14  L16,8  L14,22',       delay: 0.3,  dur: 2.1, w: 0.8, o: 0.5 },
    { d: 'M0,0 L22,6  L18,14 L32,10',       delay: 0.15, dur: 1.6, w: 1.0, o: 0.6 },
    { d: 'M0,0 L6,20  L12,14 L10,30',       delay: 0.45, dur: 2.4, w: 0.7, o: 0.4 },
  ]

  return (
    <div style={{ position: 'absolute', ...pos, width: 100, height: 100, pointerEvents: 'none' }}>
      <svg
        viewBox="0 0 40 40"
        style={{ width: '100%', height: '100%', transform: `rotate(${pos.rotate}deg)` }}
      >
        <defs>
          <filter id={`glow-${corner}`}>
            <feGaussianBlur stdDeviation="1" result="b" />
            <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>
        {bolts.map((b, i) => (
          <path
            key={i}
            d={b.d}
            fill="none"
            stroke="#FF6B00"
            strokeWidth={b.w}
            strokeLinecap="round"
            strokeLinejoin="round"
            filter={`url(#glow-${corner})`}
            style={{
              opacity: b.o,
              animation: `corner-bolt ${b.dur}s ease-in-out ${b.delay}s infinite`,
            }}
          />
        ))}
      </svg>
    </div>
  )
}

/* ── Typewriter ── */
function Typewriter({ text, speed = 50 }) {
  const [shown, setShown] = useState('')
  useEffect(() => {
    setShown('')
    let i = 0
    const iv = setInterval(() => {
      i++
      setShown(text.slice(0, i))
      if (i >= text.length) clearInterval(iv)
    }, speed)
    return () => clearInterval(iv)
  }, [text, speed])
  return <>{shown}{shown.length < text.length && <span style={{ opacity: 0.6 }}>_</span>}</>
}

/* ══════════════════════════════════════════════
   SPLASH SCREEN
   ══════════════════════════════════════════════ */
export default function SplashScreen({ onDone }) {
  const [phase, setPhase] = useState(0)
  const [exiting, setExiting] = useState(false)

  /* Animação de entrada — sem saída automática */
  useEffect(() => {
    const T = [
      [300,  () => setPhase(1)],  // grid + scan
      [1200, () => setPhase(2)],  // logo TM
      [2100, () => setPhase(3)],  // Tecle + conector
      [3000, () => setPhase(4)],  // textos + botão
    ]
    const timers = T.map(([ms, fn]) => setTimeout(fn, ms))
    return () => timers.forEach(clearTimeout)
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

      {/* Grid */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'linear-gradient(rgba(255,107,0,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,107,0,0.06) 1px, transparent 1px)',
        backgroundSize: '52px 52px',
        opacity: phase >= 1 ? 1 : 0,
        transition: 'opacity 1s ease',
      }} />

      {/* Scan line — só na fase 1 */}
      {phase === 1 && (
        <div style={{
          position: 'absolute', left: 0, right: 0, height: 2,
          background: 'linear-gradient(90deg, transparent, #FF6B00 30%, #FF8C33 50%, #FF6B00 70%, transparent)',
          boxShadow: '0 0 18px 5px rgba(255,107,0,0.45)',
          animation: 'scan-down 0.9s ease-out forwards',
          zIndex: 10,
        }} />
      )}

      {/* Raios curtos nos 4 cantos */}
      {phase >= 3 && (
        <>
          <CornerLightning corner="top-left" />
          <CornerLightning corner="top-right" />
          <CornerLightning corner="bottom-left" />
          <CornerLightning corner="bottom-right" />
        </>
      )}

      {/* Glow central */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse 55% 45% at 50% 50%, rgba(255,107,0,0.13) 0%, transparent 70%)',
        opacity: phase >= 2 ? 1 : 0,
        transition: 'opacity 0.8s ease',
      }} />

      {/* ── Conteúdo ── */}
      <div style={{
        position: 'relative', zIndex: 5,
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', textAlign: 'center',
        padding: '0 1.5rem', width: '100%', maxWidth: 680,
        gap: 0,
      }}>

        {/* Pill topo */}
        <div style={{
          color: '#FF6B00', fontSize: 10, letterSpacing: '0.3em',
          fontWeight: 700, textTransform: 'uppercase',
          border: '1px solid rgba(255,107,0,0.25)',
          padding: '5px 16px', borderRadius: 999,
          background: 'rgba(255,107,0,0.05)',
          marginBottom: '2rem',
          opacity: phase >= 1 ? 1 : 0,
          transform: phase >= 1 ? 'translateY(0)' : 'translateY(-10px)',
          transition: 'all 0.6s ease',
        }}>
          TM GROUP — PLATAFORMA DE MOBILIDADE ELÉTRICA
        </div>

        {/* Logo TM Elétricas */}
        <div style={{
          opacity: phase >= 2 ? 1 : 0,
          transform: phase >= 2 ? 'scale(1) translateY(0)' : 'scale(0.5) translateY(20px)',
          transition: 'all 0.7s cubic-bezier(0.34,1.56,0.64,1)',
          marginBottom: '1.8rem',
        }}>
          <img
            src="/logo-tm-eletricas.svg"
            alt="TM Elétricas"
            style={{
              height: 'clamp(90px, 18vw, 170px)',
              objectFit: 'contain',
              filter: 'drop-shadow(0 0 16px rgba(255,107,0,0.7))',
              animation: phase >= 2 ? 'logo-glow 3s ease-in-out infinite' : 'none',
            }}
          />
        </div>

        {/* Conector central com spark */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: '1rem',
          marginBottom: '1.8rem', width: '100%', maxWidth: 380,
          opacity: phase >= 3 ? 1 : 0,
          transition: 'opacity 0.5s ease',
        }}>
          <div style={{ flex: 1, height: 1, background: 'linear-gradient(90deg, transparent, #FF6B00)' }} />
          <div style={{
            width: 8, height: 8, borderRadius: '50%',
            background: '#FF6B00',
            boxShadow: '0 0 14px 5px rgba(255,107,0,0.7)',
            animation: 'spark-beat 0.6s ease-in-out infinite',
            flexShrink: 0,
          }} />
          <div style={{ flex: 1, height: 1, background: 'linear-gradient(90deg, #FF6B00, transparent)' }} />
        </div>

        {/* Logo Tecle Motos */}
        <div style={{
          opacity: phase >= 3 ? 1 : 0,
          transform: phase >= 3 ? 'scale(1) translateY(0)' : 'scale(0.7) translateY(15px)',
          transition: 'all 0.6s cubic-bezier(0.34,1.56,0.64,1) 0.1s',
          marginBottom: '2.5rem',
        }}>
          <img
            src="/logo-tecle.png"
            alt="Tecle Motos"
            style={{
              height: 'clamp(45px, 9vw, 80px)',
              objectFit: 'contain',
              filter: 'drop-shadow(0 0 10px rgba(255,107,0,0.5))',
              animation: phase >= 3 ? 'logo-glow 3.5s ease-in-out 0.4s infinite' : 'none',
            }}
          />
        </div>

        {/* Linha + tagline typewriter */}
        <div style={{
          width: phase >= 4 ? 'clamp(100px, 28vw, 240px)' : 0,
          height: 1,
          background: 'linear-gradient(90deg, transparent, #FF6B00, transparent)',
          transition: 'width 0.5s ease-out',
          marginBottom: '1rem',
        }} />

        {phase >= 4 && (
          <p style={{
            color: '#8E8E93', fontSize: 'clamp(9px, 1.6vw, 11px)',
            letterSpacing: '0.25em', textTransform: 'uppercase',
            marginBottom: '2.5rem',
          }}>
            <Typewriter text="Plano de Expansão & Estruturação de Capital — 2025" speed={35} />
          </p>
        )}

        {/* Botão INICIAR */}
        <div style={{
          opacity: phase >= 4 ? 1 : 0,
          transform: phase >= 4 ? 'translateY(0)' : 'translateY(16px)',
          transition: 'all 0.6s ease 0.4s',
        }}>
          <button
            onClick={handleStart}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              padding: '14px 36px',
              background: 'linear-gradient(135deg, #FF6B00, #FF8C33)',
              color: '#fff', fontWeight: 800, fontSize: 13,
              letterSpacing: '0.2em', textTransform: 'uppercase',
              border: 'none', borderRadius: 10, cursor: 'pointer',
              boxShadow: '0 0 24px rgba(255,107,0,0.5), 0 4px 16px rgba(0,0,0,0.4)',
              transition: 'all 0.25s ease',
              animation: 'btn-pulse 2s ease-in-out infinite',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'scale(1.05) translateY(-2px)'
              e.currentTarget.style.boxShadow = '0 0 36px rgba(255,107,0,0.7), 0 8px 24px rgba(0,0,0,0.5)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'scale(1) translateY(0)'
              e.currentTarget.style.boxShadow = '0 0 24px rgba(255,107,0,0.5), 0 4px 16px rgba(0,0,0,0.4)'
            }}
          >
            <span style={{ fontSize: 16 }}>⚡</span>
            INICIAR APRESENTAÇÃO
            <span style={{ fontSize: 16 }}>⚡</span>
          </button>
        </div>
      </div>

      {/* Barra de progresso — carrega até 100% junto com as fases */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 3, background: '#1C1C1E' }}>
        <div style={{
          height: '100%',
          background: 'linear-gradient(90deg, #994000, #FF6B00, #FF8C33)',
          boxShadow: '0 0 10px rgba(255,107,0,0.7)',
          width: phase === 0 ? '0%' : phase === 1 ? '30%' : phase === 2 ? '55%' : phase === 3 ? '78%' : '100%',
          transition: 'width 0.9s ease-out',
        }} />
      </div>

      {/* Rodapé */}
      {phase >= 4 && (
        <>
          <div style={{ position: 'absolute', bottom: 12, left: 16, color: '#3A3A3C', fontSize: 9, letterSpacing: '0.15em', textTransform: 'uppercase' }}>
            v2.0 — CONFIDENCIAL
          </div>
          <div style={{ position: 'absolute', bottom: 12, right: 16, color: '#3A3A3C', fontSize: 9, letterSpacing: '0.15em', textTransform: 'uppercase' }}>
            TM GROUP © 2025
          </div>
        </>
      )}

      <style>{`
        @keyframes scan-down {
          0%   { top: 0%;   opacity: 1; }
          85%  { top: 100%; opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
        @keyframes corner-bolt {
          0%   { opacity: 0; }
          15%  { opacity: 0.8; }
          40%  { opacity: 0.2; }
          60%  { opacity: 0.7; }
          100% { opacity: 0; }
        }
        @keyframes logo-glow {
          0%, 100% { filter: drop-shadow(0 0 10px rgba(255,107,0,0.55)); }
          50%       { filter: drop-shadow(0 0 24px rgba(255,107,0,0.95)) drop-shadow(0 0 48px rgba(255,107,0,0.3)); }
        }
        @keyframes spark-beat {
          0%, 100% { transform: scale(1);   box-shadow: 0 0 14px 5px rgba(255,107,0,0.7); }
          50%       { transform: scale(1.8); box-shadow: 0 0 22px 9px rgba(255,107,0,0.4); }
        }
        @keyframes btn-pulse {
          0%, 100% { box-shadow: 0 0 24px rgba(255,107,0,0.5), 0 4px 16px rgba(0,0,0,0.4); }
          50%       { box-shadow: 0 0 40px rgba(255,107,0,0.8), 0 4px 16px rgba(0,0,0,0.4); }
        }
      `}</style>
    </div>
  )
}
