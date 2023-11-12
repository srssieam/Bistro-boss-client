import FoodCard from "../../SharedComponentes/FoodCard";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './Shop.css'


// import required modules
import { Pagination } from 'swiper/modules';


const ShopCategoryItems = ({ items }) => {
    console.log(items.length)
    const totalPage = Math.ceil(items.length / 6);
    const pages = [...Array(totalPage).keys()];
    console.log(pages)
    console.log(totalPage)
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    };
    return (

        <Swiper
            pagination={pagination}
            modules={[Pagination]}
            className="mySwiper"
        >
            {pages.map((page) => (
                <SwiperSlide key={page}>
                    <div className="grid md:grid-cols-2 gap-8 lg:grid-cols-3 px-6 lg:px-0 my-10">
                        {items.slice(page * 6, (page + 1) * 6).map((item) => (
                            <FoodCard key={item._id} item={item}></FoodCard>
                        ))}
                    </div>
                </SwiperSlide>
            ))}

        </Swiper>
    );
};

export default ShopCategoryItems;