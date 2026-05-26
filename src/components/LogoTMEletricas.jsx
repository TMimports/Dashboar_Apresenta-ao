const sizeMap = {
  xs: { h: 28  },
  sm: { h: 42  },
  md: { h: 60  },
  lg: { h: 85  },
  xl: { h: 115 },
}

// Fator de escala para mobile (em vw, clampeado)
const responsiveClamp = {
  xs: 'clamp(20px, 4vw, 28px)',
  sm: 'clamp(28px, 5vw, 42px)',
  md: 'clamp(40px, 7vw, 60px)',
  lg: 'clamp(50px, 9vw, 85px)',
  xl: 'clamp(65px, 12vw, 115px)',
}

export default function LogoTMEletricas({ size = 'md', variant = 'full', animated = true }) {
  const s = sizeMap[size] || sizeMap.md
  const clamp = responsiveClamp[size] || responsiveClamp.md

  const imgSrc   = variant === 'icon' ? '/logo-tm.svg' : '/logo-tm-group.svg'
  const baseH    = variant === 'hero' ? s.h * 1.15 : s.h
  const baseClamp = variant === 'hero'
    ? clamp.replace(/(\d+)px/g, (_, n) => `${Math.round(Number(n) * 1.15)}px`)
    : clamp

  const imgStyle = variant === 'icon'
    ? {
        height: baseClamp,
        width:  `calc(${baseClamp} * 0.9)`,
        objectFit: 'cover',
        objectPosition: '50% 38%',
      }
    : {
        height: baseClamp,
        objectFit: 'contain',
        maxWidth: '100%',
      }

  return (
    <div
      className="inline-flex items-center justify-center select-none"
      style={{
        animation: animated ? 'tm-float 4.5s ease-in-out infinite' : 'none',
      }}
    >
      <img
        src={imgSrc}
        alt="TM GROUP"
        style={{
          ...imgStyle,
          filter: `drop-shadow(0 0 ${animated ? '8px' : '0px'} rgba(249,124,6,0.5))`,
          animation: animated ? 'tm-glow 3s ease-in-out infinite' : 'none',
        }}
      />

      <style>{`
        @keyframes tm-float {
          0%, 100% { transform: translateY(0);    }
          50%       { transform: translateY(-4px); }
        }
        @keyframes tm-glow {
          0%, 100% { filter: drop-shadow(0 0 5px  rgba(249,124,6,0.40)); }
          50%       { filter: drop-shadow(0 0 14px rgba(249,124,6,0.80))
                               drop-shadow(0 0 28px rgba(249,124,6,0.25)); }
        }
      `}</style>
    </div>
  )
}
