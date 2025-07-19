import { useLocation } from "react-router-dom";
import useUser from "./useUser";

export function useAuthorize() {
    const { isLoading , data:user } = useUser()
    const { pathname } = useLocation()

    const isAuthenticated = Boolean(user)

    const rolePathMap = {
        OWNER : 'owner' ,
        FREELANCER : 'freelancer' ,
        ADMIN : 'admin' ,
    }

    const isAuthorized =
        user &&
        Object.entries(rolePathMap).some(
        ([role, path]) =>
            user.role === role && pathname.toLowerCase().includes(path)
        );

    return { user , isLoading , isAuthenticated , isAuthorized }
}