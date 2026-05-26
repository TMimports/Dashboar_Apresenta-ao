import { useState } from 'react'
import { Mail } from 'lucide-react'

const pontos = [
  {
    n: '01',
    titulo: 'Execução Comprovada',
    detalhe: 'Capacidade de girar até 20 containers/ano de forma independente com OPEX enxuto de R$ 55.000/mês.',
  },
  {
    n: '02',
    titulo: 'Não é captação de auxílio',
    detalhe: 'O objetivo é estruturar linhas avançadas de Trade Finance / Crédito de Comércio Exterior.',
  },
  {
    n: '03',
    titulo: 'Neutralizar o Lead Time',
    detalhe: 'Eliminar os 3 meses de trânsito China–Brasil disparando múltiplos lotes de containers simultaneamente.',
  },
  {
    n: '04',
    titulo: 'Domínio de Mercado',
    detalhe: 'Capital institucional como alavanca para liderança — não como suporte operacional.',
  },
]

function FotoParceria() {
  const [err, setErr] = useState(false)
  if (err) return null
  return (
    <div className="rounded-xl overflow-hidden mb-3" style={{ height: 130, border: '1px solid rgba(255,107,0,0.25)' }}>
      <img
        src="/assets/images/parceria.jpg"
        alt="Parceria B2B TM GROUP"
        onError={() => setErr(true)}
        style={{
          width: '100%', height: '100%',
          objectFit: 'cover', objectPosition: 'center',
          filter: 'brightness(0.75) saturate(0.85)',
        }}
      />
    </div>
  )
}

export default function S07Convite() {
  return (
    <div className="relative w-full h-full flex flex-col overflow-hidden slide-pad"
      style={{ background: '#0A0A0A' }}>

      <div className="absolute top-0 left-0 right-0 h-0.5 orange-line" />
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(255,107,0,0.05) 0%, transparent 70%)',
      }} />

      <div className="mb-4 md:mb-6 animate-fade-up">
        <p className="text-[#FF6B00] text-xs font-medium tracking-widest uppercase mb-2">07 / Parceria Estratégica</p>
        <h2 className="slide-title text-white">Parceria Estratégica de Crescimento</h2>
        <p className="text-[#8E8E93] mt-1 text-sm">Trade Finance & Crédito de Comércio Exterior</p>
      </div>

      <div className="slide-row flex-1 min-h-0">

        {/* Grid da tese */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-3 content-start animate-fade-in delay-200">
          {pontos.map((p, i) => (
            <div
              key={i}
              className="p-4 sm:p-5 rounded-2xl card-premium flex flex-col gap-2"
              style={{ minHeight: 100 }}>
              <div className="flex items-start gap-3">
                <div
                  className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(255,107,0,0.12)', border: '1px solid rgba(255,107,0,0.4)' }}>
                  <span style={{ color: '#FF6B00', fontSize: 10, fontWeight: 900 }}>{p.n}</span>
                </div>
                <div>
                  <p className="text-white font-bold text-sm mb-1">{p.titulo}</p>
                  <p className="text-[#8E8E93] text-xs leading-relaxed">{p.detalhe}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Sidebar — imagem parceria + tese de fechamento */}
        <div className="slide-sidebar flex flex-col gap-3 animate-slide-right delay-300">

          {/* Imagem parceria (tv04) */}
          <FotoParceria />

          {/* KPIs */}
          <div className="grid grid-cols-2 gap-2.5">
            <div className="p-3 rounded-xl text-center" style={{ background: '#1C1C1E', border: '1px solid #2C2C2E' }}>
              <p className="text-[9px] text-[#8E8E93] uppercase tracking-widest mb-1">OPEX</p>
              <p className="text-xl font-black text-white leading-none">R$ 55k</p>
              <p className="text-[9px] text-[#8E8E93] mt-0.5">/mês</p>
            </div>
            <div className="p-3 rounded-xl text-center glow-orange"
              style={{ background: 'rgba(255,107,0,0.08)', border: '1px solid rgba(255,107,0,0.45)' }}>
              <p className="text-[9px] text-[#FF6B00] uppercase tracking-widest mb-1">Meta</p>
              <p className="text-xl font-black text-white leading-none">20</p>
              <p className="text-[9px] text-[#8E8E93] mt-0.5">containers/ano</p>
            </div>
          </div>

          {/* Tese principal */}
          <div className="flex-1 p-4 rounded-2xl glow-orange"
            style={{ background: 'rgba(255,107,0,0.06)', border: '1px solid rgba(255,107,0,0.35)' }}>
            <p className="text-[#FF6B00] text-[10px] font-bold uppercase tracking-widest mb-3">Tese de Fechamento</p>
            <p className="text-white font-semibold text-sm leading-relaxed mb-4">
              O TM GROUP provou execução. O capital institucional não é suporte — é a alavanca para dominar o mercado.
            </p>
            <div className="space-y-2">
              {[
                'Neutralizar 3 meses de lead time',
                'Disparar múltiplos lotes em paralelo',
                'Liderança de mercado como resultado',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2">
                  <div className="w-1 h-1 rounded-full flex-shrink-0 mt-1.5" style={{ background: '#FF6B00' }} />
                  <p className="text-[#AEAEB2] text-xs leading-snug">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <a href="mailto:teclemotos@teclemotos.com" className="btn-primary justify-center text-center">
            <Mail size={15} />
            Solicitar Reunião Executiva
          </a>
        </div>
      </div>
    </div>
  )
}
