import { useState } from 'react'

const competencias = [
  { area: 'Varejo', detail: 'Gestão de múltiplos pontos de venda e distribuição' },
  { area: 'Tecnologia', detail: 'Sistemas, IA e arquitetura de segurança em TI' },
  { area: 'Assistência Técnica', detail: 'Padrão técnico proprietário e equipe capacitada' },
  { area: 'Logística', detail: 'Cadeia de suprimentos e gestão de estoque' },
  { area: 'Importação', detail: 'Containers, Trade Finance e despacho aduaneiro' },
  { area: 'Expansão', detail: 'Franquias, governança de escala e due diligence' },
]

function DiretoesImagem() {
  const [imgError, setImgError] = useState(false)

  if (!imgError) {
    return (
      <img
        src="/assets/images/diretores_executivos.jpg"
        alt="Corpo Diretor TM GROUP"
        onError={() => setImgError(true)}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center top',
          borderRadius: 12,
          filter: 'brightness(0.92) contrast(1.05)',
        }}
      />
    )
  }

  /* Fallback elegante enquanto a imagem não é adicionada */
  return (
    <div className="w-full h-full flex flex-col items-center justify-center rounded-xl"
      style={{ background: 'rgba(255,107,0,0.05)', border: '1px dashed rgba(255,107,0,0.3)' }}>
      <div className="w-16 h-16 rounded-full flex items-center justify-center mb-3 font-black text-3xl"
        style={{ background: 'rgba(255,107,0,0.15)', border: '2px solid rgba(255,107,0,0.5)', color: '#FF6B00' }}>
        F
      </div>
      <p style={{ color: '#FF6B00', fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
        Felipe Henrique Silva
      </p>
      <p style={{ color: '#8E8E93', fontSize: 10, marginTop: 4 }}>Co-fundador & Diretor Executivo</p>
      <p style={{ color: '#3A3A3C', fontSize: 9, marginTop: 12, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
        Adicionar: public/assets/images/diretores_executivos.jpg
      </p>
    </div>
  )
}

export default function S03Fundadores() {
  return (
    <div className="relative w-full h-full flex flex-col overflow-hidden slide-pad"
      style={{ background: '#0A0A0A' }}>

      <div className="absolute top-0 left-0 right-0 h-0.5 orange-line" />
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 35% 55% at 15% 50%, rgba(255,107,0,0.04) 0%, transparent 65%)',
      }} />

      <div className="mb-4 md:mb-5 animate-fade-up">
        <p className="text-[#FF6B00] text-xs font-medium tracking-widest uppercase mb-2">03 / Corpo Diretor</p>
        <h2 className="slide-title text-white">Fundadores & Matriz de Execução</h2>
      </div>

      <div className="slide-row flex-1 min-h-0">

        {/* Foto real dos diretores */}
        <div
          className="slide-sidebar-lg flex flex-col gap-4 animate-slide-left delay-200"
          style={{ minHeight: 220 }}>

          {/* Container da imagem */}
          <div className="flex-1 rounded-2xl overflow-hidden glow-orange"
            style={{
              border: '1px solid rgba(255,107,0,0.35)',
              minHeight: 180,
              maxHeight: 340,
            }}>
            <DiretoesImagem />
          </div>

          {/* Quote abaixo da imagem */}
          <div className="p-4 rounded-xl" style={{ background: '#1C1C1E', border: '1px solid #2C2C2E' }}>
            <blockquote className="border-l-2 border-[#FF6B00] pl-3">
              <p className="text-white font-semibold text-sm italic leading-relaxed">
                "Somos operadores do setor, não investidores oportunistas."
              </p>
            </blockquote>
          </div>
        </div>

        {/* Perfil + Competências */}
        <div className="flex-1 flex flex-col gap-3 animate-slide-right delay-300">

          {/* Card executivo Felipe */}
          <div className="p-4 sm:p-5 rounded-2xl"
            style={{ background: 'rgba(255,107,0,0.06)', border: '1px solid rgba(255,107,0,0.3)' }}>
            <p className="text-white font-black text-base mb-0.5">Felipe Henrique Silva</p>
            <p style={{ color: '#FF6B00', fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 12 }}>
              Co-fundador & Diretor Executivo
            </p>
            <div className="space-y-2">
              {[
                'Graduado em Sistemas de Informação',
                'Pós-Graduado em Segurança da Informação',
                'MBA em Arquitetura de Segurança em TI',
              ].map((f, i) => (
                <div key={i} className="flex items-start gap-2">
                  <div className="w-1 flex-shrink-0 rounded-full mt-1.5" style={{ background: '#FF6B00', height: 12 }} />
                  <p className="text-[#AEAEB2] text-xs">{f}</p>
                </div>
              ))}
            </div>
            <div className="mt-3 pt-3 border-t" style={{ borderColor: 'rgba(255,107,0,0.15)' }}>
              <p className="text-[#8E8E93] text-xs leading-relaxed">
                Quase <strong className="text-white">10 anos</strong> de atuação prática unificando varejo, tecnologia, assistência técnica, logística, importação e expansão.
              </p>
            </div>
          </div>

          {/* Matriz de competências */}
          <div className="flex-1">
            <p className="text-[10px] text-[#8E8E93] uppercase tracking-widest font-medium mb-2">Domínios de Competência</p>
            <div className="grid grid-cols-2 gap-2">
              {competencias.map((c, i) => (
                <div key={i} className="p-3 rounded-xl card-premium">
                  <p className="text-white font-bold text-xs mb-1">{c.area}</p>
                  <p className="text-[#8E8E93] text-[10px] leading-snug">{c.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
