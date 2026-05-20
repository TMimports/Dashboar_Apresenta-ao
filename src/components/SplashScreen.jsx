import { useEffect, useState, useCallback } from 'react'

/* ---------- partículas elétricas flutuando ---------- */
function Particles({ count = 20 }) {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => {
        const x    = 5 + (i / count) * 90
        const size = 2 + (i % 3)
        const dur  = 1.5 + (i % 5) * 0.4
        const del  = (i % 7) * 0.2
        return (
          <div key={i} style={{
            position: 'absolute',
            left: `${x}%`,
            top:  `${10 + (i % 8) * 10}%`,
            width: size, height: size,
            borderRadius: '50%',
            background: '#FF6B00',
            boxShadow: `0 0 ${size * 3}px ${size}px rgba(255,107,0,0.7)`,
            animation: `particle-rise ${dur}s ease-in-out ${del}s infinite`,
            opacity: 0.8,
          }} />
        )
      })}
    </>
  )
}

/* ---------- raio SVG animado ---------- */
function Bolt({ x1, y1, x2, y2, delay = 0, width = 2, color = '#FF6B00', dur = 0.6 }) {
  const mid1x = x1 + (x2 - x1) * 0.25 + (Math.random() - 0.5) * 30
  const mid1y = y1 + (y2 - y1) * 0.25 + (Math.random() - 0.5) * 30
  const mid2x = x1 + (x2 - x1) * 0.6  + (Math.random() - 0.5) * 25
  const mid2y = y1 + (y2 - y1) * 0.6  + (Math.random() - 0.5) * 25
  const d = `M${x1},${y1} L${mid1x},${mid1y} L${mid2x},${mid2y} L${x2},${y2}`
  return (
    <path
      d={d}
      fill="none"
      stroke={color}
      strokeWidth={width}
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{
        animation: `bolt-flash ${dur}s ease-out ${delay}s infinite`,
        filter: `drop-shadow(0 0 4px ${color})`,
      }}
    />
  )
}

/* ---------- typewriter ---------- */
function Typewriter({ text, speed = 60, style = {} }) {
  const [displayed, setDisplayed] = useState('')
  useEffect(() => {
    setDisplayed('')
    let i = 0
    const iv = setInterval(() => {
      i++
      setDisplayed(text.slice(0, i))
      if (i >= text.length) clearInterval(iv)
    }, speed)
    return () => clearInterval(iv)
  }, [text, speed])
  return <span style={style}>{displayed}<span style={{ opacity: displayed.length < text.length ? 1 : 0 }}>_</span></span>
}

/* ============================================================
   SPLASH SCREEN PRINCIPAL
   ============================================================ */
export default function SplashScreen({ onDone }) {
  const [phase, setPhase] = useState(0)
  /*
    0  → tela preta
    1  → grid aparece + scan line desce
    2  → logo TM explode no centro (grande)
    3  → raios laterais + Tecle aparece
    4  → texto sistema + barra de carga
    5  → "ACESSO LIBERADO" flash
    6  → fade out total
  */

  useEffect(() => {
    const T = [
      [400,  () => setPhase(1)],
      [1400, () => setPhase(2)],
      [2400, () => setPhase(3)],
      [3400, () => setPhase(4)],
      [5000, () => setPhase(5)],
      [5800, () => setPhase(6)],
      [6600, onDone],
    ]
    const timers = T.map(([ms, fn]) => setTimeout(fn, ms))
    return () => timers.forEach(clearTimeout)
  }, [onDone])

  const out = phase === 6

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 9999,
      background: '#050505',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      opacity: out ? 0 : 1,
      transition: 'opacity 0.8s ease-out',
      pointerEvents: out ? 'none' : 'all',
      overflow: 'hidden',
      fontFamily: 'Inter, system-ui, sans-serif',
    }}>

      {/* ── Grid de fundo ── */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'linear-gradient(rgba(255,107,0,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,107,0,0.07) 1px, transparent 1px)',
        backgroundSize: '50px 50px',
        opacity: phase >= 1 ? 1 : 0,
        transition: 'opacity 0.8s ease',
      }} />

      {/* ── Scan line ── */}
      {phase >= 1 && phase <= 2 && (
        <div style={{
          position: 'absolute', left: 0, right: 0, height: 2,
          background: 'linear-gradient(90deg, transparent 0%, #FF6B00 30%, #FF8C33 50%, #FF6B00 70%, transparent 100%)',
          boxShadow: '0 0 20px 6px rgba(255,107,0,0.5)',
          animation: 'scan-down 1s ease-out forwards',
          zIndex: 10,
        }} />
      )}

      {/* ── Glow central ── */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(255,107,0,0.18) 0%, transparent 70%)',
        opacity: phase >= 2 ? 1 : 0,
        transition: 'opacity 0.6s ease',
      }} />

      {/* ── Partículas ── */}
      {phase >= 3 && <Particles count={24} />}

      {/* ── SVG raios ── */}
      {phase >= 3 && phase < 6 && (
        <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}
          viewBox="0 0 100 100" preserveAspectRatio="none">
          <Bolt x1={0}   y1={30} x2={38} y2={50} delay={0}    width={1.2} color="#FF6B00" dur={0.5} />
          <Bolt x1={0}   y1={70} x2={38} y2={50} delay={0.15} width={0.8} color="#FF8C33" dur={0.6} />
          <Bolt x1={100} y1={25} x2={62} y2={50} delay={0.08} width={1.2} color="#FF6B00" dur={0.55} />
          <Bolt x1={100} y1={75} x2={62} y2={50} delay={0.22} width={0.8} color="#CC5500" dur={0.45} />
          <Bolt x1={10}  y1={0}  x2={50} y2={40} delay={0.3}  width={0.6} color="#FF8C33" dur={0.7} />
          <Bolt x1={90}  y1={0}  x2={50} y2={40} delay={0.1}  width={0.6} color="#FF6B00" dur={0.65} />
          <Bolt x1={20}  y1={100} x2={50} y2={60} delay={0.25} width={0.6} color="#994000" dur={0.5} />
          <Bolt x1={80}  y1={100} x2={50} y2={60} delay={0.05} width={0.6} color="#FF8C33" dur={0.6} />
        </svg>
      )}

      {/* ── Conteúdo central ── */}
      <div style={{
        position: 'relative', zIndex: 5,
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', textAlign: 'center',
        padding: '0 1.5rem', width: '100%', maxWidth: 700,
      }}>

        {/* Tag topo */}
        {phase >= 1 && (
          <div style={{
            color: '#FF6B00', fontSize: 10, letterSpacing: '0.35em',
            fontWeight: 700, textTransform: 'uppercase', marginBottom: '1.5rem',
            opacity: phase >= 1 ? 1 : 0,
            transition: 'opacity 0.5s ease',
            border: '1px solid rgba(255,107,0,0.3)',
            padding: '4px 14px', borderRadius: 999,
            background: 'rgba(255,107,0,0.06)',
          }}>
            TM GROUP — PLATAFORMA DE MOBILIDADE ELÉTRICA
          </div>
        )}

        {/* Logo TM Elétricas — grande, impacto */}
        <div style={{
          opacity: phase >= 2 ? 1 : 0,
          transform: phase >= 2 ? 'scale(1) translateY(0)' : 'scale(0.4) translateY(30px)',
          transition: 'all 0.7s cubic-bezier(0.34, 1.56, 0.64, 1)',
          marginBottom: '1.5rem',
        }}>
          <img
            src="/logo-tm-eletricas.svg"
            alt="TM Elétricas"
            style={{
              height: 'clamp(80px, 18vw, 160px)',
              objectFit: 'contain',
              filter: phase >= 3
                ? 'drop-shadow(0 0 24px rgba(255,107,0,1)) drop-shadow(0 0 60px rgba(255,107,0,0.5))'
                : 'drop-shadow(0 0 10px rgba(255,107,0,0.6))',
              transition: 'filter 0.5s ease',
              animation: phase >= 2 ? 'logo-pulse 2s ease-in-out infinite' : 'none',
            }}
          />
        </div>

        {/* Conector + Tecle Motos */}
        {phase >= 3 && (
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            gap: 'clamp(1rem, 4vw, 3rem)', marginBottom: '2rem',
            opacity: phase >= 3 ? 1 : 0,
            transition: 'opacity 0.6s ease',
          }}>
            {/* Linha esquerda */}
            <div style={{ flex: 1, height: 1, background: 'linear-gradient(90deg, transparent, #FF6B00)', maxWidth: 120 }} />

            {/* Spark center */}
            <div style={{
              width: 10, height: 10, borderRadius: '50%',
              background: '#FF6B00',
              boxShadow: '0 0 20px 8px rgba(255,107,0,0.8), 0 0 40px 16px rgba(255,107,0,0.3)',
              animation: 'spark-beat 0.4s ease-in-out infinite',
              flexShrink: 0,
            }} />

            {/* Linha direita */}
            <div style={{ flex: 1, height: 1, background: 'linear-gradient(90deg, #FF6B00, transparent)', maxWidth: 120 }} />
          </div>
        )}

        {/* Logo Tecle Motos */}
        <div style={{
          opacity: phase >= 3 ? 1 : 0,
          transform: phase >= 3 ? 'scale(1) translateY(0)' : 'scale(0.6) translateY(20px)',
          transition: 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.1s',
          marginBottom: '2rem',
        }}>
          <img
            src="/logo-tecle.png"
            alt="Tecle Motos"
            style={{
              height: 'clamp(50px, 10vw, 90px)',
              objectFit: 'contain',
              filter: 'drop-shadow(0 0 12px rgba(255,107,0,0.6))',
              animation: phase >= 3 ? 'logo-pulse 2.2s ease-in-out 0.3s infinite' : 'none',
            }}
          />
        </div>

        {/* Linha divisória */}
        <div style={{
          width: phase >= 4 ? 'clamp(120px, 30vw, 260px)' : 0,
          height: 1,
          background: 'linear-gradient(90deg, transparent, #FF6B00, transparent)',
          transition: 'width 0.6s ease-out',
          marginBottom: '1.5rem',
          boxShadow: '0 0 10px rgba(255,107,0,0.4)',
        }} />

        {/* Textos sistema — typewriter */}
        {phase >= 4 && (
          <div style={{ marginBottom: '1.5rem', display: 'flex', flexDirection: 'column', gap: 6 }}>
            <p style={{ color: '#8E8E93', fontSize: 'clamp(9px, 1.8vw, 12px)', letterSpacing: '0.25em', textTransform: 'uppercase' }}>
              <Typewriter text="SISTEMA INICIALIZADO COM SUCESSO" speed={40} />
            </p>
            <p style={{ color: '#3A3A3C', fontSize: 'clamp(8px, 1.4vw, 10px)', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
              <Typewriter text="Plano de Expansão & Estruturação de Capital — 2025" speed={30} />
            </p>
          </div>
        )}

        {/* ACESSO LIBERADO flash */}
        {phase === 5 && (
          <div style={{
            position: 'absolute',
            top: '50%', left: '50%',
            transform: 'translate(-50%, -50%)',
            color: '#FF6B00',
            fontSize: 'clamp(20px, 5vw, 48px)',
            fontWeight: 900,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            textShadow: '0 0 30px rgba(255,107,0,1), 0 0 60px rgba(255,107,0,0.5)',
            animation: 'access-flash 0.8s ease-out forwards',
            zIndex: 20,
            whiteSpace: 'nowrap',
          }}>
            ACESSO LIBERADO
          </div>
        )}
      </div>

      {/* ── Barra de progresso ── */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        height: 3,
        background: '#1C1C1E',
      }}>
        <div style={{
          height: '100%',
          background: 'linear-gradient(90deg, #994000, #FF6B00, #FF8C33)',
          boxShadow: '0 0 12px rgba(255,107,0,0.8)',
          animation: phase >= 1 ? 'progress-fill 5s ease-out forwards' : 'none',
        }} />
      </div>

      {/* ── Info rodapé ── */}
      {phase >= 4 && (
        <div style={{
          position: 'absolute', bottom: 12, right: 16,
          color: '#3A3A3C', fontSize: 9,
          letterSpacing: '0.15em', textTransform: 'uppercase',
          opacity: phase >= 4 ? 1 : 0, transition: 'opacity 0.5s',
        }}>
          TM GROUP © 2025
        </div>
      )}

      {phase >= 4 && (
        <div style={{
          position: 'absolute', bottom: 12, left: 16,
          color: '#3A3A3C', fontSize: 9,
          letterSpacing: '0.15em', textTransform: 'uppercase',
          fontVariantNumeric: 'tabular-nums',
          opacity: phase >= 4 ? 1 : 0, transition: 'opacity 0.5s',
        }}>
          v2.0 — CONFIDENCIAL
        </div>
      )}

      <style>{`
        @keyframes scan-down {
          0%   { top: 0%; opacity: 1; }
          80%  { top: 100%; opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
        @keyframes bolt-flash {
          0%   { opacity: 1;   stroke-width: inherit; }
          25%  { opacity: 0.3; }
          50%  { opacity: 0.9; stroke-width: calc(inherit + 1); }
          75%  { opacity: 0.1; }
          100% { opacity: 0;   }
        }
        @keyframes logo-pulse {
          0%, 100% { filter: drop-shadow(0 0 12px rgba(255,107,0,0.6)); }
          50%       { filter: drop-shadow(0 0 30px rgba(255,107,0,1)) drop-shadow(0 0 60px rgba(255,107,0,0.4)); }
        }
        @keyframes spark-beat {
          0%, 100% { transform: scale(1);   box-shadow: 0 0 20px 8px rgba(255,107,0,0.8); }
          50%       { transform: scale(1.6); box-shadow: 0 0 30px 14px rgba(255,107,0,0.5); }
        }
        @keyframes particle-rise {
          0%   { transform: translateY(0)    scale(1);   opacity: 0.8; }
          50%  { transform: translateY(-20px) scale(1.4); opacity: 1;   }
          100% { transform: translateY(-40px) scale(0.6); opacity: 0;   }
        }
        @keyframes access-flash {
          0%   { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
          30%  { opacity: 1; transform: translate(-50%, -50%) scale(1.05); }
          70%  { opacity: 1; transform: translate(-50%, -50%) scale(1); }
          100% { opacity: 0; transform: translate(-50%, -50%) scale(1.1); }
        }
        @keyframes progress-fill {
          0%   { width: 0%; }
          20%  { width: 15%; }
          50%  { width: 55%; }
          80%  { width: 85%; }
          100% { width: 100%; }
        }
      `}</style>
    </div>
  )
}
