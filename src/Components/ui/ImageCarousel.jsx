import { useState, useEffect, useCallback } from "react";
import event1 from "../../assets/img/event1.jpg";
import event2 from "../../assets/img/event2.jpg";
import event3 from "../../assets/img/event3.jpg";
import event4 from "../../assets/img/event4.jpg";
import event6 from "../../assets/img/event6.jpg";
import { MdEventRepeat, MdOutlineArrowBackIosNew, MdOutlineArrowForwardIos } from "react-icons/md";
import { Link } from "react-router-dom";
import { HiMiniArrowUpRight } from "react-icons/hi2";

const Carousel = () => {
  const [images] = useState([event1, event2, event3, event4, event6]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextSlide = useCallback(() => {
    const newIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(newIndex);
  }, [currentImageIndex, images.length]);

  const prevSlide = () => {
    const newIndex = (currentImageIndex - 1 + images.length) % images.length;
    setCurrentImageIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <div className="relative mb-20 p-2 ">
      <h1 className="md:text-6xl text-3xl text-[#004D43]  pt-8 font-bold mb-5 mr-2 md:mr-0 flex items-center">
        Explore our fun events{" "}
        <MdEventRepeat size={80} className="mr-10 text-yellow-800" />
      </h1>

      <div className="overflow-hidden rounded-md  items-center flex justify-center bg-green-700">
        <img
          className="md:w-screen md:h-[60vh] h-[40vh] w-[50vh] p-2 object-cover rounded-xl "
          src={images[currentImageIndex]}
          alt={`Slide ${currentImageIndex + 1}`}
        />
        <div
          onClick={prevSlide}
          className="absolute left-5 hidden md:block  top-1/2 rounded-full hover:bg-black bg-black bg-opacity-40 transform -translate-y-1/2 cursor-pointer p-3 "
        >
          <MdOutlineArrowBackIosNew className="text-white" size={30} />
        </div>
        <div
          onClick={nextSlide}
          className="absolute right-5 hidden md:block top-1/2 rounded-full hover:bg-black bg-black bg-opacity-40 transform -translate-y-1/2 cursor-pointer p-3 "
        >
          <MdOutlineArrowForwardIos className="text-white" size={30} />
        </div>
      </div>

      <div className="flex justify-center mt-4 ">
        <Link
          to="/event"
          className=" flex  items-center text-2xl md:text-4xl py-3 px-10 bg-yellow-800 text-white rounded-full hover:bg-green-800"
        >
          Events

          <HiMiniArrowUpRight className="text-white ml-2" />

        </Link>
      </div>
    </div>
  );
};

export default Carousel;
