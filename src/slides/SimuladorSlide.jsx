import { useState, useMemo } from 'react'
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, ReferenceLine, Legend
} from 'recharts'

/* ── modelo financeiro ── */
function calcProjection(investimento, anos) {
  const BASE_CONTAINERS    = 20
  const LUCRO_PER_CONT     = 0.30   // R$M por container
  const EXTRA_PER_MILHAO   = 4      // +4 containers por R$1M investido
  const GROWTH_SEM         = 0.08   // crescimento orgânico sem capital
  const GROWTH_COM         = 0.20   // crescimento com capital + escala

  const extraContainers = Math.round(investimento * EXTRA_PER_MILHAO)
  const totalContY1     = BASE_CONTAINERS + extraContainers

  const rows = []
  for (let y = 0; y <= anos; y++) {
    const sem = BASE_CONTAINERS * LUCRO_PER_CONT * Math.pow(1 + GROWTH_SEM, y)
    const com = totalContY1     * LUCRO_PER_CONT * Math.pow(1 + GROWTH_COM, y)
    rows.push({
      label: y === 0 ? 'Hoje' : `Ano ${y}`,
      sem:   parseFloat(sem.toFixed(2)),
      com:   parseFloat(com.toFixed(2)),
    })
  }
  return { rows, extraContainers, totalContY1 }
}

/* ── tooltip customizado ── */
function CustomTooltip({ active, payload, label }) {
  if (!active || !payload?.length) return null
  return (
    <div style={{
      background: '#1C1C1E', border: '1px solid #FF6B00',
      borderRadius: 10, padding: '10px 14px', fontSize: 12,
    }}>
      <p style={{ color: '#8E8E93', marginBottom: 6, fontWeight: 600 }}>{label}</p>
      {payload.map((p, i) => (
        <p key={i} style={{ color: p.color, fontWeight: 700, margin: '2px 0' }}>
          {p.name}: R${p.value}M
        </p>
      ))}
      {payload.length === 2 && (
        <p style={{ color: '#AEAEB2', marginTop: 6, borderTop: '1px solid #2C2C2E', paddingTop: 6 }}>
          Diferença: <strong style={{ color: '#FF6B00' }}>
            +R${(payload[1].value - payload[0].value).toFixed(1)}M
          </strong>
        </p>
      )}
    </div>
  )
}

/* ── slider customizado ── */
function Slider({ label, value, min, max, step, onChange, format }) {
  const pct = ((value - min) / (max - min)) * 100
  return (
    <div style={{ width: '100%' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
        <span style={{ color: '#8E8E93', fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.15em', fontWeight: 600 }}>
          {label}
        </span>
        <span style={{
          color: '#FF6B00', fontWeight: 800, fontSize: 18,
          textShadow: '0 0 12px rgba(255,107,0,0.5)',
        }}>
          {format(value)}
        </span>
      </div>
      <div style={{ position: 'relative', height: 28, display: 'flex', alignItems: 'center' }}>
        {/* Track */}
        <div style={{
          position: 'absolute', left: 0, right: 0, height: 4,
          background: '#2C2C2E', borderRadius: 99,
        }}>
          <div style={{
            position: 'absolute', left: 0, width: `${pct}%`, height: '100%',
            background: 'linear-gradient(90deg, #994000, #FF6B00)',
            borderRadius: 99,
            boxShadow: '0 0 8px rgba(255,107,0,0.5)',
          }} />
        </div>
        <input
          type="range"
          min={min} max={max} step={step} value={value}
          onChange={e => onChange(Number(e.target.value))}
          style={{
            position: 'absolute', width: '100%', height: '100%',
            opacity: 0, cursor: 'pointer', zIndex: 2,
          }}
        />
        {/* Thumb */}
        <div style={{
          position: 'absolute',
          left: `calc(${pct}% - 10px)`,
          width: 20, height: 20, borderRadius: '50%',
          background: '#FF6B00',
          boxShadow: '0 0 0 3px rgba(255,107,0,0.25), 0 0 12px rgba(255,107,0,0.6)',
          pointerEvents: 'none',
          transition: 'left 0.1s',
        }} />
      </div>
    </div>
  )
}

/* ── KPI card animado ── */
function KPICard({ label, value, sub, highlight = false, prefix = '', suffix = '' }) {
  return (
    <div style={{
      padding: '14px 16px', borderRadius: 14,
      background: highlight ? 'rgba(255,107,0,0.08)' : '#1C1C1E',
      border: `1px solid ${highlight ? 'rgba(255,107,0,0.45)' : '#2C2C2E'}`,
      boxShadow: highlight ? '0 0 20px rgba(255,107,0,0.2)' : 'none',
      transition: 'all 0.4s ease',
      flex: 1, minWidth: 0,
    }}>
      <p style={{ color: '#8E8E93', fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: 4 }}>
        {label}
      </p>
      <p style={{
        color: highlight ? '#FF6B00' : '#FFFFFF',
        fontWeight: 900, fontSize: 'clamp(16px, 2.5vw, 24px)',
        transition: 'all 0.4s ease',
        lineHeight: 1.1,
      }}>
        {prefix}{value}{suffix}
      </p>
      {sub && <p style={{ color: '#3A3A3C', fontSize: 10, marginTop: 4 }}>{sub}</p>}
    </div>
  )
}

/* ════════════════════════════════════════════
   SLIDE SIMULADOR
   ════════════════════════════════════════════ */
export default function SimuladorSlide() {
  const [investimento, setInvestimento] = useState(5)
  const [anos, setAnos] = useState(3)

  const { rows, extraContainers, totalContY1 } = useMemo(
    () => calcProjection(investimento, anos),
    [investimento, anos]
  )

  const finalCom  = rows[rows.length - 1]?.com  ?? 0
  const finalSem  = rows[rows.length - 1]?.sem  ?? 0
  const ganho     = (finalCom - finalSem).toFixed(1)
  const roi       = ((finalCom - investimento) / investimento * 100).toFixed(0)
  const acumulado = rows.slice(1).reduce((s, r) => s + r.com, 0).toFixed(1)

  /* narrativa dinâmica */
  const narrativa = investimento >= 7
    ? 'Escala máxima — posição de liderança nacional.'
    : investimento >= 4
    ? 'Aceleração significativa. Crescimento consistente e previsível.'
    : 'Crescimento sólido, risco controlado.'

  return (
    <div className="relative w-full h-full flex flex-col overflow-hidden slide-pad"
      style={{ background: '#0A0A0A' }}>

      <div className="absolute top-0 left-0 right-0 h-0.5 orange-line" />
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 60% 50% at 50% 40%, rgba(255,107,0,0.05) 0%, transparent 70%)'
      }} />

      {/* Header */}
      <div className="mb-4 animate-fade-up" style={{ flexShrink: 0 }}>
        <p className="text-[#FF6B00] text-xs font-medium tracking-widest uppercase mb-1">
          Simulador de Impacto
        </p>
        <h2 className="slide-title text-white leading-tight">
          Veja o crescimento com seu investimento
        </h2>
        <p style={{ color: '#8E8E93', fontSize: 12, marginTop: 4 }}>
          Ajuste os parâmetros e observe a projeção em tempo real
        </p>
      </div>

      <div className="slide-row flex-1 min-h-0">

        {/* ── Painel esquerdo: sliders + KPIs ── */}
        <div style={{
          display: 'flex', flexDirection: 'column', gap: 16,
          width: '100%', flexShrink: 0,
        }}
          className="slide-sidebar animate-slide-left delay-200">

          {/* Sliders */}
          <div style={{
            padding: 20, borderRadius: 16,
            background: '#1C1C1E', border: '1px solid #2C2C2E',
            display: 'flex', flexDirection: 'column', gap: 22,
          }}>
            <Slider
              label="Investimento"
              value={investimento}
              min={1} max={10} step={0.5}
              onChange={setInvestimento}
              format={v => `R$${v}M`}
            />
            <Slider
              label="Período"
              value={anos}
              min={1} max={5} step={1}
              onChange={setAnos}
              format={v => `${v} ${v === 1 ? 'ano' : 'anos'}`}
            />
          </div>

          {/* KPIs */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <KPICard
              label="Containers/ano (final)"
              value={`~${Math.round(totalContY1 * Math.pow(1.2, anos))}`}
              sub={`+${extraContainers} vs. hoje`}
              highlight
            />
            <div style={{ display: 'flex', gap: 10 }}>
              <KPICard
                label="Receita bruta acumulada"
                prefix="R$"
                value={acumulado}
                suffix="M"
                sub={`em ${anos} ${anos === 1 ? 'ano' : 'anos'}`}
              />
              <KPICard
                label="ROI estimado"
                value={`${roi}%`}
                sub="sobre o capital investido"
              />
            </div>
            <div style={{
              padding: '12px 16px', borderRadius: 12,
              background: 'rgba(255,107,0,0.06)',
              border: '1px solid rgba(255,107,0,0.2)',
              transition: 'all 0.4s ease',
            }}>
              <p style={{ color: '#FF6B00', fontSize: 12, fontWeight: 700, lineHeight: 1.4 }}>
                {narrativa}
              </p>
            </div>
          </div>
        </div>

        {/* ── Área do gráfico ── */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0, minHeight: 0 }}
          className="animate-fade-in delay-300">

          {/* Legenda manual */}
          <div style={{ display: 'flex', gap: 20, marginBottom: 10, flexShrink: 0 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
              <div style={{ width: 28, height: 3, borderRadius: 99, background: '#3A3A3C' }} />
              <span style={{ color: '#8E8E93', fontSize: 11 }}>Sem investimento</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
              <div style={{ width: 28, height: 3, borderRadius: 99, background: '#FF6B00' }} />
              <span style={{ color: '#FF6B00', fontSize: 11, fontWeight: 600 }}>Com R${investimento}M</span>
            </div>
            <div style={{ marginLeft: 'auto' }}>
              <span style={{
                color: '#FF6B00', fontWeight: 800,
                fontSize: 14, padding: '3px 10px',
                background: 'rgba(255,107,0,0.08)',
                border: '1px solid rgba(255,107,0,0.3)',
                borderRadius: 8,
              }}>
                +R${ganho}M no Ano {anos}
              </span>
            </div>
          </div>

          {/* Gráfico principal */}
          <div style={{ flex: 1, minHeight: 0 }}>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={rows} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                <defs>
                  <linearGradient id="gradCom" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%"  stopColor="#FF6B00" stopOpacity={0.35} />
                    <stop offset="95%" stopColor="#FF6B00" stopOpacity={0.02} />
                  </linearGradient>
                  <linearGradient id="gradSem" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%"  stopColor="#3A3A3C" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="#3A3A3C" stopOpacity={0.02} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#1C1C1E" />
                <XAxis
                  dataKey="label"
                  tick={{ fill: '#8E8E93', fontSize: 11 }}
                  axisLine={false} tickLine={false}
                />
                <YAxis
                  tick={{ fill: '#8E8E93', fontSize: 10 }}
                  axisLine={false} tickLine={false}
                  tickFormatter={v => `R$${v}M`}
                />
                <Tooltip content={<CustomTooltip />} />
                <ReferenceLine
                  y={finalCom}
                  stroke="rgba(255,107,0,0.25)"
                  strokeDasharray="4 4"
                />

                {/* Sem investimento */}
                <Area
                  type="monotone"
                  dataKey="sem"
                  name="Sem investimento"
                  stroke="#3A3A3C"
                  strokeWidth={2}
                  fill="url(#gradSem)"
                  dot={{ fill: '#3A3A3C', r: 4, strokeWidth: 0 }}
                  activeDot={{ r: 6, fill: '#8E8E93' }}
                  animationDuration={600}
                />

                {/* Com investimento */}
                <Area
                  type="monotone"
                  dataKey="com"
                  name={`Com R$${investimento}M`}
                  stroke="#FF6B00"
                  strokeWidth={2.5}
                  fill="url(#gradCom)"
                  dot={{ fill: '#FF6B00', r: 4, strokeWidth: 0 }}
                  activeDot={{ r: 7, fill: '#FF8C33', stroke: '#FF6B00', strokeWidth: 2 }}
                  animationDuration={600}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Linha base disclaimer */}
          <p style={{ color: '#2C2C2E', fontSize: 9, textAlign: 'right', marginTop: 6, flexShrink: 0, letterSpacing: '0.1em' }}>
            * Projeção baseada no modelo operacional atual. Não constitui garantia de retorno.
          </p>
        </div>
      </div>
    </div>
  )
}
