import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

import "swiper/css";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from "../GlobalContext/Provider";

function Carousel() {
  const { products } = useContext(GlobalContext);
  const navigate = useNavigate();

  return (
    <>
      <br /> <br /> <br />  
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        modules={[Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className="mx-3"
      >
        {products.map((slide, index) => (
          <SwiperSlide
            key={index}
            onClick={() => {
              navigate(`/product/${slide.id}`);
            }}
          >
            <Link
              to={`/product/${slide.id}`}
              className="relative block overflow-hidden rounded-xl bg-cover bg-center-top bg-no-repeat"
              style={{ backgroundImage: `url(${slide.imageUrl})` }}
            >
              <div className="absolute inset-0 bg-[#0000001f] "></div>

              <div className="relative flex items-start justify-between p-4 sm:p-6 lg:p-8">
                <div className="sm:pt-18 pt-12 text-white  rounded lg:pt-32">
                  <h3 className="text-xl font-bold sm:text-2xl">
                    {slide.title}
                  </h3>
                </div>

                <span className="inline-flex items-center gap-0.5 rounded-full bg-black px-2 py-1 text-xs font-semibold text-white">
                  ${slide.price}
                </span>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default Carousel;
