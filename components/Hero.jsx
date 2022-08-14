const Hero = ({ heading, paragraph }) => {
  return (
    <div className="min-h-[100vh] flex justify-center items-center bg-cover bg-no-repeat bg-center custom-image">
      {/* Overlay */}
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/70" />
      {/* Hero Content */}
      <div className="relative text-white p-4">
        {/* Heading */}
        <h1 className="font-bold text-5xl">{heading}</h1>
        {/* Paragraph */}
        <p className="my-5 text-xl">{paragraph}</p>
        <button className="px-8 py-2 text-sm border border-white hover:text-gray-400 hover:border-gray-400" type="button">
          Book
        </button>
      </div>
    </div>
  );
};

export default Hero;
