
import Landing from "../ui/Landing";
import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";
import ReviewCarousel from "../ui/ReviewCarousel";
import FeedbackForm from "../ui/FeedbackForm";
import About from "./About";

export default function Home() {
    return (
        <div id="home" className="bg-[#FDF3C7]">
            <Navbar />
            <Landing />
            <About/>
            <ReviewCarousel/>
            <FeedbackForm />
            <Footer />
        </div>
    )
}


