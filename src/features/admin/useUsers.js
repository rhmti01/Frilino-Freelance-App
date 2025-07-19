import { useQuery } from "@tanstack/react-query";
import { getUsersApi } from "../../services/authService";

export function useUsers() {

    const { data:users , isLoading} = useQuery({
        queryKey : ["users" ] ,
        queryFn :  getUsersApi ,
    })

    return { users , isLoading }
}

