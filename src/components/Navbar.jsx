import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

export default function Navbar(){
    const {logout} = useLogout()
    const {user} = useAuthContext()
    console.log('Navbar rendering');
    return (
        <div className="fixed top-0 left-0 w-full flex justify-between items-center p-4 bg-gray-800 z-50">

        {/* Left Side - Okane */}
        <div className="xl:ml-28 text-red-500 text-xl font-bold">
            Okane
        </div>
        
        {/* Right Side - Login and Signup */}
        <div className="flex space-x-4 xl:mr-28">
            {!user && (
                <>
                    <Link to="/login" className="bg-transparent text-white hover:text-gray-400">Login</Link>
                    <Link to="/signup" className="bg-transparent text-white hover:text-gray-400">Signup</Link>
                </>
            )}
           
           {user && (
            <>
             <span className="text-white pt-3">hello, {user.displayName}</span>
             <button className="bg-transparent text-white hover:text-gray-400" onClick={logout}>Logout</button>
            </>
               
                
            )}
            
        </div>
    </div>
    );
}