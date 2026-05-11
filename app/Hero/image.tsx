import react from 'react'
import Image from "next/image";

export default function ImageComponent() {
  return (
    <div className='relative w-full h-screen flex items-baseline-last justify-center pb-12'>
      <Image
        src="/karthick3.png"
        alt="Karthick Raja"
        width={480}
        height={800}
        className="brightness-90 blur-[0.4px] hover:blur-0 transition-all duration-500 smooth-mask"
      />
    </div>
  )
}