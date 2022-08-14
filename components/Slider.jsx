import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

const Slider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const lastIndex = slides.length - 1;

  const sliderRef = useRef();

  /* Create function to get height of Slide Image and set the Slider with this height */
  const setSilderHeight = () => {
    // console.log(sliderRef.current.firstElementChild.firstElementChild.clientHeight); // debug
    // console.log(sliderRef.current.style.height); // debug
    const imageHeight =
      sliderRef.current?.firstElementChild.firstElementChild.clientHeight;
    if (imageHeight) {
      sliderRef.current.style.height = `${imageHeight}px`;
    }
  };

  /* using useEffect() to run function "setSliderHeight" at initial render, and when the window is resized */
  useEffect(() => {
    setSilderHeight();
    window.addEventListener("resize", () => {
      setSilderHeight();
    });
  }, []);

  return (
    <div className="max-w-[1240px] mx-auto p-4" id="gallery">
      <h2 className="p-4 font-bold text-2xl text-center">Gallery</h2>
      {/* Slider */}
      <div className="relative overflow-hidden" ref={sliderRef}>
        {/* Slides */}
        {slides.map((slide, index) => {
          let position = "translate-x-[100%] opacity-0";
          if (index === currentIndex) {
            position = "translate-x-0 opacity-100";
          } else if (
            index === currentIndex - 1 ||
            (currentIndex === 0 && index === lastIndex)
          ) {
            position = "translate-x-[-100%] opacity-0";
          }

          return (
            <div
              className={`absolute top-0 left-0 bottom-0 duration-300 ${position}`}
              key={index}
            >
              <Image
                src={slide.image}
                alt="slide"
                width={1440}
                height={600}
                objectFit="cover"
              />
            </div>
          );
        })}
        {/* Control Buttons */}
        <button
          className="absolute left-5 top-[50%] translate-y-[-50%] text-white/70 hover:bg-gray-900 rounded-full duration-300 text-3xl sm:text-5xl z-[2]"
          onClick={() =>
            setCurrentIndex(currentIndex > 0 ? currentIndex - 1 : lastIndex)
          }
        >
          <FaArrowCircleLeft />
        </button>
        <button
          className="absolute right-5 top-[50%] translate-y-[-50%] text-white/70 hover:bg-gray-900 rounded-full duration-300 text-3xl sm:text-5xl z-[2]"
          onClick={() =>
            setCurrentIndex(currentIndex < lastIndex ? currentIndex + 1 : 0)
          }
        >
          <FaArrowCircleRight />
        </button>
      </div>
    </div>
  );
};

export default Slider;
