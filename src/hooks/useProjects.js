import { useQuery } from "@tanstack/react-query";
import { getProjectsApi } from "../services/projectService";


export function useProjects() {
        const {data , isLoading} = useQuery({
        queryKey : ["projects"] ,
        queryFn : getProjectsApi ,
    })

    const { projects } = data || {}
    return { projects , isLoading }
}

