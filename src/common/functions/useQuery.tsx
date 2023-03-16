import axios from "axios";
import { useState } from "react";
// import { ListType, ListTypesItems } from "../types/types";

const useQuery = () => {
  const [postData, setPostData] = useState<any>();

  const fetchPosts = async () => {
    try {
      const { data } = await axios.get(
        "https://restcountries.com/v2/all?fields=name,region,area"
      );
      setPostData(data);
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  return {
    fetchPosts,
    postData,
  };
};

export default useQuery;
