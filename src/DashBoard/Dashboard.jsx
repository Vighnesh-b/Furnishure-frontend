import { UserContext } from "../Context/userContext"
import { useContext } from "react"
import { Link } from "react-router-dom";
export default function Dashboard() {
    const {user}=useContext(UserContext);
    return (
    <div>
        <Link to="/">Home</Link>
        <h1>Dashboard</h1>
        {!!user && (<h2>Hi {user.name}</h2>)}
    </div>
  )
}
