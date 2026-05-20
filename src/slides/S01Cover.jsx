import { Mail, Phone, ArrowRight, Zap } from 'lucide-react'
import LogoTMEletricas from '../components/LogoTMEletricas'
import LogoTecle from '../components/LogoTecle'

const pillars = ['Importação', 'Distribuição', 'Tecnologia', 'Varejo', 'Pós-venda', 'Escala']

export default function S01Cover() {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden"
      style={{ background: '#0A0A0A' }}>

      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'linear-gradient(#FF6B00 1px, transparent 1px), linear-gradient(90deg, #FF6B00 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />

      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 55% 45% at 50% 50%, rgba(255,107,0,0.09) 0%, transparent 70%)',
        animation: 'cover-bg-pulse 6s ease-in-out infinite',
      }} />

      <div className="absolute top-0 left-0 right-0 h-0.5 orange-line" />

      <div className="relative z-10 flex flex-col items-center text-center px-4 sm:px-8 max-w-5xl w-full">

        <div className="animate-fade-in delay-100 mb-4 sm:mb-6 px-4 sm:px-5 py-1.5 rounded-full border text-xs font-medium tracking-widest uppercase"
          style={{ background: 'rgba(255,107,0,0.06)', borderColor: 'rgba(255,107,0,0.35)', color: '#FF6B00' }}>
          Plano de Expansão &amp; Estruturação de Capital
        </div>

        <div className="flex items-center justify-center gap-4 sm:gap-10 mb-4">
          <div className="animate-fade-up delay-200">
            <LogoTMEletricas size="xl" variant="hero" animated={true} />
          </div>

          <div className="animate-fade-in delay-400 flex flex-col items-center gap-2 hidden sm:flex"
            style={{ animation: 'fadeIn 0.4s ease-out 0.4s forwards', opacity: 0 }}>
            <div style={{ width: 1, height: 64, background: 'linear-gradient(to bottom, transparent, #FF6B00, transparent)' }} />
            <div style={{ width: 1, height: 64, background: 'linear-gradient(to bottom, #FF6B00, transparent)' }} />
          </div>

          <div className="animate-fade-up delay-300">
            <LogoTecle size="xl" variant="hero" animated={true} />
          </div>
        </div>

        <div className="animate-fade-in delay-500 h-0.5 my-4 sm:my-5"
          style={{ width: 120, background: 'linear-gradient(90deg, transparent, #FF6B00, transparent)' }} />

        <p className="animate-fade-up delay-600 font-light tracking-widest mb-3 sm:mb-4 uppercase"
          style={{ color: '#8E8E93', letterSpacing: '0.2em', fontSize: 12 }}>
          Plataforma verticalizada de mobilidade elétrica
        </p>

        <p className="animate-fade-up delay-700 font-medium italic mb-6 sm:mb-10 px-2"
          style={{ color: '#FFFFFF', fontSize: 18, lineHeight: 1.5, maxWidth: 560 }}>
          "O crescimento já começou.{' '}
          <span style={{ color: '#FF6B00', fontWeight: 700 }}>O capital apenas acelera.</span>"
        </p>

        <div className="animate-fade-up delay-800 flex flex-wrap gap-2 sm:gap-3 justify-center mb-6 sm:mb-8">
          {pillars.map((p, i) => (
            <div key={i}
              className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-300 cursor-default
                hover:border-[rgba(255,107,0,0.5)] hover:text-[#FF6B00] hover:bg-[rgba(255,107,0,0.06)]"
              style={{ background: '#1C1C1E', border: '1px solid #2C2C2E', color: '#8E8E93' }}>
              {p}
            </div>
          ))}
        </div>

        <div className="animate-fade-up flex flex-wrap gap-3 justify-center" style={{ animationDelay: '0.9s', opacity: 0 }}>
          <a href="mailto:contato@tmeletricas.com.br" className="btn-primary">
            <Mail size={16} />
            Solicitar Reunião
          </a>
          <a href="https://wa.me/5511999999999" className="btn-outline" target="_blank" rel="noreferrer">
            <Phone size={16} />
            WhatsApp
          </a>
          <button
            className="btn-outline"
            onClick={() => {
              const event = new KeyboardEvent('keydown', { key: 'ArrowRight', bubbles: true })
              window.dispatchEvent(event)
            }}
          >
            Ver Apresentação
            <ArrowRight size={16} />
          </button>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-28 pointer-events-none"
        style={{ background: 'linear-gradient(to top, #0A0A0A, transparent)' }} />

      <div className="absolute bottom-16 right-6 flex items-center gap-2 opacity-40">
        <Zap size={14} color="#FF6B00" />
        <span style={{ color: '#FF6B00', fontSize: 11, fontWeight: 600, letterSpacing: '0.1em' }}>TM GROUP</span>
      </div>

      <style>{`
        @keyframes cover-bg-pulse {
          0%, 100% { opacity: 0.8; }
          50%       { opacity: 1.4; }
        }
      `}</style>
    </div>
  )
}
