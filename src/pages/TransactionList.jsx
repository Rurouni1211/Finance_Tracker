import { useFirestore } from "../hooks/useFirestore"

export default function TransactionList({transactions}){

    const {deleteDocument, response} = useFirestore('transactions')
    console.log(response)
    return (
        <ul className="bg-white shadow-md rounded-lg p-6 space-y-4">
        {transactions.map((transaction) => (
          <li key={transaction.id} className="flex justify-between items-center p-4 border-b last:border-b-0 hover:bg-gray-50 transition duration-300">
            <div className="text-lg font-medium">{transaction.name}</div>
            <div className="text-green-500 font-semibold">${transaction.amount}</div>
            <button onClick={() => deleteDocument(transaction.id)}>X</button>
          </li>
        ))}
      </ul>
    )
}