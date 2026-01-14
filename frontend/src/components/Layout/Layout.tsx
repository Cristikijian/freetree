import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";

const Layout = () => (
  <Box minH="100vh" minW="100vw" bg="gray.50">
    <NavBar />
    <Outlet />
  </Box>
);

export default Layout;
