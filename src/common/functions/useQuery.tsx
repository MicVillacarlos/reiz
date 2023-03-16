import axios from "axios";

const useQuery = () => {

  const fetchPosts = async () => {
    try {
      const { data } = await axios.get(
        "https://restcountries.com/v2/all?fields=name,region,area"
      );
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  return {
    fetchPosts
  };
};

export default useQuery;
