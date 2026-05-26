import { useState } from 'react'
import { Mail, ArrowRight, Rocket, Bike, Zap } from 'lucide-react'

const ICONS = [
  { Icon: Zap,    label: 'Energia' },
  { Icon: Bike,   label: 'Scooter Elétrica' },
  { Icon: Rocket, label: 'Aceleração' },
]

export default function S01Cover() {
  const [imgError, setImgError] = useState(false)
  const next = () => window.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowRight', bubbles: true }))

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden"
      style={{ background: '#0A0A0A' }}>

      {/* Hero image */}
      {!imgError && (
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/images/hero.jpg"
            alt="TM GROUP"
            onError={() => setImgError(true)}
            style={{
              width: '100%', height: '100%',
              objectFit: 'cover', objectPosition: 'center',
              opacity: 0.18,
              filter: 'brightness(0.7) saturate(0.8)',
            }}
          />
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to bottom, rgba(10,10,10,0.65) 0%, rgba(10,10,10,0.25) 45%, rgba(10,10,10,0.9) 100%)',
          }} />
        </div>
      )}

      {/* Grid fundo */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: 'linear-gradient(#FF6B00 1px, transparent 1px), linear-gradient(90deg, #FF6B00 1px, transparent 1px)',
        backgroundSize: '64px 64px',
      }} />

      {/* Glow central */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 70% 55% at 50% 50%, rgba(255,107,0,0.07) 0%, transparent 70%)',
      }} />

      {/* Linha laranja topo */}
      <div className="absolute top-0 left-0 right-0" style={{ height: 2, background: 'linear-gradient(90deg, #FF6B00, #FF8C33, transparent)' }} />

      {/* ── Conteúdo central ── */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 sm:px-12 w-full"
        style={{ maxWidth: 680, gap: '0.6rem' }}>

        {/* Badge */}
        <div className="animate-fade-in delay-100 px-5 py-1.5 rounded-full border text-[10px] font-bold tracking-widest uppercase mb-1"
          style={{ background: 'rgba(255,107,0,0.05)', borderColor: 'rgba(255,107,0,0.28)', color: '#FF6B00' }}>
          TM GROUP — Plataforma de Mobilidade Elétrica — 2026
        </div>

        {/* Logo TM GROUP */}
        <div className="animate-fade-up delay-200 flex justify-center w-full" style={{ maxWidth: 400 }}>
          <img
            src="/logo-tm-group.svg"
            alt="TM GROUP"
            style={{
              height: 'clamp(60px, 11vw, 104px)',
              objectFit: 'contain',
              animation: 'cover-logo-glow 3.5s ease-in-out infinite',
            }}
          />
        </div>

        {/* Divisor */}
        <div className="animate-fade-in delay-300 flex justify-center w-full">
          <div style={{
            width: 'clamp(50px, 10vw, 80px)',
            height: 1,
            background: 'linear-gradient(90deg, transparent, #FF6B00, transparent)',
          }} />
        </div>

        {/* Logo Tecle Motos */}
        <div className="animate-fade-up delay-400 flex justify-center w-full" style={{ maxWidth: 400 }}>
          <img
            src="/logo-tecle.png"
            alt="Tecle Motos"
            style={{
              height: 'clamp(32px, 6vw, 58px)',
              objectFit: 'contain',
              animation: 'cover-logo-glow 4s ease-in-out 0.5s infinite',
            }}
          />
        </div>

        {/* Tagline */}
        <p className="animate-fade-up delay-500 uppercase tracking-widest mt-1"
          style={{ color: '#8E8E93', letterSpacing: '0.28em', fontSize: 10, fontWeight: 500 }}>
          A Energia que Te Move
        </p>

        {/* ── 3 Ícones premium ── */}
        <div className="animate-fade-up delay-600 flex items-center justify-center gap-8 my-2">
          {ICONS.map(({ Icon, label }, i) => (
            <div key={i} className="flex flex-col items-center gap-1.5">
              <div style={{
                width: 48,
                height: 48,
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(255,107,0,0.18) 0%, rgba(255,107,0,0.04) 100%)',
                border: '1px solid rgba(255,107,0,0.5)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                animation: `icon-pulse 3s ease-in-out ${i * 0.5}s infinite`,
              }}>
                <Icon size={20} color="#FF6B00" strokeWidth={1.8} />
              </div>
              <span style={{
                color: 'rgba(255,107,0,0.75)',
                fontSize: 9,
                fontWeight: 700,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
              }}>
                {label}
              </span>
            </div>
          ))}
        </div>

        {/* Frase de impacto */}
        <p className="animate-fade-up delay-600 px-2"
          style={{
            color: 'rgba(255,255,255,0.8)',
            fontSize: 'clamp(0.82rem, 1.6vw, 1.05rem)',
            lineHeight: 1.7,
            maxWidth: 560,
            fontWeight: 400,
          }}>
          "O crescimento já começou e a Tecle Motos possui um{' '}
          <span style={{ color: '#FF6B00', fontWeight: 700 }}>
            Ecossistema voltado para a Mobilidade Elétrica Urbana.
          </span>"
        </p>

        {/* CTAs */}
        <div className="animate-fade-up delay-700 flex flex-wrap gap-3 justify-center mt-2">
          <a href="mailto:teclemotos@teclemotos.com" className="btn-primary">
            <Mail size={15} />
            Solicitar Reunião
          </a>
          <button className="btn-outline" onClick={next}>
            Ver Apresentação
            <ArrowRight size={15} />
          </button>
        </div>
      </div>

      {/* Fade bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none"
        style={{ background: 'linear-gradient(to top, #0A0A0A, transparent)' }} />

      <div className="absolute bottom-4 right-6 flex items-center gap-2 opacity-20">
        <Zap size={11} color="#FF6B00" />
        <span style={{ color: '#FF6B00', fontSize: 9, fontWeight: 700, letterSpacing: '0.18em' }}>TM GROUP © 2026</span>
      </div>

      <style>{`
        @keyframes cover-logo-glow {
          0%, 100% { filter: drop-shadow(0 0 10px rgba(255,107,0,0.5)); }
          50%       { filter: drop-shadow(0 0 24px rgba(255,107,0,0.9)) drop-shadow(0 0 48px rgba(255,107,0,0.2)); }
        }
        @keyframes icon-pulse {
          0%, 100% {
            box-shadow: 0 0 10px rgba(255,107,0,0.15);
            border-color: rgba(255,107,0,0.35);
          }
          50% {
            box-shadow: 0 0 24px rgba(255,107,0,0.5);
            border-color: rgba(255,107,0,0.8);
          }
        }
      `}</style>
    </div>
  )
}
