import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createProposalApi } from "../../services/proposalService";
import toast from "react-hot-toast";

export default function useCreateProposal() {
    const queryClient = useQueryClient()

    const { isPending:isCreating , mutate : createProposal} = useMutation({
        mutationFn : createProposalApi ,
        onSuccess:(data)=>{
            toast.success(data.message)
            queryClient.invalidateQueries({
                queryKey : ["proposals"]
            })
        } ,
        onError : (error)=>{
            toast.error(error?.response?.data?.message)
        }})
        
        return { isCreating , createProposal }
}