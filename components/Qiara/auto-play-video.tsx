import { useRef } from 'react'

export const AutoPlayVideo = ({ src }: { src: string }) => {
  const videoRef = useRef<HTMLVideoElement>(null)
  return (
    <video
      ref={videoRef}
      controls={false}
      autoPlay
      loop
      muted
      playsInline
      className="object-cover min-h-[260px] md:h-auto md:min-h-[360px]">
      <source src={src} type="video/mp4" />
    </video>
  )
}
