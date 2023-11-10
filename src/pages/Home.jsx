import Banner from "../SharedComponentes/Banner";
import Category from "../SharedComponentes/Category";
import PopularMenu from "../SharedComponentes/PopularMenu";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <PopularMenu></PopularMenu>
        </div>
    );
};

export default Home;