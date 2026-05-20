import { useState, useEffect, useCallback } from 'react'
import './index.css'
import SlideNav from './components/SlideNav'
import SplashScreen from './components/SplashScreen'
import S01Cover from './slides/S01Cover'
import S02Momento from './slides/S02Momento'
import S03QuemSomos from './slides/S03QuemSomos'
import S04Ecossistema from './slides/S04Ecossistema'
import S05Distribuicao from './slides/S05Distribuicao'
import S06Autoridade from './slides/S06Autoridade'
import S07Qualidade from './slides/S07Qualidade'
import S08AssistenciaTecnica from './slides/S08AssistenciaTecnica'
import S09Tecnologia from './slides/S09Tecnologia'
import S10Estrutura from './slides/S10Estrutura'
import S11UnitEconomics from './slides/S11UnitEconomics'
import S12Oportunidade from './slides/S12Oportunidade'
import S13Tese from './slides/S13Tese'
import S14ImpactoEconomico from './slides/S14ImpactoEconomico'
import S15RiscoControlado from './slides/S15RiscoControlado'
import S16OportunidadeEstrategica from './slides/S16OportunidadeEstrategica'
import S17OQueBuscamos from './slides/S17OQueBuscamos'
import S18PorQueTM from './slides/S18PorQueTM'
import S19Encerramento from './slides/S19Encerramento'

const SLIDES = [
  S01Cover, S02Momento, S03QuemSomos, S04Ecossistema, S05Distribuicao,
  S06Autoridade, S07Qualidade, S08AssistenciaTecnica, S09Tecnologia,
  S10Estrutura, S11UnitEconomics, S12Oportunidade, S13Tese,
  S14ImpactoEconomico, S15RiscoControlado, S16OportunidadeEstrategica,
  S17OQueBuscamos, S18PorQueTM, S19Encerramento
]

const SLIDE_TITLES = [
  'Capa', 'O Momento', 'Quem Somos', 'Ecossistema', 'Distribuição',
  'Autoridade', 'Qualidade', 'Assistência Técnica', 'Tecnologia',
  'Estrutura', 'Unit Economics', 'Oportunidade', 'Tese R$5M',
  'Impacto Econômico', 'Risco Controlado', 'Oport. Estratégica',
  'O Que Buscamos', 'Por Que TM', 'Encerramento'
]

export default function App() {
  const [showSplash, setShowSplash] = useState(true)
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)
  const [animating, setAnimating] = useState(false)

  const goTo = useCallback((idx) => {
    if (animating || idx === current) return
    setDirection(idx > current ? 1 : -1)
    setAnimating(true)
    setTimeout(() => {
      setCurrent(idx)
      setAnimating(false)
    }, 250)
  }, [animating, current])

  const next = useCallback(() => goTo(Math.min(current + 1, SLIDES.length - 1)), [current, goTo])
  const prev = useCallback(() => goTo(Math.max(current - 1, 0)), [current, goTo])

  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ') { e.preventDefault(); next() }
      if (e.key === 'ArrowLeft'  || e.key === 'ArrowUp')  { e.preventDefault(); prev() }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [next, prev])

  const CurrentSlide = SLIDES[current]

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-[#0A0A0A]">
      {showSplash && <SplashScreen onDone={() => setShowSplash(false)} />}
      {/* Slide content */}
      <div
        key={current}
        className="w-full h-full"
        style={{
          animation: `${direction > 0 ? 'slideInRight' : 'slideInLeft'} 0.35s ease-out forwards`,
        }}
      >
        <CurrentSlide />
      </div>

      {/* Navigation overlay */}
      <SlideNav
        current={current}
        total={SLIDES.length}
        titles={SLIDE_TITLES}
        onNext={next}
        onPrev={prev}
        onGoTo={goTo}
      />

      <style>{`
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(40px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-40px); }
          to   { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </div>
  )
}
