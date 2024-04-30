import React, { useEffect, useState } from "react";
import axios from "axios";

const FetchComp = () => {
  const [data, setData] = useState();

  useEffect(() => {
    fetchData(); // Initial fetch on component mount
  },[]);

  // Function to handle API requests based on method
  const apiFetch = async (method) => {
    try {
      let response;
      
      switch (method) {
        case 'GET':
          response = await axios.get("https://p-9x7e.onrender.com/products/products");
          break;
        case 'POST':
          response = await axios.post("https://p-9x7e.onrender.com/products/products", {});
          break;
        case 'PUT':
          response = await axios.put("https://p-9x7e.onrender.com/products/products", {});
          break;
        case 'DELETE':
          response = await axios.delete("https://p-9x7e.onrender.com/products/products", {});
          break;
        default:
          throw new Error('Unsupported method');
      }

      console.log(response.data);
      setData(response.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchData = () => {
    // Example: Fetch data using GET method
    apiFetch('GET');
  };

  return <div>{/ Render your component using 'data' state /}</div>;
};

export default FetchComp;
