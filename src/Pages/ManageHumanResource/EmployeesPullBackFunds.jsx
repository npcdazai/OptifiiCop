import { Box, Tab, TabIndicator, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import React from "react";
import PullBackFundsExpense from "./PullBackFundsExpense";
import PullBackFundsBenefit from "./PullBackFundsBenefit";
import PullBackFundsGifts from "./PullBackFundsGifts";

const EmployeesPullBackFunds = () => {
    return (
        <Box p={4} overflowX={"scroll"}>
            <Tabs position='relative' variant='unstyled'>
                <TabList background={"#fff"} pt={2}>
                    <Tab
                        color={"#313039"}
                        fontSize={"sm"}
                        fontWeight={500}
                        _selected={{
                            color: "#5E0FCD",
                        }}>Expense</Tab>
                    <Tab 
                    color={"#313039"}
                        fontSize={"sm"}
                        fontWeight={500}
                        _selected={{
                            color: "#5E0FCD",
                        }}>Benefit</Tab>
                    <Tab 
                    color={"#313039"}
                        fontSize={"sm"}
                        fontWeight={500}
                        _selected={{
                            color: "#5E0FCD",
                        }}>Gifts</Tab>
                </TabList>
                <TabIndicator mt='-1.5px' height='2px' bg='#5E0FCD' borderRadius='1px' />

                <TabPanels>
                    <TabPanel px={0}>
                        <PullBackFundsExpense />
                    </TabPanel>
                    <TabPanel px={0}>
                        <PullBackFundsBenefit />
                    </TabPanel>
                    <TabPanel px={0}>
                        <PullBackFundsGifts />
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Box>
    );
};

export default EmployeesPullBackFunds;
