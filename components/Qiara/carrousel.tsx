import { ReactElement, ReactNode, useRef, useState } from 'react'
import { range } from 'lodash'
import classNames from 'classnames'

export const CarrouselItem = ({
  className,
  children,
}: {
  className?: string
  children: ReactNode
}) => {
  return (
    <div
      className={classNames(
        className,
        'bg-neutral-100 rounded-lg w-72 md:w-96 h-full shrink-0 shadow-card-xs'
      )}>
      {children}
    </div>
  )
}

export const Carrousel = ({
  children = [],
}: {
  children?: ReactElement<Parameters<typeof CarrouselItem>>[]
}) => {
  // const { ref, inView } = useInView({ threshold: 1, initialInView: false })
  const carrouselRef = useRef<any>()
  const [selectedItem, setSelectedItem] = useState<number>(0)
  const itemsRef = useRef<any[]>([])
  // const changeSelectedItem = useMemo(() => debounce((nextSelectedItem: number) => {
  //   setSelectedItem(nextSelectedItem)
  // }, 50), [])
  // useEffect(() => {
  //   if (!carrouselRef.current) return
  //   const scrollListener = (evt: WheelEvent) => {
  //     console.log()
  //     if (evt.deltaX) evt.preventDefault()
  //     if (evt.deltaY) return
  //     carrouselRef.current.scrollLeft += evt.deltaX
  //     const nextSelectedItem = Math.floor(
  //       (carrouselRef.current.scrollLeft / carrouselRef.current.offsetWidth) *
  //         children.length
  //     )
  //     if (nextSelectedItem !== selectedItem)
  //       changeSelectedItem(
  //         nextSelectedItem >= children.length
  //           ? children.length - 1
  //           : nextSelectedItem < 0
  //           ? 0
  //           : nextSelectedItem
  //       )
  //   }
  //   carrouselRef.current.addEventListener('wheel', scrollListener)
  //   itemsRef.current = itemsRef.current.slice(0, children.length)
  //   return () => {
  //     carrouselRef.current && carrouselRef.current.removeEventListener('wheel', scrollListener)
  //   }
  // }, [children, selectedItem, changeSelectedItem])
  // const { setActive } = useInterval(() => {
  //   onChangeSelectedItem((selectedItem + 1) % children.length)
  // }, 5000, [selectedItem])
  // useEffect(() => {
  //   setActive(inView)
  // }, [inView, setActive])
  const onChangeSelectedItem = (i: any) => {
    if (i === selectedItem) return
    setSelectedItem(i)
    itemsRef.current[i].scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center',
    })
  }
  return (
    <div className="flex flex-col -mt-6">
      <div
        ref={carrouselRef}
        className="flex gap-8 flex-nowrap items-stretch overflow-x-auto md:overflow-x-hidden overflow-y-visible xl:px-[calc((100vw-1280px)/2)] p-6 py-8">
        {children.map((item, i) => (
          <div
            key={i}
            ref={(el) => (itemsRef.current[i] = el)}
            onClick={() => onChangeSelectedItem(i)}>
            {item}
          </div>
        ))}
      </div>
      <div className="hidden md:flex self-center flex-row -mt-2">
        {range(0, children.length).map((i) => (
          <div
            key={i}
            className="p-[5px] cursor-pointer"
            onClick={() => onChangeSelectedItem(i)}>
            <div
              key={i}
              className={classNames(
                'rounded h-[6px] bg-[#121212] transition-all',
                selectedItem === i ? 'w-[26px]' : 'w-[6px]'
              )}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

Carrousel.Item = CarrouselItem
