import Banner from "../SharedComponentes/Banner";
import Category from "../SharedComponentes/Category";
import Featured from "../SharedComponentes/Featured";
import PopularMenu from "../SharedComponentes/PopularMenu";
import Testimonials from "../SharedComponentes/Testimonials";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;