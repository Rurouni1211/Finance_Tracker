import { useAuthContext } from "../hooks/useAuthContext";
import { useCollection } from "../hooks/useCollection";
import TransctionForm from "./TransactionForm";
import TransactionList from "./TransactionList";

export default function Home() {
    const { user } = useAuthContext();
    const { documents = null, error = null } = useCollection('transactions'); // Ensure destructuring doesn't fail
  
    return (
      <div className="flex-row xl:flex xl:space-x-80">
        <div className="flex-1 p-10">
            <h3>Transaction List</h3>
        <div>
        {error && <p>{error}</p>}
        {documents && <TransactionList transactions={documents} />}
        </div>
        </div>
      
        
        <div className="flex-1 bg-orange-400 p-6">
          <TransctionForm uid={user.uid} />
        </div>
      </div>
    );
  }