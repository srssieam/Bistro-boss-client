import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';

import slide1 from '../assets/home/slide1.jpg'
import slide2 from '../assets/home/slide2.jpg'
import slide3 from '../assets/home/slide3.jpg'
import slide4 from '../assets/home/slide4.jpg'
import slide5 from '../assets/home/slide5.jpg'
import SectionTitle from './SectionTitle';

const Category = () => {
  return (
    <div className='max-w-7xl mx-auto px-6 lg:px-0'>
      <SectionTitle heading={"order online"} subHeading={"From 11:00am to 10:00pm"}></SectionTitle>
      <Swiper className=" mySwiper mb-9"
        slidesPerView={3}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 10
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 10
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 15
          }
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
      >
        <SwiperSlide><img className='w-full h-full object-cover' src={slide1} alt="" /><h3 className='text-4xl text-center -mt-20 uppercase drop-shadow-md text-white'>Salad</h3></SwiperSlide>
        <SwiperSlide><img className='w-full h-full object-cover' src={slide2} alt="" /><h3 className='text-4xl text-center -mt-20 uppercase drop-shadow-md text-white'>Pizza</h3></SwiperSlide>
        <SwiperSlide><img className='w-full h-full object-cover' src={slide3} alt="" /><h3 className='text-4xl text-center -mt-20 uppercase drop-shadow-md text-white'>Soup</h3></SwiperSlide>
        <SwiperSlide><img className='w-full h-full object-cover' src={slide4} alt="" /><h3 className='text-4xl text-center -mt-20 uppercase drop-shadow-md text-white'>desserts</h3></SwiperSlide>
        <SwiperSlide><img className='w-full h-full object-cover' src={slide5} alt="" /><h3 className='text-4xl text-center -mt-20 uppercase drop-shadow-md text-white'>Drinks</h3></SwiperSlide>

      </Swiper>
    </div>
  );
};

export default Category;