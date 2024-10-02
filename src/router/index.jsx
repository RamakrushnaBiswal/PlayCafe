import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";

import App from "../App";
import Home from "../Components/Pages/Home";
import About from "../Components/Pages/About";
import Menu from "../Components/Pages/Menu"
import Boardgame from "../Components/Pages/Boardgame"
import Event from "../Components/Pages/Event"
import MyBook from "../Components/Pages/MyBook"
import NotFound from "../Components/Pages/Notfound"


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />}>
            <Route index={true} path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/boardgame" element={<Boardgame />} />
            <Route path="/event" element={<Event />} />
            <Route path="/book" element={<MyBook />} />
            <Route path="*" element={<NotFound />} />
        </Route>
    )
);

export default router;
