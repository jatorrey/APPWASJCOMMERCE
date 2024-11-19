import { RouterProvider } from "react-router-dom";
import CommerceRouter from "./navigation/NaviRoutesCommerce";
import Footer from "./share/footer/components/Footer";

export default function AppAllModules() {
    return (
        <>
            <div id='div-app'>
                <RouterProvider router={CommerceRouter} />
                <div id='div-footer'>
                    <Footer />
                </div>
            </div>
        </>
    );
}