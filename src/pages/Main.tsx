import React from "react";
import { Box, Text } from "@chakra-ui/react";
import List from "../common/components/List";

const Main = () => {
  return (
    <div>
      <Box bg="teal.200" w="100%" p={5} display="flex">
        Reiz Tech
      </Box>

      <List/>
    </div>
  );
};

export default Main;
