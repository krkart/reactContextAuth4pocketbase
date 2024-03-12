import { usePocket } from "../contexts/PocketContext";
import LoggedIn from "./LoggedIn";
import LoggedOut from "./LoggedOut";

export const RequireAuth = () => {
    const { user } = usePocket();

    return user ? (
        <LoggedIn />
    ) : (
        <LoggedOut />
    )
}
