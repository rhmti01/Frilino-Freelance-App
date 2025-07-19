import { useMutation, useQuery } from "@tanstack/react-query";
import { changeUserStatusApi } from "../../../services/authService";
import toast from "react-hot-toast";

export function useChangeUserStatus() {
    const { isPending: isChanging , mutate : changeUserStatus} = useMutation({
        mutationFn : changeUserStatusApi ,
        onSuccess:(data)=>{
            toast.success(data.message) 
        } ,
        onError : (error)=>{
            toast.error(error?.response?.data?.message)
        }})
        
        return { isChanging , changeUserStatus }
}

