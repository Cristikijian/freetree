import {
  Badge,
  Box,
  Button,
  Card,
  CardBody,
  chakra,
  Container,
  Field,
  Fieldset,
  Heading,
  HStack,
  IconButton,
  Input,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FiEdit2, FiPlus, FiTrash2 } from "react-icons/fi";
import { postsService } from "../services/postsService";
import { userService } from "../services/userService";
import type { Post, User } from "../types";

const JournalPage = () => {
  const [currentUser, setCurrentUser] = useState<User | undefined>();
  const [isOpenPostForm, setIsOpenPostForm] = useState<boolean>(false);
  const [isOpenUpdateForm, setIsOpenUpdateForm] = useState<
    Record<string, boolean>
  >({});
  const [posts, setPosts] = useState<Post[]>([]);
  const [editingPostId, setEditingPostId] = useState<number | null>(null);

  useEffect(() => {
    userService.getCurrentUser().then((response) => {
      if (response) {
        setCurrentUser(response.data);
      }
    });
  }, []);

  useEffect(() => {
    postsService.getPosts().then((response) => {
      if (response) {
        setPosts(response.data);
      }
    });
  }, []);
  const { register, reset, handleSubmit, setValue } = useForm<{
    title: string;
    description?: string;
    content: string;
  }>();

  const handleOnClick = () => {
    setIsOpenPostForm(!isOpenPostForm);
  };

  const onSubmit = async (data: {
    title: string;
    description?: string;
    content: string;
  }) => {
    if (!currentUser) return;

    try {
      if (editingPostId) {
        const postData = {
          ...data,
          id: editingPostId,
          authorId: currentUser.id,
        };
        await postsService.updatePost(postData);
      } else {
        const postData = {
          ...data,
          authorId: currentUser.id,
        };
        await postsService.createPost(postData);
      }

      const updatedPosts = await postsService.getPosts();
      if (updatedPosts) {
        setPosts(updatedPosts.data);
      }
      setIsOpenPostForm(false);
      setIsOpenUpdateForm({});
      setEditingPostId(null);
      reset();
    } catch (e) {
      console.error(e);
    }
  };

  const handleEditClick = (post: Post) => {
    setEditingPostId(post.id as number);
    setIsOpenUpdateForm({ [String(post.id)]: true });
    setValue("title", String(post.title));
    setValue("content", String(post.content));
  };

  const handleDelete = async (id: number) => {
    await postsService.delete(id);
    const updatedPosts = await postsService.getPosts();
    if (updatedPosts) {
      setPosts(updatedPosts.data);
    }
  };

  const handleCancel = () => {
    setIsOpenUpdateForm({});
    setEditingPostId(null);
    reset();
  };

  return (
    <Container maxW="container.lg" py={6}>
      <VStack gap={6} align="stretch">
        <HStack justify="space-between" align="center">
          <Heading size="lg" color="navy">
            Дневник
          </Heading>
          <Button
            backgroundColor="slate"
            color="white"
            onClick={handleOnClick}
            borderRadius="full"
            px={6}
            _hover={{ filter: "brightness(110%)" }}
          >
            {" "}
            <Box as="span" mr={2} display="inline-flex" alignItems="center">
              <FiPlus />
            </Box>
            Создать пост
          </Button>
        </HStack>

        <chakra.hr borderColor="gray.200" my={4} />
        {isOpenPostForm && !editingPostId && (
          <Card.Root variant="outline" borderColor="slate" mb={4}>
            <CardBody>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Fieldset.Root>
                  <Fieldset.Legend>Напишите что-то нибудь</Fieldset.Legend>
                  <Fieldset.Content>
                    <Field.Root>
                      <Field.Label>Заголовок</Field.Label>
                      <Input {...register("title")} name="title" />
                    </Field.Root>
                    <Field.Root>
                      <Field.Label>Текст</Field.Label>
                      <Input {...register("content")} name="content" />
                    </Field.Root>
                  </Fieldset.Content>
                  <Button
                    type="submit"
                    alignSelf="flex-start"
                    backgroundColor={"slate"}
                  >
                    Опубликовать
                  </Button>
                </Fieldset.Root>
              </form>
            </CardBody>
          </Card.Root>
        )}
        {!posts.length && (
          <Box
            textAlign="center"
            py={10}
            borderWidth="2px"
            borderStyle="dashed"
            borderRadius="lg"
            borderColor="gray.200"
          >
            <Text color="gray.500">Пока нет постов</Text>
            <Text color="gray.400" fontSize="sm">
              Создайте свой первый пост
            </Text>
          </Box>
        )}

        {posts.length > 0 &&
          posts.map((post: Post) => {
            return !isOpenUpdateForm[String(post.id)] ? (
              <Stack gap={4} key={post.id}>
                <Box
                  flexDirection={"column"}
                  key={post.id}
                  borderWidth="2px"
                  borderStyle="dashed"
                  borderRadius="lg"
                  padding={4}
                  borderColor="gray.200"
                >
                  <HStack justify="space-between">
                    <Text fontWeight="bold" fontSize="lg" color="navy">
                      {post.title}
                    </Text>
                    <Badge colorScheme="gray" borderRadius="full" px={3}>
                      {new Date(String(post.createdAt)).toLocaleString()}
                    </Badge>
                  </HStack>
                  <Box bg="gray.50" p={3} borderRadius="md">
                    <Text>{post.content}</Text>
                  </Box>
                  <HStack justify="flex-end" gap={2}>
                    <IconButton
                      aria-label="Редактировать"
                      variant="ghost"
                      padding={4}
                      _hover={{ borderColor: "slate" }}
                      onClick={() => handleEditClick(post)}
                      borderRadius="full"
                    >
                      <FiEdit2 />
                      Редактировать
                    </IconButton>
                    <IconButton
                      aria-label="Удалить"
                      variant="ghost"
                      padding={4}
                      _hover={{ borderColor: "slate" }}
                      borderRadius="full"
                      onClick={() => handleDelete(post.id as number)}
                    >
                      <FiTrash2 />
                      Удалить
                    </IconButton>
                  </HStack>
                </Box>
              </Stack>
            ) : (
              <Stack gap={4}>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <Fieldset.Root>
                    <Fieldset.Legend>Напишите что-то нибудь</Fieldset.Legend>
                    <Fieldset.Content>
                      <Field.Root>
                        <Field.Label></Field.Label>
                        <Input
                          defaultValue={post.title as string}
                          {...register("title")}
                          name="title"
                        />
                      </Field.Root>
                      <Field.Root>
                        <Field.Label></Field.Label>
                        <Input
                          defaultValue={post.content as string}
                          {...register("content")}
                          name="content"
                        />
                      </Field.Root>
                    </Fieldset.Content>
                    <Box flexDirection={"row"}>
                      <Button
                        type="submit"
                        alignSelf="flex-start"
                        backgroundColor={"slate"}
                        margin={"5px"}
                      >
                        Опубликовать
                      </Button>
                      <Button
                        type="reset"
                        alignSelf="flex-start"
                        backgroundColor={"slate"}
                        onClick={handleCancel}
                      >
                        Отмена
                      </Button>
                    </Box>
                  </Fieldset.Root>
                </form>
              </Stack>
            );
          })}
      </VStack>
    </Container>
  );
};
export default JournalPage;
