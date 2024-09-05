import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function GuestLayout(){
    return (<>
        <Header />
        <Outlet />
        <Footer />
        </>
    );
}
export default GuestLayout;