import React, { useState } from 'react';
import { Select, HStack, Text, Box, IconButton } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

const Pagination = ({ pageSize, setPageSize, totalItems,isLoading, setCurrentPage, currentPage }) => {
  // const [] = useState(itemsPerPageOptions[0]);


  const totalPages = Math.ceil(totalItems / pageSize);

  const handlePageSizeChange = (e) => {
    setPageSize(Number(e.target.value));
    setCurrentPage(1); // Reset to first page whenever page size changes
  };

  const paginationPrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const paginationNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const displayRange = {
    start: (currentPage - 1) * pageSize + 1,
    end: Math.min(currentPage * pageSize, totalItems),
  };

  return (
    <HStack d="flex" justifyContent="flex-end" alignItems="center">
      {/* <Text className='web-text-small'>Tanami v0.1</Text> */}

      <HStack>
      <Select
        
        className="pointer web-text-small"
        width={"90px"}
        rounded="sm"
        size="sm"
        value={pageSize}
        onChange={handlePageSizeChange}
      >
        {[ 15, 20, 30]?.map((size) => (
          <option key={size} value={size}>
            {size}
          </option>
        ))}
      </Select>
        <IconButton
        mt={1}
          size={'sm'}
          rounded="sm" 
          icon={<ChevronLeftIcon />}
          onClick={paginationPrev}
          className="link pointer"
          isDisabled={currentPage === 1}
        />
        <Text w={"81px"} display={'flex'} justifyContent={'center'} className="web-text-medium" as={"span"}>
          {isLoading ? "0": displayRange?.start} - {isLoading ? "00" :displayRange?.end} of {isLoading ? "00":totalItems}
        </Text>
        <IconButton
        mt={1}
          icon={<ChevronRightIcon />}
          size={'sm'}
          rounded="sm" 
          onClick={paginationNext}
          className="link pointer"
          isDisabled={currentPage === totalPages}
        />
      </HStack>
    </HStack>
  );
};

export default Pagination;