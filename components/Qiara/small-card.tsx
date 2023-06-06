import Image from 'next/image'

export const SmallCard = ({
  code,
  name,
  description,
  pictureSrc,
}: {
  code: string
  name: string
  description: string
  pictureSrc?: string
}) => (
  <div key={code} className="group flex flex-col gap-6 w-60">
    <div className="relative overflow-hidden rounded-3xl h-80 bg-neutral-300">
      {pictureSrc && (
        <Image
          alt={name}
          src={pictureSrc}
          fill
          className="transition-all object-cover object-center group-hover:scale-110"
        />
      )}
    </div>
    <div className="flex flex-col pr-6 gap-1">
      <div className="text-lg font-medium">{name}</div>
      <div
        className="text-neutral-500 group-hover:text-neutral-700 transition-colors"
      >
        {description}
      </div>
    </div>
  </div>
)
