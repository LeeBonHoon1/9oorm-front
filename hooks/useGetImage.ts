import APIs from "@/apis";
import { useQuery } from "@tanstack/react-query";

const useGetImage = (prompt: string) => {
  const { data, isLoading, error, isFetching } = useQuery(['image'], () => APIs.getImages(prompt), {
    retry: false
  })

  return {
    data,
    isLoading,
    error,
    isFetching
  }
}

export default useGetImage