import LogoTMEletricas from '../components/LogoTMEletricas'
import LogoTecle from '../components/LogoTecle'

const pillars = ['Importação', 'Distribuição', 'Tecnologia', 'Varejo', 'Pós-venda', 'Escala']

export default function S19Encerramento() {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden"
      style={{ background: '#0A0A0A' }}>

      {/* Background grid */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'linear-gradient(#FF6B00 1px, transparent 1px), linear-gradient(90deg, #FF6B00 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />

      {/* Radial glow */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(255,107,0,0.1) 0%, transparent 70%)'
      }} />

      <div className="absolute top-0 left-0 right-0 h-0.5 orange-line" />
      <div className="absolute bottom-0 left-0 right-0 h-0.5" style={{ background: 'linear-gradient(90deg, transparent, #FF6B00, transparent)' }} />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-8 max-w-4xl">
        <p className="animate-fade-in delay-100 text-[#FF6B00] text-xs font-medium tracking-widest uppercase mb-6">19 / Encerramento</p>

        {/* Logos */}
        <div className="animate-fade-up delay-200 flex items-center gap-6 mb-8">
          <LogoTMEletricas size="lg" />
          <div className="w-px h-12" style={{ background: '#2C2C2E' }} />
          <LogoTecle size="lg" />
        </div>

        {/* Subtitle */}
        <p className="animate-fade-up delay-300 text-lg text-[#8E8E93] leading-relaxed mb-3 max-w-xl">
          Construindo uma das maiores plataformas independentes de mobilidade elétrica do Brasil.
        </p>

        {/* Linha divisória */}
        <div className="animate-fade-in delay-400 w-20 h-0.5 my-6" style={{ background: '#FF6B00' }} />

        {/* Frase final */}
        <p className="animate-fade-up delay-500 text-3xl font-medium text-white leading-snug mb-2">
          "O crescimento já começou.
        </p>
        <p className="animate-fade-up delay-600 text-3xl font-black leading-snug glow-orange-text"
          style={{ color: '#FF6B00' }}>
          O capital apenas acelera."
        </p>

        {/* Pillars */}
        <div className="animate-fade-up delay-700 flex flex-wrap gap-3 justify-center mt-10">
          {pillars.map((p, i) => (
            <div key={i}
              className="px-4 py-2 rounded-lg text-sm font-medium"
              style={{ background: '#1C1C1E', border: '1px solid #2C2C2E', color: '#8E8E93' }}>
              {p}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
