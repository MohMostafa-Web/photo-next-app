import Image from "next/image";
import { FaInstagram } from "react-icons/fa";

const InstagramImg = ({ igImg }) => {
  return (
    <div className="relative">
      <Image src={igImg} alt="social image" layout="responsive" />
      {/* Overlay */}
      <div className="flex justify-center items-center absolute top-0 left-0 right-0 bottom-0 hover:bg-black/50 group cursor-pointer">
        <span className="text-3xl text-gray-300 hidden group-hover:block">
          <FaInstagram />
        </span>
      </div>
    </div>
  );
};

export default InstagramImg;
