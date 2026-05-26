import { useState } from 'react'
import { Mail, ArrowLeft } from 'lucide-react'

const pilares = [
  { n: '10', label: 'anos de operação' },
  { n: '23+', label: 'pontos de venda' },
  { n: '5',  label: 'unidades de negócio' },
  { n: '3',  label: 'frentes globais' },
]

export default function S09Encerramento() {
  const [imgErr, setImgErr] = useState(false)
  const prev = () => window.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowLeft', bubbles: true }))

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden"
      style={{ background: '#000000' }}>

      {/* Imagem de fundo */}
      {!imgErr && (
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/images/01.jpg"
            alt="TM GROUP"
            onError={() => setImgErr(true)}
            style={{
              position: 'absolute', inset: 0,
              width: '100%', height: '100%',
              objectFit: 'cover', objectPosition: 'center',
              opacity: 0.15,
              filter: 'brightness(0.6) saturate(0.7)',
            }}
          />
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 40%, rgba(0,0,0,0.9) 100%)',
          }} />
        </div>
      )}

      {/* Grid fundo */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(#FF6B00 1px, transparent 1px), linear-gradient(90deg, #FF6B00 1px, transparent 1px)',
        backgroundSize: '72px 72px',
      }} />

      {/* Glow */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 65% 50% at 50% 50%, rgba(255,107,0,0.07) 0%, transparent 70%)',
      }} />

      {/* Linha topo */}
      <div className="absolute top-0 left-0 right-0 h-0.5 orange-line" />

      {/* Conteúdo central */}
      <div className="relative z-10 flex flex-col items-center text-center px-16 w-full" style={{ maxWidth: 900 }}>

        {/* Label */}
        <p className="animate-fade-in delay-100 text-[#FF6A00] text-xs font-bold tracking-widest uppercase mb-6">
          09 / Encerramento
        </p>

        {/* Logo TM GROUP */}
        <div className="animate-fade-up delay-200 flex justify-center mb-5" style={{ width: '100%', maxWidth: 360 }}>
          <img
            src="/logo-tm-group.svg"
            alt="TM GROUP"
            style={{
              height: 90,
              objectFit: 'contain',
              filter: 'drop-shadow(0 0 24px rgba(255,107,0,0.8))',
              animation: 'enc-glow 3.5s ease-in-out infinite',
            }}
          />
        </div>

        {/* Subtítulo */}
        <p className="animate-fade-up delay-300 text-[#8E8E93] text-sm font-medium leading-relaxed mb-6" style={{ maxWidth: 560 }}>
          Construindo uma das maiores plataformas independentes<br />
          de mobilidade elétrica do Brasil.
        </p>

        {/* KPIs horizontais */}
        <div className="animate-fade-up delay-400 flex gap-6 justify-center mb-8">
          {pilares.map((p, i) => (
            <div key={i} style={{
              textAlign: 'center',
              padding: '12px 20px',
              borderRadius: 12,
              background: 'rgba(255,107,0,0.06)',
              border: '1px solid rgba(255,107,0,0.2)',
              minWidth: 90,
            }}>
              <p style={{ color: '#FF6A00', fontSize: 22, fontWeight: 900, lineHeight: 1 }}>{p.n}</p>
              <p style={{ color: '#8E8E93', fontSize: 10, marginTop: 4, textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>
                {p.label}
              </p>
            </div>
          ))}
        </div>

        {/* Divisor */}
        <div className="animate-fade-in delay-400 flex justify-center w-full mb-6">
          <div style={{
            width: 120, height: 1,
            background: 'linear-gradient(90deg, transparent, #FF6A00, transparent)',
          }} />
        </div>

        {/* Frase central */}
        <div className="animate-fade-up delay-500 mb-8 px-4">
          <p style={{
            color: 'rgba(255,255,255,0.92)',
            fontSize: 22,
            fontWeight: 800,
            lineHeight: 1.4,
            letterSpacing: '-0.01em',
          }}>
            "O crescimento já começou.
          </p>
          <p style={{
            color: '#FF6A00',
            fontSize: 22,
            fontWeight: 900,
            lineHeight: 1.4,
            letterSpacing: '-0.01em',
          }}>
            O capital apenas acelera."
          </p>
        </div>

        {/* CTAs */}
        <div className="animate-fade-up delay-600 flex gap-4 justify-center">
          <a href="mailto:teclemotos@teclemotos.com" className="btn-primary">
            <Mail size={15} />
            Solicitar Reunião Executiva
          </a>
          <button className="btn-outline" onClick={prev}>
            <ArrowLeft size={15} />
            Rever Apresentação
          </button>
        </div>
      </div>

      {/* Rodapé */}
      <div className="absolute bottom-5 left-0 right-0 flex justify-center">
        <p style={{ color: '#2C2C2E', fontSize: 9, letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 600 }}>
          TM GROUP © 2026 — CONFIDENCIAL
        </p>
      </div>

      <style>{`
        @keyframes enc-glow {
          0%, 100% { filter: drop-shadow(0 0 16px rgba(255,107,0,0.6)); }
          50%       { filter: drop-shadow(0 0 36px rgba(255,107,0,1)) drop-shadow(0 0 60px rgba(255,107,0,0.3)); }
        }
      `}</style>
    </div>
  )
}
