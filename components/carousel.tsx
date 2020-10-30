import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';


// const Carousel = dynamic(
//   () => import('@brainhubeu/react-carousel'),
//   { ssr: false }
//  );


const MyCarousel = () => (
  <Carousel plugins={['arrows']}>
    <img src='/images/focus.jpeg'/>
    <img src='/images/inMilan.jpeg' />
    <img src='/images/profile.png' />
  </Carousel>
);
// export default function MyCarousel() {
//   const [value, setValue] = useState(0);

//   return (
//     <>
//     <Carousel
//       value={value}
//       onChange={setValue}
//     >
//         <img src='/images/focus.jpeg'/>
//         <img src='/images/inMilan.jpeg' />
//         <img src='/images/profile.png' />
//     </Carousel>
//     <Dots
//       value={value}
//       onChange={setValue}
//     />
//   </>
//   );
//   }

export default MyCarousel;