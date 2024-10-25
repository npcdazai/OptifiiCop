import React from "react";
import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Skeleton,
  TableCaption,
  Checkbox,
} from "@chakra-ui/react";
import EmptySearchList from "../EmptySearchList";
import { TABLE_PAGINATION } from "../../Constants/Paginations";

const NormalTable = ({
  data,
  isLoading,
  tableHeadRow,
  emptyMessage,
  centered,
  total,
  showRadioButton, // Prop for showing the checkboxes
  selectedRadio,
  setSelectedRadio, // State for managing selected checkboxes
}) => {
  const columnWidth =
    data && data[0]
      ? `${(100 / Object.keys(data[0]).length).toFixed(2)}%`
      : "auto";

  // Toggle checkbox selection for individual rows
  const handleCheckboxChange = (value) => {
    console.log(value , "Noggas values");
    
    setSelectedRadio((prev) =>
       {
      if (prev.includes(value)) {
        // Remove if already selected
        return prev.filter((id) => id !== value);
      } else {
        // Add to selected
        return [...prev, value];
      }
    }
  );
  };

  // Handle "Check All" checkbox
  const handleCheckAllChange = () => {
    if (selectedRadio.length === data.length) {
      setSelectedRadio([]); // Deselect all if already selected
    } else {
      const allIds = data.map((item) => item.id);
      setSelectedRadio(allIds); // Select all
    }
    console.log(selectedRadio);
    
  };

  return (
    <TableContainer overflowX={"auto"} className="h-auto w-100 table-scroll">
      {data?.length === 0 ? (
        <EmptySearchList message={emptyMessage} />
      ) : (
        <Table size="sm">
          {/* <TableCaption p={total ? 0 : null}>
            {total ? total : "Optifii v1.0.0"}
          </TableCaption> */}
          <Thead bg="purple.100">
            <Tr>
              {showRadioButton && (
                <Th
                  color={"purple.900"}
                  textAlign={"center"}
                  p={4}
                  whiteSpace="normal"
                  wordBreak="normal"
                  overflowWrap="normal"
                  textTransform={"none"}
                >
                  <Checkbox
                    isChecked={selectedRadio?.length === data?.length}
                    onChange={handleCheckAllChange}
                    colorScheme="purple"

                  />
                </Th>
              )}
              {tableHeadRow.map((heading, index) => (
                <Th
                  color={"purple.900"}
                  textAlign={
                    tableHeadRow.length - 1 === index || centered
                      ? "center"
                      : "left"
                  }
                  key={index}
                  p={4}
                  whiteSpace="normal"
                  wordBreak="normal"
                  overflowWrap="normal"
                  textTransform={"none"}
                >
                  {isLoading ? <Skeleton height="20px" /> : heading}
                </Th>
              ))}
            </Tr>
          </Thead>
          <Tbody className="web-text-small">
            {isLoading
              ? Array.from({ length: TABLE_PAGINATION?.size }).map(
                  (_, index) => (
                    <Tr
                      bg={index % 2 === 0 ? "white" : "#6311cb14"}
                      key={index}
                    >
                      {tableHeadRow.map((_, i) => (
                        <Td
                          key={i}
                          style={{
                            whiteSpace: "nowrap",
                            textOverflow: "ellipsis",
                          }}
                          className="web-text-small"
                        >
                          <Skeleton height="20px" mb={1} mt={1} />
                        </Td>
                      ))}
                    </Tr>
                  )
                )
              : data?.map((item, index) => (
                  <Tr
                    cursor={"pointer"}
                    transition={"0.2s all"}
                    maxH={8}
                    bg={index % 2 === 0 ? "white" : "#6311cb14"}
                    key={index}
                    // _hover={{ shadow: "lg" }} 
                  >
                    {showRadioButton && (
                      <Td textAlign={"center"}>
                        <Checkbox
                          bg={"#fff"}
                          colorScheme="purple"
                          value={item.id}
                          isChecked={selectedRadio?.includes(item.id)}
                          onChange={() => handleCheckboxChange(item.id)}
                        />
                      </Td>
                    )}
                    {tableHeadRow.map((heading, i) => (
                      <Td
                        textAlign={
                          tableHeadRow?.length - 1 === i || centered
                            ? "center"
                            : "left"
                        }
                        color={"gray.600"}
                        key={i}
                        fontWeight={500}
                        style={{
                          whiteSpace: "nowrap",
                          textOverflow: "ellipsis",
                        }}
                        className="web-text-small"
                      >
                        {item[heading]}
                      </Td>
                    ))}
                  </Tr>
                ))}
          </Tbody>
        </Table>
      )}
    </TableContainer>
  );
};

export default NormalTable;
