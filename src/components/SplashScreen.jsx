import { useEffect, useState, useRef } from 'react'

function LightningBolt({ delay = 0, duration = 0.3, strokeWidth = 1.5, color = '#FF6B00', opacity = 0.9 }) {
  const paths = [
    'M 10,50 L 40,20 L 55,40 L 80,10 L 90,50',
    'M 5,50  L 30,15 L 50,35 L 70,5  L 95,50',
    'M 15,50 L 45,25 L 60,42 L 85,8  L 92,50',
  ]
  const path = paths[Math.floor(Math.random() * paths.length)]
  return (
    <svg
      viewBox="0 0 100 60"
      style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        opacity,
        animationDelay: `${delay}s`,
        animation: `lightning-flash ${duration}s ease-out ${delay}s infinite`,
      }}
    >
      <path
        d={path}
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        filter="url(#glow)"
      />
      <defs>
        <filter id="glow">
          <feGaussianBlur stdDeviation="1.5" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
    </svg>
  )
}

export default function SplashScreen({ onDone }) {
  const [phase, setPhase] = useState(0)
  // 0: grid fade in
  // 1: TM logo appears (left)
  // 2: Tecle logo appears (right)
  // 3: lightning bursts between them
  // 4: center merge + tagline
  // 5: fade out

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 300),
      setTimeout(() => setPhase(2), 800),
      setTimeout(() => setPhase(3), 1400),
      setTimeout(() => setPhase(4), 2200),
      setTimeout(() => setPhase(5), 3300),
      setTimeout(() => onDone(),    4000),
    ]
    return () => timers.forEach(clearTimeout)
  }, [onDone])

  const visible = phase < 5

  return (
    <div
      style={{
        position: 'fixed', inset: 0, zIndex: 9999,
        background: '#0A0A0A',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        opacity: phase === 5 ? 0 : 1,
        transition: 'opacity 0.7s ease-out',
        pointerEvents: phase === 5 ? 'none' : 'all',
        overflow: 'hidden',
      }}
    >
      {/* Background grid */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'linear-gradient(#FF6B00 1px, transparent 1px), linear-gradient(90deg, #FF6B00 1px, transparent 1px)',
        backgroundSize: '60px 60px',
        opacity: phase >= 1 ? 0.04 : 0,
        transition: 'opacity 0.5s ease',
      }} />

      {/* Central glow */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse 50% 40% at 50% 50%, rgba(255,107,0,0.15) 0%, transparent 70%)',
        opacity: phase >= 3 ? 1 : 0,
        transition: 'opacity 0.4s ease',
      }} />

      {/* Main content row */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        gap: 0, position: 'relative', width: '100%', maxWidth: 640,
        padding: '0 2rem',
      }}>

        {/* TM Elétricas logo — entra da esquerda */}
        <div style={{
          opacity: phase >= 1 ? 1 : 0,
          transform: phase >= 1 ? 'translateX(0) scale(1)' : 'translateX(-60px) scale(0.8)',
          transition: 'all 0.6s cubic-bezier(0.34,1.56,0.64,1)',
          filter: phase >= 3
            ? 'drop-shadow(0 0 20px rgba(255,107,0,0.9)) drop-shadow(0 0 50px rgba(255,107,0,0.4))'
            : 'drop-shadow(0 0 8px rgba(255,107,0,0.5))',
          flexShrink: 0,
        }}>
          <img
            src="/logo-tm-eletricas.svg"
            alt="TM Elétricas"
            style={{ height: 'clamp(60px, 12vw, 110px)', objectFit: 'contain' }}
          />
        </div>

        {/* Lightning zone entre os logos */}
        <div style={{
          position: 'relative',
          width: 'clamp(80px, 15vw, 160px)',
          height: 'clamp(60px, 12vw, 110px)',
          flexShrink: 0,
          opacity: phase >= 3 ? 1 : 0,
          transition: 'opacity 0.15s ease',
        }}>
          {phase >= 3 && phase < 5 && (
            <>
              <LightningBolt delay={0}    duration={0.45} strokeWidth={2}   color="#FF6B00" opacity={0.95} />
              <LightningBolt delay={0.12} duration={0.4}  strokeWidth={1.5} color="#FF8C33" opacity={0.7}  />
              <LightningBolt delay={0.07} duration={0.5}  strokeWidth={1}   color="#FFAA55" opacity={0.5}  />
              <LightningBolt delay={0.22} duration={0.38} strokeWidth={2.5} color="#FF6B00" opacity={0.8}  />
              <LightningBolt delay={0.35} duration={0.42} strokeWidth={1}   color="#FF8C33" opacity={0.6}  />
            </>
          )}

          {/* Spark center dot */}
          {phase >= 3 && (
            <div style={{
              position: 'absolute', top: '50%', left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 12, height: 12, borderRadius: '50%',
              background: '#FF6B00',
              boxShadow: '0 0 16px 6px rgba(255,107,0,0.8), 0 0 32px 12px rgba(255,107,0,0.4)',
              animation: 'spark-pulse 0.3s ease-in-out infinite',
            }} />
          )}
        </div>

        {/* Tecle logo — entra da direita */}
        <div style={{
          opacity: phase >= 2 ? 1 : 0,
          transform: phase >= 2 ? 'translateX(0) scale(1)' : 'translateX(60px) scale(0.8)',
          transition: 'all 0.6s cubic-bezier(0.34,1.56,0.64,1)',
          filter: phase >= 3
            ? 'drop-shadow(0 0 20px rgba(255,107,0,0.9)) drop-shadow(0 0 50px rgba(255,107,0,0.4))'
            : 'drop-shadow(0 0 8px rgba(255,107,0,0.4))',
          flexShrink: 0,
        }}>
          <img
            src="/logo-tecle.png"
            alt="Tecle Motos"
            style={{ height: 'clamp(60px, 12vw, 110px)', objectFit: 'contain' }}
          />
        </div>
      </div>

      {/* Linha divisória — aparece na phase 4 */}
      <div style={{
        width: phase >= 4 ? 'clamp(100px, 25vw, 200px)' : 0,
        height: 2,
        background: 'linear-gradient(90deg, transparent, #FF6B00, transparent)',
        margin: '1.5rem 0 1rem',
        transition: 'width 0.5s ease-out',
        boxShadow: '0 0 12px rgba(255,107,0,0.6)',
      }} />

      {/* Tagline */}
      <div style={{
        opacity: phase >= 4 ? 1 : 0,
        transform: phase >= 4 ? 'translateY(0)' : 'translateY(10px)',
        transition: 'all 0.5s ease-out',
        textAlign: 'center',
      }}>
        <p style={{
          color: '#8E8E93', fontSize: 'clamp(9px, 1.5vw, 12px)',
          letterSpacing: '0.3em', fontWeight: 600, textTransform: 'uppercase',
          fontFamily: 'Inter, system-ui, sans-serif',
        }}>
          Plano de Expansão &amp; Capitalização
        </p>
      </div>

      {/* Loading bar no bottom */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0,
        height: 3,
        background: 'linear-gradient(90deg, #FF6B00, #FF8C33, #FF6B00)',
        backgroundSize: '200% 100%',
        animation: 'splash-bar 3.5s ease-out forwards, bar-shimmer 0.8s ease-in-out infinite',
        boxShadow: '0 0 10px rgba(255,107,0,0.7)',
      }} />

      {/* Partículas de brilho no fundo */}
      {phase >= 3 && [0,1,2,3,4,5,6,7].map(i => (
        <div key={i} style={{
          position: 'absolute',
          width: 3, height: 3,
          borderRadius: '50%',
          background: '#FF6B00',
          boxShadow: '0 0 6px 2px rgba(255,107,0,0.8)',
          top:  `${20 + Math.sin(i * 1.3) * 30}%`,
          left: `${15 + (i / 7) * 70}%`,
          animation: `particle-float-${i % 3} ${0.4 + i * 0.1}s ease-in-out ${i * 0.05}s infinite`,
          opacity: 0.7,
        }} />
      ))}

      <style>{`
        @keyframes lightning-flash {
          0%   { opacity: 0.9; filter: brightness(1.5); }
          20%  { opacity: 0.3; filter: brightness(0.8); }
          40%  { opacity: 1.0; filter: brightness(2);   }
          60%  { opacity: 0.2; filter: brightness(0.5); }
          80%  { opacity: 0.8; filter: brightness(1.8); }
          100% { opacity: 0;   filter: brightness(0);   }
        }
        @keyframes spark-pulse {
          0%, 100% { transform: translate(-50%, -50%) scale(1);   opacity: 1; }
          50%       { transform: translate(-50%, -50%) scale(1.5); opacity: 0.6; }
        }
        @keyframes splash-bar {
          0%   { width: 0%; }
          100% { width: 100%; }
        }
        @keyframes bar-shimmer {
          0%   { background-position: 0% 0%; }
          100% { background-position: 200% 0%; }
        }
        @keyframes particle-float-0 {
          0%, 100% { transform: translateY(0) scale(1); }
          50%       { transform: translateY(-12px) scale(1.5); }
        }
        @keyframes particle-float-1 {
          0%, 100% { transform: translateY(0) scale(1); }
          50%       { transform: translateY(-8px) scale(1.2); }
        }
        @keyframes particle-float-2 {
          0%, 100% { transform: translateY(0) scale(1); }
          50%       { transform: translateY(-16px) scale(1.8); }
        }
      `}</style>
    </div>
  )
}
