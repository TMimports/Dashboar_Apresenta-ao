import { useState } from 'react'

export default function S03Fundadores() {
  const [imgErr, setImgErr] = useState(false)

  return (
    <div className="relative w-full h-full flex flex-col overflow-hidden"
      style={{ background: '#000000', padding: '28px 40px 20px' }}>

      <div className="absolute top-0 left-0 right-0 h-0.5 orange-line" />

      {/* Cabeçalho mínimo */}
      <div className="animate-fade-up mb-3" style={{ flexShrink: 0 }}>
        <p className="text-[#FF6B00] text-xs font-medium tracking-widest uppercase mb-1">03 / Corpo Diretor</p>
        <h2 className="slide-title text-white">Sócios Fundadores & Governança</h2>
      </div>

      {/* Imagem inteira — ocupa todo o espaço restante */}
      <div className="animate-fade-in delay-200"
        style={{
          flex: 1,
          minHeight: 0,
          width: '100%',
          position: 'relative',
          borderRadius: 16,
          overflow: 'hidden',
          border: '1px solid rgba(255,107,0,0.25)',
        }}>

        {!imgErr ? (
          <img
            src="/assets/images/tv03.jpg"
            alt="Sócios Fundadores TM GROUP"
            onError={() => setImgErr(true)}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              objectPosition: 'center',
              display: 'block',
              background: '#000',
            }}
          />
        ) : (
          <div style={{
            width: '100%', height: '100%',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            background: '#0A0A0A',
          }}>
            <p style={{ color: '#FF6B00', fontWeight: 700, letterSpacing: '0.1em' }}>
              SÓCIOS FUNDADORES — TM GROUP
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
