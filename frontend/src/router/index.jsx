import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";

import App from "../App";
import Home from "../components/Pages/Home";
import About from "../components/Pages/About";
import Menu from "../components/Pages/Menu"
import Boardgame from "../components/Pages/Boardgame"
import Event from "../components/Pages/Event"
import MyBook from "../components/Pages/MyBook"
import NotFound from "../components/Pages/Notfound"
import Register from "../components/Pages/Register"


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />}>
            <Route index={true} path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/boardgame" element={<Boardgame />} />
            <Route path="/events" element={<Event />} />
            <Route path="/book" element={<MyBook />} />
            <Route path="/reservation" element={<Register />} />
            <Route path="*" element={<NotFound />} />
        </Route>
    )
);

export default router;
