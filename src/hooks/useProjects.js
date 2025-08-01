import { useQuery } from "@tanstack/react-query";
import { getProjectsApi } from "../services/projectService";
import { useLocation } from "react-router-dom";
// import queryString from "query-string";


export function useProjects() {
    const {search} = useLocation()
    const params = new URLSearchParams(search)

    // convert query string to query object
    const queryObject = Object.fromEntries(params)

    const {data , isLoading} = useQuery({
        queryKey : ["projects" , queryObject ] ,
        queryFn : () => getProjectsApi(search) ,
    })

    const { projects } = data || {}
    return { projects , isLoading }
}

