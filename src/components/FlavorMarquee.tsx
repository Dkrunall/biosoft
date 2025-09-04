import React, { useMemo, useState } from 'react'

interface FlavorItem { name: string; image: string }

interface FlavorMarqueeProps {
  speedSeconds?: number
  direction?: 'left' | 'right'
  className?: string
}

const DEFAULT_FLAVORS: FlavorItem[] = [
  { name: 'Banana Split', image: '/favlour/f1.webp' },
  { name: 'Mint Chocolate', image: '/favlour/f2.webp' },
  { name: 'Orange Cream', image: '/favlour/f3.webp' },
  { name: 'Brownie', image: '/favlour/f4.webp' },
  { name: 'Blueberry', image: '/favlour/f5.webp' },
]

const FlavorCard: React.FC<{ item: FlavorItem }> = ({ item }) => {
  return (
    <div className="flex items-center gap-5 px-5 md:px-8 py-3 select-none">
      <div className="h-[80px] w-[80px] sm:h-[92px] sm:w-[92px] md:h-[104px] md:w-[104px] bg-transparent rounded-lg overflow-hidden flex items-center justify-center">
        <img src={item.image} alt={item.name} className="max-h-full max-w-full object-contain rounded-2xl" />
      </div>
      <div className="text-black dark:text-black font-extrabold tracking-tight text-2xl sm:text-3xl md:text-4xl whitespace-nowrap">
        {item.name}
      </div>
    </div>
  )
}

const FlavorMarquee: React.FC<FlavorMarqueeProps> = ({
  speedSeconds = 48,
  direction = 'left',
  className = '',
}) => {
  const [isPaused, setIsPaused] = useState(false)

  const items = DEFAULT_FLAVORS
  // Duplicate enough times to ensure seamless width, fewer repeats = narrower track = slower pixels/sec for same duration
  const repeats = 4
  const segments = useMemo(
    () => Array.from({ length: repeats }).map((_, i) => (
      <React.Fragment key={i}>
        {items.map((it, idx) => (
          <FlavorCard key={`${i}-${idx}`} item={it} />
        ))}
      </React.Fragment>
    )),
    [items],
  )

  const animationDirection = direction === 'right' ? 'reverse' : 'normal'
  const styleVars = {
    ['--duration' as any]: `${speedSeconds}s`,
    ['--direction' as any]: animationDirection,
  } as React.CSSProperties

  return (
    <section className={`mx-auto w-[96%] sm:w-[95%] md:w-[94%] lg:w-[92%] max-w-[1280px] ${className}`}>
      <div
        className={`relative rounded-3xl border border-black shadow-lg overflow-hidden bg-white dark:bg-white text-black dark:text-black`}
        style={{ backgroundColor: '#ffffff' }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="relative h-[120px] sm:h-[130px] md:h-[140px] flex items-center">
          {/* Marquee content */}
          <div className={`marquee marquee-x h-full ${isPaused ? 'paused' : ''}`} style={styleVars}>
            <div className="marquee-track" aria-hidden={false}>
              {segments}
            </div>
            <div className="marquee-track" aria-hidden>
              {segments}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FlavorMarquee