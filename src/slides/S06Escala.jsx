import { useState, useMemo } from 'react'

/* ── Constantes operacionais ───────────────────────────────────── */
const OPEX_MENSAL = 55000

/* ── Lucro Presumido — regime tributário do grupo ─────────────── */
// Comércio: presunção de lucro = 8% da receita bruta
// IRPJ 15% + CSLL 9% sobre a base + PIS 0,65% + COFINS 3% sobre receita
const LP_RATE = (0.08 * (0.15 + 0.09)) + 0.0065 + 0.03  // ≈ 5,57%

/* ── Tributos na importação de motos elétricas da China ───────── */
// NCM 8711.60.00 — Veículos elétricos (benefícios fiscais ativos)
const IMPORT_TAXES = [
  { label: 'II — Imposto de Importação', rate: '0%',    note: 'Isento para veículos elétricos' },
  { label: 'IPI',                         rate: '0%',    note: 'Isento para veículos elétricos' },
  { label: 'ICMS',                        rate: '12%',   note: 'Sobre valor CIF' },
  { label: 'PIS + COFINS Imp.',           rate: '11,75%',note: 'PIS 2,1% + COFINS 9,65%' },
  { label: 'Frete + Despacho',            rate: '~8%',   note: 'Fretes e despachante aduaneiro' },
]

/* ── Tipos de container ────────────────────────────────────────── */
const LOTES = {
  A: { label: 'Lote A', desc: 'Scooters Menores', vol: 240, custo: 550000,  lucro: 300000, color: '#FF6A00' },
  B: { label: 'Lote B', desc: 'Scooters Maiores', vol: 197, custo: 887000,  lucro: 400000, color: '#FF8C33' },
  C: { label: 'Lote C', desc: 'Modelos Médios',  vol: 105, custo: 550000,  lucro: 300000, color: '#AEAEB2' },
}

const fmtBRL = (n) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 }).format(n)

const fmtPct = (n) => `${(n * 100).toFixed(1)}%`

const historico = [
  { label: 'Dez/2024', desc: '1 container — início orgânico',               destaque: false },
  { label: 'Atual',    desc: '2 vendidos + 2 em produção na China',         destaque: true  },
  { label: 'Jul/2025', desc: 'Chegada engatilha +3 containers',             destaque: false },
  { label: 'Projeção', desc: '16 a 20 containers no ano — capital próprio', destaque: true  },
]

export default function S06Escala() {
  const [tipoLote, setTipoLote] = useState('A')
  const [aporte,   setAporte]   = useState(1650000)

  const calc = useMemo(() => {
    const lote = LOTES[tipoLote]
    const qtd = Math.floor(aporte / lote.custo)

    if (qtd === 0) return { lote, qtd: 0, receita: 0, custoProduto: 0, lucroOperacional: 0, impostosLP: 0, opexCiclo: 0, lucroLiquido: 0, roi: null, unidades: 0, margem: 0 }

    const receita          = qtd * (lote.custo + lote.lucro)   // custo + markup = receita total
    const custoProduto     = qtd * lote.custo                  // custo de aquisição + nacionalização
    const lucroOperacional = receita - custoProduto            // = lucro bruto dos lotes
    const impostosLP       = receita * LP_RATE                 // Lucro Presumido ~5,57% sobre receita
    const opexCiclo        = OPEX_MENSAL * 3                   // R$ 55k × 3 meses
    const lucroLiquido     = lucroOperacional - impostosLP - opexCiclo
    const roi              = lucroLiquido / aporte
    const margem           = lucroLiquido / receita

    return { lote, qtd, receita, custoProduto, lucroOperacional, impostosLP, opexCiclo, lucroLiquido, roi, unidades: qtd * lote.vol, margem }
  }, [tipoLote, aporte])

  const positivo = calc.lucroLiquido > 0

  return (
    <div className="relative w-full h-full flex flex-col overflow-hidden slide-pad"
      style={{ background: '#000000' }}>

      <div className="absolute top-0 left-0 right-0 h-0.5 orange-line" />
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 55% 40% at 65% 50%, rgba(255,106,0,0.04) 0%, transparent 70%)',
      }} />

      {/* Cabeçalho */}
      <div className="mb-3 animate-fade-up" style={{ flexShrink: 0 }}>
        <p className="text-[#FF6A00] text-xs font-medium tracking-widest uppercase mb-1">06 / Modelagem Financeira</p>
        <h2 className="slide-title text-white">Simulador de Retorno por Container</h2>
        <p className="text-[#8E8E93] text-xs mt-0.5">
          Regime Lucro Presumido · Importação de veículos elétricos (NCM 8711.60.00) · China → Brasil
        </p>
      </div>

      <div className="slide-row flex-1 min-h-0">

        {/* ── Sidebar — informações fiscais e tração ── */}
        <div className="slide-sidebar flex flex-col gap-2 animate-slide-left delay-200" style={{ minHeight: 0 }}>

          {/* Tributação importação */}
          <div className="p-3 rounded-xl" style={{ background: '#0D0D0D', border: '1px solid #1A1A1A', flexShrink: 0 }}>
            <p className="text-[9px] text-[#FF6A00] uppercase tracking-widest font-bold mb-2">
              Tributos na Importação — China
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
              {IMPORT_TAXES.map((t, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <span style={{ color: '#8E8E93', fontSize: 9 }}>{t.label}</span>
                  <div style={{ textAlign: 'right' }}>
                    <span style={{
                      color: t.rate === '0%' ? '#22C55E' : '#AEAEB2',
                      fontSize: 9, fontWeight: 800,
                    }}>{t.rate}</span>
                    <span style={{ color: '#3A3A3C', fontSize: 8, display: 'block' }}>{t.note}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Lucro Presumido */}
          <div className="p-3 rounded-xl" style={{ background: 'rgba(255,106,0,0.05)', border: '1px solid rgba(255,106,0,0.2)', flexShrink: 0 }}>
            <p className="text-[9px] text-[#FF6A00] uppercase tracking-widest font-bold mb-1.5">Regime — Lucro Presumido</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              {[
                { t: 'Presunção (comércio)',   v: '8% receita' },
                { t: 'IRPJ 15% + CSLL 9%',   v: '1,92% receita' },
                { t: 'PIS + COFINS',          v: '3,65% receita' },
              ].map((r, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: '#8E8E93', fontSize: 9 }}>{r.t}</span>
                  <span style={{ color: '#AEAEB2', fontSize: 9, fontWeight: 700 }}>{r.v}</span>
                </div>
              ))}
              <div style={{ borderTop: '1px solid rgba(255,106,0,0.2)', marginTop: 4, paddingTop: 4, display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: '#FF6A00', fontSize: 9, fontWeight: 700 }}>Total sobre receita</span>
                <span style={{ color: '#FF6A00', fontSize: 9, fontWeight: 900 }}>≈ 5,57%</span>
              </div>
            </div>
          </div>

          {/* Tração real */}
          <div className="flex-1 p-3 rounded-xl" style={{ background: '#0D0D0D', border: '1px solid #1A1A1A', minHeight: 0 }}>
            <p className="text-[9px] text-[#8E8E93] uppercase tracking-widest font-medium mb-2">Tração Real</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {historico.map((h, i) => (
                <div key={i} style={{ display: 'flex', gap: 8 }}>
                  <div style={{
                    width: 2, flexShrink: 0, borderRadius: 2, minHeight: 28,
                    background: h.destaque ? '#FF6A00' : '#2C2C2E',
                  }} />
                  <div>
                    <p style={{ fontSize: 10, fontWeight: 700, color: h.destaque ? '#FF6A00' : '#AEAEB2' }}>{h.label}</p>
                    <p style={{ fontSize: 9, color: '#8E8E93', lineHeight: 1.4 }}>{h.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Calculadora principal ── */}
        <div className="flex-1 flex flex-col gap-2.5 animate-slide-right delay-300" style={{ minHeight: 0 }}>

          {/* Inputs */}
          <div className="p-3 rounded-xl" style={{ background: '#0D0D0D', border: '1px solid #1A1A1A', flexShrink: 0 }}>

            {/* Seletor de lote */}
            <p className="text-[9px] text-[#8E8E93] uppercase tracking-widest font-medium mb-2">Tipo de Container</p>
            <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
              {Object.entries(LOTES).map(([key, l]) => (
                <button key={key} onClick={() => setTipoLote(key)}
                  style={{
                    flex: 1, padding: '8px 4px', borderRadius: 10, cursor: 'pointer', border: 'none',
                    background: tipoLote === key ? 'rgba(255,106,0,0.12)' : '#0A0A0A',
                    outline: `1.5px solid ${tipoLote === key ? l.color : '#2C2C2E'}`,
                    transition: 'all 0.2s',
                  }}>
                  <div style={{ fontSize: 11, fontWeight: 800, color: tipoLote === key ? l.color : '#8E8E93' }}>{l.label}</div>
                  <div style={{ fontSize: 9, color: '#8E8E93', marginTop: 2 }}>{l.desc}</div>
                  <div style={{ fontSize: 9, fontWeight: 700, marginTop: 2, color: tipoLote === key ? l.color : '#3A3A3C' }}>
                    {fmtBRL(l.custo)}/ct
                  </div>
                </button>
              ))}
            </div>

            {/* Slider */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 6 }}>
              <span style={{ color: '#8E8E93', fontSize: 9, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Capital aportado</span>
              <span style={{ color: '#FF6A00', fontSize: 18, fontWeight: 900 }}>{fmtBRL(aporte)}</span>
            </div>
            <input type="range" min={500000} max={5000000} step={50000} value={aporte}
              onChange={e => setAporte(Number(e.target.value))}
              style={{ width: '100%', accentColor: '#FF6A00', cursor: 'pointer', height: 4 }} />
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 8, color: '#3A3A3C', marginTop: 4 }}>
              <span>R$ 500k</span><span>R$ 5M</span>
            </div>
          </div>

          {/* DRE simplificado — Demonstrativo de Resultados */}
          <div className="flex-1 rounded-xl overflow-hidden"
            style={{ border: `1px solid ${positivo ? 'rgba(255,106,0,0.4)' : '#1A1A1A'}`, background: 'rgba(255,106,0,0.04)', minHeight: 0 }}>

            {/* KPI principal */}
            <div style={{ background: 'rgba(255,106,0,0.1)', padding: '10px 14px', borderBottom: '1px solid rgba(255,106,0,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <p style={{ color: '#FF6A00', fontSize: 9, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Containers Liberados</p>
                <p style={{ color: '#FFFFFF', fontSize: 36, fontWeight: 900, lineHeight: 1 }}>{calc.qtd}</p>
                <p style={{ color: '#8E8E93', fontSize: 9, marginTop: 2 }}>{calc.unidades.toLocaleString('pt-BR')} unidades</p>
              </div>
              <div style={{ textAlign: 'right' }}>
                <p style={{ color: '#8E8E93', fontSize: 9, textTransform: 'uppercase', letterSpacing: '0.1em' }}>ROI do Ciclo</p>
                <p style={{ fontSize: 28, fontWeight: 900, lineHeight: 1, color: positivo ? '#FF6A00' : '#8E8E93' }}>
                  {calc.roi !== null ? fmtPct(calc.roi) : '—'}
                </p>
                <p style={{ color: '#8E8E93', fontSize: 9, marginTop: 2 }}>em ≈ 3 meses</p>
              </div>
            </div>

            {/* DRE — linha por linha */}
            <div style={{ padding: '8px 14px', display: 'flex', flexDirection: 'column', gap: 4 }}>

              {[
                { label: '(+) Receita Bruta de Vendas',                   value: calc.receita,           cor: '#FFFFFF',  bold: false },
                { label: '(−) Custo de Aquisição + Nacionalização',       value: -calc.custoProduto,     cor: '#AEAEB2',  bold: false },
                { label: '(=) Lucro Bruto Operacional',                   value: calc.lucroOperacional,  cor: '#FFFFFF',  bold: true, sep: true },
                { label: `(−) Impostos Lucro Presumido (~5,57% receita)`, value: -calc.impostosLP,       cor: '#AEAEB2',  bold: false },
                { label: '(−) OPEX do Ciclo (R$ 55k × 3 meses)',         value: -calc.opexCiclo,        cor: '#AEAEB2',  bold: false },
                { label: '(=) Lucro Líquido Real',                        value: calc.lucroLiquido,      cor: positivo ? '#FF6A00' : '#8E8E93', bold: true, sep: true },
              ].map((row, i) => (
                <div key={i}>
                  {row.sep && <div style={{ height: 1, background: 'rgba(255,106,0,0.15)', margin: '3px 0' }} />}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                    <span style={{ fontSize: 9.5, color: row.cor, fontWeight: row.bold ? 700 : 400 }}>{row.label}</span>
                    <span style={{ fontSize: row.bold ? 12 : 10, color: row.cor, fontWeight: row.bold ? 900 : 500, fontVariantNumeric: 'tabular-nums' }}>
                      {calc.qtd > 0 ? fmtBRL(row.value) : '—'}
                    </span>
                  </div>
                </div>
              ))}

              {/* Margem líquida */}
              {calc.qtd > 0 && (
                <div style={{ marginTop: 6, padding: '6px 10px', borderRadius: 8, background: positivo ? 'rgba(255,106,0,0.1)' : '#121212', border: `1px solid ${positivo ? 'rgba(255,106,0,0.3)' : '#222'}`, display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: 9, color: '#8E8E93' }}>Margem líquida s/ receita</span>
                  <span style={{ fontSize: 11, fontWeight: 900, color: positivo ? '#FF6A00' : '#8E8E93' }}>
                    {fmtPct(calc.margem < 0 ? 0 : calc.margem)}
                  </span>
                </div>
              )}

              {calc.qtd === 0 && (
                <p style={{ color: '#AEAEB2', fontSize: 9, marginTop: 8 }}>
                  ⚠ Capital insuficiente para adquirir 1 container deste tipo.
                </p>
              )}
              {calc.qtd > 0 && !positivo && (
                <p style={{ color: '#AEAEB2', fontSize: 9, marginTop: 4 }}>
                  ⚠ Lucro dos lotes não cobre tributos + OPEX. Aumente o capital ou o volume.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
