import { useState, useEffect } from "react";
import { MdStars, MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import quote from "../../assets/img/quote.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"; // Import Slider




const colors = [
    "bg-pink-600",
    "bg-yellow-400",
    "bg-cyan-400",
    "bg-rose-600",
    "bg-green-600",
    "bg-purple-500",
    "bg-amber-400",
    "bg-lime-500",
    "bg-emerald-600",
    "bg-sky-400",
    "bg-blue-600"




]

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



export default function customerFeedback() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: "linear",
    };

    const [currentIndex, setCurrentIndex] = useState(0);

    function getRandomColor(colorsArray) {
        const randomIndex = Math.floor(Math.random() * colorsArray.length);
        return colorsArray[randomIndex];
      }
      

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
        }, 3000);


        return () => clearInterval(intervalId); // Clean up interval on component unmount
    }, [reviews.length]);


    return (



        <div className=" bg-[#004D43] min-h-[50vh] mt-10  flex flex-row items-center justify-center relative rounded-3xl mx-20  mb-10 md:min-h-[80vh]">
            <div className="hidden flex-col -top-16 absolute left-10 gap-10 md:flex ">
                <div className="flex bg-yellow-400 w-[150px] h-[150px] p-1 rounded-full">
                    <img src={quote}
                        alt="double_quote"
                        className="w-full h-full object-contain"
                    />


                </div>

                <div className="flex text-5xl font-extrabold text-white mt-3">
                    What Our {<br />} Customer Say
                </div>

                <div className="text-2xl text-yellow-300 text-wrap text-justify md:w-400  ">
                    Here’s what our Valued Customers
                    {<br />}
                    said about their experiences with us.
                    {<br />}
                    Their testimonials reflect the joy and
                    {<br />}
                    connection fostered within our walls,
                    {<br />}
                    showcasing the vibrant community we
                    {<br />}
                    have built.


                </div>



            </div>



            <div className="absolute -top-24 -right-16 ">
            <Slider {...settings} className="carousel rounded-box w-[840px] gap-10 h-[550px] overflow-hidden hover:scale-105 ">
                {reviews.map((review, index) => {
                    const shade = getRandomColor(colors);
                    return (
                        <div key={review.id || index} className={`carousel-item transition-opacity duration-1000 ease-in-out`}>
                            <div className={`card glass w-96 ${shade} lg:h-[550px] sm:h-[350px]`}>
                                <figure>
                                    <img
                                        src={review.img}
                                        alt={`Profile of ${review.name}`}
                                        className="rounded-full m-10 scale-125 hover:transition-transform hover:scale-150"
                                    />
                                </figure>
                                <div className="card-body  bg-white border-4 border-black border-solid m-5 rounded-lg hover:bg-yellow-400 transition duration-300 scale-105">
                                    <h2 className="card-title justify-center my-2 scale-150">
                                        {Array(review.rating)
                                            .fill()
                                            .map((_, i) => (
                                                <MdStars key={i} className="text-[#004D43]" />
                                            ))}
                                    </h2>
                                    <p className="justify-center text-xl text-justify mt-4 h-full">{review.review}</p>
                                    <h1 className="text-2xl text-center">~{review.name}</h1>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </Slider>
        </div>
    </div>    
    )





    

}