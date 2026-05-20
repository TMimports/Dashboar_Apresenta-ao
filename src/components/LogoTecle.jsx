const sizeMap = {
  xs: { img: 60,  text: 11 },
  sm: { img: 90,  text: 13 },
  md: { img: 130, text: 15 },
  lg: { img: 180, text: 18 },
  xl: { img: 240, text: 22 },
}

/* variant="full"  → logo PNG completa com animação (padrão)
   variant="icon"  → só ícone/símbolo menor
   variant="hero"  → grande centralizada */
export default function LogoTecle({ size = 'md', variant = 'full', animated = true }) {
  const s = sizeMap[size] || sizeMap.md

  if (variant === 'hero') {
    return (
      <div className="flex flex-col items-center">
        <img
          src="/logo-tecle.png"
          alt="Tecle Motos"
          style={{
            height: s.img * 1.1,
            objectFit: 'contain',
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
      <div style={{ height: s.img * 0.5, display: 'inline-flex', alignItems: 'center' }}>
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

  // full (default)
  return (
    <div className="flex items-center select-none" style={{ height: s.img * 0.55 }}>
      <img
        src="/logo-tecle.png"
        alt="Tecle Motos"
        style={{
          height: '100%',
          objectFit: 'contain',
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
