

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="space-y-4">
            <p className="text-yellow-700">---{subHeading}---</p>
            <hr />
            <h3 className="text-4xl">{heading}</h3>
            <hr />
        </div>
    );
};

export default SectionTitle;