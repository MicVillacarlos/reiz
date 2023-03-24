import { Button, Flex, Stack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { MdArrowCircleRight, MdArrowCircleLeft } from "react-icons/md";

type Props = {
  totalItems?: number;
  itemsPerPage: number;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

const Pagination = (props: Props) => {
  const [pageRangeFirst, setPageRangeFirst] = useState<number>();
  const [pageRangeLast, setPageRangeLast] = useState<number>();
  const { totalItems, itemsPerPage, currentPage, setCurrentPage } = props;
  let pages: number[] = [];

  for (let i = 1; i <= Math.ceil(totalItems! / itemsPerPage); i++) {
    pages.push(i);
  }

  const pageNumberingFilter = () => {
    const currentPageCheck = currentPage % 10;
    if (currentPageCheck === 1) {
      setPageRangeFirst(currentPage - 1);
      setPageRangeLast(currentPage + 9);
    } else if (currentPageCheck === 0) {
      setPageRangeFirst(currentPage - 10);
      setPageRangeLast(currentPage);
    }
  };

  useEffect(() => {
    pageNumberingFilter();
  }, [currentPage]);

  const pageNumbers = pages.slice(pageRangeFirst, pageRangeLast);
  return (
    <Flex justifyContent={"center"}>
      <Stack direction="row" spacing={1} margin={5}>
        <Button
          isDisabled={currentPage === 1 && true}
          colorScheme="yellow"
          variant="ghost"
          leftIcon={<MdArrowCircleLeft />}
          onClick={() => setCurrentPage(currentPage - 1)}
        />
        {pageNumbers.map((page,index) => {
          return (
            <>
              <Button
                colorScheme="yellow"
                variant={currentPage === page ? "solid" : "outline"}
                key={index}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </Button>
            </>
          );
        })}
        <Button
          colorScheme="yellow"
          variant="ghost"
          leftIcon={<MdArrowCircleRight />}
          onClick={() => setCurrentPage(currentPage + 1)}
          isDisabled={currentPage === pages.length && true}
        />
      </Stack>
    </Flex>
  );
};

export default Pagination;
