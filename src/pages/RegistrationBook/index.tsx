import {
  Button,
  Card,
  CardBody,
  Divider,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Heading,
  Input,
  Text,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import { Plus } from "phosphor-react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "react-query";
import { postBook } from "../../services/BookService";

const createNewBookFormSchema = z.object({
  name: z.string().trim(),
  author: z.object({
    name: z.string().trim(),
  }),
  releaseDate: z.string(),
  description: z.string(),
});

type CreateBookFormInput = z.infer<typeof createNewBookFormSchema>;

export function RegistrationBook() {
  const { register, handleSubmit } = useForm<CreateBookFormInput>({
    resolver: zodResolver(createNewBookFormSchema),
  });
  const toast = useToast();

  const { isLoading, mutate } = useMutation(postBook, {
    onSuccess: () => {
      toast({
        duration: 2000,
        title: "Êxito",
        position: "top-right",
        description: "Livro Cadastrado com Sucesso!",
      });
    },
  });

  function handleCreateNewBook(book: CreateBookFormInput) {
    mutate(book);
  }

  return (
    <div>
      <Heading as="h3" size="lg" display="flex" alignItems="center">
        <Plus />
        <Text>Cadastro de Livros</Text>
      </Heading>

      <Divider orientation="horizontal" my="1rem" />

      <Card>
        <CardBody>
          <form onSubmit={handleSubmit(handleCreateNewBook)}>
            <Grid
              templateColumns={{ md: "repeat(2, 1fr)" }}
              columnGap={2}
              rowGap={4}
            >
              <GridItem>
                <FormControl>
                  <FormLabel fontWeight="bold">Nome</FormLabel>
                  <Input
                    {...register("name")}
                    type="text"
                    borderColor="gray.300"
                  />
                </FormControl>
              </GridItem>

              <GridItem>
                <FormControl>
                  <FormLabel fontWeight="bold">Autor</FormLabel>
                  <Input
                    {...register("author.name")}
                    type="text"
                    borderColor="gray.300"
                  />
                </FormControl>
              </GridItem>

              <GridItem>
                <FormControl>
                  <FormLabel fontWeight="bold">Data de Lançamento</FormLabel>
                  <Input
                    {...register("releaseDate")}
                    borderColor="gray.300"
                    type="datetime-local"
                  />
                </FormControl>
              </GridItem>

              <GridItem colSpan={{ md: 2 }}>
                <FormControl>
                  <FormLabel fontWeight="bold">Descrição do Livro</FormLabel>
                  <Textarea
                    {...register("description")}
                    borderColor="gray.300"
                    minHeight="10rem"
                  ></Textarea>
                </FormControl>
              </GridItem>
            </Grid>
            <Button
              type="submit"
              colorScheme={"blue"}
              mt={2}
              leftIcon={<Plus />}
              isLoading={isLoading}
              loadingText="Cadastrando"
            >
              Cadastrar
            </Button>
          </form>
        </CardBody>
      </Card>
    </div>
  );
}
