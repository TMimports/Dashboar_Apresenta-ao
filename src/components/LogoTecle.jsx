const sizeMap = {
  xs: { img: 60  },
  sm: { img: 90  },
  md: { img: 130 },
  lg: { img: 180 },
  xl: { img: 240 },
}

const responsiveClamp = {
  xs: 'clamp(36px, 5vw, 60px)',
  sm: 'clamp(54px, 7vw, 90px)',
  md: 'clamp(80px, 10vw, 130px)',
  lg: 'clamp(100px, 14vw, 180px)',
  xl: 'clamp(130px, 18vw, 240px)',
}

export default function LogoTecle({ size = 'md', variant = 'full', animated = true }) {
  const clamp = responsiveClamp[size] || responsiveClamp.md

  if (variant === 'hero') {
    const heroClamp = clamp.replace(/(\d+)px/g, (_, n) => `${Math.round(Number(n) * 1.1)}px`)
    return (
      <div className="flex flex-col items-center">
        <img
          src="/logo-tecle.png"
          alt="Tecle Motos"
          style={{
            height: heroClamp,
            objectFit: 'contain',
            maxWidth: '100%',
            animation: animated ? 'tecle-float 4s ease-in-out 0.5s infinite, tecle-glow 3s ease-in-out infinite' : 'none',
            filter: 'drop-shadow(0 0 8px rgba(255,107,0,0.4))',
          }}
        />
        <AnimStyles />
      </div>
    )
  }

  if (variant === 'icon') {
    return (
      <div style={{ height: `calc(${clamp} * 0.5)`, display: 'inline-flex', alignItems: 'center' }}>
        <img
          src="/logo-tecle.png"
          alt="Tecle Motos"
          style={{
            height: '100%',
            objectFit: 'contain',
            animation: animated ? 'tecle-glow 3s ease-in-out 0.5s infinite' : 'none',
            filter: 'drop-shadow(0 0 4px rgba(255,107,0,0.3))',
          }}
        />
        <AnimStyles />
      </div>
    )
  }

  return (
    <div className="flex items-center select-none" style={{ height: `calc(${clamp} * 0.55)` }}>
      <img
        src="/logo-tecle.png"
        alt="Tecle Motos"
        style={{
          height: '100%',
          objectFit: 'contain',
          maxWidth: '100%',
          animation: animated
            ? 'tecle-float 4s ease-in-out 0.5s infinite, tecle-glow 3s ease-in-out infinite'
            : 'none',
          filter: 'drop-shadow(0 0 6px rgba(255,107,0,0.4))',
        }}
      />
      <AnimStyles />
    </div>
  )
}

function AnimStyles() {
  return (
    <style>{`
      @keyframes tecle-glow {
        0%, 100% { filter: drop-shadow(0 0 4px rgba(255,107,0,0.3)); }
        50%       { filter: drop-shadow(0 0 14px rgba(255,107,0,0.7)) drop-shadow(0 0 28px rgba(255,107,0,0.25)); }
      }
      @keyframes tecle-float {
        0%, 100% { transform: translateY(0px); }
        50%       { transform: translateY(-3px); }
      }
    `}</style>
  )
}
