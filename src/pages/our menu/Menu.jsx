import { Helmet } from "react-helmet-async";
import Cover from "../../SharedComponentes/Cover";
import banner3 from "../../assets/menu/banner3.jpg"
import SectionTitle from "../../SharedComponentes/SectionTitle";
import useMenu from "../../hooks/useMenu";
import MenuCategoryItems from "../../SharedComponentes/MenuCategoryItems";
import desertBg from "../../assets/menu/dessert-bg.jpeg"
import pizzaBg from "../../assets/menu/pizza-bg.jpg"
import saladBg from "../../assets/menu/salad-bg.jpg"
import soupBg from "../../assets/menu/soup-bg.jpg"

const Menu = () => {
    const [menu] = useMenu();
    const offer = menu.filter(item => item.category === 'offered')
    const dessert = menu.filter(item => item.category === 'dessert')
    const pizza = menu.filter(item => item.category === 'pizza')
    const salad = menu.filter(item => item.category === 'salad')
    const soups = menu.filter(item => item.category === 'soup')
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover img={banner3} covertitle={"OUR MENU"} coverDesc={"Would you like to try a dish?"}></Cover>
            <SectionTitle heading={"TODAY'S OFFER"} subHeading={"Don't miss"}></SectionTitle>

            {/* offered menu */}
            <MenuCategoryItems categoryName={offer}></MenuCategoryItems>
            

            {/* dessert menu */}
            <MenuCategoryItems 
            categoryName={dessert} 
            coverImg={desertBg}
            title="DESSERTS" 
            desc="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s,
             when an unknown printer took a galley of type and scrambled it to make a type
            specimen book."
            >
            </MenuCategoryItems>


            {/* pizza menu */}
            <MenuCategoryItems 
            categoryName={pizza} 
            coverImg={pizzaBg}
            title="PIZZA" 
            desc="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s,
             when an unknown printer took a galley of type and scrambled it to make a type
            specimen book."
            >
            </MenuCategoryItems>


            {/* salad menu */}
            <MenuCategoryItems 
            categoryName={salad} 
            coverImg={saladBg}
            title="SALADS" 
            desc="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s,
             when an unknown printer took a galley of type and scrambled it to make a type
            specimen book."
            >
            </MenuCategoryItems>


            {/* soup menu */}
            <MenuCategoryItems 
            categoryName={soups} 
            coverImg={soupBg}
            title="SOUPS" 
            desc="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s,
             when an unknown printer took a galley of type and scrambled it to make a type
            specimen book."
            >
            </MenuCategoryItems>
        </div>
    );
};

export default Menu;