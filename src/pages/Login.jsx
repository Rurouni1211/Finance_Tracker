import { useState } from "react"
import { useLogin } from "../hooks/useLogin"

export default function Login(){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {login, error, isPending} = useLogin()

    const handleSubmit = (e) =>{
        e.preventDefault()
        login (email,password)
    }
    return (
        <form className="max-w-md mx-auto bg-white p-8 shadow-lg rounded-md" onSubmit={handleSubmit}>
            <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
            <label className="block mb-4">
                <span className="text-gray-700">email:</span>
                <input 
                type="email" 
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                onChange={e=> setEmail(e.target.value)} 
                value={email}/>
            </label>
            <label className="block mb-6">
                <span className="text-gray-700">password:</span>
                <input 
                type="password" 
                 className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                onChange={e=> setPassword(e.target.value)}
                value={password}/>
            </label>
            
            {!isPending && <button className="w-full bg-indigo-600 text-white p-2 rounded-md hover:bg-indigo-700">Login</button>}
            {isPending && <button className="w-full bg-indigo-600 text-white p-2 rounded-md hover:bg-indigo-700">loading</button>}
            {error && <p>{error}</p>}
        </form>
    )
}