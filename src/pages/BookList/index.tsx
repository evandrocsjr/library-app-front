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
import { Book, Check, Pencil, Plus, Trash, X } from "phosphor-react";
import { TableComponent } from "../components/TableComponent";
import * as z from "zod";
import { createColumnHelper } from "@tanstack/react-table";
import { BookProps } from "../../services/BookService";
import { useState } from "react";
import { useBooks } from "../../services/hooks/useBooks";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod/dist/zod";

const columnHelper = createColumnHelper<BookProps>();

const columns = [
  columnHelper.accessor("name", {
    cell: (info) => info.getValue(),
    header: () => "Nome",
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("code", {
    cell: (info) => info.getValue(),
    header: () => "Identificação",
  }),
  columnHelper.accessor((row) => row.releaseDate, {
    id: "releaseDate",
    cell: (info) => info.getValue(),
    header: () => <span>Data de Lançamento</span>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor((row) => row.author, {
    id: "author",
    cell: (info) => info.getValue(),
    header: () => <span>Nome do Autor</span>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("availability", {
    cell: (info) => (
      <Box display="flex" justifyContent="center">
        {!info.getValue() ? <X /> : <Check />}
      </Box>
    ),
    header: () => "Disponibilidade",
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

const searchBookFormSchema = z.object({
  name: z.string().trim(),
  code: z.string().trim(),
  author: z.object({
    name: z.string().trim(),
  }),
});

type SearchBookFormInput = z.infer<typeof searchBookFormSchema>;

export function BookList() {
  const [filter, setFilter] = useState({});
  const { isFetching, data: books } = useBooks(filter);
  const { register, handleSubmit } = useForm<SearchBookFormInput>({
    resolver: zodResolver(searchBookFormSchema),
  });

  function handleSearchBook(e: SearchBookFormInput) {
    setFilter(e);
  }

  return (
    <div>
      <Heading as="h3" size="lg" display="flex" alignItems="center">
        <Book />
        <Text>Livros</Text>
      </Heading>

      <Divider orientation="horizontal" my="1rem" />

      <Card>
        <CardBody>
          <TableComponent dataInfo={books} columns={columns}></TableComponent>
        </CardBody>
      </Card>
    </div>
  );
}
