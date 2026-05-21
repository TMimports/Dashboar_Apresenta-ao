import { Settings, User, BarChart3, Timer, Truck, Briefcase, Cpu } from 'lucide-react'
import { RadarChart, Radar, PolarGrid, PolarAngleAxis, ResponsiveContainer, Tooltip } from 'recharts'

const systems = [
  { icon: Settings,   label: 'ERP Próprio',          desc: 'Gestão operacional centralizada' },
  { icon: User,       label: 'CRM Próprio',           desc: 'Relacionamento com cliente' },
  { icon: BarChart3,  label: 'Controle Operacional',  desc: 'Visibilidade em tempo real' },
  { icon: Timer,      label: 'Controle de Ponto',     desc: 'RH e produtividade' },
  { icon: Truck,      label: 'Gestão Logística',      desc: 'Rastreio e distribuição' },
  { icon: Briefcase,  label: 'Gestão Comercial',      desc: 'Pipeline e vendas' },
]

const techScore = [
  { subject: 'ERP',       A: 95 },
  { subject: 'CRM',       A: 88 },
  { subject: 'Logística', A: 90 },
  { subject: 'Analytics', A: 85 },
  { subject: 'IA',        A: 78 },
  { subject: 'Automação', A: 92 },
]

const CustomTooltip = ({ active, payload }) => {
  if (!active || !payload?.length) return null
  return (
    <div className="px-3 py-2 rounded-lg" style={{ background: '#1C1C1E', border: '1px solid #FF6B00' }}>
      <p className="text-white font-bold text-sm">{payload[0]?.value}% maturidade</p>
    </div>
  )
}

export default function S09Tecnologia() {
  return (
    <div className="relative w-full h-full flex flex-col overflow-hidden slide-pad"
      style={{ background: '#0A0A0A' }}>

      <div className="absolute top-0 left-0 right-0 h-0.5 orange-line" />
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 60% 40% at 80% 20%, rgba(255,107,0,0.06) 0%, transparent 70%)'
      }} />

      <div className="mb-4 md:mb-6 animate-fade-up">
        <p className="text-[#FF6B00] text-xs font-medium tracking-widest uppercase mb-2">09 / Tecnologia &amp; IA</p>
        <h2 className="slide-title text-white">Tecnologia proprietária e cultura de inovação</h2>
      </div>

      <div className="slide-row flex-1 min-h-0">
        <div className="flex-1 animate-fade-in delay-200">
          <p className="text-xs text-[#8E8E93] uppercase tracking-widest font-medium mb-3">Sistemas próprios</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {systems.map((sys, i) => {
              const Icon = sys.icon
              return (
                <div key={i}
                  className="flex flex-col gap-2 p-4 rounded-xl card-premium group cursor-default"
                  style={{ animationDelay: `${0.1 * i + 0.2}s` }}>
                  <div className="icon-box">
                    <Icon size={18} />
                  </div>
                  <p className="text-white font-semibold text-sm group-hover:text-[#FF6B00] transition-colors leading-tight">{sys.label}</p>
                  <p className="text-[#8E8E93] text-xs">{sys.desc}</p>
                </div>
              )
            })}
          </div>
        </div>

        <div className="slide-sidebar flex flex-col gap-4 animate-slide-right delay-300">
          <div className="p-5 rounded-2xl glow-orange"
            style={{ background: 'rgba(255,107,0,0.08)', border: '1px solid rgba(255,107,0,0.4)' }}>
            <p className="text-xs text-[#FF6B00] uppercase tracking-widest font-medium mb-3 flex items-center gap-2">
              <Cpu size={12} /> Equipe interna dedicada
            </p>
            <div className="flex gap-3">
              {['TI', 'Inteligência Artificial'].map((tag, i) => (
                <div key={i} className="flex-1 py-2.5 rounded-xl text-center"
                  style={{ background: 'rgba(255,107,0,0.1)', border: '1px solid rgba(255,107,0,0.2)' }}>
                  <p className="text-[#FF6B00] font-bold text-sm">{tag}</p>
                </div>
              ))}
            </div>
          </div>

          <div style={{ height: 150, minHeight: 100 }}>
            <p className="text-xs text-[#8E8E93] uppercase tracking-widest font-medium mb-2">Maturidade por módulo</p>
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={techScore}>
                <PolarGrid stroke="#2C2C2E" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: '#8E8E93', fontSize: 10 }} />
                <Radar dataKey="A" stroke="#FF6B00" fill="#FF6B00" fillOpacity={0.12} strokeWidth={2} />
                <Tooltip content={<CustomTooltip />} />
              </RadarChart>
            </ResponsiveContainer>
          </div>

          <blockquote className="border-l-2 border-[#FF6B00] pl-4">
            <p className="text-sm text-[#AEAEB2] italic">"Crescemos com tecnologia própria, não dependência."</p>
          </blockquote>
        </div>
      </div>
    </div>
  )
}
