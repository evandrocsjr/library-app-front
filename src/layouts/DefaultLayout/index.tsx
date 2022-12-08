import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import { Outlet } from "react-router-dom";
import { Box, Flex } from "@chakra-ui/react";

export function DefaultLayout() {
  return (
    <div>
      <Header />
      <Flex>
        <Sidebar />
        <Box padding="1rem" flex="1">
          <Outlet />
        </Box>
      </Flex>
    </div>
  );
}
