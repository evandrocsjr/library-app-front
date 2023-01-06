import {
  Box,
  Button,
  Card,
  CardBody,
  Divider,
  Grid,
  GridItem,
  Heading,
  Text,
} from "@chakra-ui/react";
import { Pencil, Plus, Trash, User } from "phosphor-react";
import { TableComponent } from "../components/TableComponent";
import * as z from "zod";
import { createColumnHelper } from "@tanstack/react-table";
import { useState } from "react";
import { useBooks } from "../../services/hooks/useBooks";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod/dist/zod";
import { AuthorProps } from "../../services/AuthorService";
import { useAuthors } from "../../services/hooks/useAuthors";
import { useNavigate } from "react-router-dom";

const columnHelper = createColumnHelper<AuthorProps>();

const columns = [
  columnHelper.accessor("name", {
    cell: (info) => info.getValue(),
    header: () => "Nome",
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("description", {
    cell: (info) => info.getValue(),
    header: () => "Descrição",
  }),
  columnHelper.accessor("id", {
    header: () => (
      <Box justifyContent="center" textAlign="center">
        Ação
      </Box>
    ),
    cell: (info) => (
      <Grid gridTemplateColumns={{ md: "repeat(2, 1fr)" }} gap="1">
        <GridItem>
          <Button colorScheme="blue" size="sm">
            <Pencil />
          </Button>
        </GridItem>
        <GridItem>
          <Button colorScheme="red" size="sm">
            <Trash />
          </Button>
        </GridItem>
      </Grid>
    ),
  }),
];

const searchAuthorFormSchema = z.object({
  name: z.string().trim(),
  code: z.string().trim(),
  author: z.object({
    name: z.string().trim(),
  }),
});

type SearchAuthorFormInput = z.infer<typeof searchAuthorFormSchema>;

export function AuthorList() {
  const [filter, setFilter] = useState({});
  const navigate = useNavigate();
  const { isFetching, data: authors } = useAuthors(filter);
  const { register, handleSubmit } = useForm<SearchAuthorFormInput>({
    resolver: zodResolver(searchAuthorFormSchema),
  });

  function handleSearchBook(e: SearchAuthorFormInput) {
    setFilter(e);
  }

  return (
    <div>
      <Heading as="h3" size="lg" display="flex" alignItems="center">
        <User />
        <Text>Autores</Text>
      </Heading>

      <Divider orientation="horizontal" my="1rem" />

      <Grid m="10px">
        <GridItem>
          <Button
            colorScheme="green"
            size="sm"
            onClick={() => navigate("/registrationAuthor")}
          >
            <Plus />
            Cadastrar Autor
          </Button>
        </GridItem>
      </Grid>

      <Card>
        <CardBody>
          <TableComponent dataInfo={authors} columns={columns}></TableComponent>
        </CardBody>
      </Card>
    </div>
  );
}
