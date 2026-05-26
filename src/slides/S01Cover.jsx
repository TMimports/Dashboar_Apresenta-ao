import { useState } from 'react'
import { Mail, ArrowRight, Zap } from 'lucide-react'

export default function S01Cover() {
  const [imgError, setImgError] = useState(false)
  const next = () => window.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowRight', bubbles: true }))

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden"
      style={{ background: '#0A0A0A' }}>

      {/* ── Hero image real (tv01) ── */}
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
          {/* Overlay gradient para manter legibilidade */}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to bottom, rgba(10,10,10,0.6) 0%, rgba(10,10,10,0.3) 40%, rgba(10,10,10,0.85) 100%)',
          }} />
        </div>
      )}

      {/* Grid fundo */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: 'linear-gradient(#FF6B00 1px, transparent 1px), linear-gradient(90deg, #FF6B00 1px, transparent 1px)',
        backgroundSize: '64px 64px',
      }} />

      {/* Glow radial central */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 70% 55% at 50% 50%, rgba(255,107,0,0.07) 0%, transparent 70%)',
      }} />

      {/* Linha laranja topo */}
      <div className="absolute top-0 left-0 right-0 h-0.5 orange-line" />

      {/* ── Conteúdo central ── */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 sm:px-12 max-w-4xl w-full">

        {/* Badge */}
        <div className="animate-fade-in delay-100 mb-8 px-5 py-1.5 rounded-full border text-[10px] font-bold tracking-widest uppercase"
          style={{ background: 'rgba(255,107,0,0.05)', borderColor: 'rgba(255,107,0,0.28)', color: '#FF6B00' }}>
          Holding de Mobilidade Elétrica — Deck Executivo 2026
        </div>

        {/* ── Logo TM GROUP (topo / holding) ── */}
        <div
          className="animate-fade-up delay-200 mb-3 flex justify-center"
          style={{ width: '100%', maxWidth: 440 }}>
          <img
            src="/logo-tm-group.svg"
            alt="TM GROUP"
            style={{
              height: 'clamp(72px, 13vw, 120px)',
              objectFit: 'contain',
              filter: 'drop-shadow(0 0 20px rgba(255,107,0,0.7))',
              animation: 'cover-logo-glow 3.5s ease-in-out infinite',
            }}
          />
        </div>

        {/* Divisor */}
        <div className="animate-fade-in delay-300 flex justify-center" style={{ width: '100%', maxWidth: 440 }}>
          <div style={{
            width: 'clamp(50px, 10vw, 90px)',
            height: 1,
            background: 'linear-gradient(90deg, transparent, #FF6B00, transparent)',
            margin: '0.5rem 0 0.75rem',
          }} />
        </div>

        {/* ── Logo Tecle Motos (base / alinhada) ── */}
        <div
          className="animate-fade-up delay-400 mb-6 flex justify-center"
          style={{ width: '100%', maxWidth: 440 }}>
          <img
            src="/logo-tecle.png"
            alt="Tecle Motos"
            style={{
              height: 'clamp(40px, 7.5vw, 68px)',
              objectFit: 'contain',
              filter: 'drop-shadow(0 0 10px rgba(255,107,0,0.4))',
              animation: 'cover-logo-glow 4s ease-in-out 0.5s infinite',
            }}
          />
        </div>

        {/* Tagline */}
        <p className="animate-fade-up delay-500 uppercase tracking-widest mb-5"
          style={{ color: '#8E8E93', letterSpacing: '0.28em', fontSize: 10, fontWeight: 500 }}>
          A Energia que Te Move
        </p>

        {/* Frase de impacto */}
        <p className="animate-fade-up delay-600 mb-10 px-2"
          style={{
            color: 'rgba(255,255,255,0.82)',
            fontSize: 'clamp(0.88rem, 1.7vw, 1.12rem)',
            lineHeight: 1.75,
            maxWidth: 580,
            fontWeight: 400,
          }}>
          "O crescimento já começou, a Tecle Motos possui um{' '}
          <span style={{ color: '#FF6B00', fontWeight: 700 }}>
            Ecossistema voltado para a Mobilidade Elétrica Urbana.
          </span>"
        </p>

        {/* CTAs */}
        <div className="animate-fade-up delay-700 flex flex-wrap gap-3 justify-center">
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
      <div className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        style={{ background: 'linear-gradient(to top, #0A0A0A, transparent)' }} />

      <div className="absolute bottom-16 right-6 flex items-center gap-2 opacity-25">
        <Zap size={12} color="#FF6B00" />
        <span style={{ color: '#FF6B00', fontSize: 9, fontWeight: 700, letterSpacing: '0.18em' }}>TM GROUP © 2026</span>
      </div>

      <style>{`
        @keyframes cover-logo-glow {
          0%, 100% { filter: drop-shadow(0 0 12px rgba(255,107,0,0.55)); }
          50%       { filter: drop-shadow(0 0 28px rgba(255,107,0,0.95)) drop-shadow(0 0 56px rgba(255,107,0,0.25)); }
        }
      `}</style>
    </div>
  )
}
