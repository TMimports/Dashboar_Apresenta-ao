import { useState } from 'react'
import { Mail, Globe, Shield, ShoppingBag } from 'lucide-react'

/* ── Blocos de expansão global ──────────────────────────────── */
const expansao = [
  {
    Icon: Globe,
    titulo: 'Tanzânia — Zanzibar & Pemba',
    tag: 'Convite Governamental',
    color: '#FF6A00',
    topicos: [
      'Convite oficial para implementar transição energética nacional',
      'Conversão de frota de tuc-tucs para 100% elétrico',
      'Eletrificação de barcos e retrofit de ônibus a diesel',
      'Visita institucional realizada à Yadea — líder mundial em e-mobility',
    ],
  },
  {
    Icon: Shield,
    titulo: 'Codemar — Maricá, RJ',
    tag: 'Validação Governamental',
    color: '#FF8C33',
    topicos: [
      'Fornecimento de veículos elétricos à Guarda Municipal de Maricá',
      'Projeto piloto de substituição de frota em andamento',
      'Primeira parceria institucional pública validada',
    ],
  },
  {
    Icon: ShoppingBag,
    titulo: 'Grandes Redes — B2B',
    tag: 'Expansão Comercial',
    color: '#AEAEB2',
    topicos: [
      'Lojas Mel — expansão B2B ativa e estruturada',
      'Casas Bahia — pipeline comercial em negociação',
      'Canal B2B complementa varejo próprio sem canibalização',
    ],
  },
]

function FotosParceria() {
  const [err04, setErr04] = useState(false)
  const [err05, setErr05] = useState(false)

  if (err04 && err05) return null

  return (
    <div style={{ display: 'flex', gap: 8, flexShrink: 0 }}>
      {!err04 && (
        <div style={{
          flex: 1, height: 88, borderRadius: 12, overflow: 'hidden',
          border: '1px solid rgba(255,106,0,0.25)', position: 'relative',
        }}>
          <img
            src="/assets/images/04.jpg"
            alt="Lojas Mel"
            onError={() => setErr04(true)}
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', filter: 'brightness(0.6) saturate(0.75)' }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 50%)' }} />
          <p style={{ position: 'absolute', bottom: 7, left: 10, color: '#FF6A00', fontSize: 9, fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            Lojas Mel
          </p>
        </div>
      )}
      {!err05 && (
        <div style={{
          flex: 1, height: 88, borderRadius: 12, overflow: 'hidden',
          border: '1px solid rgba(174,174,178,0.2)', position: 'relative',
        }}>
          <img
            src="/assets/images/05.jpg"
            alt="Casas Bahia"
            onError={() => setErr05(true)}
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', filter: 'brightness(0.6) saturate(0.75)' }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 50%)' }} />
          <p style={{ position: 'absolute', bottom: 7, left: 10, color: '#AEAEB2', fontSize: 9, fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
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
        background: 'radial-gradient(ellipse 70% 55% at 50% 45%, rgba(255,106,0,0.04) 0%, transparent 70%)',
      }} />

      {/* Cabeçalho */}
      <div className="mb-4 animate-fade-up">
        <p className="text-[#FF6A00] text-xs font-medium tracking-widest uppercase mb-1">08 / Expansão Global & Convite</p>
        <h2 className="slide-title text-white">Validação Global & Parcerias Estratégicas</h2>
        <p className="text-[#8E8E93] text-xs mt-1">
          O TM GROUP já foi convidado para operar em três frentes de alto impacto.
        </p>
      </div>

      <div className="slide-row flex-1 min-h-0">

        {/* Coluna principal — blocos de expansão */}
        <div className="flex-1 flex flex-col gap-3 min-h-0 animate-fade-in delay-200">
          {expansao.map(({ Icon, titulo, tag, color, topicos }, i) => (
            <div key={i} className="flex-1 p-4 rounded-2xl"
              style={{
                background: i === 0 ? 'rgba(255,106,0,0.05)' : '#0D0D0D',
                border: `1px solid ${i === 0 ? 'rgba(255,106,0,0.35)' : '#1A1A1A'}`,
              }}>
              {/* Header do bloco */}
              <div className="flex items-center gap-3 mb-2.5">
                <div style={{
                  width: 32, height: 32, borderRadius: 8, flexShrink: 0,
                  background: `${color}18`,
                  border: `1px solid ${color}44`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <Icon size={15} color={color} strokeWidth={1.8} />
                </div>
                <div>
                  <p className="text-white font-bold text-sm leading-tight">{titulo}</p>
                  <span style={{
                    fontSize: 9, fontWeight: 700, letterSpacing: '0.12em',
                    textTransform: 'uppercase', color,
                  }}>
                    {tag}
                  </span>
                </div>
              </div>
              {/* Tópicos */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
                {topicos.map((t, j) => (
                  <div key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                    <div style={{
                      width: 5, height: 5, borderRadius: '50%', flexShrink: 0,
                      marginTop: 4, background: color, opacity: 0.8,
                    }} />
                    <p style={{ color: '#AEAEB2', fontSize: 11, lineHeight: 1.5 }}>{t}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Sidebar direita — imagens + fechamento */}
        <div className="slide-sidebar flex flex-col gap-3 animate-slide-right delay-300">

          <FotosParceria />

          {/* Fechamento institucional */}
          <div className="flex-1 p-4 rounded-2xl"
            style={{ background: 'rgba(255,106,0,0.06)', border: '1px solid rgba(255,106,0,0.4)' }}>
            <p className="text-[#FF6A00] text-[9px] font-bold uppercase tracking-widest mb-3">
              Convite Estratégico
            </p>
            <p className="text-white font-semibold text-sm leading-relaxed mb-4">
              O TM GROUP provou execução. O capital institucional é a alavanca para dominar o mercado nacional e expandir globalmente.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 16 }}>
              {[
                { label: 'Mercado validado', desc: 'Produto, operação e demanda comprovados' },
                { label: 'Estrutura pronta', desc: 'Time, sistemas e canais de venda ativos' },
                { label: 'Escala imediata', desc: 'Capital acelera o que já funciona' },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                  <div style={{
                    width: 20, height: 20, borderRadius: '50%', flexShrink: 0,
                    background: 'rgba(255,106,0,0.15)', border: '1px solid rgba(255,106,0,0.4)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <span style={{ color: '#FF6A00', fontSize: 8, fontWeight: 900 }}>✓</span>
                  </div>
                  <div>
                    <p style={{ color: '#FFFFFF', fontSize: 11, fontWeight: 700 }}>{item.label}</p>
                    <p style={{ color: '#8E8E93', fontSize: 10, lineHeight: 1.4 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <blockquote style={{
              borderLeft: '2px solid #FF6A00',
              paddingLeft: 12,
              marginBottom: 16,
            }}>
              <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 11, fontStyle: 'italic', lineHeight: 1.6 }}>
                "Construímos o ecossistema. Agora escalamos."
              </p>
            </blockquote>

            <a href="mailto:teclemotos@teclemotos.com" className="btn-primary"
              style={{ width: '100%', justifyContent: 'center', fontSize: 12 }}>
              <Mail size={13} />
              Solicitar Reunião Executiva
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
