import { useState } from 'react'
import { ChevronLeft, ChevronRight, LayoutGrid, X } from 'lucide-react'
import LogoTMEletricas from './LogoTMEletricas'
import LogoTecle from './LogoTecle'

export default function SlideNav({ current, total, titles, onNext, onPrev, onGoTo }) {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <>
      {/* Bottom nav bar — fixed no viewport real (fora do canvas escalado) */}
      <div
        style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 24px',
          height: 56,
          zIndex: 50,
          background: 'linear-gradient(to top, #0A0A0A 55%, rgba(10,10,10,0.85) 80%, transparent)',
        }}
      >
        {/* Prev */}
        <button
          onClick={onPrev}
          disabled={current === 0}
          style={{ touchAction: 'manipulation' }}
          className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium transition-all
            disabled:opacity-20 disabled:cursor-not-allowed
            text-[#AEAEB2] hover:text-white hover:bg-[#2C2C2E]"
        >
          <ChevronLeft size={15} />
          <span>Anterior</span>
        </button>

        {/* Center: counter + dots */}
        <div className="flex flex-col items-center gap-1.5">
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="flex items-center gap-1.5 text-xs text-[#8E8E93] hover:text-[#FF6B00] transition-colors font-mono"
          >
            <LayoutGrid size={12} />
            {String(current + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
          </button>

          {/* Dots */}
          <div className="flex gap-1.5 items-center">
            {Array.from({ length: total }).map((_, i) => {
              const isActive = i === current
              return (
                <button
                  key={i}
                  onClick={() => onGoTo(i)}
                  className="rounded-full transition-all duration-300"
                  style={{
                    width:  isActive ? 16 : 5,
                    height: 5,
                    background: isActive ? '#FF6B00' : '#3A3A3C',
                  }}
                />
              )
            })}
          </div>
        </div>

        {/* Next */}
        <button
          onClick={onNext}
          disabled={current === total - 1}
          style={{ touchAction: 'manipulation' }}
          className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium transition-all
            disabled:opacity-20 disabled:cursor-not-allowed
            text-[#AEAEB2] hover:text-white hover:bg-[#2C2C2E]"
        >
          <span>Próximo</span>
          <ChevronRight size={15} />
        </button>
      </div>

      {/* Slide menu overlay */}
      {showMenu && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 40,
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'center',
            paddingBottom: 72,
            background: 'rgba(0,0,0,0.7)',
          }}
          onClick={() => setShowMenu(false)}
        >
          <div
            className="w-full max-w-3xl mx-4 rounded-2xl border border-[#2C2C2E] overflow-hidden"
            style={{ background: '#1C1C1E' }}
            onClick={e => e.stopPropagation()}
          >
            <div className="px-6 py-4 border-b border-[#2C2C2E] flex items-center justify-between">
              <span className="text-white font-semibold text-sm">Navegar por slide</span>
              <button onClick={() => setShowMenu(false)} className="text-[#8E8E93] hover:text-white transition-colors p-1">
                <X size={16} />
              </button>
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-0 max-h-64 overflow-y-auto">
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

      {/* Top: logos — fixed no viewport real */}
      <div
        style={{ position: 'fixed', top: 12, left: 16, zIndex: 50 }}
        className="flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity"
      >
        <LogoTMEletricas size="xs" />
        <div className="w-px h-4" style={{ background: '#2C2C2E' }} />
        <LogoTecle size="xs" />
      </div>

      <div
        style={{ position: 'fixed', top: 12, right: 16, zIndex: 50 }}
        className="text-[#3A3A3C] text-xs font-mono select-none pointer-events-none"
      >
        ← → navegar
      </div>
    </>
  )
}
