'use client'

import dynamic from "next/dynamic";

const ImageGallery = dynamic(() => import("react-image-gallery"), { ssr: false });
// import ReactImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css"
// import {heberwithgroup,
//   // rabaska1,
//   // rabaska2,
//   travelgroup1,fogon} from '../../assets/index.js'


const Carrusel  = () => {
  const images = [
    { 
      original: "/assets/fogon.jpg", 
      // description: "Fogón" 
    },
    { 
      original: "/assets/papuchoSmyling.png", 
      // description: "Fogón" 
    },
    { 
      original: "/assets/travelgroup1.png", 
      // description: "Fogón" 
    },
    ,
    { 
      original: "/assets/ocaso2.jpg", 
      // description: "Fogón" 
    },
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