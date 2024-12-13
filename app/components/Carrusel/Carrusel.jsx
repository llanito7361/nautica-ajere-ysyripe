'use client'

import dynamic from "next/dynamic";

const ImageGallery = dynamic(() => import("react-image-gallery"), { ssr: false });

import "react-image-gallery/styles/css/image-gallery.css"
import {heberwithgroup,
  rabaska1,
  // rabaska2,
  travelgroup1,} from '../../assets/index.js'

const Carrusel  = () => {

  const images = [
    {original:  heberwithgroup , },
    {original:   rabaska1 , },

    // {original:  rabaska2 , },
    {original:  travelgroup1 , },
  ];

  return (
    <div
    //  style={{width:'100vh', margin: 'auto'}}
    >
      {/* <h3>carrusel</h3> */}
      <ImageGallery
        fullscreen={true}
       items={images}
        showPlayButton={false}
        showFullscreenButton={false}
        showNav={false}
        showBullets={true}
        autoPlay={true}
        slideInterval={5000}
      />
    </div>
  )
}

export default Carrusel;