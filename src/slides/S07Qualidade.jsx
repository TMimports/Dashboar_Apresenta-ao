import { TrendingDown, TrendingUp, ShieldCheck } from 'lucide-react'
import { RadarChart, Radar, PolarGrid, PolarAngleAxis, ResponsiveContainer, Tooltip } from 'recharts'

const impacts = [
  { label: 'Menor retrabalho',        dir: 'down', pct: 92 },
  { label: 'Menor garantia acionada', dir: 'down', pct: 96 },
  { label: 'Menor devolução',         dir: 'down', pct: 88 },
  { label: 'Maior satisfação',        dir: 'up',   pct: 94 },
  { label: 'Maior previsibilidade',   dir: 'up',   pct: 90 },
]

const radarData = [
  { subject: 'Qualidade',    A: 96 },
  { subject: 'Satisfação',   A: 94 },
  { subject: 'Previsib.',    A: 90 },
  { subject: 'Retenção',     A: 92 },
  { subject: 'Eficiência',   A: 88 },
]

const CustomTooltip = ({ active, payload }) => {
  if (!active || !payload?.length) return null
  return (
    <div className="px-3 py-2 rounded-lg" style={{ background: '#1C1C1E', border: '1px solid #FF6B00' }}>
      <p className="text-white font-bold text-sm">{payload[0]?.value}%</p>
    </div>
  )
}

export default function S07Qualidade() {
  return (
    <div className="relative w-full h-full flex flex-col overflow-hidden slide-pad"
      style={{ background: '#0A0A0A' }}>

      <div className="absolute top-0 left-0 right-0 h-0.5 orange-line" />
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 40% 50% at 75% 40%, rgba(255,107,0,0.06) 0%, transparent 70%)'
      }} />

      <div className="mb-4 md:mb-8 animate-fade-up">
        <p className="text-[#FF6B00] text-xs font-medium tracking-widest uppercase mb-2">07 / Qualidade</p>
        <h2 className="slide-title text-white">Qualidade comprovada na prática</h2>
      </div>

      <div className="slide-row flex-1 min-h-0">
        <div className="flex flex-col gap-4 slide-sidebar animate-slide-left delay-200">
          <div className="p-6 sm:p-8 rounded-2xl text-center glow-orange"
            style={{ background: 'rgba(255,107,0,0.08)', border: '1px solid rgba(255,107,0,0.4)' }}>
            <p className="text-[#FF6B00] text-xs uppercase tracking-widest font-medium mb-2 flex items-center justify-center gap-1">
              <ShieldCheck size={12} /> Último container
            </p>
            <p className="text-5xl font-black text-white leading-none">≈ 0%</p>
            <p className="text-[#AEAEB2] text-sm mt-2">índice de problemas</p>
          </div>

          <div className="flex-1" style={{ minHeight: 160 }}>
            <p className="text-xs text-[#8E8E93] uppercase tracking-widest font-medium mb-2">Score de qualidade</p>
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={radarData}>
                <PolarGrid stroke="#2C2C2E" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: '#8E8E93', fontSize: 10 }} />
                <Radar dataKey="A" stroke="#FF6B00" fill="#FF6B00" fillOpacity={0.15} strokeWidth={2} />
                <Tooltip content={<CustomTooltip />} />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="flex flex-col gap-3 flex-1 animate-fade-in delay-300">
          <p className="text-xs text-[#8E8E93] uppercase tracking-widest font-medium mb-1">Impacto direto da qualidade</p>
          {impacts.map((item, i) => {
            const Icon = item.dir === 'up' ? TrendingUp : TrendingDown
            const isUp = item.dir === 'up'
            return (
              <div key={i}
                className="flex items-center gap-4 px-4 sm:px-5 py-3 sm:py-4 rounded-xl card-premium group cursor-default">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-all group-hover:scale-110"
                  style={{
                    background: isUp ? 'rgba(255,107,0,0.1)' : 'rgba(255,107,0,0.06)',
                    border: `1px solid ${isUp ? 'rgba(255,107,0,0.3)' : '#2C2C2E'}`,
                  }}>
                  <Icon size={18} color={isUp ? '#FF6B00' : '#AEAEB2'} />
                </div>
                <span className="text-white font-medium text-sm group-hover:text-[#FF6B00] transition-colors flex-1">{item.label}</span>
                <div className="flex items-center gap-3 flex-shrink-0">
                  <div className="hidden sm:block w-24 md:w-32">
                    <div className="h-1.5 rounded-full" style={{ background: '#2C2C2E' }}>
                      <div className="h-full rounded-full transition-all duration-700"
                        style={{ width: `${item.pct}%`, background: 'linear-gradient(90deg, #FF6B00, #FF8C33)' }} />
                    </div>
                  </div>
                  <span className="text-[#FF6B00] font-bold text-sm">{item.pct}%</span>
                </div>
              </div>
            )
          })}

          <div className="mt-2 p-4 rounded-xl" style={{ background: '#1C1C1E', border: '1px solid #2C2C2E' }}>
            <p className="text-[#FF6B00] font-bold text-sm">Qualidade reduz risco financeiro e acelera fidelização.</p>
          </div>
        </div>

        <div className="slide-sidebar-sm flex flex-col gap-4 animate-slide-right delay-300">
          <blockquote className="border-l-2 border-[#FF6B00] pl-4">
            <p className="text-sm text-[#AEAEB2] italic leading-relaxed">
              "Importamos para escalar, mas com padrão de qualidade para sustentar crescimento."
            </p>
          </blockquote>
        </div>
      </div>
    </div>
  )
}
