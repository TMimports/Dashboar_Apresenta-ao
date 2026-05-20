import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import LogoTMEletricas from './LogoTMEletricas'
import LogoTecle from './LogoTecle'

export default function SlideNav({ current, total, titles, onNext, onPrev, onGoTo }) {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <>
      {/* Bottom nav bar */}
      <div className="fixed bottom-0 left-0 right-0 flex items-center justify-between px-8 py-4 z-50"
        style={{ background: 'linear-gradient(to top, rgba(10,10,10,0.95), transparent)' }}>

        {/* Prev */}
        <button
          onClick={onPrev}
          disabled={current === 0}
          className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all
            disabled:opacity-20 disabled:cursor-not-allowed
            text-[#AEAEB2] hover:text-white hover:bg-[#2C2C2E]"
        >
          <ChevronLeft size={16} />
          Anterior
        </button>

        {/* Dots + counter */}
        <div className="flex flex-col items-center gap-2">
          {/* Slide counter */}
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="text-xs text-[#8E8E93] hover:text-[#FF6B00] transition-colors font-mono"
          >
            {String(current + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
          </button>

          {/* Dots */}
          <div className="flex gap-1.5 items-center">
            {Array.from({ length: total }).map((_, i) => (
              <button
                key={i}
                onClick={() => onGoTo(i)}
                className="rounded-full transition-all duration-300"
                style={{
                  width:  i === current ? 20 : 6,
                  height: 6,
                  background: i === current ? '#FF6B00' : '#3A3A3C',
                }}
              />
            ))}
          </div>
        </div>

        {/* Next */}
        <button
          onClick={onNext}
          disabled={current === total - 1}
          className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all
            disabled:opacity-20 disabled:cursor-not-allowed
            text-[#AEAEB2] hover:text-white hover:bg-[#2C2C2E]"
        >
          Próximo
          <ChevronRight size={16} />
        </button>
      </div>

      {/* Slide menu overlay */}
      {showMenu && (
        <div
          className="fixed inset-0 z-40 flex items-end justify-center pb-20"
          onClick={() => setShowMenu(false)}
        >
          <div
            className="w-full max-w-3xl mx-4 rounded-2xl border border-[#2C2C2E] overflow-hidden"
            style={{ background: '#1C1C1E' }}
            onClick={e => e.stopPropagation()}
          >
            <div className="px-6 py-4 border-b border-[#2C2C2E] flex items-center justify-between">
              <span className="text-white font-semibold text-sm">Navegar</span>
              <button onClick={() => setShowMenu(false)} className="text-[#8E8E93] hover:text-white text-xl leading-none">×</button>
            </div>
            <div className="grid grid-cols-4 gap-0">
              {titles.map((title, i) => (
                <button
                  key={i}
                  onClick={() => { onGoTo(i); setShowMenu(false) }}
                  className="px-4 py-3 text-left text-xs transition-all border-b border-r border-[#2C2C2E] hover:bg-[#2C2C2E]"
                  style={{ color: i === current ? '#FF6B00' : '#AEAEB2' }}
                >
                  <span className="block font-mono text-[10px] mb-0.5" style={{ color: i === current ? '#FF6B00' : '#3A3A3C' }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  {title}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Top: logos + keyboard hint */}
      <div className="fixed top-4 left-6 z-50 flex items-center gap-4 opacity-60 hover:opacity-100 transition-opacity">
        <LogoTMEletricas size="sm" />
        <div className="w-px h-5" style={{ background: '#2C2C2E' }} />
        <LogoTecle size="sm" />
      </div>
      <div className="fixed top-4 right-6 z-50 text-[#3A3A3C] text-xs font-mono select-none pointer-events-none">
        ← → navegar
      </div>
    </>
  )
}
