import { List, ListIcon, ListItem } from "@chakra-ui/react";
import { ListTypesItems } from "../types/types";
import { MdOutlineAreaChart, MdLocationOn, MdMap } from "react-icons/md";

type Props = {
  data: ListTypesItems[];
};

const ListItems = (props: Props) => {
  const { data } = props;

  return (
    <>
      {data?.map((item) => {
        return (
          <List
            spacing={1.5}
            backdropBlur
            borderRadius={10}
            backgroundColor={"teal.50"}
            margin={5}
            padding={2}
          >
            <ListItem fontWeight={1000}>
              <ListIcon as={MdLocationOn} />
              {item.name}
            </ListItem>
            <ListItem>
              <ListIcon as={MdOutlineAreaChart} />
              Area: {item.area}
            </ListItem>
            <ListItem>
              <ListIcon as={MdMap} />
              {item.region}
            </ListItem>
          </List>
        );
      })}
    </>
  );
};

export default ListItems;
