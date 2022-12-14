import { Book, Check, MagnifyingGlass, Pencil, Trash, X } from "phosphor-react";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Card,
  CardBody,
  Divider,
  Grid,
  GridItem,
  Heading,
  Input,
  InputGroup,
  Select,
  Text,
} from "@chakra-ui/react";
import { TableComponent } from "../components/TableComponent";
import { createColumnHelper } from "@tanstack/react-table";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { BookProps } from "../../services/BookService";
import { useBooks } from "../../services/hooks/useBooks";
import { useState } from "react";

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

export function SearchBook() {
  const [filter, setFilter] = useState({});
  const { isFetching, data: books } = useBooks(filter);
  const { register, handleSubmit } = useForm<SearchBookFormInput>({
    resolver: zodResolver(searchBookFormSchema),
  });

  function handleSearchBook(e: SearchBookFormInput) {
    setFilter(e);
  }

  return (
    <Grid>
      <Heading as="h3" size="lg" display="flex" alignItems="center">
        <Book />
        <Text>Pesquisa de Livros</Text>
      </Heading>

      <Divider orientation="horizontal" my="1rem" />

      <Card>
        <CardBody>
          <form onSubmit={handleSubmit(handleSearchBook)}>
            <Grid gap={2}>
              <GridItem>
                <Text fontWeight="bold">Nome do Livro</Text>
                <InputGroup>
                  <Input borderRightRadius={0} {...register("name")} />
                  <Button
                    type="submit"
                    variant="solid"
                    isLoading={isFetching}
                    loadingText={"Carregando"}
                    borderLeftRadius="0"
                  >
                    <MagnifyingGlass size={32} /> Pesquisar
                  </Button>
                </InputGroup>
              </GridItem>
              <GridItem>
                <Text fontWeight="bold">Código do Livro</Text>
                <Input {...register("code")} />
              </GridItem>
            </Grid>

            <Divider orientation="horizontal" my="1rem" />

            <Accordion allowToggle>
              <AccordionItem>
                <h2>
                  <AccordionButton
                    borderRadius="5px"
                    bg={"gray.300"}
                    _expanded={{ bg: "blue.300", color: "white" }}
                  >
                    <Box flex="1" textAlign="left">
                      <Text fontWeight="bold">Mais Filtros</Text>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Grid
                    templateColumns={{ md: "repeat(2, 1fr)" }}
                    columnGap={6}
                    rowGap={2}
                  >
                    <GridItem>
                      <Text>Nome do Autor</Text>
                      <Input {...register("author.name")} />
                    </GridItem>
                    <GridItem>
                      <Text>Data de Lançamento</Text>
                      <Input type="datetime-local" />
                    </GridItem>
                    <GridItem>
                      <Text>Disponibilidade</Text>
                      <Select placeholder="Selecione a disponibilidade">
                        <option>Disponível</option>
                        <option>Indisponível</option>
                      </Select>
                    </GridItem>
                  </Grid>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </form>

          <TableComponent dataInfo={books} columns={columns}></TableComponent>
        </CardBody>
      </Card>
    </Grid>
  );
}
