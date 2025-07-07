import { useQuery } from "@tanstack/react-query";
import { getOwnerProjectApi } from "../../services/ProjectService";

export function useOwnerProjects() {
        const {data , isLoading} = useQuery({
        queryKey : ["projects"] ,
        queryFn : getOwnerProjectApi ,
    })

    const { projects } = data || {}
    return { projects , data }
}

