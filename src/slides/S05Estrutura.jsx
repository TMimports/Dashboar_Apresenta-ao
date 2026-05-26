import { useState } from 'react'

const depts = [
  { label: 'Financeiro',           sub: 'Controle e fluxo de caixa' },
  { label: 'Comercial',            sub: 'Vendas B2B e varejo' },
  { label: 'Marketing',            sub: 'Growth e branding digital' },
  { label: 'Logística',            sub: 'Supply chain integrado' },
  { label: 'Pós-venda',            sub: 'Suporte e retenção' },
  { label: 'Assistência Técnica',  sub: 'Scanners + peças originais' },
  {
    label: 'Ensino / Treinamento / Capacitação',
    sub: 'TM ACADEMY — Pilar crítico de escala',
    highlight: true,
    tip: 'Capacitação técnica rigorosa que sustenta a escala, o pós-venda e o padrão operacional da marca.',
  },
]

const canais = [
  { n: '11', label: 'Lojas Próprias' },
  { n: '4',  label: 'Mercados' },
  { n: '3',  label: 'Mat. Construção' },
  { n: '4',  label: 'Shoppings' },
  { n: '1',  label: 'E-commerce' },
]

const tech = [
  { name: 'ERP',                 desc: 'Gestão integrada de operações' },
  { name: 'CRM',                 desc: 'Relacionamento e pipeline de vendas' },
  { name: 'Logística Integrada', desc: 'Rastreamento e controle de estoque' },
  { name: 'AVO',                 desc: 'Assistente Virtual de Oficina — IA proprietária' },
]

export default function S05Estrutura() {
  const [hovered, setHovered] = useState(null)

  return (
    <div className="relative w-full h-full flex flex-col overflow-hidden slide-pad"
      style={{ background: '#000000' }}>

      <div className="absolute top-0 left-0 right-0 h-0.5 orange-line" />

      <div className="mb-3 animate-fade-up">
        <p className="text-[#FF6A00] text-xs font-medium tracking-widest uppercase mb-1">05 / Estrutura</p>
        <h2 className="slide-title text-white">Estrutura Pronta para Aceleração</h2>
        <p className="text-[#8E8E93] text-xs italic mt-0.5">
          "Nosso desafio não é construir estrutura. É acelerar uma estrutura pronta."
        </p>
      </div>

      <div className="slide-row flex-1 min-h-0">

        {/* Coluna esquerda — Departamentos */}
        <div className="flex-1 flex flex-col gap-3 min-h-0 animate-fade-in delay-200">

          {/* Grid depts */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5 content-start">
            {depts.map((d, i) => (
              <div
                key={i}
                className="relative p-2 rounded-xl transition-all duration-300 cursor-default"
                style={{
                  gridColumn: d.highlight ? 'span 2' : undefined,
                  background: d.highlight
                    ? (hovered === i ? 'rgba(255,106,0,0.14)' : 'rgba(255,106,0,0.08)')
                    : (hovered === i ? 'rgba(255,106,0,0.05)' : '#121212'),
                  border: `1px solid ${d.highlight
                    ? 'rgba(255,106,0,0.45)'
                    : (hovered === i ? 'rgba(255,106,0,0.3)' : '#222222')}`,
                  boxShadow: d.highlight ? '0 0 16px rgba(255,106,0,0.1)' : 'none',
                }}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                <p className={`font-bold text-xs leading-snug ${d.highlight ? 'text-[#FF6A00]' : 'text-white'}`}>
                  {d.label}
                </p>
                <p className="text-[#8E8E93] text-[10px] mt-0.5 leading-tight">{d.sub}</p>
                {d.highlight && hovered === i && (
                  <p className="text-[#AEAEB2] text-[10px] mt-1.5 leading-relaxed border-t border-[rgba(255,106,0,0.2)] pt-1.5">
                    {d.tip}
                  </p>
                )}
                {d.highlight && (
                  <span className="absolute top-2 right-2 text-[8px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded"
                    style={{ background: 'rgba(255,106,0,0.18)', color: '#FF6A00', border: '1px solid rgba(255,106,0,0.3)' }}>
                    Pilar
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* Canais ativos */}
          <div className="p-3 rounded-xl" style={{ background: '#121212', border: '1px solid #222' }}>
            <p className="text-[10px] text-[#8E8E93] uppercase tracking-widest font-medium mb-2">
              23+ Pontos de Venda Ativos
            </p>
            <div className="flex gap-2 flex-wrap">
              {canais.map((c, i) => (
                <div key={i} className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg"
                  style={{ background: 'rgba(255,106,0,0.08)', border: '1px solid rgba(255,106,0,0.2)' }}>
                  <span style={{ color: '#FF6A00', fontWeight: 900, fontSize: 13 }}>{c.n}</span>
                  <span style={{ color: '#AEAEB2', fontSize: 10 }}>{c.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Vantagem Competitiva — O que não se copia ── */}
          <div className="flex-1 rounded-2xl overflow-hidden animate-fade-up delay-400"
            style={{ background: '#0A0A0A', border: '1px solid #1A1A1A', minHeight: 0, position: 'relative' }}>

            {/* Número de impacto em marca d'água */}
            <div style={{
              position: 'absolute', right: 16, top: '50%',
              transform: 'translateY(-50%)',
              fontSize: 96, fontWeight: 900, color: 'rgba(255,106,0,0.06)',
              lineHeight: 1, pointerEvents: 'none', userSelect: 'none',
              letterSpacing: '-0.04em',
            }}>
              10
            </div>

            <div style={{ padding: '14px 16px', display: 'flex', flexDirection: 'column', height: '100%', position: 'relative', zIndex: 1 }}>

              {/* Header provocativo */}
              <div style={{ marginBottom: 12 }}>
                <p style={{ color: '#FF6A00', fontSize: 8, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 3 }}>
                  Barreira de Entrada
                </p>
                <p style={{ color: '#FFFFFF', fontSize: 14, fontWeight: 900, lineHeight: 1.2, letterSpacing: '-0.01em' }}>
                  O que leva quase 10 anos<br />para construir
                </p>
                <p style={{ color: '#3A3A3C', fontSize: 9, marginTop: 4 }}>
                  — e nenhum concorrente consegue copiar em 12 meses.
                </p>
              </div>

              {/* Grid de ativos intangíveis */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6, flex: 1 }}>
                {[
                  { icon: '🔧', label: 'Expertise Técnica',     desc: 'Conhecimento de produto que o mercado não tem' },
                  { icon: '🌏', label: 'Fornecedor Direto',      desc: 'Relação com Yadea e fabricantes chineses' },
                  { icon: '📍', label: '23+ Canais Ativos',      desc: 'Rede física construída loja por loja' },
                  { icon: '🛡️', label: 'Confiança de Mercado',   desc: 'Reputação e base de clientes real' },
                  { icon: '🤖', label: 'AVO — IA Proprietária',  desc: 'Sistema que ninguém mais tem no setor' },
                  { icon: '📦', label: 'Importação Direta',      desc: 'Processo aduaneiro dominado e validado' },
                ].map((item, i) => (
                  <div key={i} style={{
                    display: 'flex', gap: 8, alignItems: 'flex-start',
                    padding: '7px 10px', borderRadius: 8,
                    background: 'rgba(255,255,255,0.02)',
                    border: '1px solid #1C1C1E',
                  }}>
                    <span style={{ fontSize: 14, flexShrink: 0, lineHeight: 1 }}>{item.icon}</span>
                    <div>
                      <p style={{ color: '#FFFFFF', fontSize: 9.5, fontWeight: 700, lineHeight: 1.2 }}>{item.label}</p>
                      <p style={{ color: '#8E8E93', fontSize: 8.5, lineHeight: 1.3, marginTop: 1 }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Frase de impacto */}
              <div style={{
                marginTop: 10,
                padding: '8px 12px',
                borderRadius: 8,
                background: 'linear-gradient(90deg, rgba(255,106,0,0.12) 0%, rgba(255,106,0,0.04) 100%)',
                borderLeft: '3px solid #FF6A00',
              }}>
                <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 10, fontWeight: 600, lineHeight: 1.5, fontStyle: 'italic' }}>
                  "Não vendemos apenas scooters. Entregamos um ecossistema que levou uma década para existir."
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Coluna direita — TM TECH */}
        <div className="slide-sidebar flex flex-col gap-3 animate-slide-right delay-300">

          <div className="p-4 rounded-2xl glow-orange flex-1"
            style={{ background: 'rgba(255,106,0,0.06)', border: '1px solid rgba(255,106,0,0.35)' }}>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-6 rounded flex items-center justify-center flex-shrink-0"
                style={{ background: 'rgba(255,106,0,0.2)', border: '1px solid rgba(255,106,0,0.5)' }}>
                <span style={{ color: '#FF6A00', fontSize: 12, fontWeight: 900 }}>⚡</span>
              </div>
              <p className="text-[#FF6A00] text-xs font-bold uppercase tracking-widest">TM TECH</p>
            </div>
            <p className="text-white text-xs font-semibold mb-3 leading-relaxed">
              Sistemas proprietários unificados para toda a operação do grupo.
            </p>
            <div className="space-y-2.5">
              {tech.map((t, i) => (
                <div key={i} className="flex gap-2.5">
                  <div className="w-1 rounded-full flex-shrink-0 mt-0.5" style={{ background: '#FF6A00', height: 32 }} />
                  <div>
                    <p className="text-white text-xs font-bold">{t.name}</p>
                    <p className="text-[#8E8E93] text-[10px] leading-snug">{t.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="p-3 rounded-xl" style={{ background: '#121212', border: '1px solid #222' }}>
            <p className="text-[9px] text-[#8E8E93] uppercase tracking-widest font-medium mb-1">AVO</p>
            <p className="text-white text-xs font-black">Assistente Virtual de Oficina</p>
            <p className="text-[#8E8E93] text-[10px] mt-1 leading-relaxed">
              IA proprietária que padroniza diagnósticos, orçamentos e atendimento técnico em toda a rede.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
