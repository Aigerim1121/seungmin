import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import Registr from "./pages/Registr";
import Shipping from "./pages/Shipping";
import LoyaltyCard from "./pages/LoyaltyCard";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Belts from "./pages/Belts";
import Bags from "./pages/Bags";
import Reviews from "./pages/Reviews";
import Certificates from "./pages/Certificates";
import Wallets from "./pages/Wallets";
import Umbrella from "./pages/Umbrella";
import Supsender from "./pages/Supsender";
import Search from "./pages/Search";
import Articles from "./pages/Articles";
import ArticlePage from "./pages/ArticlePage";
import Guarantee from "./pages/Guarantee";
import AboutStore from "./pages/AboutStore";
import NotFound from "./pages/NotFound";
import Brends from "./pages/Brends"
import Backpack from "./pages/Backpack"
import Accessories from "./pages/Accessories"
import Gloves from "./pages/Gloves"

const myRouter = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "",
                element: <Home />
            },
            {
                path: "registr",
                element: <Registr />
            },
            {
                path: "shipping",
                element: <Shipping />
            },
            {
                path: "loyaltycard",
                element: <LoyaltyCard />
            },
            {
                path: "contact",
                element: <Contact />
            },
            {
                path: "cart",
                element: <Cart />
            },
            {
                path: "belt",
                element: <Belts/>
            },
            {
                path: "bags",
                element: <Bags/>
            },
            {
                path: "reviews",
                element: <Reviews/>
            },
            {
                path: "certificates",
                element: <Certificates/>
            },
             {
                path: "wallet",
                element: <Wallets/>
            },
            {
                path: "umbrella",
                element: <Umbrella/>
            },
            {
                path: "supsender",
                element: <Supsender/>
            },
            {
                path: "/search/:text",
                element: <Search/>
            },
            {
                path: "articles",
                element: <Articles/>
            },
            {
                path: "article/:id",
                element: <ArticlePage/>
            }, 
             {
                path: "guarantee",
                element: <Guarantee/>
            },
             {
                path: "aboutstore",
                element: <AboutStore/>
            },
            {
                path: "brends",
                element: <Brends/>
            },
            {
                path: "backpack",
                element: <Backpack/>
            },
            {
                path:"accessories",
                element: <Accessories/>
            },
            {
                path:"gloves",
                element: <Gloves/>
            },
            {
                path: "*",
                element: <NotFound />
            }
        ]
    }
])

export default myRouter