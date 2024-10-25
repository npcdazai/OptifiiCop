import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import React from "react";
import MiniHeader from "../../../Components/MiniHeader";
import Department from "./Department";
import Roles from "./Roles";
import EmployeePermissions from "./EmployeePermissions";

const ManageDepartmentAndRoles = () => {
  return (
    <Box p={4}  overflowX={"scroll"}>
      <Tabs>
        <TabList background={"#fff"} pt={2}>
          <Tab fontSize={"sm"} fontWeight={500}>Department</Tab>
          <Tab fontSize={"sm"}>Roles</Tab>
          <Tab fontSize={"sm"}>Employee permissions</Tab>
        </TabList>

        <TabPanels>
          <TabPanel px={0}>
            <Department />
          </TabPanel>
          <TabPanel px={0}>
            <Roles />
          </TabPanel>
          <TabPanel px={0}>
            <EmployeePermissions />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default ManageDepartmentAndRoles;
