import React, { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";
import ListItems from "../common/components/List";
import useQuery from "../common/functions/useQuery";
import Pagination from "../common/components/Pagination";

const Main: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemPerPage] = useState<number>(5);

  const { fetchPosts, postData } = useQuery();

  const lastItemIndex = currentPage * itemPerPage;
  const firstItemIndex = lastItemIndex - itemPerPage;
  const filteredData = postData && postData.slice(firstItemIndex, lastItemIndex);

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      <Box bg="teal.200" w="100%" p={5} display="flex">
        Reiz Tech
      </Box>

      <ListItems data={filteredData} />
      <Pagination
        totalItems={postData && postData.length}
        itemsPerPage={itemPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default Main;
