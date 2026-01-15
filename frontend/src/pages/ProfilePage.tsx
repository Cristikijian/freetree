import { Box, Button, Container, Field, Fieldset, Input } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { userService } from "../services/userService";
import type { User } from "../types";
const ProfilePage = () => {
  const [currentUser, setCurrentUser] = useState<User | undefined>();
  const [isOpenPostForm, setIsOpenPostForm] = useState<boolean>(false);

  useEffect(() => { 
    userService.getCurrentUser().then((response) => {
      if (response) {
        setCurrentUser(response.data);
      }
    });
  }, []);

  const handleOnClick = () => {
    setIsOpenPostForm(!isOpenPostForm)
  }

  const handleSubmit = () => {

  }
 
  return (
    <Container>
      <Box as={"h2"} fontSize={"2xl"}>
        {currentUser?.username}
      </Box>
      <Box>{currentUser?.email}</Box>
      <Box>{String(currentUser?.createdAt)}</Box>
      <Button backgroundColor={'slate'} onClick={handleOnClick}>Создать пост</Button>
      {isOpenPostForm && (
              <Fieldset.Root>
        <Fieldset.Legend>Напишите что-то нибудь</Fieldset.Legend>
        <Fieldset.Content>
        <Field.Root>
          <Field.Label>Заголовок</Field.Label>
          <Input name="name" />
        </Field.Root>

        <Field.Root>
          <Field.Label>Описание</Field.Label>
          <Input name="description" />
        </Field.Root>
                <Field.Root>
          <Field.Label>Текст</Field.Label>
          <Input name="content" />
        </Field.Root>
        </Fieldset.Content>
        <Button type="submit" alignSelf="flex-start" backgroundColor={'slate'} onSubmit={handleSubmit}>
        Опубликовать
      </Button>
      </Fieldset.Root>
      )}
    </Container>
  );
};

export default ProfilePage;
