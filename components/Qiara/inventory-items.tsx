

import Link from 'next/link'
import { SmallCard } from './small-card'
import { HorizontalList } from '@/layout/block/horizontal-list'

export const InventoryItems = ({
  className,
  items,
}: {
  className?: string
  items: any[]
}) => {
  return (
    <HorizontalList className={className}>
      {items
        .map((item) => (
          <Link
            className="cursor-pointer"
            key={item.code}
            href={`/products/${item.code.toLowerCase()}`}>
            <SmallCard
              code={item.code}
              pictureSrc={item.image.url}
              description={item.description}
              name={item.title}
            />
          </Link>
        ))}
    </HorizontalList>
  )
}
