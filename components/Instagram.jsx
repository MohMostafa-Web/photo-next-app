import IgImg1 from "../public/imgs/ig-img-1.jpeg";
import IgImg2 from "../public/imgs/ig-img-2.jpeg";
import IgImg3 from "../public/imgs/ig-img-3.jpeg";
import IgImg4 from "../public/imgs/ig-img-4.jpeg";
import IgImg5 from "../public/imgs/ig-img-5.jpeg";
import IgImg6 from "../public/imgs/ig-img-6.jpeg";
import InstagramImg from "./InstagramImg";

const Instagram = () => {
  return (
    <div className="max-w-[1240px] py-16 mx-auto text-center">
      <h2 className="font-bold text-2xl">Follow me on Instragram</h2>
      <span className="block pb-4">@Captur</span>
      <div className="p-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
        <InstagramImg igImg={IgImg1} />
        <InstagramImg igImg={IgImg2} />
        <InstagramImg igImg={IgImg3} />
        <InstagramImg igImg={IgImg4} />
        <InstagramImg igImg={IgImg5} />
        <InstagramImg igImg={IgImg6} />
      </div>
    </div>
  );
};

export default Instagram;
