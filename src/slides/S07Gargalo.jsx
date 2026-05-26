const validacoes = [
  { label: 'Produto',      status: 'Validado', detalhe: '2+ containers vendidos. Recompra imediata.' },
  { label: 'Distribuição', status: 'Validada', detalhe: '23+ pontos de venda ativos e estruturados.' },
  { label: 'Operação',     status: 'Validada', detalhe: 'OPEX de R$ 55k/mês com alavancagem alta.' },
  { label: 'Demanda',      status: 'Validada', detalhe: 'Estoque esgota antes do container chegar.' },
]

export default function S07Gargalo() {
  return (
    <div className="relative w-full h-full flex flex-col overflow-hidden slide-pad"
      style={{ background: '#000000' }}>

      <div className="absolute top-0 left-0 right-0 h-0.5 orange-line" />
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 60% 45% at 50% 60%, rgba(255,106,0,0.06) 0%, transparent 70%)',
      }} />

      <div className="mb-4 animate-fade-up">
        <p className="text-[#FF6A00] text-xs font-medium tracking-widest uppercase mb-1">07 / O Gargalo</p>
        <h2 className="slide-title text-white">O que está limitando<br />nossa velocidade</h2>
      </div>

      <div className="slide-row flex-1 min-h-0">

        {/* Coluna esquerda — validações */}
        <div className="flex-1 flex flex-col gap-3 animate-fade-in delay-200">

          <div className="grid grid-cols-2 gap-2.5">
            {validacoes.map((v, i) => (
              <div key={i} className="p-3 rounded-xl"
                style={{ background: '#0F0F0F', border: '1px solid #1C1C1E' }}>
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ background: '#22C55E', boxShadow: '0 0 6px rgba(34,197,94,0.6)' }} />
                  <span className="text-[9px] font-bold uppercase tracking-widest" style={{ color: '#22C55E' }}>
                    {v.status}
                  </span>
                </div>
                <p className="text-white font-black text-sm mb-1">{v.label}</p>
                <p className="text-[#8E8E93] text-[10px] leading-snug">{v.detalhe}</p>
              </div>
            ))}
          </div>

          {/* Seta para o gargalo */}
          <div className="flex flex-col items-center py-1 gap-0.5">
            {[...Array(3)].map((_, i) => (
              <div key={i} style={{
                width: 0, height: 0,
                borderLeft: '8px solid transparent',
                borderRight: '8px solid transparent',
                borderTop: `8px solid ${i === 2 ? '#FF6A00' : 'rgba(255,106,0,0.25)'}`,
              }} />
            ))}
          </div>

          {/* O gargalo */}
          <div className="p-4 rounded-2xl glow-orange"
            style={{ background: 'rgba(255,106,0,0.09)', border: '1px solid rgba(255,106,0,0.55)' }}>
            <p className="text-[10px] text-[#FF6A00] uppercase tracking-widest font-bold mb-2">O Principal Gargalo</p>
            <p className="text-white font-black leading-tight mb-2" style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)' }}>
              Estoque Limitado<br />
              <span style={{ color: '#FF6A00' }}>= Lead Time de Importação</span>
            </p>
            <p className="text-[#AEAEB2] text-xs leading-relaxed">
              O capital institucional não é para provar o negócio. É para <strong className="text-white">eliminar o gap de 3 meses</strong> entre o pedido na China e a chegada do container — e disparar múltiplos lotes simultaneamente.
            </p>
          </div>
        </div>

        {/* Coluna direita — tese do investimento */}
        <div className="slide-sidebar flex flex-col gap-3 animate-slide-right delay-300">

          {/* Ciclo atual */}
          <div className="p-4 rounded-2xl" style={{ background: '#121212', border: '1px solid #222' }}>
            <p className="text-[10px] text-[#8E8E93] uppercase tracking-widest font-medium mb-3">Ciclo Atual — 1 Container</p>
            <div className="space-y-2">
              {[
                { fase: 'Pedido China',    dur: 'Semana 1' },
                { fase: 'Produção / Mar',  dur: '45-60 dias' },
                { fase: 'Desembaraço',     dur: '15-30 dias' },
                { fase: 'Liquidação',      dur: '30-45 dias' },
              ].map((f, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: i === 0 ? '#FF6A00' : '#3A3A3C' }} />
                  <span className="text-white text-xs flex-1">{f.fase}</span>
                  <span className="text-[#8E8E93] text-[10px]">{f.dur}</span>
                </div>
              ))}
              <div className="pt-2 border-t border-[#1C1C1E] flex items-center justify-between">
                <span className="text-[#8E8E93] text-[10px]">Total do ciclo</span>
                <span className="text-[#FF6A00] font-black text-sm">~3 meses</span>
              </div>
            </div>
          </div>

          {/* Solução com capital */}
          <div className="flex-1 p-4 rounded-2xl glow-orange"
            style={{ background: 'rgba(255,106,0,0.06)', border: '1px solid rgba(255,106,0,0.4)' }}>
            <p className="text-[10px] text-[#FF6A00] uppercase tracking-widest font-bold mb-3">Com Capital Institucional</p>
            <div className="space-y-2.5">
              {[
                'Múltiplos containers em paralelo',
                'Giro constante sem ruptura',
                'Escalar de 2 para 16-20 containers/ano',
                'Trade Finance neutraliza o lead time',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2">
                  <div className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: 'rgba(255,106,0,0.15)', border: '1px solid rgba(255,106,0,0.4)' }}>
                    <span style={{ color: '#FF6A00', fontSize: 8, fontWeight: 900 }}>✓</span>
                  </div>
                  <p className="text-[#AEAEB2] text-xs leading-snug">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Frase de impacto */}
          <div className="p-4 rounded-xl" style={{ background: '#0A0A0A', border: '1px solid #1C1C1E' }}>
            <blockquote className="border-l-2 border-[#FF6A00] pl-3">
              <p className="text-white font-semibold text-sm italic leading-relaxed">
                "Não estamos tentando provar um negócio. Estamos acelerando um negócio já provado."
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  )
}
