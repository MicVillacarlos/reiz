import React, { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";
import ListItems from "../common/components/List";
import useQuery from "../common/functions/useQuery";
import Pagination from "../common/components/Pagination";
import SortButtonGroups from "../common/components/SortButtonGroups";
import { ListTypesItems } from "../common/types/types";

const Main: React.FC = () => {
  const { fetchPosts } = useQuery();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [filteredData, setFilteredData] = useState<
    ListTypesItems[] | undefined
  >();
  const [unFilteredData, setUnfilteredData] = useState<
    ListTypesItems[] | undefined
  >();

  const itemPerPage = 5;
  const lastItemIndex = currentPage * itemPerPage;
  const firstItemIndex = lastItemIndex - itemPerPage;
  const dataPerPage = filteredData?.slice(firstItemIndex, lastItemIndex);

  useEffect(() => {
    fetchPosts().then((data) => {
      setFilteredData(data);
      setUnfilteredData(data);
    });
  }, []);

  return (
    <div>
      <Box
        bg="teal.200"
        w="100%"
        p={2}
        display="flex"
        justifyContent="center"
        fontSize={"1.5em"}
        color="white"
        fontWeight={800}
      >
        Reiz Tech
      </Box>
      <SortButtonGroups
        setFilteredData={setFilteredData}
        unFilteredData={unFilteredData}
        setCurrentPage={setCurrentPage}
      />
      <ListItems data={dataPerPage} />
      <Pagination
        totalItems={filteredData?.length}
        itemsPerPage={itemPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default Main;
