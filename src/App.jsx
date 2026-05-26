import { useState, useEffect, useCallback } from 'react'
import './index.css'
import SlideNav from './components/SlideNav'
import SplashScreen from './components/SplashScreen'
import S01Cover      from './slides/S01Cover'
import S02Historia   from './slides/S02Historia'
import S03Fundadores from './slides/S03Fundadores'
import S04Ecossistema from './slides/S04Ecossistema'
import S05Estrutura  from './slides/S05Estrutura'
import S06Escala     from './slides/S06Escala'
import S07Gargalo    from './slides/S07Gargalo'
import S08Convite    from './slides/S07Convite'

const SLIDES = [
  S01Cover, S02Historia, S03Fundadores, S04Ecossistema,
  S05Estrutura, S06Escala, S07Gargalo, S08Convite,
]

const SLIDE_TITLES = [
  'Capa', 'Nossa História', 'Corpo Diretor', 'Ecossistema',
  'Estrutura', 'Calculadora', 'O Gargalo', 'Visão Global',
]

// Canvas fixo 16:9 — slides sempre renderizados nesse tamanho e escalados para caber na tela
const CANVAS_W = 1280
const CANVAS_H = 720

export default function App() {
  const [showSplash, setShowSplash] = useState(true)
  const [current, setCurrent]       = useState(0)
  const [direction, setDirection]   = useState(1)
  const [animating, setAnimating]   = useState(false)
  const [scale, setScale]           = useState(1)
  const [touchStartX, setTouchStartX] = useState(null)
  const [touchStartY, setTouchStartY] = useState(null)

  // Calcula escala para que o canvas caiba na viewport mantendo 16:9
  useEffect(() => {
    const update = () => {
      const sx = window.innerWidth  / CANVAS_W
      const sy = window.innerHeight / CANVAS_H
      setScale(Math.min(sx, sy))
    }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  const goTo = useCallback((idx) => {
    if (animating || idx === current) return
    setDirection(idx > current ? 1 : -1)
    setAnimating(true)
    setTimeout(() => { setCurrent(idx); setAnimating(false) }, 250)
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

  const handleTouchStart = useCallback((e) => {
    setTouchStartX(e.touches[0].clientX)
    setTouchStartY(e.touches[0].clientY)
  }, [])

  const handleTouchEnd = useCallback((e) => {
    if (touchStartX === null) return
    const dx = touchStartX - e.changedTouches[0].clientX
    const dy = touchStartY - e.changedTouches[0].clientY
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) dx > 0 ? next() : prev()
    setTouchStartX(null)
    setTouchStartY(null)
  }, [touchStartX, touchStartY, next, prev])

  const CurrentSlide = SLIDES[current]

  return (
    <div style={{
      width: '100vw', height: '100vh',
      background: '#000000',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      overflow: 'hidden',
    }}>
      {showSplash && <SplashScreen onDone={() => setShowSplash(false)} />}

      {/* Canvas fixo 1280×720 escalado para caber na tela */}
      <div style={{
        width: CANVAS_W,
        height: CANVAS_H,
        transform: `scale(${scale})`,
        transformOrigin: 'center center',
        position: 'relative',
        overflow: 'hidden',
        flexShrink: 0,
      }}>
        <div
          key={current}
          style={{
            width: '100%', height: '100%',
            animation: `${direction > 0 ? 'slideInRight' : 'slideInLeft'} 0.35s ease-out forwards`,
          }}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <CurrentSlide />
        </div>

        <SlideNav
          current={current}
          total={SLIDES.length}
          titles={SLIDE_TITLES}
          onNext={next}
          onPrev={prev}
          onGoTo={goTo}
        />
      </div>

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
