import { Mail, ArrowRight, Zap } from 'lucide-react'

export default function S01Cover() {
  const next = () => window.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowRight', bubbles: true }))

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden"
      style={{ background: '#0A0A0A' }}>

      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: 'linear-gradient(#FF6B00 1px, transparent 1px), linear-gradient(90deg, #FF6B00 1px, transparent 1px)',
        backgroundSize: '64px 64px',
      }} />

      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 65% 55% at 50% 50%, rgba(255,107,0,0.07) 0%, transparent 70%)',
      }} />

      <div className="absolute top-0 left-0 right-0 h-0.5 orange-line" />

      <div className="relative z-10 flex flex-col items-center text-center px-6 sm:px-12 max-w-5xl w-full">

        <div className="animate-fade-in delay-100 mb-8 px-5 py-1.5 rounded-full border text-[10px] font-bold tracking-widest uppercase"
          style={{ background: 'rgba(255,107,0,0.05)', borderColor: 'rgba(255,107,0,0.28)', color: '#FF6B00' }}>
          Holding de Mobilidade Elétrica — Deck Executivo 2026
        </div>

        <div className="animate-fade-up delay-200 mb-2">
          <h1 style={{
            fontSize: 'clamp(3.5rem, 10vw, 8rem)',
            fontWeight: 900,
            color: '#FFFFFF',
            letterSpacing: '-0.03em',
            lineHeight: 1,
          }}>
            TM GROUP
          </h1>
        </div>

        <div className="animate-fade-up delay-300 mb-1">
          <p style={{
            fontSize: 'clamp(1rem, 2.5vw, 1.6rem)',
            fontWeight: 600,
            color: '#3A3A3C',
            letterSpacing: '0.06em',
          }}>
            TECLE MOTOS
          </p>
        </div>

        <div className="animate-fade-in delay-400" style={{
          width: 'clamp(60px, 15vw, 140px)',
          height: 2,
          background: 'linear-gradient(90deg, transparent, #FF6B00, transparent)',
          margin: '1.25rem auto',
        }} />

        <p className="animate-fade-up delay-500 uppercase tracking-widest mb-6"
          style={{ color: '#8E8E93', letterSpacing: '0.3em', fontSize: 11, fontWeight: 500 }}>
          A Energia que Te Move
        </p>

        <p className="animate-fade-up delay-600 font-medium mb-10 px-2"
          style={{
            color: 'rgba(255,255,255,0.82)',
            fontSize: 'clamp(0.9rem, 1.8vw, 1.15rem)',
            lineHeight: 1.75,
            maxWidth: 600,
          }}>
          "O crescimento já começou, e a Tecle Motos possui um{' '}
          <span style={{ color: '#FF6B00', fontWeight: 800 }}>
            Ecossistema diretamente voltado para a Mobilidade Elétrica.
          </span>"
        </p>

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

      <div className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        style={{ background: 'linear-gradient(to top, #0A0A0A, transparent)' }} />

      <div className="absolute bottom-16 right-6 flex items-center gap-2 opacity-25">
        <Zap size={12} color="#FF6B00" />
        <span style={{ color: '#FF6B00', fontSize: 9, fontWeight: 700, letterSpacing: '0.18em' }}>TM GROUP © 2026</span>
      </div>
    </div>
  )
}
