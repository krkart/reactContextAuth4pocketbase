import { usePocket } from "../contexts/PocketContext";

export default function LoggedIn() {
    const {logout} = usePocket();
    return (
        <div>Logged in
            <button onClick={(e) => {
                e.preventDefault()
                logout()
            }}>Logout</button>
        </div>
    )
}
