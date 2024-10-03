import { useState } from "react";
import { MdStars, MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

const ReviewCarousel = () => {
  const reviews = [
    {
      name: "Jane Smith",
      review:
        "Great games and coffee. The perfect spot to unwind with friends!",
      img: "https://randomuser.me/api/portraits/men/51.jpg",
      rating: 5,
    },
    {
      name: "Sophia Lee",
      review: "Cozy place with a fantastic selection of snacks and games!",
      img: "https://randomuser.me/api/portraits/women/90.jpg",
      rating: 4,
    },
    {
      name: "Emily Davis",
      review: "Friendly staff and delicious food make for a great experience.",
      img: "https://randomuser.me/api/portraits/women/63.jpg",
      rating: 5,
    },
    {
      name: "Chris Wilson",
      review: "Amazing variety of games and excellent drinks to enjoy.",
      img: "https://randomuser.me/api/portraits/men/22.jpg",
      rating: 5,
    },
    {
      name: "Michael Johnson",
      review: "Had a fantastic time with the games and tasty beverages!",
      img: "https://randomuser.me/api/portraits/men/85.jpg",
      rating: 5,
    },
    {
      name: "Jia Wang",
      review: "Loved the games, the ambiance, and the overall vibe here!",
      img: "https://randomuser.me/api/portraits/women/61.jpg",
      rating: 5,
    },
    {
      name: "Olivia Green",
      review:
        "Great atmosphere and an excellent selection of board games. Will be back!",
      img: "https://randomuser.me/api/portraits/women/72.jpg",
      rating: 4,
    },
    {
      name: "Ethan White",
      review:
        "The vibe is amazing, and the staff is super friendly. Highly recommend!",
      img: "https://randomuser.me/api/portraits/men/33.jpg",
      rating: 5,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === reviews.length - 4 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 4 : prevIndex - 1
    );
  };

  return (
    <div className="mb-20">
      <div className="items-center flex justify-center mb-10 p-20">
        <h1 className="md:text-6xl text-4xl pl-3 pr-3 text-center font-bold text-[#004D43]">
          Customer Feedback
        </h1>
      </div>

      <div className="bg-[#004D43] min-h-[50vh] p-4 md:p-20 items-center justify-center flex relative ">
        <div className="w-full max-w-7xl md:overflow-hidden overflow-x-auto  ">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / 4)}%)`,
              width: `${reviews.length * (100 /4)}%`,
            }}
          >
            {reviews.map((review, index) => (
              <div
                key={index}
                className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2 "
              >
                <div className="relative h-[40vh] md:h-[35vh] p-4 rounded-xl md:w-full w-[42vh] bg-amber-200 z-10 overflow-hidden">
                  <div className="items-center flex flex-col justify-center mb-3">
                    <img
                      src={review.img}
                      alt=""
                      className="rounded-full h-20 w-20"
                    />
                    <h1 className="text-xl font-semibold">{review.name}</h1>
                    <div className="flex">
                      {Array(review.rating)
                        .fill()
                        .map((_, i) => (
                          <MdStars key={i} className="text-[#004D43]" />
                        ))}
                    </div>
                  </div>
                  <p className="text-center text-lg leading-6 tracking-wide  mt-4 ">
                    {review.review}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {reviews.length > 4 && (
          <>
            <button
              onClick={prevSlide}
              className=" hidden md:block absolute left-20 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2"
            >
              <MdArrowBackIos className="text-[#004D43]" />
            </button>
            <button
              onClick={nextSlide}
              className=" hidden md:block absolute right-20 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2"
            >
              <MdArrowForwardIos className="text-[#004D43]" />
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default ReviewCarousel;
