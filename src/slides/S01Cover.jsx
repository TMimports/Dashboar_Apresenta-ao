import { Mail, ArrowRight, Zap } from 'lucide-react'

export default function S01Cover() {
  const next = () => window.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowRight', bubbles: true }))

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden"
      style={{ background: '#0A0A0A' }}>

      {/* Grid fundo */}
      <div className="absolute inset-0 opacity-[0.035]" style={{
        backgroundImage: 'linear-gradient(#FF6B00 1px, transparent 1px), linear-gradient(90deg, #FF6B00 1px, transparent 1px)',
        backgroundSize: '64px 64px',
      }} />

      {/* Glow radial central */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 70% 55% at 50% 50%, rgba(255,107,0,0.06) 0%, transparent 70%)',
      }} />

      {/* Linha laranja topo */}
      <div className="absolute top-0 left-0 right-0 h-0.5 orange-line" />

      <div className="relative z-10 flex flex-col items-center text-center px-6 sm:px-12 max-w-4xl w-full">

        {/* Badge categoria */}
        <div
          className="animate-fade-in delay-100 mb-8 px-5 py-1.5 rounded-full border text-[10px] font-bold tracking-widest uppercase"
          style={{ background: 'rgba(255,107,0,0.05)', borderColor: 'rgba(255,107,0,0.28)', color: '#FF6B00' }}>
          Holding de Mobilidade Elétrica — Deck Executivo 2026
        </div>

        {/* ── Logo TM GROUP — Holding (topo / destaque) ── */}
        <div className="animate-fade-up delay-200 mb-2 w-full flex justify-center" style={{ maxWidth: 460 }}>
          <img
            src="/logo-tm-group.svg"
            alt="TM GROUP"
            style={{
              height: 'clamp(70px, 13vw, 120px)',
              objectFit: 'contain',
              filter: 'drop-shadow(0 0 18px rgba(255,107,0,0.65))',
              animation: 'cover-logo-glow 3.5s ease-in-out infinite',
            }}
          />
        </div>

        {/* Divisor central */}
        <div className="animate-fade-in delay-300" style={{
          width: 'clamp(50px, 12vw, 100px)',
          height: 1,
          background: 'linear-gradient(90deg, transparent, #FF6B00, transparent)',
          margin: '0.75rem auto',
        }} />

        {/* ── Logo Tecle Motos — alinhada no mesmo eixo (base) ── */}
        <div className="animate-fade-up delay-400 mb-6 w-full flex justify-center" style={{ maxWidth: 460 }}>
          <img
            src="/logo-tecle.png"
            alt="Tecle Motos"
            style={{
              height: 'clamp(42px, 8vw, 72px)',
              objectFit: 'contain',
              filter: 'drop-shadow(0 0 10px rgba(255,107,0,0.40))',
              animation: 'cover-logo-glow 4s ease-in-out 0.5s infinite',
            }}
          />
        </div>

        {/* Tagline */}
        <p className="animate-fade-up delay-500 uppercase tracking-widest mb-6"
          style={{ color: '#8E8E93', letterSpacing: '0.28em', fontSize: 10, fontWeight: 500 }}>
          A Energia que Te Move
        </p>

        {/* Frase central */}
        <p className="animate-fade-up delay-600 mb-10 px-2"
          style={{
            color: 'rgba(255,255,255,0.80)',
            fontSize: 'clamp(0.88rem, 1.7vw, 1.12rem)',
            lineHeight: 1.75,
            maxWidth: 580,
            fontWeight: 400,
          }}>
          "O crescimento já começou, e a Tecle Motos possui um{' '}
          <span style={{ color: '#FF6B00', fontWeight: 700 }}>
            Ecossistema diretamente voltado para a Mobilidade Elétrica.
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

      {/* Rodapé */}
      <div className="absolute bottom-16 right-6 flex items-center gap-2 opacity-25">
        <Zap size={12} color="#FF6B00" />
        <span style={{ color: '#FF6B00', fontSize: 9, fontWeight: 700, letterSpacing: '0.18em' }}>TM GROUP © 2026</span>
      </div>

      <style>{`
        @keyframes cover-logo-glow {
          0%, 100% { filter: drop-shadow(0 0 10px rgba(255,107,0,0.50)); }
          50%       { filter: drop-shadow(0 0 24px rgba(255,107,0,0.90)) drop-shadow(0 0 48px rgba(255,107,0,0.25)); }
        }
      `}</style>
    </div>
  )
}
