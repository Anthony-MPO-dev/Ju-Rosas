import Image, { StaticImageData } from 'next/image'
import React from 'react'

function GaleryImg({galeryImg} : {galeryImg: StaticImageData}) {
  return (
    <div>
        <Image src={galeryImg} alt='/' />
    </div>
  )
}

export default GaleryImg