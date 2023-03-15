import React, { useEffect } from "react";
import { Box } from "@chakra-ui/react";
import ListItems from "../common/components/List";
import useQuery from "../common/functions/useQuery";

const Main: React.FC = () => {
  const { fetchPosts, postData } = useQuery();

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      <Box bg="teal.200" w="100%" p={5} display="flex">
        Reiz Tech
      </Box>

      <ListItems data={postData} />
    </div>
  );
};

export default Main;
