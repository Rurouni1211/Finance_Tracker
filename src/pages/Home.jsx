import { useAuthContext } from "../hooks/useAuthContext";
import TransctionForm from "./TransactionForm";

export default function Home(){
    const {user} = useAuthContext()
    return (
        <div className="flex-row xl:flex xl:space-x-80">
            <div className="flex-1 p-10">Transaction List</div>
            <div className="flex-1 bg-orange-400 p-6"><TransctionForm uid={user.uid}/></div>
            
        </div>
    )
}