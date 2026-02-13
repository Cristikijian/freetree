import { Box, Container } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { userService } from "../services/userService";
import type { User } from "../types";
const ProfilePage = () => {
  const [currentUser, setCurrentUser] = useState<User | undefined>();

  useEffect(() => {
    userService.getCurrentUser().then((response) => {
      if (response) {
        setCurrentUser(response.data);
      }
    });
  }, []);

  return (
    <Container>
      <Box as={"h2"} fontSize={"2xl"}>
        {currentUser?.username}
      </Box>
      <Box>{currentUser?.email}</Box>
      <Box>{String(currentUser?.createdAt)}</Box>
    </Container>
  );
};

export default ProfilePage;
