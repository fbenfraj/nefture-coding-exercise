import { useEffect, useState } from "react";

interface FetchConfig<T> {
  url: string;
  initialValue: T;
}

export const useDataFetch = <T>(config: FetchConfig<T>) => {
  const [data, setData] = useState<T | null>(config.initialValue);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(config.url);
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        const fetchedData = await res.json();
        setData(fetchedData);
      } catch (err) {
        setError((err as Error).message);
      }
    };

    fetchData();
  }, [config.url]);

  return { data, error };
};
