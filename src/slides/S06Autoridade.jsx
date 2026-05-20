import { GraduationCap, Wrench, Building2, Users, TrendingUp } from 'lucide-react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts'

const items = [
  { icon: GraduationCap, label: 'Cursos técnicos',           desc: 'Formação de profissionais do segmento' },
  { icon: Wrench,        label: 'Capacitação',               desc: 'Treinamento técnico especializado' },
  { icon: Building2,     label: 'Grandes marcas do segmento',desc: 'Parceiros de treinamento corporativo' },
  { icon: Users,         label: 'Formação de mão de obra',   desc: 'Criando o mercado que operamos' },
]

const trainingData = [
  { ano: '2022', alunos: 120, color: '#3A3A3C' },
  { ano: '2023', alunos: 280, color: '#994000' },
  { ano: '2024', alunos: 510, color: '#FF6B00' },
  { ano: '2026', alunos: 840, color: '#FF8C33' },
]

const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null
  return (
    <div className="px-4 py-3 rounded-xl" style={{ background: '#1C1C1E', border: '1px solid #FF6B00' }}>
      <p className="text-[#AEAEB2] text-xs mb-1">{label}</p>
      <p className="text-white font-bold">{payload[0].value} profissionais formados</p>
    </div>
  )
}

export default function S06Autoridade() {
  return (
    <div className="relative w-full h-full flex flex-col overflow-hidden slide-pad"
      style={{ background: '#0A0A0A' }}>

      <div className="absolute top-0 left-0 right-0 h-0.5 orange-line" />
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 50% 50% at 30% 50%, rgba(255,107,0,0.05) 0%, transparent 70%)'
      }} />

      <div className="mb-4 md:mb-8 animate-fade-up">
        <p className="text-[#FF6B00] text-xs font-medium tracking-widest uppercase mb-2">06 / Autoridade</p>
        <h2 className="slide-title text-white">Referência técnica do segmento</h2>
      </div>

      <div className="slide-row flex-1 min-h-0">
        <div className="flex flex-col gap-3 flex-1 animate-slide-left delay-200">
          {items.map((item, i) => {
            const Icon = item.icon
            return (
              <div key={i}
                className="flex items-center gap-4 sm:gap-5 px-4 sm:px-6 py-3 sm:py-4 rounded-xl card-premium group cursor-default">
                <div className="icon-box">
                  <Icon size={20} />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm group-hover:text-[#FF6B00] transition-colors">{item.label}</p>
                  <p className="text-[#8E8E93] text-xs mt-0.5">{item.desc}</p>
                </div>
                <div className="ml-auto w-1.5 h-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0"
                  style={{ background: '#FF6B00' }} />
              </div>
            )
          })}
        </div>

        <div className="slide-sidebar-lg flex flex-col gap-4 animate-slide-right delay-300">
          <div className="flex-1 flex flex-col">
            <p className="text-xs text-[#8E8E93] uppercase tracking-widest font-medium mb-3 flex items-center gap-2">
              <TrendingUp size={12} color="#FF6B00" />
              Profissionais formados / ano
            </p>
            <div style={{ height: 160 }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={trainingData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <XAxis dataKey="ano" tick={{ fill: '#8E8E93', fontSize: 11 }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fill: '#8E8E93', fontSize: 10 }} axisLine={false} tickLine={false} />
                  <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(255,107,0,0.05)' }} />
                  <Bar dataKey="alunos" radius={[4, 4, 0, 0]}>
                    {trainingData.map((d, i) => <Cell key={i} fill={d.color} />)}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="p-5 sm:p-7 rounded-2xl" style={{ background: '#1C1C1E', border: '1px solid #2C2C2E' }}>
            <p className="text-xs text-[#8E8E93] uppercase tracking-widest font-medium mb-3">Destaque</p>
            <p className="text-white text-sm leading-relaxed">
              Treinamos profissionais e empresas do{' '}
              <span style={{ color: '#FF6B00' }}>mesmo mercado em que atuamos</span>, construindo autoridade indiscutível.
            </p>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl glow-orange"
            style={{ background: 'rgba(255,107,0,0.06)', border: '1px solid rgba(255,107,0,0.3)' }}>
            <p className="text-[#FF6B00] text-sm font-bold leading-snug">
              "Não apenas acompanhamos o mercado. Ajudamos a formar o mercado."
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
