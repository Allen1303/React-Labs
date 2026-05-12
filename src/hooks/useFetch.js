import { useState, useEffect } from "react";

// Custom hook for Fetching user data
export const useFetch = (url) => {
  const [fetchUser, setFetchUser] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Failed to fetch user data!");
      }
      const data = await response.json();
      setFetchUser(data);
    } catch (error) {
      console.error("Failed to fetch user data", error);
    } finally {
      console.log("Fetch attempt completed");
    }
  };
  {
    /* Wrap the fetch function inside useEffect hook*/
  }
  useEffect(() => {
    fetchData();
  }, []);
  return { fetchUser };
};
