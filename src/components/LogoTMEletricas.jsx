/* Logo TM Elétricas — recriada a partir do original TM Imports
   com "ELÉTRICAS" substituindo "IMPORTS" no mesmo estilo gráfico.
   Usa o arquivo /logo-tm-eletricas.svg (SVG com paths originais + novo texto SVG). */

const sizeMap = {
  xs: { h: 28  },
  sm: { h: 42  },
  md: { h: 60  },
  lg: { h: 85  },
  xl: { h: 115 },
}

export default function LogoTMEletricas({ size = 'md', variant = 'full', animated = true }) {
  const s = sizeMap[size] || sizeMap.md

  /* variant="icon"  → só o mark (sem texto ELÉTRICAS) — usa logo-tm.svg original, só porção superior */
  /* variant="full"  → logo completa TM ELÉTRICAS (padrão) */
  /* variant="hero"  → centralizada, maior, para capa */

  const imgSrc   = variant === 'icon' ? '/logo-tm.svg' : '/logo-tm-eletricas.svg'
  const heightPx = variant === 'hero' ? s.h * 1.15 : s.h

  /* Para variant="icon", mostramos só o mark cortando via object-position + overflow hidden */
  const imgStyle = variant === 'icon'
    ? {
        height: heightPx,
        width:  heightPx * 0.9,
        objectFit: 'cover',
        objectPosition: '50% 38%',
      }
    : {
        height: heightPx,
        objectFit: 'contain',
      }

  return (
    <div
      className="inline-flex items-center justify-center select-none"
      style={{
        animation: animated
          ? 'tm-float 4.5s ease-in-out infinite'
          : 'none',
        filter: animated
          ? undefined
          : 'none',
      }}
    >
      <img
        src={imgSrc}
        alt="TM Elétricas"
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
