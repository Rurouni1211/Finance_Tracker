import { useEffect, useState } from "react"
import { useFirestore } from "../hooks/useFirestore"

export default function TransctionForm({uid}){
    const [name, setName] = useState('')
    const [amount, setAmount] = useState('')
    const {addDocument, response} = useFirestore('transactions')


    const handleSubmit = (e) => {
        e.preventDefault()
        addDocument({
            uid, name, amount
        })
    }

    useEffect(()=> {
        if(response.success){
            setName('')
            setAmount('')
        }
    }, [response.success])
    return (
        <>
            <h3 className="font-bold text-xl text-ellipsiss m-5">Add a Transaction</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
  
  <label className="inline-block w-full">
    <span className="text-lg inline-block w-1/4">Transaction name:</span>
    <input
      className="border border-blue-600 p-1 rounded-md w-3/4"
      type="text"
      required
      onChange={(e) => setName(e.target.value)}
      value={name}
      placeholder="Name"
    />
  </label>

  {/* Amount input and label */}
  <label className="inline-block w-full">
    <span className="inline-block w-1/4">Amount:</span>
    <input
      className="border border-blue-600 p-1 rounded-md w-3/4"
      type="number"
      required
      onChange={(e) => setAmount(e.target.value)}
      value={amount}
      placeholder="Amount"
    />
  </label>

  {/* Submit button */}
  <button className="bg-transparent border-red-500 p-2 rounded-md hover:bg-blue-700 hover:text-white">
    Add Transaction
  </button>
</form>
        </>
    )
}