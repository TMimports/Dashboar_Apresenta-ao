import { useState, useMemo } from 'react'

const OPEX_MENSAL = 55000

const LOTES = {
  A: { label: 'Lote A', desc: 'Scooters Menores', vol: 240, custo: 550000,  lucro: 300000, color: '#FF6A00' },
  B: { label: 'Lote B', desc: 'Scooters Maiores', vol: 197, custo: 887000,  lucro: 400000, color: '#FF8C33' },
  C: { label: 'Lote C', desc: 'Modelos Médios',  vol: 105, custo: 550000,  lucro: 300000, color: '#AEAEB2' },
}

const fmtBRL = (n) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 }).format(n)

const historico = [
  { label: 'Dez/2024', desc: '1 container — início orgânico',               destaque: false },
  { label: 'Atual',    desc: '2 vendidos + 2 em produção na China',         destaque: true  },
  { label: 'Jul/2025', desc: 'Chegada engatilha +3 containers',             destaque: false },
  { label: 'Projeção', desc: '16 a 20 containers no ano — capital próprio', destaque: true  },
]

export default function S06Escala() {
  const [tipoLote, setTipoLote] = useState('A')
  const [aporte, setAporte] = useState(1650000)

  const calc = useMemo(() => {
    const lote = LOTES[tipoLote]
    const qtdContainers  = Math.floor(aporte / lote.custo)
    const lucroLotes     = qtdContainers * lote.lucro        // lucro gerado pelos lotes
    const opexCiclo      = OPEX_MENSAL * 3                   // custo fixo do ciclo de 3 meses
    const lucroLiquido   = lucroLotes - opexCiclo            // pode ser negativo se poucos lotes
    const roi            = qtdContainers > 0
      ? ((lucroLiquido / aporte) * 100).toFixed(1)
      : '—'
    return {
      lote,
      qtdContainers,
      lucroLotes,
      opexCiclo,
      lucroLiquido,
      roi,
      unidades: qtdContainers * lote.vol,
    }
  }, [tipoLote, aporte])

  const lucroPositivo = calc.lucroLiquido > 0

  return (
    <div className="relative w-full h-full flex flex-col overflow-hidden slide-pad"
      style={{ background: '#000000' }}>

      <div className="absolute top-0 left-0 right-0 h-0.5 orange-line" />
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 55% 40% at 65% 50%, rgba(255,106,0,0.04) 0%, transparent 70%)',
      }} />

      {/* Cabeçalho */}
      <div className="mb-3 animate-fade-up">
        <p className="text-[#FF6A00] text-xs font-medium tracking-widest uppercase mb-1">06 / Modelagem Financeira</p>
        <h2 className="slide-title text-white">Simulador de Aporte por Container</h2>
        <p className="text-[#8E8E93] text-xs mt-0.5">Calcule quantos containers seu capital libera e o retorno estimado no ciclo de 3 meses.</p>
      </div>

      <div className="slide-row flex-1 min-h-0">

        {/* ── Sidebar esquerda — contexto operacional ── */}
        <div className="slide-sidebar flex flex-col gap-2.5 animate-slide-left delay-200">

          {/* OPEX */}
          <div className="p-3 rounded-xl text-center glow-orange"
            style={{ background: 'rgba(255,106,0,0.08)', border: '1px solid rgba(255,106,0,0.5)' }}>
            <p className="text-[9px] text-[#FF6A00] uppercase tracking-widest font-bold">OPEX Mensal Fixo</p>
            <p className="font-black text-white text-xl leading-none mt-1">R$ 55.000</p>
            <p className="text-[#8E8E93] text-[9px] mt-0.5">Custo fixo independente do volume</p>
          </div>

          {/* Ciclo */}
          <div className="p-3 rounded-xl" style={{ background: '#121212', border: '1px solid #222' }}>
            <p className="text-[9px] text-[#8E8E93] uppercase tracking-widest font-medium mb-2">Ciclo de Giro</p>
            <div className="space-y-1.5">
              {[
                { fase: 'Pedido na China',  cor: '#FF6A00' },
                { fase: 'Produção + Frete', cor: '#FF8C33' },
                { fase: 'Desembaraço',      cor: '#AEAEB2' },
                { fase: 'Venda do Estoque', cor: '#8E8E93' },
              ].map((f, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: f.cor }} />
                  <span className="text-[10px]" style={{ color: f.cor }}>{f.fase}</span>
                </div>
              ))}
            </div>
            <div className="mt-2 pt-2 border-t border-[#1C1C1E] flex items-center justify-between">
              <span className="text-[9px] text-[#8E8E93]">Duração total</span>
              <span className="text-[#FF6A00] font-black text-xs">≈ 3 meses</span>
            </div>
          </div>

          {/* Tração real */}
          <div className="flex-1 p-3 rounded-xl" style={{ background: '#121212', border: '1px solid #222' }}>
            <p className="text-[9px] text-[#8E8E93] uppercase tracking-widest font-medium mb-2">Tração Real</p>
            <div className="space-y-2.5">
              {historico.map((h, i) => (
                <div key={i} className="flex gap-2">
                  <div className="w-0.5 flex-shrink-0 rounded-full"
                    style={{ background: h.destaque ? '#FF6A00' : '#2C2C2E', minHeight: 30 }} />
                  <div>
                    <p className="text-[10px] font-bold" style={{ color: h.destaque ? '#FF6A00' : '#AEAEB2' }}>
                      {h.label}
                    </p>
                    <p className="text-[#8E8E93] text-[9px] leading-snug">{h.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Calculadora principal ── */}
        <div className="flex-1 flex flex-col gap-3 animate-slide-right delay-300">

          {/* Inputs */}
          <div className="p-4 rounded-2xl" style={{ background: '#0F0F0F', border: '1px solid #1C1C1E' }}>

            {/* Seletor de tipo de lote */}
            <p className="text-[9px] text-[#8E8E93] uppercase tracking-widest font-medium mb-2">
              1. Escolha o tipo de container
            </p>
            <div className="flex gap-2 mb-4">
              {Object.entries(LOTES).map(([key, l]) => (
                <button
                  key={key}
                  onClick={() => setTipoLote(key)}
                  className="flex-1 py-2.5 rounded-xl transition-all duration-200"
                  style={{
                    background: tipoLote === key ? 'rgba(255,106,0,0.12)' : '#0A0A0A',
                    border: `1.5px solid ${tipoLote === key ? l.color : '#2C2C2E'}`,
                    color: tipoLote === key ? l.color : '#8E8E93',
                  }}>
                  <div className="text-xs font-black">{l.label}</div>
                  <div className="text-[9px] font-normal mt-0.5 opacity-70">{l.desc}</div>
                  <div className="text-[9px] font-bold mt-0.5" style={{ color: tipoLote === key ? l.color : '#3A3A3C' }}>
                    {fmtBRL(l.custo)} / lote
                  </div>
                </button>
              ))}
            </div>

            {/* Slider */}
            <p className="text-[9px] text-[#8E8E93] uppercase tracking-widest font-medium mb-1.5">
              2. Defina o capital a aportar
            </p>
            <div className="flex justify-between items-baseline mb-1.5">
              <span className="text-[10px] text-[#8E8E93]">Capital total</span>
              <span className="font-black text-lg" style={{ color: '#FF6A00' }}>{fmtBRL(aporte)}</span>
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
            <div className="flex justify-between text-[9px] text-[#3A3A3C] mt-1">
              <span>R$ 500 mil</span>
              <span>R$ 5 milhões</span>
            </div>
          </div>

          {/* Resultado */}
          <div className="flex-1 p-4 rounded-2xl"
            style={{ background: 'rgba(255,106,0,0.05)', border: `1px solid ${lucroPositivo ? 'rgba(255,106,0,0.45)' : '#2C2C2E'}` }}>

            <p className="text-[9px] text-[#FF6A00] uppercase tracking-widest font-bold mb-3">
              Resultado — Ciclo de 3 Meses
            </p>

            {/* KPI principal */}
            <div className="p-3 rounded-xl text-center mb-3"
              style={{ background: 'rgba(255,106,0,0.1)', border: '1px solid rgba(255,106,0,0.4)' }}>
              <p className="text-[9px] text-[#FF6A00] uppercase tracking-widest">Containers Liberados Simultaneamente</p>
              <p className="font-black text-white leading-none my-1" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)' }}>
                {calc.qtdContainers}
              </p>
              <p className="text-[#8E8E93] text-[10px]">
                {calc.unidades.toLocaleString('pt-BR')} unidades em estoque
              </p>
            </div>

            {/* Equação financeira clara */}
            <div className="rounded-xl overflow-hidden" style={{ border: '1px solid #1C1C1E' }}>
              <div className="flex items-center justify-between px-3 py-2" style={{ background: '#0A0A0A' }}>
                <span className="text-[10px] text-[#8E8E93]">Lucro gerado pelos lotes</span>
                <span className="text-white font-bold text-xs">{fmtBRL(calc.lucroLotes)}</span>
              </div>
              <div className="flex items-center justify-between px-3 py-2" style={{ background: '#080808', borderTop: '1px solid #1C1C1E' }}>
                <span className="text-[10px] text-[#8E8E93]">
                  Custo operacional do ciclo <span style={{ color: '#3A3A3C' }}>(R$ 55k × 3 meses)</span>
                </span>
                <span className="text-[#AEAEB2] font-bold text-xs">− {fmtBRL(calc.opexCiclo)}</span>
              </div>
              <div className="flex items-center justify-between px-3 py-2.5"
                style={{
                  background: lucroPositivo ? 'rgba(255,106,0,0.1)' : 'rgba(60,60,60,0.3)',
                  borderTop: `1px solid ${lucroPositivo ? 'rgba(255,106,0,0.35)' : '#2C2C2E'}`,
                }}>
                <span className="text-[10px] font-bold" style={{ color: lucroPositivo ? '#FF6A00' : '#8E8E93' }}>
                  = Lucro Líquido do Ciclo
                </span>
                <span className="font-black text-sm" style={{ color: lucroPositivo ? '#FF6A00' : '#8E8E93' }}>
                  {fmtBRL(calc.lucroLiquido)}
                </span>
              </div>
            </div>

            {/* ROI */}
            <div className="flex gap-2 mt-2.5">
              <div className="flex-1 p-2.5 rounded-xl text-center"
                style={{ background: lucroPositivo ? 'rgba(255,106,0,0.12)' : '#121212', border: `1px solid ${lucroPositivo ? 'rgba(255,106,0,0.4)' : '#222'}` }}>
                <p className="text-[8px] text-[#8E8E93] uppercase tracking-widest">ROI no Ciclo</p>
                <p className="font-black text-sm mt-0.5" style={{ color: lucroPositivo ? '#FF6A00' : '#8E8E93' }}>
                  {calc.roi}{calc.qtdContainers > 0 ? '%' : ''}
                </p>
              </div>
              <div className="flex-1 p-2.5 rounded-xl text-center" style={{ background: '#121212', border: '1px solid #222' }}>
                <p className="text-[8px] text-[#8E8E93] uppercase tracking-widest">Custo por Unidade</p>
                <p className="font-black text-sm mt-0.5 text-white">
                  {calc.qtdContainers > 0
                    ? fmtBRL(Math.round(calc.lote.custo / calc.lote.vol))
                    : '—'}
                </p>
              </div>
              <div className="flex-1 p-2.5 rounded-xl text-center" style={{ background: '#121212', border: '1px solid #222' }}>
                <p className="text-[8px] text-[#8E8E93] uppercase tracking-widest">Margem/Unidade</p>
                <p className="font-black text-sm mt-0.5 text-white">
                  {calc.qtdContainers > 0
                    ? fmtBRL(Math.round(calc.lote.lucro / calc.lote.vol))
                    : '—'}
                </p>
              </div>
            </div>

            {!lucroPositivo && calc.qtdContainers > 0 && (
              <p className="text-[9px] text-[#AEAEB2] mt-2 leading-relaxed">
                ⚠ Com {calc.qtdContainers} container{calc.qtdContainers > 1 ? 's' : ''}, o lucro dos lotes não cobre o OPEX do ciclo. Aumente o capital ou selecione um lote de maior volume.
              </p>
            )}
            {calc.qtdContainers === 0 && (
              <p className="text-[9px] text-[#AEAEB2] mt-2">
                ⚠ Capital insuficiente para adquirir 1 container deste tipo.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
