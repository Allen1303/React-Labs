import { useState, useEffect } from "react";
// custom Hook Function "useFetch"
export const useFetch = (url) => {
  const [user, setUserData] = useState(null);
  // Helper function for retrieving Data from API
  const fetchData = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Failed to retrieve data");
      }
      const data = await response.json();
      setUserData(data);
    } catch (error) {
      console.log("Failed to load data", error);
    } finally {
      console.log("Fetch data completed");
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return { user };
};
