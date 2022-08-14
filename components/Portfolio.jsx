import Image from "next/image";

const Portfolio = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 text-center">
      <h2 className="font-bold text-2xl p-4">Travel Photos</h2>
      {/* using Grid */}
      <div className="grid md:grid-cols-5 gap-4">
        <div className="md:row-span-2 col-span-2 md:col-span-3">
          <Image
            src="https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
            alt="portfolio"
            width={677}
            height={451}
            layout="responsive"
          />
        </div>
        <div>
          <Image
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
            alt="portfolio"
            width={215}
            height={217}
            layout="responsive"
            objectFit="cover"
          />
        </div>
        <div>
          <Image
            src="https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
            alt="portfolio"
            width={215}
            height={217}
            layout="responsive"
            objectFit="cover"
          />
        </div>
        <div>
          <Image
            src="https://images.unsplash.com/photo-1552083375-1447ce886485?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
            alt="portfolio"
            width={215}
            height={217}
            layout="responsive"
            objectFit="cover"
          />
        </div>
        <div>
          <Image
            src="https://images.unsplash.com/photo-1565118531796-763e5082d113?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
            alt="portfolio"
            width={215}
            height={217}
            layout="responsive"
            objectFit="cover"
          />
        </div>
      </div>

      {/* using Flex */}
      {/* <div className="flex flex-wrap items-center">
        <div className="w-full md:w-[60%] h-full p-3">
          <Image
            src="https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
            alt="portfolio"
            width={677}
            height={451}
            layout="responsive"
          />
        </div>
        <div className="w-full md:w-[40%] h-full flex flex-wrap">
          <div className="w-[50%] h-full p-3">
            <Image
              src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
              alt="portfolio"
              width={215}
              height={217}
              layout="responsive"
              objectFit="cover"
            />
          </div>
          <div className="w-[50%] h-full p-3">
            <Image
              src="https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
              alt="portfolio"
              width={215}
              height={217}
              layout="responsive"
              objectFit="cover"
            />
          </div>
          <div className="w-[50%] h-full p-3">
            <Image
              src="https://images.unsplash.com/photo-1552083375-1447ce886485?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
              alt="portfolio"
              width={215}
              height={217}
              layout="responsive"
              objectFit="cover"
            />
          </div>
          <div className="w-[50%] h-full p-3">
            <Image
              src="https://images.unsplash.com/photo-1565118531796-763e5082d113?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
              alt="portfolio"
              width={215}
              height={217}
              layout="responsive"
              objectFit="cover"
            />
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Portfolio;
