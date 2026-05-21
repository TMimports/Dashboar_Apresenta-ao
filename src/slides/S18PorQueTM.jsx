import { CheckCircle2 } from 'lucide-react'
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts'

const proved = ['Produto', 'Operação', 'Distribuição', 'Pós-venda', 'Qualidade', 'Tecnologia', 'Time', 'Demanda', 'Escalabilidade']

const growthData = [
  { ano: '2021', containers: 6,  receita: 1.8 },
  { ano: '2022', containers: 10, receita: 3.0 },
  { ano: '2023', containers: 15, receita: 4.5 },
  { ano: '2024', containers: 20, receita: 6.0 },
  { ano: '2026*', containers: 28, receita: 8.4 },
]

const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null
  return (
    <div className="px-4 py-3 rounded-xl" style={{ background: '#1C1C1E', border: '1px solid #FF6B00' }}>
      <p className="text-[#AEAEB2] text-xs mb-2">{label}</p>
      {payload.map((p, i) => (
        <p key={i} className="font-bold text-sm" style={{ color: p.color }}>
          {p.name === 'containers' ? `${p.value} containers` : `R$${p.value}M receita`}
        </p>
      ))}
    </div>
  )
}

export default function S18PorQueTM() {
  return (
    <div className="relative w-full h-full flex flex-col overflow-hidden slide-pad"
      style={{ background: '#0A0A0A' }}>

      <div className="absolute top-0 left-0 right-0 h-0.5 orange-line" />
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(255,107,0,0.07) 0%, transparent 70%)'
      }} />

      <div className="mb-4 md:mb-8 animate-fade-up">
        <p className="text-[#FF6B00] text-xs font-medium tracking-widest uppercase mb-2">18 / Por Que TM</p>
        <h2 className="slide-title text-white">Por que acreditamos estar prontos para o próximo nível</h2>
      </div>

      <div className="slide-row flex-1 min-h-0 items-start">
        <div className="flex-1 animate-slide-left delay-200">
          <p className="text-xs text-[#8E8E93] uppercase tracking-widest font-medium mb-3">Já provamos</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
            {proved.map((item, i) => (
              <div key={i}
                className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2.5 rounded-xl card-premium group cursor-default">
                <CheckCircle2 size={15} color="#FF6B00" className="flex-shrink-0" />
                <span className="text-white text-xs sm:text-sm font-medium group-hover:text-[#FF6B00] transition-colors">{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-4" style={{ height: 140, minHeight: 100 }}>
            <p className="text-xs text-[#8E8E93] uppercase tracking-widest font-medium mb-2">Crescimento histórico comprovado</p>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={growthData} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1C1C1E" />
                <XAxis dataKey="ano" tick={{ fill: '#8E8E93', fontSize: 10 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill: '#8E8E93', fontSize: 10 }} axisLine={false} tickLine={false} />
                <Tooltip content={<CustomTooltip />} />
                <Area type="monotone" dataKey="containers" name="containers"
                  stroke="#FF6B00" fill="rgba(255,107,0,0.15)" strokeWidth={2} dot={{ fill: '#FF6B00', r: 3 }} />
                <Area type="monotone" dataKey="receita" name="receita"
                  stroke="#FF8C33" fill="rgba(255,140,51,0.08)" strokeWidth={2} dot={{ fill: '#FF8C33', r: 3 }} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="slide-sidebar flex flex-col gap-4 animate-slide-right delay-300">
          <div className="p-5 sm:p-6 rounded-2xl" style={{ background: '#1C1C1E', border: '1px solid #2C2C2E' }}>
            <p className="text-xs text-[#8E8E93] uppercase tracking-widest font-medium mb-3">O que falta</p>
            <p className="text-[#FF6B00] font-black text-xl leading-tight uppercase tracking-wide">
              Estrutura de Capital
            </p>
          </div>

          <div className="p-5 sm:p-7 rounded-2xl glow-orange text-center"
            style={{ background: 'rgba(255,107,0,0.08)', border: '1px solid rgba(255,107,0,0.4)' }}>
            <p className="text-white font-bold text-base leading-snug mb-3">
              "A máquina já existe."
            </p>
            <p className="text-[#FF6B00] font-black text-base">
              "Agora é hora de acelerar."
            </p>
          </div>

          <div className="p-4 rounded-xl" style={{ background: '#1C1C1E', border: '1px solid #2C2C2E' }}>
            <p className="text-xs text-[#8E8E93] mb-1">*Projeção 2026</p>
            <p className="text-[#FF6B00] font-bold text-sm">+40% crescimento vs 2024</p>
          </div>

          <blockquote className="border-l-2 border-[#FF6B00] pl-4">
            <p className="text-sm text-[#AEAEB2] italic">"A TM já provou seu modelo. Agora buscamos estrutura de capital para escalar."</p>
          </blockquote>
        </div>
      </div>
    </div>
  )
}
