import { AXIOS } from "@/config/axios";
import { useEffect, useState } from "react";

type UseFetchProps = {
  path: string;
  enable?: boolean;
};
function useFetch<TData = any>({ path, enable = true }: UseFetchProps) {
  const [data, setData] = useState<TData>();
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  const fetchData = () => {
    AXIOS.get(path)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    if (path && enable) {
      fetchData();
    }
  }, [path, enable]);

  return { data, error, loading };
}

export default useFetch;
