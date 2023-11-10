

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="my-6 text-center">
            <p className="text-yellow-500 border-b-2 max-w-max mx-auto text-xl">---{subHeading}---</p>
            <h3 className="text-4xl border-b-2 max-w-max py-5 mx-auto uppercase">{heading}</h3>
        </div>
    );
};

export default SectionTitle;