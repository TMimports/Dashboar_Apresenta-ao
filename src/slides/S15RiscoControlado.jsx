import { ShieldCheck } from 'lucide-react'
import { RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from 'recharts'

const risks = [
  { label: 'Venda à vista',                desc: 'Inadimplência praticamente inexistente',    score: 95 },
  { label: 'Giro rápido',                  desc: 'Ciclo atacado < 30 dias',                   score: 90 },
  { label: 'Rede própria',                 desc: '22 pontos com escoamento validado',          score: 88 },
  { label: 'Produto validado',             desc: 'Qualidade comprovada no campo',              score: 92 },
  { label: 'Tecnologia própria',           desc: 'Independência operacional',                  score: 85 },
  { label: 'Equipe consolidada',           desc: 'Time operacional formado',                   score: 90 },
]

const radarData = [
  { subject: 'Venda à vista',   score: 95 },
  { subject: 'Giro rápido',     score: 90 },
  { subject: 'Rede própria',    score: 88 },
  { subject: 'Produto',         score: 92 },
  { subject: 'Tecnologia',      score: 85 },
  { subject: 'Equipe',          score: 90 },
]

const CustomTooltip = ({ active, payload }) => {
  if (!active || !payload?.length) return null
  return (
    <div className="px-3 py-2 rounded-lg" style={{ background: '#1C1C1E', border: '1px solid #FF6B00' }}>
      <p className="text-white font-bold text-sm">{payload[0]?.value}% controlado</p>
    </div>
  )
}

export default function S15RiscoControlado() {
  return (
    <div className="relative w-full h-full flex flex-col overflow-hidden slide-pad"
      style={{ background: '#0A0A0A' }}>

      <div className="absolute top-0 left-0 right-0 h-0.5 orange-line" />
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 50% 40% at 30% 50%, rgba(255,107,0,0.05) 0%, transparent 70%)'
      }} />

      <div className="mb-4 md:mb-6 animate-fade-up">
        <p className="text-[#FF6B00] text-xs font-medium tracking-widest uppercase mb-2">15 / Risco Controlado</p>
        <h2 className="slide-title text-white">Porque acreditamos ter baixo risco operacional</h2>
      </div>

      <div className="slide-row flex-1 min-h-0">
        <div className="flex-1 flex flex-col gap-3 animate-fade-in delay-200">
          <div className="flex flex-col gap-2 flex-1 justify-center">
            {risks.map((risk, i) => (
              <div key={i} className="group cursor-default">
                <div className="flex items-center justify-between mb-1">
                  <div>
                    <p className="text-white text-xs sm:text-sm font-semibold group-hover:text-[#FF6B00] transition-colors">{risk.label}</p>
                    <p className="text-[#8E8E93] text-xs hidden sm:block">{risk.desc}</p>
                  </div>
                  <span className="text-[#FF6B00] font-black text-sm ml-4 flex-shrink-0">{risk.score}%</span>
                </div>
                <div className="h-1.5 rounded-full overflow-hidden" style={{ background: '#2C2C2E' }}>
                  <div
                    className="h-full rounded-full transition-all duration-1000"
                    style={{ width: `${risk.score}%`, background: 'linear-gradient(90deg, #994000, #FF6B00, #FF8C33)' }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ width: '100%', maxWidth: 240, height: 180, minHeight: 140 }} className="mx-auto lg:mx-0 flex-shrink-0 animate-fade-in delay-300">
          <p className="text-xs text-[#8E8E93] uppercase tracking-widest font-medium mb-2 flex items-center gap-1">
            <ShieldCheck size={12} color="#FF6B00" /> Score de risco controlado
          </p>
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart data={radarData} outerRadius="75%">
              <PolarGrid stroke="#2C2C2E" />
              <PolarAngleAxis dataKey="subject" tick={{ fill: '#8E8E93', fontSize: 9 }} />
              <PolarRadiusAxis angle={30} domain={[70, 100]} tick={false} axisLine={false} />
              <Radar dataKey="score" stroke="#FF6B00" fill="#FF6B00" fillOpacity={0.2} strokeWidth={2} dot={{ fill: '#FF6B00', r: 3 }} />
              <Tooltip content={<CustomTooltip />} />
            </RadarChart>
          </ResponsiveContainer>
        </div>

        <div className="slide-sidebar flex flex-col gap-4 animate-slide-right delay-300">
          <div className="p-5 sm:p-6 rounded-2xl" style={{ background: '#1C1C1E', border: '1px solid #2C2C2E' }}>
            <p className="text-xs text-[#8E8E93] uppercase tracking-widest font-medium mb-3">Gestão de risco cambial</p>
            <p className="text-white text-sm leading-relaxed">
              O aumento do dólar é{' '}
              <span style={{ color: '#FF6B00' }}>absorvido pelo mercado</span> e transferido ao preço final, reduzindo a exposição cambial.
            </p>
          </div>

          <div className="p-5 sm:p-6 rounded-2xl glow-orange"
            style={{ background: 'rgba(255,107,0,0.08)', border: '1px solid rgba(255,107,0,0.4)' }}>
            <p className="text-xs text-[#FF6B00] uppercase tracking-widest font-medium mb-2">Maior risco atual</p>
            <p className="text-white font-bold text-sm leading-snug">
              Crescer <span style={{ color: '#FF6B00' }}>abaixo</span> da demanda existente.
            </p>
          </div>

          <blockquote className="border-l-2 border-[#FF6B00] pl-4">
            <p className="text-sm text-[#AEAEB2] italic">"Já reduzimos os principais riscos de execução."</p>
          </blockquote>
        </div>
      </div>
    </div>
  )
}
