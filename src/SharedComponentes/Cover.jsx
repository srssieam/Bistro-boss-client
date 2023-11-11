

const Cover = ({img, covertitle, coverDesc}) => {
    return (
        <div style={{backgroundImage:`url(${img})`, backgroundAttachment:'fixed'}} className="py-32 text-white">
            <div className=" bg-[#00000080] bg-blend-darken max-w-screen-xl mx-auto p-14 md:p-32 lg:p-44 mt-12 text-center">
                    <p className="text-2xl md:text-4xl lg:text-7xl font-serif uppercase">{covertitle}</p>
                    <p className=" text-xl md:text-2xl">{coverDesc}</p>       
            </div>
        </div>
    );
};

export default Cover;