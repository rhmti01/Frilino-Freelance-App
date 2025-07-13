import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editProjectApi } from "../../services/ProjectService";
import toast from "react-hot-toast";

export default function useEditProjects() {
    const queryClient = useQueryClient()

    const { isPending: isEditing , mutate : editProject} = useMutation({
        mutationFn : editProjectApi ,
        onSuccess:(data)=>{
            toast.success(data.message)
            queryClient.invalidateQueries({
                queryKey : ["owner-projects"]
            })
        } ,
        onError : (error)=>{
            toast("noldi sana?")
            toast.error(error?.response?.data?.message)
        }})
        
        return { isEditing , editProject }
}