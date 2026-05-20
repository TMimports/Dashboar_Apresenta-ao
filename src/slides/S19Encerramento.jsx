import { Mail, Phone, ArrowRight, Zap, ExternalLink } from 'lucide-react'
import LogoTMEletricas from '../components/LogoTMEletricas'
import LogoTecle from '../components/LogoTecle'

const pillars = ['Importação', 'Distribuição', 'Tecnologia', 'Varejo', 'Pós-venda', 'Escala']

export default function S19Encerramento() {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden"
      style={{ background: '#0A0A0A' }}>

      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'linear-gradient(#FF6B00 1px, transparent 1px), linear-gradient(90deg, #FF6B00 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />

      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(255,107,0,0.1) 0%, transparent 70%)'
      }} />

      <div className="absolute top-0 left-0 right-0 h-0.5 orange-line" />
      <div className="absolute bottom-0 left-0 right-0 h-0.5" style={{ background: 'linear-gradient(90deg, transparent, #FF6B00, transparent)' }} />

      <div className="relative z-10 flex flex-col items-center text-center px-4 sm:px-8 max-w-4xl w-full">
        <p className="animate-fade-in delay-100 text-[#FF6B00] text-xs font-medium tracking-widest uppercase mb-4 sm:mb-6">19 / Encerramento</p>

        <div className="animate-fade-up delay-200 flex items-center gap-4 sm:gap-6 mb-6 sm:mb-8">
          <LogoTMEletricas size="lg" />
          <div className="w-px h-10 sm:h-12" style={{ background: '#2C2C2E' }} />
          <LogoTecle size="lg" />
        </div>

        <p className="animate-fade-up delay-300 text-base sm:text-lg text-[#8E8E93] leading-relaxed mb-3 max-w-xl px-2">
          Construindo uma das maiores plataformas independentes de mobilidade elétrica do Brasil.
        </p>

        <div className="animate-fade-in delay-400 w-20 h-0.5 my-4 sm:my-6" style={{ background: '#FF6B00' }} />

        <p className="animate-fade-up delay-500 text-2xl sm:text-3xl font-medium text-white leading-snug mb-2">
          "O crescimento já começou.
        </p>
        <p className="animate-fade-up delay-600 text-2xl sm:text-3xl font-black leading-snug glow-orange-text"
          style={{ color: '#FF6B00' }}>
          O capital apenas acelera."
        </p>

        <div className="animate-fade-up delay-700 flex flex-wrap gap-2 sm:gap-3 justify-center mt-6 sm:mt-10 mb-6 sm:mb-8">
          {pillars.map((p, i) => (
            <div key={i}
              className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium"
              style={{ background: '#1C1C1E', border: '1px solid #2C2C2E', color: '#8E8E93' }}>
              {p}
            </div>
          ))}
        </div>

        <div className="animate-fade-up flex flex-wrap gap-3 justify-center" style={{ animationDelay: '0.8s', opacity: 0 }}>
          <a href="mailto:contato@tmeletricas.com.br" className="btn-primary">
            <Mail size={16} />
            Solicitar Reunião
          </a>
          <a href="https://wa.me/5511999999999" className="btn-outline" target="_blank" rel="noreferrer">
            <Phone size={16} />
            WhatsApp
          </a>
          <a href="https://linkedin.com/company/tmeletricas" className="btn-outline" target="_blank" rel="noreferrer">
            <ExternalLink size={16} />
            LinkedIn
          </a>
        </div>

        <p className="animate-fade-in mt-6 text-xs text-[#3A3A3C]" style={{ animationDelay: '1s' }}>
          TM Elétricas · Tecle Motos · contato@tmeletricas.com.br
        </p>
      </div>

      <div className="absolute bottom-16 right-6 flex items-center gap-2 opacity-40">
        <Zap size={14} color="#FF6B00" />
        <span style={{ color: '#FF6B00', fontSize: 11, fontWeight: 600, letterSpacing: '0.1em' }}>TM GROUP</span>
      </div>
    </div>
  )
}
