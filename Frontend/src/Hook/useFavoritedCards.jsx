import { useQuery } from "@tanstack/react-query"
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useFavoritedCards = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    //TanStack Query
    const { refetch, data: favoritCart = [] } = useQuery({
        queryKey: ['favoritCart', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/favorites?email=${user.email}`);
            return res.data;
        }
    });
    return [favoritCart, refetch]
}


export default useFavoritedCards