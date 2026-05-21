import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, LabelList } from 'recharts'

const channels = [
  { label: 'Lojas Próprias',    value: 10, color: '#FF6B00' },
  { label: 'Shopping Centers',  value: 4,  color: '#FF8C33' },
  { label: 'Supermercados',     value: 5,  color: '#CC5500' },
  { label: 'Home Centers',      value: 3,  color: '#994000' },
]

const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null
  return (
    <div className="px-4 py-3 rounded-xl" style={{ background: '#1C1C1E', border: '1px solid #FF6B00' }}>
      <p className="text-[#AEAEB2] text-xs mb-1">{label}</p>
      <p className="text-white font-bold text-lg">{payload[0].value} <span className="text-xs font-normal text-[#8E8E93]">pontos</span></p>
    </div>
  )
}

export default function S05Distribuicao() {
  return (
    <div className="relative w-full h-full flex flex-col overflow-hidden slide-pad"
      style={{ background: '#0A0A0A' }}>

      <div className="absolute top-0 left-0 right-0 h-0.5 orange-line" />
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 50% 40% at 70% 50%, rgba(255,107,0,0.06) 0%, transparent 70%)'
      }} />

      <div className="mb-4 md:mb-6 animate-fade-up">
        <p className="text-[#FF6B00] text-xs font-medium tracking-widest uppercase mb-2">05 / Distribuição</p>
        <h2 className="slide-title text-white">Distribuição já validada</h2>
      </div>

      <div className="slide-row flex-1 min-h-0">
        <div className="flex flex-col gap-3 slide-sidebar animate-slide-left delay-200">
          <div className="p-5 sm:p-6 rounded-2xl text-center glow-orange"
            style={{ background: 'rgba(255,107,0,0.08)', border: '1px solid rgba(255,107,0,0.4)' }}>
            <p className="font-black text-[#FF6B00] leading-none" style={{ fontSize: 'clamp(2.5rem, 8vw, 4.5rem)' }}>22</p>
            <p className="text-white font-semibold mt-2 text-sm sm:text-base">Pontos de Venda Ativos</p>
            <p className="text-[#8E8E93] text-xs mt-1">Distribuídos em 4 canais</p>
          </div>

          <div className="flex flex-col gap-2">
            {channels.map((ch, i) => (
              <div key={i}
                className="flex items-center justify-between px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl card-premium">
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: ch.color }} />
                  <span className="text-xs sm:text-sm text-[#AEAEB2]">{ch.label}</span>
                </div>
                <span className="text-white font-bold text-base sm:text-lg">{ch.value}</span>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-3 px-3 sm:px-4 py-2.5 rounded-xl"
            style={{ background: '#1C1C1E', border: '1px dashed #3A3A3C' }}>
            <div className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: '#3A3A3C' }} />
            <span className="text-sm text-[#8E8E93]">Loja Online Própria</span>
            <span className="text-[#8E8E93] font-bold ml-auto">+1</span>
          </div>
        </div>

        <div className="flex-1 flex flex-col animate-fade-in delay-300">
          <p className="text-xs text-[#8E8E93] uppercase tracking-widest font-medium mb-3">Distribuição por canal (pontos)</p>
          <div className="flex-1" style={{ minHeight: 180 }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={channels} margin={{ top: 20, right: 10, left: -20, bottom: 10 }}>
                <XAxis dataKey="label" tick={{ fill: '#8E8E93', fontSize: 10 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill: '#8E8E93', fontSize: 11 }} axisLine={false} tickLine={false} />
                <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(255,107,0,0.05)' }} />
                <Bar dataKey="value" radius={[6, 6, 0, 0]} maxBarSize={60}>
                  {channels.map((ch, i) => <Cell key={i} fill={ch.color} />)}
                  <LabelList dataKey="value" position="top"
                    style={{ fill: '#AEAEB2', fontSize: 13, fontWeight: 700 }} />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="slide-sidebar-sm flex flex-col gap-4 justify-center animate-slide-right delay-300">
          <div className="p-4 sm:p-5 rounded-2xl" style={{ background: '#1C1C1E', border: '1px solid #2C2C2E' }}>
            <p className="text-xs text-[#8E8E93] uppercase tracking-widest font-medium mb-3">Impacto direto</p>
            <p className="text-white text-sm leading-relaxed">
              O container chega com <span style={{ color: '#FF6B00' }}>canais de venda estruturados</span>. Escoamento garantido antes da chegada.
            </p>
          </div>
          <blockquote className="border-l-2 border-[#FF6B00] pl-4">
            <p className="text-sm text-[#AEAEB2] italic leading-relaxed">
              "Nosso desafio não é vender. É acelerar a capacidade de abastecimento."
            </p>
          </blockquote>
        </div>
      </div>
    </div>
  )
}
