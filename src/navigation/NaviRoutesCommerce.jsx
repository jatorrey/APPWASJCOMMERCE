import { createBrowserRouter } from "react-router-dom";

import Home from "../ecommerce/home/pages/Home";
import Orders from "../ecommerce/orders/pages/Orders";
import Payments from "../ecommerce/payments/pages/Payments";
import Prices from "../ecommerce/prices/pages/Prices";
import Products from "../ecommerce/products/pages/Products";
import Shippings from "../ecommerce/shippings/pages/Shippings";
import Error from "../share/errors/pages/Error";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <Error />,
        children: [
            {
                path: "/orders",
                element: <Orders />,
            },
            {
                path: "/payments",
                element: <Payments />,
            },
            {
                path: "/prices",
                element: <Prices />,
            },
            {
                path: "/products",
                element: <Products />,
            },
            {
                path: "/shippings",
                element: <Shippings />,
            },
        ],
    },
]);

export default router;
            