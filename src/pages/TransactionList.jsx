export default function TransactionList({transactions}){
    return (
        <ul>
            {transactions.map((transactions) => (
                <li key={transactions.id}>
                    <p>{transactions.name}</p>
                    <p>${transactions.amount}</p>
                </li>
            ))}
        </ul>
    )
}