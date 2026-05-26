import { useState } from 'react'

const lotes = [
  { tipo: 'A', desc: 'Scooters Menores', unidades: 240, margem: 'R$ 300.000', color: '#FF6B00' },
  { tipo: 'B', desc: 'Scooters Maiores', unidades: 197, margem: 'R$ 400.000', color: '#FF8C33' },
  { tipo: 'C', desc: 'Modelos Médios',   unidades: 105, margem: 'R$ 300.000', color: '#AEAEB2' },
]

const historico = [
  { label: 'Dez/2024',  desc: '1 container — início do ciclo orgânico',                  destaque: false },
  { label: 'Atual',     desc: '2 containers vendidos + 2 na China (chegada: julho)',      destaque: true  },
  { label: 'Jul/2025',  desc: 'Faturamento + pedido de +3 containers. +2 em produção.', destaque: false },
  { label: 'Projeção',  desc: '16 a 20 containers no período via capital próprio',        destaque: true  },
]

function FotoOperacoes() {
  const [err, setErr] = useState(false)
  if (err) return null
  return (
    <div className="rounded-xl overflow-hidden mb-3" style={{ height: 110, border: '1px solid #2C2C2E' }}>
      <img
        src="/assets/images/operacoes.jpg"
        alt="Operações TM GROUP"
        onError={() => setErr(true)}
        style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.7) saturate(0.8)' }}
      />
    </div>
  )
}

export default function S06Escala() {
  return (
    <div className="relative w-full h-full flex flex-col overflow-hidden slide-pad"
      style={{ background: '#0A0A0A' }}>

      <div className="absolute top-0 left-0 right-0 h-0.5 orange-line" />
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 50% 40% at 72% 50%, rgba(255,107,0,0.04) 0%, transparent 70%)',
      }} />

      <div className="mb-4 md:mb-6 animate-fade-up">
        <p className="text-[#FF6B00] text-xs font-medium tracking-widest uppercase mb-2">06 / Eficiência Operacional</p>
        <h2 className="slide-title text-white">Eficiência de Capital e Matriz de Lotes</h2>
      </div>

      <div className="slide-row flex-1 min-h-0">

        {/* Coluna esquerda — imagem + OPEX + Giro + Histórico */}
        <div className="slide-sidebar flex flex-col gap-3 animate-slide-left delay-200">

          {/* Foto de operações/containers */}
          <FotoOperacoes />

          {/* OPEX destaque */}
          <div className="p-4 sm:p-5 rounded-2xl glow-orange text-center"
            style={{ background: 'rgba(255,107,0,0.08)', border: '1px solid rgba(255,107,0,0.5)' }}>
            <p className="text-[10px] text-[#FF6B00] uppercase tracking-widest font-medium mb-1">OPEX Mensal Consolidado</p>
            <p className="font-black text-white" style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.2rem)' }}>R$ 55.000</p>
            <p className="text-[#8E8E93] text-xs mt-1">Alta alavancagem operacional</p>
          </div>

          {/* Algoritmo de giro */}
          <div className="p-4 rounded-xl" style={{ background: '#1C1C1E', border: '1px solid #2C2C2E' }}>
            <p className="text-[10px] text-[#8E8E93] uppercase tracking-widest font-medium mb-2">Algoritmo de Giro</p>
            <p className="text-white text-sm font-semibold mb-1">Ciclo médio: <span style={{ color: '#FF6B00' }}>3 meses</span></p>
            <p className="text-[#8E8E93] text-xs mb-2">Importação → Trânsito marítimo → Nacionalização</p>
            <div className="flex items-center gap-1 text-xs flex-wrap">
              <span className="text-[#8E8E93]">Chegam N</span>
              <span style={{ color: '#FF6B00', fontWeight: 700 }}>→</span>
              <span className="text-[#8E8E93]">Liquida</span>
              <span style={{ color: '#FF6B00', fontWeight: 700 }}>→</span>
              <span className="text-[#8E8E93]">Pede N+1</span>
            </div>
          </div>

          {/* Histórico de tração */}
          <div className="flex-1 p-4 rounded-xl" style={{ background: '#1C1C1E', border: '1px solid #2C2C2E' }}>
            <p className="text-[10px] text-[#8E8E93] uppercase tracking-widest font-medium mb-3">Histórico Real de Tração</p>
            <div className="space-y-3">
              {historico.map((h, i) => (
                <div key={i} className="flex gap-2.5">
                  <div className="w-1 flex-shrink-0 rounded-full"
                    style={{ background: h.destaque ? '#FF6B00' : '#2C2C2E', height: 36, marginTop: 2 }} />
                  <div>
                    <p className="text-xs font-bold leading-tight" style={{ color: h.destaque ? '#FF6B00' : '#AEAEB2' }}>
                      {h.label}
                    </p>
                    <p className="text-[#8E8E93] text-xs leading-snug mt-0.5">{h.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Coluna direita — Tabela de lotes */}
        <div className="flex-1 flex flex-col gap-3 animate-slide-right delay-300">
          <p className="text-[10px] text-[#8E8E93] uppercase tracking-widest font-medium">
            Rentabilidade Real por Lote — Margem de Lucro Estimada
          </p>

          <div className="flex flex-col gap-3 flex-1">
            {lotes.map((l, i) => (
              <div
                key={i}
                className="flex-1 p-4 sm:p-5 rounded-2xl card-premium"
                style={{ border: `1px solid ${i === 0 ? 'rgba(255,107,0,0.4)' : '#2C2C2E'}` }}>

                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2.5 py-0.5 rounded text-xs font-black"
                    style={{ background: 'rgba(255,107,0,0.12)', color: l.color }}>
                    LOTE {l.tipo}
                  </span>
                  <span className="text-[#8E8E93] text-xs">{l.desc}</span>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-[10px] text-[#8E8E93] uppercase tracking-widest mb-1">Unidades / Container</p>
                    <p className="font-black text-white" style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2rem)' }}>
                      {l.unidades}
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] text-[#8E8E93] uppercase tracking-widest mb-1">Margem Estimada</p>
                    <p className="font-black" style={{ fontSize: 'clamp(1.2rem, 2.8vw, 1.75rem)', color: l.color }}>
                      {l.margem}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
