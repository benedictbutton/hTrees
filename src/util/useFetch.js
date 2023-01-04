import { useState, useEffect } from "react";

const useFetch = (initialUrl) => {
  const [data, setData] = useState();
  const [url, setUrl] = useState(initialUrl);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    let didCancel = false;

    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const response = await fetch(url);
        const responseData = await response.json();
        if (!didCancel) {
          setIsLoading(false);
          setData(responseData);
        }
      } catch (error) {
        if (!didCancel) {
          setIsLoading(false);
          setIsError(true);
        }
      }
    };

    fetchData();

    return () => {
      didCancel = true;
    };
  }, [url]);

  return [{ data, isLoading, isError }, setUrl];
};

export default useFetch;
