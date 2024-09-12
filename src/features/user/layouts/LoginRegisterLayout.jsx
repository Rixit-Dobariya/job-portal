import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import banner from '../../../assets/images/banners/login-register.png'

function LoginRegisterLayout(){
    return (
    <div className="flex">
        <div>
            <Link to='/' className='flex gap-2 justify-start left-20 top-5 absolute'>

                <img src="logo.png" alt="" />
                <h1 className='text-2xl font-bold heading'>JobHuntly</h1>
            </Link>
            <img src={banner} className="aspect-[9/10] h-screen" />
        </div> 
        <Outlet />
    </div>
    );
}
export default LoginRegisterLayout;