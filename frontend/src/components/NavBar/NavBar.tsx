import { Box, Stack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Stack
      direction={"row"}
      borderSpacingX={"24px"}
      backgroundColor={"#004359"}
      height={"60px"}
      fontSize={"24px"}
      fontWeight={400}
    >
      <Link to="/">
        <Box cursor={"pointer"} color={"white"}>
          Главная
        </Box>
      </Link>
      <Link to="/login">
        <Box cursor={"pointer"} color={"white"}>
          Авторизация
        </Box>
      </Link>
      <Link to="/profile">
        <Box cursor={"pointer"} color={"white"}>
          Профиль
        </Box>
      </Link>
      <Link to="/journal">
        <Box cursor={"pointer"} color={"white"}>
          Журнал
        </Box>
      </Link>
    </Stack>
  );
};

export default NavBar;
