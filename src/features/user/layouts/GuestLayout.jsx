import { Outlet } from "react-router-dom";
import Header from "../components/Header";

function GuestLayout(){
    return (<>
        <Header />
        <Outlet />
        </>
    );
}
export default GuestLayout;