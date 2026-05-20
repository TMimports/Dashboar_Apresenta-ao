import { CheckCircle2 } from 'lucide-react'
import { RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from 'recharts'

const validated = ['Produto', 'Distribuição', 'Canais de venda', 'Operação', 'Qualidade', 'Pós-venda', 'Tecnologia', 'Demanda']

const radarData = [
  { subject: 'Produto',      score: 95 },
  { subject: 'Distribuição', score: 92 },
  { subject: 'Canais',       score: 88 },
  { subject: 'Operação',     score: 90 },
  { subject: 'Qualidade',    score: 96 },
  { subject: 'Tecnologia',   score: 85 },
  { subject: 'Demanda',      score: 93 },
  { subject: 'Pós-venda',    score: 91 },
]

const CustomTooltip = ({ active, payload }) => {
  if (!active || !payload?.length) return null
  return (
    <div className="px-3 py-2 rounded-lg" style={{ background: '#1C1C1E', border: '1px solid #FF6B00' }}>
      <p className="text-white font-bold text-sm">{payload[0]?.value}% validado</p>
    </div>
  )
}

export default function S12Oportunidade() {
  return (
    <div className="relative w-full h-full flex flex-col overflow-hidden slide-pad"
      style={{ background: '#0A0A0A' }}>

      <div className="absolute top-0 left-0 right-0 h-0.5 orange-line" />
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(255,107,0,0.06) 0%, transparent 70%)'
      }} />

      <div className="mb-4 md:mb-8 animate-fade-up">
        <p className="text-[#FF6B00] text-xs font-medium tracking-widest uppercase mb-2">12 / Oportunidade de Crescimento</p>
        <h2 className="slide-title text-white">Uma demanda já validada</h2>
      </div>

      <div className="slide-row flex-1 min-h-0 items-center">
        <div className="flex-1 flex flex-col lg:flex-row gap-4 animate-slide-left delay-200">
          <div className="flex-1">
            <p className="text-xs text-[#8E8E93] uppercase tracking-widest font-medium mb-3">A TM já validou</p>
            <div className="grid grid-cols-2 gap-2 sm:gap-3">
              {validated.map((item, i) => (
                <div key={i}
                  className="flex items-center gap-3 px-3 sm:px-4 py-2.5 rounded-xl card-premium group cursor-default">
                  <CheckCircle2 size={16} color="#FF6B00" className="flex-shrink-0" />
                  <span className="text-white text-xs sm:text-sm font-medium group-hover:text-[#FF6B00] transition-colors">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ width: '100%', maxWidth: 260, height: 220 }} className="mx-auto lg:mx-0">
            <p className="text-xs text-[#8E8E93] uppercase tracking-widest font-medium mb-2">Nível de validação</p>
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={radarData} outerRadius="75%">
                <PolarGrid stroke="#2C2C2E" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: '#8E8E93', fontSize: 9 }} />
                <PolarRadiusAxis angle={30} domain={[60, 100]} tick={false} axisLine={false} />
                <Radar dataKey="score" stroke="#FF6B00" fill="#FF6B00" fillOpacity={0.18} strokeWidth={2} dot={{ fill: '#FF6B00', r: 3 }} />
                <Tooltip content={<CustomTooltip />} />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="slide-sidebar flex flex-col gap-4 animate-slide-right delay-300">
          <div className="p-6 sm:p-8 rounded-2xl text-center glow-orange"
            style={{ background: 'rgba(255,107,0,0.08)', border: '1px solid rgba(255,107,0,0.4)' }}>
            <p className="text-xs text-[#FF6B00] uppercase tracking-widest font-medium mb-3">Principal limitador</p>
            <p className="text-white font-black text-lg sm:text-xl leading-tight uppercase tracking-wide">
              A Velocidade de Capitalização
            </p>
          </div>

          <div className="flex flex-col gap-3">
            {['A estrutura já existe.', 'A demanda já existe.', 'O time já existe.'].map((line, i) => (
              <div key={i} className="flex items-center gap-3 px-4 py-3 rounded-xl"
                style={{ background: '#1C1C1E', border: '1px solid #2C2C2E' }}>
                <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#FF6B00' }} />
                <p className="text-[#AEAEB2] text-sm">{line}</p>
              </div>
            ))}
            <div className="px-4 py-3 rounded-xl" style={{ background: 'rgba(255,107,0,0.06)', border: '1px solid rgba(255,107,0,0.2)' }}>
              <p className="text-[#FF6B00] text-sm font-bold">O capital acelera uma operação já validada.</p>
            </div>
          </div>

          <blockquote className="border-l-2 border-[#FF6B00] pl-4">
            <p className="text-sm text-[#AEAEB2] italic">"Nosso desafio não é criar crescimento. É sustentar a velocidade do crescimento."</p>
          </blockquote>
        </div>
      </div>
    </div>
  )
}
