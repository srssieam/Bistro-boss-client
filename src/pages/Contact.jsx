import Cover from "../SharedComponentes/Cover";
import SectionTitle from "../SharedComponentes/SectionTitle";
import contactBg from '../assets/contact/banner.jpg'
import { BiSolidPhoneCall } from 'react-icons/bi';
import { MdLocationPin } from 'react-icons/md';
import { AiFillClockCircle } from 'react-icons/ai';


const Contact = () => {
    return (
        <div>
            <Cover img={contactBg} covertitle={"CONTACT US"} coverDesc={"Would you like to try a dish?"}></Cover>
            <SectionTitle heading={"OUR LOCATION"} subHeading={"Visit Us"}></SectionTitle>
            <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 my-10 gap-8">
                <div className="bg-slate-300">
                    <div className="w-full bg-[#D1A054] py-2 flex justify-center">
                        <BiSolidPhoneCall className="text-3xl text-white"></BiSolidPhoneCall>
                    </div>
                    <div className="text-center text-black p-8">
                        <h1 className="text-2xl font-semibold">PHONE</h1>
                        <p className="text-lg">+38 (012) 34 56 789</p>
                    </div>
                </div>
                <div className="bg-slate-300">
                    <div className="w-full bg-[#D1A054] py-2 flex justify-center ">
                        <MdLocationPin className="text-3xl text-white"></MdLocationPin>
                    </div>
                    <div className="text-center text-black p-8">
                        <h1 className="text-2xl font-semibold">ADDRESS</h1>
                        <p className="text-lg">+38 (012) 34 56 789</p>
                    </div>
                </div>
                <div className="bg-slate-300">
                    <div className="w-full bg-[#D1A054] py-2 flex justify-center">
                        <AiFillClockCircle className="text-3xl text-white"></AiFillClockCircle>
                    </div>
                    <div className="text-center text-black p-8">
                        <h1 className="text-2xl font-semibold">WORKING HOURS</h1>
                        <p className="text-lg">Mon - Fri: 08:00 - 22:00</p>
                        <p className="text-lg">Sat - Sun: 10:00 - 23:00</p>
                    </div>
                </div>
            </div>
            <SectionTitle heading={"CONTACT FORM"} subHeading={"---Send Us a Message---"}></SectionTitle>
        </div>
    );
};

export default Contact;