
import Landing from "../ui/Landing";
import ReviewCarousel from "../ui/ReviewCarousel";
import FeedbackForm from "../ui/FeedbackForm";
import About from "./About";

export default function Home() {
    return (
        <div id="home" className="bg-[#FDF3C7] dark:bg-dark-bg">
            <Landing />
            <About/>
            <ReviewCarousel/>
            <FeedbackForm />
        </div>
    )
}


