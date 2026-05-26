import { useState } from 'react'
import { Mail } from 'lucide-react'

const tese = [
  {
    n: '01',
    titulo: 'Trade Finance',
    detalhe: 'Estruturar linhas de Crédito de Comércio Exterior para neutralizar 3 meses de lead time da China.',
  },
  {
    n: '02',
    titulo: 'Escala Simultânea',
    detalhe: 'Capital dispara múltiplos lotes em paralelo — queimando o gargalo de limitação física de containers.',
  },
  {
    n: '03',
    titulo: 'Validação Governamental',
    detalhe: 'Codemar: frotas elétricas para Guarda Municipal. Projeto piloto de substituição em execução.',
  },
  {
    n: '04',
    titulo: 'Expansão Global',
    detalhe: 'Zanzibar & Pemba (Tanzânia): conversão de frota de tuc-tucs, barcos e ônibus. Visita à Yadea realizada.',
  },
]

const redes = [
  { nome: 'Lojas Mel',   status: 'Expansão B2B ativa',    color: '#FF6A00' },
  { nome: 'Casas Bahia', status: 'Pipeline comercial',     color: '#FF8C33' },
  { nome: 'Codemar',     status: 'Guarda Municipal',       color: '#AEAEB2' },
  { nome: 'Yadea Global',status: 'Parceria internacional', color: '#8E8E93' },
]

function FotosParceria() {
  const [err04, setErr04] = useState(false)
  const [err05, setErr05] = useState(false)

  return (
    <div className="flex gap-2 mb-1" style={{ flexShrink: 0 }}>
      {/* 04.jpg — Lojas Mel */}
      {!err04 && (
        <div className="flex-1 rounded-xl overflow-hidden"
          style={{ height: 80, border: '1px solid rgba(255,106,0,0.25)', position: 'relative' }}>
          <img
            src="/assets/images/04.jpg"
            alt="Lojas Mel"
            onError={() => setErr04(true)}
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', filter: 'brightness(0.65) saturate(0.8)' }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 55%)' }} />
          <p style={{ position: 'absolute', bottom: 5, left: 8, color: '#FF6A00', fontSize: 8, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            Lojas Mel
          </p>
        </div>
      )}
      {/* 05.jpg — Casas Bahia */}
      {!err05 && (
        <div className="flex-1 rounded-xl overflow-hidden"
          style={{ height: 80, border: '1px solid rgba(255,106,0,0.15)', position: 'relative' }}>
          <img
            src="/assets/images/05.jpg"
            alt="Casas Bahia"
            onError={() => setErr05(true)}
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', filter: 'brightness(0.65) saturate(0.8)' }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 55%)' }} />
          <p style={{ position: 'absolute', bottom: 5, left: 8, color: '#AEAEB2', fontSize: 8, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            Casas Bahia
          </p>
        </div>
      )}
    </div>
  )
}

export default function S07Convite() {
  return (
    <div className="relative w-full h-full flex flex-col overflow-hidden slide-pad"
      style={{ background: '#000000' }}>

      <div className="absolute top-0 left-0 right-0 h-0.5 orange-line" />
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 65% 50% at 50% 50%, rgba(255,106,0,0.05) 0%, transparent 70%)',
      }} />

      <div className="mb-3 animate-fade-up">
        <p className="text-[#FF6A00] text-xs font-medium tracking-widest uppercase mb-1">08 / Visão Global & Parceria</p>
        <h2 className="slide-title text-white">O Futuro da Mobilidade</h2>
        <p className="text-[#8E8E93] text-xs mt-0.5">Parceria Estratégica de Crescimento — Trade Finance & B2B</p>
      </div>

      <div className="slide-row flex-1 min-h-0">

        {/* Tese em grid */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-2.5 content-start animate-fade-in delay-200">
          {tese.map((p, i) => (
            <div key={i} className="p-3 sm:p-4 rounded-2xl card-premium flex gap-3">
              <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: 'rgba(255,106,0,0.12)', border: '1px solid rgba(255,106,0,0.4)' }}>
                <span style={{ color: '#FF6A00', fontSize: 9, fontWeight: 900 }}>{p.n}</span>
              </div>
              <div>
                <p className="text-white font-bold text-xs mb-1">{p.titulo}</p>
                <p className="text-[#8E8E93] text-[10px] leading-relaxed">{p.detalhe}</p>
              </div>
            </div>
          ))}

          {/* Redes parceiras */}
          <div className="col-span-1 sm:col-span-2 p-3 rounded-xl"
            style={{ background: '#121212', border: '1px solid #222' }}>
            <p className="text-[9px] text-[#8E8E93] uppercase tracking-widest font-medium mb-2">Ecossistema de Parcerias</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {redes.map((r, i) => (
                <div key={i} className="p-2 rounded-lg text-center"
                  style={{ background: '#0A0A0A', border: `1px solid ${r.color}22` }}>
                  <p className="text-xs font-bold leading-tight" style={{ color: r.color }}>{r.nome}</p>
                  <p className="text-[9px] text-[#8E8E93] mt-0.5">{r.status}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar fechamento */}
        <div className="slide-sidebar flex flex-col gap-3 animate-slide-right delay-300">

          <FotosParceria />

          {/* KPIs */}
          <div className="grid grid-cols-2 gap-2">
            <div className="p-3 rounded-xl text-center" style={{ background: '#121212', border: '1px solid #222' }}>
              <p className="text-[9px] text-[#8E8E93] uppercase tracking-widest">OPEX</p>
              <p className="text-lg font-black text-white leading-none">R$ 55k</p>
              <p className="text-[9px] text-[#8E8E93]">/mês</p>
            </div>
            <div className="p-3 rounded-xl text-center glow-orange"
              style={{ background: 'rgba(255,106,0,0.08)', border: '1px solid rgba(255,106,0,0.45)' }}>
              <p className="text-[9px] text-[#FF6A00] uppercase tracking-widest">Meta</p>
              <p className="text-lg font-black text-white leading-none">20</p>
              <p className="text-[9px] text-[#8E8E93]">containers/ano</p>
            </div>
          </div>

          {/* Tese de fechamento */}
          <div className="flex-1 p-4 rounded-2xl glow-orange"
            style={{ background: 'rgba(255,106,0,0.06)', border: '1px solid rgba(255,106,0,0.35)' }}>
            <p className="text-[#FF6A00] text-[9px] font-bold uppercase tracking-widest mb-2">Tese de Fechamento</p>
            <p className="text-white font-semibold text-xs leading-relaxed mb-3">
              O TM GROUP provou execução. O capital institucional não é suporte — é a alavanca para dominar o mercado local e expandir globalmente.
            </p>
            <div className="space-y-2">
              {[
                'Neutralizar 3 meses de lead time',
                'Disparar múltiplos lotes em paralelo',
                'Frotas B2B: Lojas Mel + Casas Bahia',
                'Zanzibar, Pemba e Codemar — validação global',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2">
                  <div className="w-1 h-1 rounded-full flex-shrink-0 mt-1.5" style={{ background: '#FF6A00' }} />
                  <p className="text-[#AEAEB2] text-[10px] leading-snug">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <a href="mailto:teclemotos@teclemotos.com" className="btn-primary justify-center text-center text-xs">
            <Mail size={13} />
            Solicitar Reunião Executiva
          </a>
        </div>
      </div>
    </div>
  )
}
