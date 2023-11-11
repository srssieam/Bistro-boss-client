import SectionTitle from "./SectionTitle";
import featuredImg from "../assets/home/featured.jpg"


const Featured = () => {
    return (
        <div style={{backgroundImage:`url(${featuredImg})`, backgroundAttachment:'fixed'}} className="bg-no-repeat bg-cover w-full py-32 text-white bg-[#00000080] bg-blend-darken">
            <SectionTitle subHeading={"Check it out"} heading={"FROM OUR MENU"}></SectionTitle>
            <div className="md:flex md:justify-center items-center gap-9 max-w-screen-xl mx-auto px-6 lg:px-0">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="space-y-5">
                    <p className="text-2xl uppercase">Aug 20, 2023</p>
                    <p className=" text-xl">Where can i get some?</p>
                    <p className="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    <button className="btn bg-transparent text-xl font-semibold border-0 border-b-4 border-b-white text-white shadow-xl">Read more</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;