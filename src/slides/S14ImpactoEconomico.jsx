import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, LabelList } from 'recharts'

const data = [
  { cenario: 'Cenário Atual', resultado: 6,  fill: '#3A3A3C' },
  { cenario: 'Com Funding',   resultado: 12, fill: '#FF6B00' },
]

const CustomTip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null
  return (
    <div className="px-4 py-3 rounded-xl" style={{ background: '#1C1C1E', border: '1px solid #FF6B00' }}>
      <p className="text-[#AEAEB2] text-xs mb-1">{label}</p>
      <p className="text-[#FF6B00] font-bold">≈ R${payload[0]?.value}M bruto anual</p>
    </div>
  )
}

export default function S14ImpactoEconomico() {
  return (
    <div className="relative w-full h-full flex flex-col overflow-hidden slide-pad"
      style={{ background: '#0A0A0A' }}>

      <div className="absolute top-0 left-0 right-0 h-0.5 orange-line" />
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 50% 40% at 80% 50%, rgba(255,107,0,0.06) 0%, transparent 70%)'
      }} />

      <div className="mb-4 md:mb-6 animate-fade-up">
        <p className="text-[#FF6B00] text-xs font-medium tracking-widest uppercase mb-2">14 / Impacto Econômico</p>
        <h2 className="slide-title text-white">Escala gera eficiência econômica</h2>
      </div>

      <div className="slide-row flex-1 min-h-0">
        <div className="flex flex-col gap-3 slide-sidebar animate-slide-left delay-200">
          <div className="p-5 sm:p-6 rounded-2xl" style={{ background: '#1C1C1E', border: '1px solid #2C2C2E' }}>
            <p className="text-xs text-[#8E8E93] uppercase tracking-widest font-medium mb-3">Cenário Atual</p>
            <p className="text-3xl sm:text-4xl font-black text-white">≈ R$6M</p>
            <p className="text-[#8E8E93] text-sm">resultado bruto anual</p>
            <div className="mt-2 pt-2 border-t border-[#2C2C2E]">
              <p className="text-[#8E8E93] text-xs">~20 containers/ano</p>
            </div>
          </div>

          <div className="p-5 sm:p-6 rounded-2xl glow-orange"
            style={{ background: 'rgba(255,107,0,0.08)', border: '1px solid rgba(255,107,0,0.4)' }}>
            <p className="text-xs text-[#FF6B00] uppercase tracking-widest font-medium mb-3">Com Funding</p>
            <p className="text-3xl sm:text-4xl font-black text-[#FF6B00]">≈ R$12M</p>
            <p className="text-[#AEAEB2] text-sm">potencial bruto anual</p>
            <div className="mt-2 pt-2 border-t border-[rgba(255,107,0,0.2)]">
              <p className="text-[#AEAEB2] text-xs">~40 containers/ano</p>
            </div>
          </div>

          <div className="p-4 rounded-xl text-center" style={{ background: '#1C1C1E', border: '1px solid #2C2C2E' }}>
            <p className="text-[#FF6B00] font-black text-2xl sm:text-3xl">2×</p>
            <p className="text-[#8E8E93] text-xs">resultado econômico potencial</p>
          </div>
        </div>

        <div className="flex-1 flex flex-col animate-fade-in delay-300">
          <p className="text-xs text-[#8E8E93] uppercase tracking-widest font-medium mb-3">Resultado bruto anual — R$ milhões</p>
          <div className="flex-1" style={{ height: 160, minHeight: 120, overflow: 'hidden' }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data} margin={{ top: 28, right: 20, left: -10, bottom: 10 }}>
                <XAxis dataKey="cenario" tick={{ fill: '#AEAEB2', fontSize: 12, fontWeight: 600 }} axisLine={false} tickLine={false} />
                <YAxis
                  tick={{ fill: '#8E8E93', fontSize: 11 }}
                  axisLine={false} tickLine={false}
                  tickFormatter={v => `R$${v}M`}
                />
                <Tooltip content={<CustomTip />} cursor={{ fill: 'rgba(255,107,0,0.05)' }} />
                <Bar dataKey="resultado" radius={[8, 8, 0, 0]} maxBarSize={80}>
                  {data.map((d, i) => <Cell key={i} fill={d.fill} />)}
                  <LabelList dataKey="resultado" position="top"
                    style={{ fill: '#FF6B00', fontSize: 14, fontWeight: 800 }}
                    formatter={v => `R$${v}M`} />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="mt-3 p-4 rounded-xl" style={{ background: 'rgba(255,107,0,0.06)', border: '1px solid rgba(255,107,0,0.2)' }}>
            <p className="text-[#FF6B00] font-bold text-sm">A mesma estrutura. O dobro de resultado.</p>
            <p className="text-[#8E8E93] text-xs mt-1">Escala não duplica o custo — duplica a eficiência.</p>
          </div>
        </div>

        <div className="slide-sidebar-sm flex flex-col gap-4 justify-center animate-slide-right delay-300">
          <div className="p-4 sm:p-5 rounded-2xl" style={{ background: '#1C1C1E', border: '1px solid #2C2C2E' }}>
            <p className="text-xs text-[#8E8E93] uppercase tracking-widest font-medium mb-3">Ganhos econômicos da escala</p>
            <div className="flex flex-col gap-2">
              {['Amplia rentabilidade por container', 'Fortalece negociação internacional', 'Reduz riscos pela previsibilidade'].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#FF6B00' }} />
                  <p className="text-[#AEAEB2] text-xs sm:text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <blockquote className="border-l-2 border-[#FF6B00] pl-4">
            <p className="text-xs text-[#AEAEB2] italic">"Mais escala significa mais margem, mais previsibilidade e maior eficiência econômica."</p>
          </blockquote>
        </div>
      </div>
    </div>
  )
}
