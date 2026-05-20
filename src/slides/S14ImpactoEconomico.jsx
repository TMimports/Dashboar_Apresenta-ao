import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, LabelList } from 'recharts'

const data = [
  { label: 'Atual\n~20 containers', containers: 20, resultado: 6, fill: '#3A3A3C', fillR: '#994000' },
  { label: 'Com Funding\n~40 containers', containers: 40, resultado: 12, fill: '#FF6B00', fillR: '#FF6B00' },
]

const TooltipContainers = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null
  return (
    <div className="px-4 py-3 rounded-xl" style={{ background: '#1C1C1E', border: '1px solid #FF6B00' }}>
      <p className="text-[#AEAEB2] text-xs mb-1">{label}</p>
      <p className="text-white font-bold">{payload[0]?.value} containers/ano</p>
      {payload[1] && <p className="text-[#FF6B00] font-bold">≈ R${payload[1]?.value}M bruto anual</p>}
    </div>
  )
}

export default function S14ImpactoEconomico() {
  return (
    <div className="relative w-full h-full flex flex-col px-16 py-10 overflow-hidden"
      style={{ background: '#0A0A0A' }}>

      <div className="absolute top-0 left-0 right-0 h-0.5 orange-line" />
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 50% 40% at 80% 50%, rgba(255,107,0,0.06) 0%, transparent 70%)'
      }} />

      {/* Header */}
      <div className="mb-6 animate-fade-up">
        <p className="text-[#FF6B00] text-xs font-medium tracking-widest uppercase mb-2">14 / Impacto Econômico</p>
        <h2 className="text-4xl font-black text-white">Escala gera eficiência</h2>
      </div>

      <div className="flex gap-10 flex-1 min-h-0">
        {/* Comparison cards */}
        <div className="flex flex-col gap-4 w-64 animate-slide-left delay-200">
          {/* Atual */}
          <div className="p-6 rounded-2xl" style={{ background: '#1C1C1E', border: '1px solid #2C2C2E' }}>
            <p className="text-xs text-[#8E8E93] uppercase tracking-widest font-medium mb-3">Cenário Atual</p>
            <p className="text-4xl font-black text-white">~20</p>
            <p className="text-[#8E8E93] text-sm">containers/ano</p>
            <div className="mt-3 pt-3 border-t border-[#2C2C2E]">
              <p className="text-2xl font-black text-white">≈ R$6M</p>
              <p className="text-[#8E8E93] text-xs">resultado bruto anual</p>
              <p className="text-[#3A3A3C] text-xs mt-0.5">+ margem varejo Tecle</p>
            </div>
          </div>

          {/* Com funding */}
          <div className="p-6 rounded-2xl glow-orange"
            style={{ background: 'rgba(255,107,0,0.08)', border: '1px solid rgba(255,107,0,0.4)' }}>
            <p className="text-xs text-[#FF6B00] uppercase tracking-widest font-medium mb-3">Com Funding</p>
            <p className="text-4xl font-black text-[#FF6B00]">~40</p>
            <p className="text-[#AEAEB2] text-sm">containers/ano</p>
            <div className="mt-3 pt-3 border-t border-[rgba(255,107,0,0.2)]">
              <p className="text-2xl font-black text-[#FF6B00]">≈ R$12M</p>
              <p className="text-[#AEAEB2] text-xs">potencial bruto anual</p>
              <p className="text-[#994000] text-xs mt-0.5">+ crescimento varejo próprio</p>
            </div>
          </div>

          {/* Delta */}
          <div className="p-4 rounded-xl text-center" style={{ background: '#1C1C1E', border: '1px solid #2C2C2E' }}>
            <p className="text-[#FF6B00] font-black text-2xl">2×</p>
            <p className="text-[#8E8E93] text-xs">resultado potencial</p>
          </div>
        </div>

        {/* Chart */}
        <div className="flex-1 flex flex-col animate-fade-in delay-300">
          <p className="text-xs text-[#8E8E93] uppercase tracking-widest font-medium mb-4">Comparativo de escala</p>
          <div className="flex-1" style={{ minHeight: 0 }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data} margin={{ top: 20, right: 30, left: -10, bottom: 40 }} barGap={8}>
                <XAxis dataKey="label" tick={{ fill: '#8E8E93', fontSize: 11 }} axisLine={false} tickLine={false}
                  interval={0} height={50} />
                <YAxis tick={{ fill: '#8E8E93', fontSize: 11 }} axisLine={false} tickLine={false} />
                <Tooltip content={<TooltipContainers />} cursor={{ fill: 'rgba(255,107,0,0.05)' }} />
                <Bar dataKey="containers" radius={[6,6,0,0]} maxBarSize={80} name="containers">
                  {data.map((d, i) => <Cell key={i} fill={d.fill} />)}
                  <LabelList dataKey="containers" position="top" style={{ fill: '#AEAEB2', fontSize: 13, fontWeight: 700 }} formatter={v => `${v}`} />
                </Bar>
                <Bar dataKey="resultado" radius={[6,6,0,0]} maxBarSize={80} name="R$M">
                  {data.map((d, i) => <Cell key={i} fill={d.fillR} />)}
                  <LabelList dataKey="resultado" position="top" style={{ fill: '#FF6B00', fontSize: 13, fontWeight: 700 }} formatter={v => `R$${v}M`} />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Right insight */}
        <div className="w-64 flex flex-col gap-4 justify-center animate-slide-right delay-300">
          <div className="p-5 rounded-2xl" style={{ background: '#1C1C1E', border: '1px solid #2C2C2E' }}>
            <p className="text-xs text-[#8E8E93] uppercase tracking-widest font-medium mb-3">O aumento de escala</p>
            <div className="flex flex-col gap-2">
              {['Amplia rentabilidade', 'Fortalece negociação internacional', 'Reduz riscos por previsibilidade'].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: '#FF6B00' }} />
                  <p className="text-[#AEAEB2] text-xs">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <blockquote className="border-l-2 border-[#FF6B00] pl-4">
            <p className="text-xs text-[#AEAEB2] italic">"Mais escala significa mais margem, mais previsibilidade e maior eficiência."</p>
          </blockquote>
        </div>
      </div>
    </div>
  )
}
