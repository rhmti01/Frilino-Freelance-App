import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logoutApi } from "../../services/authService";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import useProfileImage from "../../hooks/useProfileImage";

export default function useLogout() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const {removeProfileImage} = useProfileImage()

  const { isPending, mutate: logout } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      queryClient.removeQueries();
      navigate("/auth", { replace: true });
      removeProfileImage()
      toast("از حساب کاربری خود خارج شدید.")
    }, onError : (error)=>{
        toast.error(error.message)
    }
  });

  return { isPending, logout };
}
