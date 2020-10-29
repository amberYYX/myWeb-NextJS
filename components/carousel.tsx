import dynamic from 'next/dynamic';
import { useState } from 'react';
import { Dots } from '@brainhubeu/react-carousel';


const Carousel = dynamic(
  () => import('@brainhubeu/react-carousel'),
  { ssr: false }
 );

// const { default: Carousel, Dots } = dynamic(
//  () => require('@brainhubeu/react-carousel'),
//  { ssr: false },
// );

export default function MyCarousel() {
  const [value, setValue] = useState(0);

  return (
    <>
    <Carousel
      value={value}
      onChange={setValue}
    >
        <img src='/images/focus.jpeg'/>
        <img src='/images/inMilan.jpeg' />
        <img src='/images/profile.png' />
    </Carousel>
    <Dots 
      value={value} 
      onChange={setValue} 
    />
  </>
  ); 
  }