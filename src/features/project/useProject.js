import { useQuery } from "@tanstack/react-query";
import { getProjectApi } from "../../services/projectService";
import { useParams } from "react-router-dom";

export function useProject() {
    const { id } = useParams();
    const {data , isLoading} = useQuery({
        queryKey : ["project", id] ,
        queryFn : ()=> getProjectApi(id) ,
        retry : false 
    })

    const { project } = data || {}
    return { project , isLoading }
}

