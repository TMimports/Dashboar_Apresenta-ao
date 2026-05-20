import LogoTMEletricas from '../components/LogoTMEletricas'
import LogoTecle from '../components/LogoTecle'

export default function S01Cover() {
  const pillars = ['Importação', 'Distribuição', 'Tecnologia', 'Varejo', 'Pós-venda', 'Escala']

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden"
      style={{ background: '#0A0A0A' }}>

      {/* Background grid */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'linear-gradient(#FF6B00 1px, transparent 1px), linear-gradient(90deg, #FF6B00 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />

      {/* Radial glow central — pulsa suave */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 55% 45% at 50% 50%, rgba(255,107,0,0.09) 0%, transparent 70%)',
        animation: 'cover-bg-pulse 6s ease-in-out infinite',
      }} />

      {/* Orange accent line top */}
      <div className="absolute top-0 left-0 right-0 h-0.5 orange-line" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-8 max-w-5xl w-full">

        {/* Tag */}
        <div className="animate-fade-in delay-100 mb-6 px-5 py-1.5 rounded-full border text-xs font-medium tracking-widest uppercase"
          style={{ background: 'rgba(255,107,0,0.06)', borderColor: 'rgba(255,107,0,0.35)', color: '#FF6B00' }}>
          Plano de Expansão &amp; Estruturação de Capital
        </div>

        {/* Logos — entrada escalonada */}
        <div className="flex items-center justify-center gap-10 mb-4">
          {/* TM Elétricas — aparece primeiro */}
          <div className="animate-fade-up delay-200">
            <LogoTMEletricas size="xl" variant="hero" animated={true} />
          </div>

          {/* Divisor central animado */}
          <div className="animate-fade-in delay-400 flex flex-col items-center gap-2"
            style={{ animation: 'fadeIn 0.4s ease-out 0.4s forwards', opacity: 0 }}>
            <div style={{ width: 1, height: 64, background: 'linear-gradient(to bottom, transparent, #FF6B00, transparent)' }} />
            <span style={{ fontSize: 9, color: '#FF6B00', letterSpacing: '0.2em', fontWeight: 700, writingMode: 'vertical-rl' }}>+</span>
            <div style={{ width: 1, height: 64, background: 'linear-gradient(to bottom, #FF6B00, transparent)' }} />
          </div>

          {/* Tecle Motos — aparece depois */}
          <div className="animate-fade-up delay-300">
            <LogoTecle size="xl" variant="hero" animated={true} />
          </div>
        </div>

        {/* Orange line separator */}
        <div className="animate-fade-in delay-500 h-0.5 my-5"
          style={{ width: 120, background: 'linear-gradient(90deg, transparent, #FF6B00, transparent)' }} />

        {/* Subtitle */}
        <p className="animate-fade-up delay-600 text-lg font-light tracking-widest mb-4 uppercase"
          style={{ color: '#8E8E93', letterSpacing: '0.2em', fontSize: 13 }}>
          Plataforma verticalizada de mobilidade elétrica
        </p>

        {/* Frase forte */}
        <p className="animate-fade-up delay-700 font-medium italic mb-10"
          style={{ color: '#FFFFFF', fontSize: 22, lineHeight: 1.5 }}>
          "O crescimento já começou.{' '}
          <span style={{ color: '#FF6B00', fontWeight: 700 }}>O capital apenas acelera.</span>"
        </p>

        {/* Pillars */}
        <div className="animate-fade-up delay-800 flex flex-wrap gap-3 justify-center">
          {pillars.map((p, i) => (
            <div key={i}
              className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 cursor-default
                hover:border-[rgba(255,107,0,0.5)] hover:text-[#FF6B00] hover:bg-[rgba(255,107,0,0.06)]"
              style={{ background: '#1C1C1E', border: '1px solid #2C2C2E', color: '#8E8E93' }}>
              {p}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-28 pointer-events-none"
        style={{ background: 'linear-gradient(to top, #0A0A0A, transparent)' }} />

      <style>{`
        @keyframes cover-bg-pulse {
          0%, 100% { opacity: 0.8; }
          50%       { opacity: 1.4; }
        }
      `}</style>
    </div>
  )
}
