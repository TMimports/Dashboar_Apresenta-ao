import { ArrowRight } from 'lucide-react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, LabelList } from 'recharts'

const impacts = [
  'Aumento substancial do volume de vendas',
  'Expansão acelerada da base de clientes',
  'Maior recorrência financeira',
  'Aumento do ticket médio',
  'Fortalecimento do ecossistema TM',
  'Crescimento exponencial do varejo',
]

const projData = [
  { cenario: 'Sem crédito', vendas: 100, fill: '#3A3A3C' },
  { cenario: 'Com crédito', vendas: 280, fill: '#FF6B00' },
]

const CustomTip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null
  return (
    <div className="px-3 py-2 rounded-lg" style={{ background: '#1C1C1E', border: '1px solid #FF6B00' }}>
      <p className="text-[#AEAEB2] text-xs">{label}</p>
      <p className="text-white font-bold">Índice: {payload[0].value}</p>
    </div>
  )
}

export default function S16OportunidadeEstrategica() {
  return (
    <div className="relative w-full h-full flex flex-col overflow-hidden slide-pad"
      style={{ background: '#0A0A0A' }}>

      <div className="absolute top-0 left-0 right-0 h-0.5 orange-line" />
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 60% 50% at 70% 40%, rgba(255,107,0,0.07) 0%, transparent 70%)'
      }} />

      <div className="mb-4 md:mb-8 animate-fade-up">
        <p className="text-[#FF6B00] text-xs font-medium tracking-widest uppercase mb-2">16 / Oportunidade Estratégica</p>
        <h2 className="slide-title text-white">O próximo nível: financiamento ao consumidor final</h2>
      </div>

      <div className="slide-row flex-1 min-h-0 items-start">
        <div className="flex flex-col gap-3 slide-sidebar animate-slide-left delay-200">
          <div className="p-5 sm:p-6 rounded-2xl" style={{ background: '#1C1C1E', border: '1px solid #2C2C2E' }}>
            <p className="text-xs text-[#8E8E93] uppercase tracking-widest font-medium mb-3">Cenário Atual</p>
            <p className="text-white text-sm leading-relaxed">
              Grande parte do mercado depende de pagamento <span style={{ color: '#AEAEB2' }}>à vista</span>.
            </p>
          </div>

          <div className="flex items-center justify-center gap-3 py-1">
            <div className="w-0.5 h-8" style={{ background: 'linear-gradient(#2C2C2E, #FF6B00)' }} />
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold"
              style={{ background: 'rgba(255,107,0,0.1)', border: '1px solid rgba(255,107,0,0.3)', color: '#FF6B00' }}>
              <ArrowRight size={12} /> próximo passo
            </div>
            <div className="w-0.5 h-8" style={{ background: 'linear-gradient(#FF6B00, #FF8C33)' }} />
          </div>

          <div className="p-5 sm:p-6 rounded-2xl glow-orange"
            style={{ background: 'rgba(255,107,0,0.08)', border: '1px solid rgba(255,107,0,0.4)' }}>
            <p className="text-xs text-[#FF6B00] uppercase tracking-widest font-medium mb-3">Cenário Futuro</p>
            <p className="text-white text-sm font-semibold leading-relaxed">
              Cliente financiando a própria scooter.
            </p>
          </div>

          <div style={{ height: 120, minHeight: 90 }}>
            <p className="text-xs text-[#8E8E93] uppercase tracking-widest font-medium mb-2">Potencial de vendas (índice)</p>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={projData} margin={{ top: 16, right: 10, left: -20, bottom: 0 }}>
                <XAxis dataKey="cenario" tick={{ fill: '#8E8E93', fontSize: 10 }} axisLine={false} tickLine={false} />
                <YAxis tick={false} axisLine={false} tickLine={false} />
                <Tooltip content={<CustomTip />} cursor={{ fill: 'rgba(255,107,0,0.05)' }} />
                <Bar dataKey="vendas" radius={[6, 6, 0, 0]}>
                  {projData.map((d, i) => <Cell key={i} fill={d.fill} />)}
                  <LabelList dataKey="vendas" position="top"
                    style={{ fill: '#AEAEB2', fontSize: 12, fontWeight: 700 }}
                    formatter={v => `+${v - 100}%`} />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="flex-1 animate-fade-in delay-300">
          <p className="text-xs text-[#8E8E93] uppercase tracking-widest font-medium mb-3 sm:mb-4">Impacto esperado</p>
          <div className="flex flex-col gap-2 sm:gap-3">
            {impacts.map((item, i) => (
              <div key={i}
                className="flex items-center gap-3 sm:gap-4 px-4 sm:px-5 py-3 sm:py-4 rounded-xl card-premium group cursor-default">
                <div className="w-7 sm:w-8 h-7 sm:h-8 rounded-lg flex items-center justify-center font-bold text-sm flex-shrink-0 transition-all group-hover:scale-110"
                  style={{ background: 'rgba(255,107,0,0.1)', border: '1px solid rgba(255,107,0,0.2)', color: '#FF6B00' }}>
                  {i + 1}
                </div>
                <p className="text-[#AEAEB2] text-xs sm:text-sm group-hover:text-white transition-colors">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="slide-sidebar-sm flex flex-col gap-4 animate-slide-right delay-300">
          <div className="p-5 sm:p-6 rounded-2xl glow-orange"
            style={{ background: 'rgba(255,107,0,0.08)', border: '1px solid rgba(255,107,0,0.4)' }}>
            <p className="text-[#FF6B00] font-black text-sm sm:text-base leading-snug">
              O crédito ao consumidor pode transformar estruturalmente a companhia.
            </p>
          </div>
          <blockquote className="border-l-2 border-[#FF6B00] pl-4">
            <p className="text-sm text-[#AEAEB2] italic">"Se destravarmos crédito, destravamos escala."</p>
          </blockquote>
        </div>
      </div>
    </div>
  )
}
