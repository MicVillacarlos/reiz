import { Button, Divider, Flex } from "@chakra-ui/react";
import { ListTypesItems } from "../types/types";

type Props = {
  setFilteredData: React.Dispatch<
    React.SetStateAction<ListTypesItems[] | undefined>
  >;
  unFilteredData?: ListTypesItems[];
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
};

const SortButtonGroups = (props: Props) => {
  const { setFilteredData, unFilteredData, setCurrentPage } = props;

  const onClickHandlerOceaniaFilter = () => {
    const countriesWithOceania = unFilteredData?.filter(
      (item) => item.region === "Oceania"
    );
    setFilteredData(countriesWithOceania);
    setCurrentPage(1);
  };

  const onClickHandlerLithuaniaFilter = () => {
    const lithuaniaArea = unFilteredData?.filter(
      (item) => item.name === "Lithuania"
    )[0].area;
    const smallerCountries = unFilteredData?.filter(
      (item) => item.area < lithuaniaArea!
    );
    setFilteredData(smallerCountries);
    setCurrentPage(1);
  };

  const onClickHandlerSortDescending = () => {
    setCurrentPage(1);
    const sortedData = unFilteredData?.map((item)=>item).sort((a, b) => {
      let nameA = a.name.toLowerCase();
      let nameB = b.name.toLowerCase();

      if (nameA > nameB) {
        return -1;
      }
      if (nameA < nameB) {
        return 1;
      }
      return 0
    });
    setFilteredData(sortedData)
  };

  const onClickHandlerSortAscending = () => {
    setCurrentPage(1);
    const sortedData = unFilteredData?.map((item)=>item).sort((a, b) => {
      let nameA = a.name.toLowerCase();
      let nameB = b.name.toLowerCase();

      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0
    });

    setFilteredData(sortedData)
  };

  return (
    <Flex margin={2} alignItems={"center"} justifyContent={"flex-start"}>
      Sort:
      <Button
        background={"yellow.100"}
        fontSize={"sm"}
        margin={1}
        onClick={onClickHandlerSortAscending}
      >
        A-Z
      </Button>
      <Button
        background={"yellow.100"}
        fontSize={"sm"}
        margin={1}
        onClick={onClickHandlerSortDescending}
      >
        Z-A
      </Button>
      <Divider orientation="vertical" height={"3em"} margin={3} />
      Area:
      <Button
        background={"orange.100"}
        fontSize={"sm"}
        margin={1}
        onClick={onClickHandlerLithuaniaFilter}
      >
        {`< Lithuania`}
      </Button>
      <Button
        background={"orange.100"}
        fontSize={"sm"}
        margin={1}
        onClick={onClickHandlerOceaniaFilter}
      >
        in Oceania
      </Button>
    </Flex>
  );
};

export default SortButtonGroups;
