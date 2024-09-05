export default function Navbar(){
    return (
        <div className="absolute top-0 left-0 w-full flex justify-between items-center p-4 bg-gray-800">
        {/* Left Side - Okane */}
        <div className="xl:ml-28 text-red-500 text-xl font-bold">
            Okane
        </div>
        
        {/* Right Side - Login and Signup */}
        <div className="flex space-x-4 xl:mr-28">
            <button className="bg-transparent text-white hover:text-gray-400">Login</button>
            <button className="bg-transparent text-white hover:text-gray-400">Signup</button>
        </div>
    </div>
    );
}