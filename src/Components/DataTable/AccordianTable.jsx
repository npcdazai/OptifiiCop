import React, { useState } from "react";
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
  CheckboxGroup,
  Collapse,
  HStack,
  Text,
  Box,
} from "@chakra-ui/react";
import EmptySearchList from "../EmptySearchList";
import { TABLE_PAGINATION } from "../../Constants/Paginations";

const AccordionTable = ({
  data,
  isLoading,
  tableHeadRow,
  emptyMessage,
  centered,
  total,
  showRadioButton,
  selectedRadio,
  setSelectedRadio,
}) => {
  const [expandedRow, setExpandedRow] = useState(null);

  const columnWidth =
    data && data[0]
      ? `${(100 / Object.keys(data[0]).length).toFixed(2)}%`
      : "auto";

  const toggleRow = (index) => {
    setExpandedRow(expandedRow === index ? null : index); // Toggle row expansion
  };

  // Toggle checkbox selection for individual rows
  const handleCheckboxChange = (value) => {
    setSelectedRadio((prev) => {
      if (prev.includes(value)) {
        return prev.filter((id) => id !== value); // Deselect if already selected
      } else {
        return [...prev, value]; // Add if not selected
      }
    });
  };

  // Handle "Select All" checkbox functionality
  const handleCheckAllChange = () => {
    if (selectedRadio.length === data.length) {
      setSelectedRadio([]); // Deselect all if already selected
    } else {
      const allIds = data.map((item) => item.id);
      setSelectedRadio(allIds); // Select all
    }
  };

  return (
    <TableContainer overflowX={"auto"} className="h-auto w-100 table-scroll">
      {data?.length === 0 ? (
        <EmptySearchList message={emptyMessage} />
      ) : (
        <Table size="sm">
          <TableCaption p={total ? 0 : null}>
            {total ? total : "OptiFii v1.0.0"}
          </TableCaption>
          <Thead bg="#6311cb37">
            <Tr>
              {showRadioButton && (
                <Th textAlign="center" p={4}>
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
                    <Tr bg={index % 2 === 0 ? "" : "#6311cb14"} key={index}>
                      {tableHeadRow.map((_, i) => (
                        <Td key={i} className="web-text-small">
                          <Skeleton height="20px" mb={1} mt={1} />
                        </Td>
                      ))}
                    </Tr>
                  )
                )
              : data?.map((item, index) => (
                  <React.Fragment key={index}>
                    <Tr
                      cursor={"pointer"}
                      transition={"0.2s all"}
                      _hover={{ shadow: "lg" }}
                      h={12}
                      bg={index % 2 === 0 ? "" : "#6311cb14"}
                      onClick={() => toggleRow(index)}
                    >
                      {showRadioButton && (
                        <Td textAlign="center">
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

                    {/* Expanded Row Content */}
                    <Tr>
                      <Td colSpan={tableHeadRow.length} p={0}>
                        <Collapse in={expandedRow === index} animateOpacity>
                          {item?.subMenu?.map(({ wallet, walBal }, idx) => (
                            <div
                              key={idx}
                              style={{
                                padding: "4px 75px ",
                                margin: "5px 0",
                              }}
                            >
                              <Box display={"flex"} alignItems={"center"}>
                                <Box opacity={0} flex={1}>
                                  <Text mb={0}>Hidden content</Text>
                                </Box>
                                <HStack
                                  justifyContent={"space-between"}
                                  w={"220px"}
                                >
                                  <Box>
                                    <Checkbox>
                                      <Text as={"span"} fontSize={"xs"}>
                                        {wallet}
                                      </Text>
                                    </Checkbox>
                                  </Box>
                                  <Text fontSize={"xs"} mb={0}>
                                    {walBal}
                                  </Text>
                                </HStack>
                              </Box>
                            </div>
                          ))}
                        </Collapse>
                      </Td>
                    </Tr>
                  </React.Fragment>
                ))}
          </Tbody>
        </Table>
      )}
    </TableContainer>
  );
};

export default AccordionTable;
