import React, { useContext, useState } from "react";
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
  Box,
} from "@chakra-ui/react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import EmptySearchList from "../EmptySearchList";
import { useNavigate } from "react-router-dom";

import GlobalStateContext from "../../Contexts/GlobalStateContext";

const DataTable = ({
  data, 
  setData,
  isLoading,
  tableHeadRow,
  tableHeadRowTwo,
  emptyMessage,
  centered,
  setMouseEntered,
  setMouseEnteredId,
  caption,
  isDraggable
}) => {
  const navigate = useNavigate();
  const { slideFromRight } = useContext(GlobalStateContext);
  if (isLoading) {
    return (
      <Box>
        {Array.from({ length: 10 }).map((_, index) => (
          <Skeleton height="32px" my="10px" key={index} />
        ))}
      </Box>
    );
  }



  const handleDragEnd = (result) => {
    if (!result.destination) return;
    const reorderedItems = Array.from(data);
    const [removed] = reorderedItems.splice(result.source.index, 1);
    reorderedItems.splice(result.destination.index, 0, removed);
    setData(reorderedItems)
    // console.log("New Order:", reorderedItems.map((item, index) => ({ index, item })));  
  };

  return (
    <TableContainer pb={8} overflowX={"scroll"} className="h-auto w-100 table-scroll">
      {data?.length === 0 ? (
        <EmptySearchList message={emptyMessage} />
      ) : (
        <DragDropContext onDragEnd={handleDragEnd}>
          <Droppable droppableId="table">
            {(provided) => (
              <>
              {/* <Box mb={2}>{caption}</Box> */}
              <Table size="sm" {...provided.droppableProps} ref={provided.innerRef}>
                <TableCaption p={0}>{caption}</TableCaption>
                <Thead backgroundColor="gray.50">
                  <Tr>
                    {tableHeadRow.map((heading, index) => (
                      <Th
                        textAlign={tableHeadRow.length - 1 === index || centered ? "center" : "left"}
                        key={index}
                        p={3}
                        width="100px" // Adjust width as needed
                        color={"#004118"}
                        whiteSpace="normal" // Allow text to wrap
                        wordBreak="normal" // Ensure long words break properly
                        overflowWrap="normal" // Break long words if necessary
                      >
                        {heading}
                      </Th>
                    ))}
                  </Tr>
                </Thead>
                <Tbody className="web-text-small">
                  {data?.map((item, index) => (
                    item.id && isDraggable ? (
                      <Draggable key={item.id.toString()} draggableId={item.id.toString()} index={index}>
                        {(provided, snapshot) => (
                          <Tr
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            transition={"0s all"}
                            _hover={{
                              bg: "blue.50",
                              cursor: "grab",
                            }}
                            bg={snapshot.isDragging ? "blue.100" : "white"}
                            boxShadow={snapshot.isDragging ? "0 0 1em rgba(0, 0, 0, 0.2)" : "none"}
                            
                          >
                            {tableHeadRow.map((heading, i) => (
                              <Td
                                textAlign={tableHeadRow.length - 1 === i || centered ? "center" : "left"}
                                color={"gray.600"}
                                key={i}
                                style={{
                                  whiteSpace: "nowrap",
                                  textOverflow: "ellipsis",
                                }}
                                className="web-text-small"
                              >
                                <Skeleton fadeDuration={index / 12} isLoaded={!isLoading}>
                                  {item[heading]}
                                </Skeleton>
                              </Td>
                            ))}
                          </Tr>
                        )}
                      </Draggable>
                    ) : (
                      <Tr key={index}>
                        {tableHeadRow.map((heading, i) => (
                          <Td
                            textAlign={tableHeadRow.length - 1 === i || centered ? "center" : "left"}
                            color={"gray.600"}
                            key={i}
                            style={{
                              whiteSpace: "nowrap",
                              textOverflow: "ellipsis",
                            }}
                            className="web-text-small"
                            w={400}
                          >
                            <Skeleton display={'flex'} alignItems={'center'} justifyContent={tableHeadRow.length - 1 === i || centered ? "center" : "start"} h={5} fadeDuration={index / 12} isLoaded={!isLoading}>
                              {item[heading]}
                            </Skeleton>
                          </Td>
                        ))}
                      </Tr>
                    )
                  ))}
                  {provided.placeholder}
                </Tbody>
              </Table>
              </>
            )}
          </Droppable>
        </DragDropContext>
      )}
    </TableContainer>
  );
};

export default DataTable;
