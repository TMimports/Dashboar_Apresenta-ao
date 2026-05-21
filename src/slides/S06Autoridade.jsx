import { GraduationCap, Wrench, Building2, Users, TrendingUp } from 'lucide-react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts'

const items = [
  { icon: GraduationCap, label: 'Cursos técnicos',           desc: 'Formação de profissionais especializados no segmento de elétricos' },
  { icon: Wrench,        label: 'Capacitação técnica',       desc: 'Treinamento prático e especializado para equipes internas e do mercado' },
  { icon: Building2,     label: 'Grandes marcas do segmento',desc: 'Parceiros corporativos de treinamento — quem lidera o mercado, a TM capacita' },
  { icon: Users,         label: 'Formação de mão de obra',   desc: 'Criando profissionais qualificados para o mercado que a TM opera' },
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

      <div className="mb-4 md:mb-6 animate-fade-up">
        <p className="text-[#FF6B00] text-xs font-medium tracking-widest uppercase mb-2">06 / Autoridade</p>
        <h2 className="slide-title text-white">A TM forma o mercado que lidera</h2>
        <p className="text-[#8E8E93] mt-1 text-sm">Autoridade construída pela formação técnica do segmento</p>
      </div>

      <div className="slide-row flex-1 min-h-0">
        <div className="flex flex-col gap-3 flex-1 animate-slide-left delay-200">
          <p className="text-xs text-[#FF6B00] uppercase tracking-widest font-semibold flex items-center gap-2">
            <span className="inline-block w-1.5 h-1.5 rounded-full" style={{ background: '#FF6B00' }} />
            Formação de mercado — pilares de ensino
          </p>
          {items.map((item, i) => {
            const Icon = item.icon
            return (
              <div key={i}
                className="flex items-start gap-4 sm:gap-5 px-4 sm:px-5 py-3 sm:py-4 rounded-xl card-premium group cursor-default">
                <div className="icon-box flex-shrink-0 mt-0.5">
                  <Icon size={20} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white font-semibold text-sm group-hover:text-[#FF6B00] transition-colors">{item.label}</p>
                  <p className="text-[#8E8E93] text-xs mt-0.5 leading-relaxed">{item.desc}</p>
                </div>
                <div className="ml-auto w-1.5 h-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 mt-1.5"
                  style={{ background: '#FF6B00' }} />
              </div>
            )
          })}
        </div>

        <div className="slide-sidebar-lg flex flex-col gap-4 animate-slide-right delay-300">
          {/* Quote hero */}
          <div className="p-5 sm:p-6 rounded-2xl glow-orange"
            style={{ background: 'rgba(255,107,0,0.08)', border: '1px solid rgba(255,107,0,0.5)' }}>
            <p className="text-[#FF8C33] font-black text-base sm:text-lg leading-snug">
              "Não apenas acompanhamos o mercado.
            </p>
            <p className="text-white font-black text-base sm:text-lg leading-snug mt-1">
              Ajudamos a <span style={{ color: '#FF6B00' }}>formar</span> o mercado."
            </p>
          </div>

          {/* Chart */}
          <div className="flex flex-col" style={{ minHeight: 0 }}>
            <p className="text-xs text-[#8E8E93] uppercase tracking-widest font-medium mb-3 flex items-center gap-2">
              <TrendingUp size={12} color="#FF6B00" />
              Crescimento da formação técnica
            </p>
            <div style={{ height: 140, minHeight: 100 }}>
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

          {/* Por que isso importa */}
          <div className="p-4 sm:p-5 rounded-2xl" style={{ background: '#1C1C1E', border: '1px solid #2C2C2E' }}>
            <p className="text-xs text-[#8E8E93] uppercase tracking-widest font-medium mb-2">Por que isso importa</p>
            <p className="text-white text-sm leading-relaxed">
              A TM treina os profissionais do{' '}
              <span style={{ color: '#FF6B00' }}>mesmo mercado em que opera</span>.
              Isso cria uma autoridade que nenhum concorrente replica rapidamente.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
