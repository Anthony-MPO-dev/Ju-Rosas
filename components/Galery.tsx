import React from 'react'
import Img1 from 'public/imgs/IMG_garden.jpg'
import Img2 from 'public/imgs/IMG_Flower3.jpeg'
import Img3 from 'public/imgs/IMG_Fower1.jpeg'
import GaleryImg from './GaleryImg';

function Galery() {
  return (
    <div>
        <p>Galeria</p>
        <GaleryImg galeryImg={Img1} />
    </div>
  )
}

export default Galery