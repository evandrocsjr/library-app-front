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
import { Plus, X } from "phosphor-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "react-query";
import { postAuthor } from "../../services/AuthorService";
import { useNavigate } from "react-router-dom";

const createNewAuthorFormSchema = z.object({
  name: z.string(),
  description: z.string(),
});

type CreateAuthorFormInput = z.infer<typeof createNewAuthorFormSchema>;

export function RegistrationAuthor() {
  const infoToast = useToast();
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm<CreateAuthorFormInput>({
    resolver: zodResolver(createNewAuthorFormSchema),
  });

  const createAuthor = useMutation(postAuthor, {
    onSuccess: () => {
      infoToast({
        description: "Autor Criado com Sucesso!",
        title: "Sucesso",
        status: "success",
        position: "top-right",
      });
      reset();
    },
  });

  function handleCreateNewAuthor(author: CreateAuthorFormInput) {
    createAuthor.mutate(author);
  }
  return (
    <div>
      <Heading as="h3" size="lg" display="flex" alignItems="center">
        <Plus />
        <Text>Cadastro de Autores</Text>
      </Heading>

      <Divider orientation="horizontal" my="1rem" />

      <Card>
        <CardBody>
          <form onSubmit={handleSubmit(handleCreateNewAuthor)}>
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

              <GridItem colSpan={{ md: 2 }}>
                <FormControl>
                  <FormLabel fontWeight="bold">Descrição</FormLabel>
                  <Textarea
                    {...register("description")}
                    borderColor="gray.300"
                    minHeight="10rem"
                  ></Textarea>
                </FormControl>
              </GridItem>
              <GridItem>
                <Grid
                  templateColumns={{ md: "repeat(2, 1fr)" }}
                  mt="10px"
                  gap="1rem"
                >
                  <Button
                    type="submit"
                    colorScheme={"blue"}
                    mt={2}
                    size="sm"
                    leftIcon={<Plus />}
                    isLoading={createAuthor.isLoading}
                    loadingText="Cadastrando"
                  >
                    Cadastrar
                  </Button>
                  <Button
                    colorScheme={"red"}
                    mt={2}
                    size="sm"
                    onClick={() => navigate(-1)}
                    leftIcon={<X />}
                    loadingText="Cadastrando"
                  >
                    Cancelar
                  </Button>
                </Grid>
              </GridItem>
            </Grid>
          </form>
        </CardBody>
      </Card>
    </div>
  );
}
