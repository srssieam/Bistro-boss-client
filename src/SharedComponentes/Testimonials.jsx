import { useEffect, useState } from "react";
import SectionTitle from "./SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import qoute from '../assets/quote-left 1.png'

const Testimonials = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div className="max-w-screen-xl mx-auto my-16 px-6 lg:px-0">
            <SectionTitle subHeading={"What Our Clients Say"} heading={"testimonials"}></SectionTitle>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper my-8">

                {
                    reviews.map(review => <SwiperSlide key={reviews._id}>
                        <div className="text-center lg:px-36 space-y-5">
                            <Rating className="mx-auto"
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />
                            <img src={qoute} className="mx-auto" alt="" />
                            <p className="text-xl">{review.details}</p>
                            <h3 className="text-3xl text-yellow-600 ">{review.name}</h3>
                        </div>
                    </SwiperSlide>)
                }


            </Swiper>
        </div>
    );
};

export default Testimonials;