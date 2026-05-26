import { useState, useMemo } from 'react'

const OPEX_MENSAL = 55000
const LOTES = {
  A: { label: 'Lote A', desc: 'Scooters Menores', vol: 240, custo: 550000,  lucro: 300000, color: '#FF6A00' },
  B: { label: 'Lote B', desc: 'Scooters Maiores', vol: 197, custo: 887000,  lucro: 400000, color: '#FF8C33' },
  C: { label: 'Lote C', desc: 'Modelos Médios',  vol: 105, custo: 550000,  lucro: 300000, color: '#AEAEB2' },
}

const fmt = (n) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 }).format(n)
const fmtK = (n) => n >= 1000000 ? `R$ ${(n / 1000000).toFixed(1)}M` : `R$ ${(n / 1000).toFixed(0)}k`

const historico = [
  { label: 'Dez/2024', desc: '1 container — início orgânico',                 destaque: false },
  { label: 'Atual',    desc: '2 vendidos + 2 na China (chegada: julho)',       destaque: true  },
  { label: 'Jul/2025', desc: 'Engatilha +3 containers + 2 em produção',       destaque: false },
  { label: 'Projeção', desc: '16 a 20 containers via capital próprio no ano', destaque: true  },
]

function FotoOps() {
  const [err, setErr] = useState(false)
  if (err) return null
  return (
    <div className="rounded-xl overflow-hidden mb-3" style={{ height: 80, border: '1px solid #222' }}>
      <img src="/assets/images/operacoes.jpg" alt="Operações" onError={() => setErr(true)}
        style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.65) saturate(0.7)' }} />
    </div>
  )
}

export default function S06Escala() {
  const [tipoLote, setTipoLote] = useState('A')
  const [aporte, setAporte] = useState(1100000)

  const calc = useMemo(() => {
    const lote = LOTES[tipoLote]
    const lotesLiberados = Math.max(0, Math.floor(aporte / lote.custo))
    const lucroGross = lotesLiberados * lote.lucro
    const opex3m = OPEX_MENSAL * 3
    const lucroNet = Math.max(0, lucroGross - opex3m)
    const roi = lotesLiberados > 0 ? ((lucroNet / aporte) * 100).toFixed(1) : '—'
    return { lote, lotesLiberados, lucroGross, opex3m, lucroNet, roi, unidades: lotesLiberados * lote.vol }
  }, [tipoLote, aporte])

  return (
    <div className="relative w-full h-full flex flex-col overflow-hidden slide-pad"
      style={{ background: '#000000' }}>

      <div className="absolute top-0 left-0 right-0 h-0.5 orange-line" />
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 55% 40% at 65% 55%, rgba(255,106,0,0.04) 0%, transparent 70%)',
      }} />

      <div className="mb-3 animate-fade-up">
        <p className="text-[#FF6A00] text-xs font-medium tracking-widest uppercase mb-1">06 / Modelagem Financeira</p>
        <h2 className="slide-title text-white">Eficiência Financeira e Matriz de Lotes</h2>
      </div>

      <div className="slide-row flex-1 min-h-0">

        {/* Coluna esquerda — imagem + OPEX + histórico */}
        <div className="slide-sidebar flex flex-col gap-2.5 animate-slide-left delay-200">

          <FotoOps />

          <div className="p-3 rounded-xl glow-orange text-center"
            style={{ background: 'rgba(255,106,0,0.08)', border: '1px solid rgba(255,106,0,0.5)' }}>
            <p className="text-[9px] text-[#FF6A00] uppercase tracking-widest font-medium">OPEX Mensal</p>
            <p className="font-black text-white text-xl leading-none mt-0.5">R$ 55.000</p>
            <p className="text-[#8E8E93] text-[10px] mt-0.5">Alta alavancagem operacional</p>
          </div>

          <div className="p-3 rounded-xl" style={{ background: '#121212', border: '1px solid #222' }}>
            <p className="text-[9px] text-[#8E8E93] uppercase tracking-widest font-medium mb-1.5">Algoritmo de Giro</p>
            <p className="text-white text-xs font-semibold">Ciclo: <span style={{ color: '#FF6A00' }}>3 meses</span></p>
            <div className="flex items-center gap-1 text-[10px] text-[#8E8E93] mt-1 flex-wrap">
              <span>China</span><span style={{ color: '#FF6A00' }}>→</span>
              <span>Marítimo</span><span style={{ color: '#FF6A00' }}>→</span>
              <span>Despacho</span><span style={{ color: '#FF6A00' }}>→</span>
              <span>Liquidação</span>
            </div>
          </div>

          <div className="flex-1 p-3 rounded-xl overflow-hidden" style={{ background: '#121212', border: '1px solid #222' }}>
            <p className="text-[9px] text-[#8E8E93] uppercase tracking-widest font-medium mb-2">Tração Real</p>
            <div className="space-y-2">
              {historico.map((h, i) => (
                <div key={i} className="flex gap-2">
                  <div className="w-0.5 flex-shrink-0 rounded-full"
                    style={{ background: h.destaque ? '#FF6A00' : '#2C2C2E', minHeight: 28 }} />
                  <div>
                    <p className="text-[10px] font-bold" style={{ color: h.destaque ? '#FF6A00' : '#AEAEB2' }}>{h.label}</p>
                    <p className="text-[#8E8E93] text-[9px] leading-snug">{h.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Coluna direita — Calculadora interativa */}
        <div className="flex-1 flex flex-col gap-3 animate-slide-right delay-300">

          <div className="p-4 rounded-2xl" style={{ background: '#121212', border: '1px solid #222' }}>
            <p className="text-[10px] text-[#8E8E93] uppercase tracking-widest font-medium mb-3">
              Simulador de Aporte — Calcule seu Retorno
            </p>

            {/* Seletor de Lote */}
            <div className="flex gap-2 mb-4">
              {Object.entries(LOTES).map(([key, l]) => (
                <button
                  key={key}
                  onClick={() => setTipoLote(key)}
                  className="flex-1 py-2 rounded-lg text-xs font-bold transition-all duration-200"
                  style={{
                    background: tipoLote === key ? `rgba(255,106,0,0.15)` : '#0A0A0A',
                    border: `1px solid ${tipoLote === key ? l.color : '#2C2C2E'}`,
                    color: tipoLote === key ? l.color : '#8E8E93',
                  }}>
                  {l.label}
                  <div className="text-[9px] font-normal mt-0.5 opacity-70">{l.desc}</div>
                </button>
              ))}
            </div>

            {/* Slider de aporte */}
            <div className="mb-2">
              <div className="flex justify-between items-baseline mb-1">
                <label className="text-[10px] text-[#8E8E93] uppercase tracking-widest">Capital Aportado</label>
                <span className="font-black text-base" style={{ color: '#FF6A00' }}>{fmtK(aporte)}</span>
              </div>
              <input
                type="range"
                min={500000}
                max={5000000}
                step={50000}
                value={aporte}
                onChange={e => setAporte(Number(e.target.value))}
                style={{ width: '100%', accentColor: '#FF6A00', cursor: 'pointer', height: 4 }}
              />
              <div className="flex justify-between text-[9px] text-[#3A3A3C] mt-0.5">
                <span>R$ 500k</span>
                <span>R$ 5M</span>
              </div>
            </div>

            {/* Info do lote selecionado */}
            <div className="grid grid-cols-3 gap-2 mt-1">
              {[
                { label: 'Custo/lote', value: fmtK(calc.lote.custo) },
                { label: 'Unidades/lote', value: calc.lote.vol },
                { label: 'Lucro/lote', value: fmtK(calc.lote.lucro) },
              ].map((item, i) => (
                <div key={i} className="p-2 rounded-lg text-center"
                  style={{ background: '#0A0A0A', border: '1px solid #1C1C1E' }}>
                  <p className="text-[9px] text-[#8E8E93]">{item.label}</p>
                  <p className="text-white text-xs font-bold">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Resultado do simulador */}
          <div className="flex-1 p-4 rounded-2xl glow-orange"
            style={{ background: 'rgba(255,106,0,0.06)', border: '1px solid rgba(255,106,0,0.4)' }}>
            <p className="text-[10px] text-[#FF6A00] uppercase tracking-widest font-bold mb-3">Resultado da Simulação</p>

            <div className="grid grid-cols-2 gap-3 mb-3">

              {/* Lotes liberados — KPI principal */}
              <div className="col-span-2 p-3 rounded-xl text-center"
                style={{ background: 'rgba(255,106,0,0.1)', border: '1px solid rgba(255,106,0,0.4)' }}>
                <p className="text-[10px] text-[#FF6A00] uppercase tracking-widest">Containers Simultâneos Liberados</p>
                <p className="font-black text-white leading-none mt-1" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
                  {calc.lotesLiberados}
                </p>
                <p className="text-[#8E8E93] text-[10px] mt-0.5">{calc.unidades.toLocaleString('pt-BR')} unidades simultâneas</p>
              </div>

              <div className="p-3 rounded-xl" style={{ background: '#0A0A0A', border: '1px solid #1C1C1E' }}>
                <p className="text-[9px] text-[#8E8E93] uppercase tracking-widest">Lucro Bruto</p>
                <p className="text-white font-black text-sm">{fmtK(calc.lucroGross)}</p>
              </div>

              <div className="p-3 rounded-xl" style={{ background: '#0A0A0A', border: '1px solid #1C1C1E' }}>
                <p className="text-[9px] text-[#8E8E93] uppercase tracking-widest">OPEX 3 meses</p>
                <p className="text-white font-black text-sm">− {fmtK(calc.opex3m)}</p>
              </div>

              <div className="p-3 rounded-xl"
                style={{ background: calc.lucroNet > 0 ? 'rgba(255,106,0,0.08)' : '#121212', border: `1px solid ${calc.lucroNet > 0 ? 'rgba(255,106,0,0.4)' : '#2C2C2E'}` }}>
                <p className="text-[9px] text-[#8E8E93] uppercase tracking-widest">Lucro Líquido</p>
                <p className="font-black text-sm" style={{ color: calc.lucroNet > 0 ? '#FF6A00' : '#8E8E93' }}>
                  {fmtK(calc.lucroNet)}
                </p>
              </div>

              <div className="p-3 rounded-xl glow-orange"
                style={{ background: 'rgba(255,106,0,0.12)', border: '1px solid rgba(255,106,0,0.5)' }}>
                <p className="text-[9px] text-[#FF6A00] uppercase tracking-widest">ROI Estimado</p>
                <p className="font-black text-white text-sm">{calc.roi}%</p>
              </div>
            </div>

            <p className="text-[9px] text-[#3A3A3C] leading-relaxed">
              * Lucro líquido = lucro bruto − OPEX de 3 meses (ciclo completo de importação). Estimativa baseada em dados reais de operação.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
