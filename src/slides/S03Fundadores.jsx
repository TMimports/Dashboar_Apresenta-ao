import { useState } from 'react'

const diretores = [
  {
    nome: 'Felipe Henrique Silva',
    cargo: 'CEO',
    cor: '#FF6B00',
    desc: 'Visionário fundador. Graduado em Sistemas de Informação, MBA em Segurança em TI. Responsável pela visão estratégica e tecnologia do grupo.',
  },
  {
    nome: 'Mauro Ferreira',
    cargo: 'CFO',
    cor: '#FF8C33',
    desc: 'Co-fundador da TM Elétricas. Gestão financeira, estrutura de importação e relacionamento com fornecedores internacionais.',
  },
  {
    nome: 'Silas Ramalho',
    cargo: 'COO',
    cor: '#AEAEB2',
    desc: 'Fortaleceu a estrutura operacional da marca e viabilizou o início da importação direta de modelos exclusivos.',
  },
]

export default function S03Fundadores() {
  const [imgErr, setImgErr] = useState(false)

  return (
    <div
      className="relative w-full h-full flex flex-col overflow-hidden"
      style={{ background: '#000000', padding: '28px 40px 20px' }}
    >
      <div className="absolute top-0 left-0 right-0 h-0.5 orange-line" />

      {/* Cabeçalho compacto */}
      <div className="animate-fade-up mb-3" style={{ flexShrink: 0 }}>
        <p className="text-[#FF6B00] text-xs font-medium tracking-widest uppercase mb-1">
          03 / Corpo Diretor
        </p>
        <h2 className="slide-title text-white">Sócios Fundadores & Governança</h2>
        <p className="text-[#8E8E93] text-xs mt-1">
          Operadores do setor com quase 10 anos de execução prática — não investidores de oportunidade.
        </p>
      </div>

      {/* Imagem INTEIRA em destaque — contain para não cortar nada */}
      <div
        className="animate-fade-in delay-200"
        style={{
          flex: 1,
          minHeight: 0,
          width: '100%',
          position: 'relative',
          borderRadius: 16,
          overflow: 'hidden',
          border: '1px solid rgba(255,107,0,0.3)',
          background: '#0A0A0A',
        }}
      >
        {!imgErr ? (
          <img
            src="/assets/images/tv03.jpg"
            alt="Sócios Fundadores TM GROUP"
            onError={() => setImgErr(true)}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',   /* CONTAIN = imagem inteira, sem corte */
              objectPosition: 'center',
              display: 'block',
            }}
          />
        ) : (
          /* Fallback manual se a imagem falhar */
          <div
            style={{
              width: '100%', height: '100%',
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 32,
              background: '#0A0A0A',
            }}
          >
            {diretores.map((d, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div style={{
                  width: 80, height: 80, borderRadius: '50%', margin: '0 auto 12px',
                  background: 'rgba(255,107,0,0.1)', border: `2px solid ${d.cor}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 28, fontWeight: 900, color: d.cor,
                }}>
                  {d.nome[0]}
                </div>
                <p style={{ color: '#FFFFFF', fontWeight: 800, fontSize: 13 }}>{d.nome}</p>
                <p style={{ color: d.cor, fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginTop: 4 }}>{d.cargo}</p>
              </div>
            ))}
          </div>
        )}

        {/* Glow de borda */}
        <div style={{
          position: 'absolute', inset: 0, borderRadius: 16,
          boxShadow: 'inset 0 0 40px rgba(255,107,0,0.08)',
          pointerEvents: 'none',
        }} />
      </div>

      {/* 3 cards dos diretores abaixo da foto */}
      <div
        className="animate-fade-up delay-400"
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gap: 12,
          marginTop: 12,
          flexShrink: 0,
        }}
      >
        {diretores.map((d, i) => (
          <div
            key={i}
            style={{
              background: i === 0 ? 'rgba(255,107,0,0.07)' : '#0D0D0D',
              border: `1px solid ${i === 0 ? 'rgba(255,107,0,0.35)' : '#1A1A1A'}`,
              borderRadius: 12,
              padding: '10px 14px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 5 }}>
              <span style={{
                fontSize: 9, fontWeight: 800, letterSpacing: '0.14em',
                textTransform: 'uppercase', color: d.cor,
                background: `${d.cor}18`,
                border: `1px solid ${d.cor}44`,
                padding: '2px 7px', borderRadius: 4,
              }}>
                {d.cargo}
              </span>
              <p style={{ color: '#FFFFFF', fontWeight: 700, fontSize: 11 }}>{d.nome}</p>
            </div>
            <p style={{ color: '#8E8E93', fontSize: 10, lineHeight: 1.5 }}>{d.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
