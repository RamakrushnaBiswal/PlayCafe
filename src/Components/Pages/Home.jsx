
import Landing from "../ui/Landing";
import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";
import ImageCarousel from "../ui/ImageCarousel";
import ReviewCarousel from "../ui/ReviewCarousel";
import FeedbackForm from "../ui/FeedbackForm";

export default function Home() {
    return (
        <div id="home" className="bg-[#FDF3C7]">
            <Navbar />
            <Landing />
            <ImageCarousel />
            <ReviewCarousel/>
            <FeedbackForm />
            <Footer />
        </div>
    )
}


