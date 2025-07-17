import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createProjectApi } from "../../services/projectService";
import toast from "react-hot-toast";

export default function useCreateProjects() {
    const queryClient = useQueryClient()

    const { isPending:isCreating , mutate : createProject} = useMutation({
        mutationFn :createProjectApi ,
        onSuccess:(data)=>{
            toast.success(data.message)
            queryClient.invalidateQueries({
                queryKey : ["owner-projects"]
            })
        } ,
        onError : (error)=>{
            toast.error(error?.response?.data?.message)
        }})
        
        return { isCreating , createProject }
}