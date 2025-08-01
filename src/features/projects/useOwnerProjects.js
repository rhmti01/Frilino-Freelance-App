import { useQuery } from "@tanstack/react-query";
import { getOwnerProjectApi } from "../../services/projectService";

export function useOwnerProjects() {
        const {data , isLoading} = useQuery({
        queryKey : ["owner-projects"] ,
        queryFn : getOwnerProjectApi ,
    })

    const { projects } = data || {}
    return { projects , isLoading }
}

