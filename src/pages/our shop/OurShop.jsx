import { Helmet } from "react-helmet-async";
import Cover from "../../SharedComponentes/Cover";
import banner2 from "../../assets/shop/banner2.jpg"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import useMenu from "../../hooks/useMenu";
import ShopCategoryItems from "./ShopCategoryItems";

const OurShop = () => {
    const [tabIdx, setTabIdx] = useState(0);
    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === 'dessert')
    const pizza = menu.filter(item => item.category === 'pizza')
    const salad = menu.filter(item => item.category === 'salad')
    const soups = menu.filter(item => item.category === 'soup')
    const drinks = menu.filter(item => item.category === 'drinks')

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Our shop</title>
            </Helmet>
            <Cover img={banner2} covertitle={"OUR SHOP"} coverDesc={"Would you like to try a dish?"}></Cover>
            <div className="max-w-screen-xl mx-auto">
            <Tabs selectedTabClassName="bg-transparent text-yellow-500 my-10" defaultIndex={tabIdx} onSelect={(index) => setTabIdx(index)}>
                <TabList className="text-center font-semibold">
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Dessert</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Drinks</Tab>
                </TabList>

                <TabPanel>
                    <ShopCategoryItems items={salad}></ShopCategoryItems>
                </TabPanel>
                <TabPanel>
                    <ShopCategoryItems items={pizza}></ShopCategoryItems>
                </TabPanel>
                <TabPanel>
                    <ShopCategoryItems items={dessert}></ShopCategoryItems>
                </TabPanel>
                <TabPanel>
                    <ShopCategoryItems items={soups}></ShopCategoryItems>
                </TabPanel>
                <TabPanel>
                    <ShopCategoryItems items={drinks}></ShopCategoryItems>
                </TabPanel>
            </Tabs>
            </div>
        </div>
    );
};

export default OurShop;