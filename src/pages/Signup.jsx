import { useState } from "react"
import { useSignup } from "../hooks/useSignup"

export default function Signup(){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [displayName, setDisplayName] = useState('')

    const { signup, isPending, error } = useSignup()

    const handleSubmit = (e) =>{
        e.preventDefault()
        signup(email,password, displayName)
    }
    return (
        <form className="max-w-md mx-auto bg-white p-8 shadow-lg rounded-md" onSubmit={handleSubmit}>
            <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
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
            <label className="block mb-6">
                <span className="text-gray-700">Display Name:</span>
                <input 
                type="text" 
                 className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                onChange={e=> setDisplayName(e.target.value)}
                value={displayName}/>
            </label>
            {!isPending && <button className="w-full bg-indigo-600 text-white p-2 rounded-md hover:bg-indigo-700">Sign Up</button>}
            {isPending && <button className="w-full bg-indigo-600 text-white p-2 rounded-md hover:bg-indigo-700" disabled>Loading...</button>}
            {error && <p>{error}</p>}
        </form>
    )
}