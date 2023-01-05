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
} from "@chakra-ui/react";
import { Plus } from "phosphor-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "react-query";

const createNewAuthorFormSchema = z.object({
  name: z.string(),
  description: z.string(),
});

type CreateAuthorFormInput = z.infer<typeof createNewAuthorFormSchema>;

export function RegistrationAuthor() {
  const { register, handleSubmit } = useForm<CreateAuthorFormInput>({
    resolver: zodResolver(createNewAuthorFormSchema),
  });

  const { isLoading } = useMutation();

  function handleCreateNewAuthor() {}
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
