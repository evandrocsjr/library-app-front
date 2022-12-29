import { Book, Check, MagnifyingGlass, X } from "phosphor-react";
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
import { useQuery } from "react-query";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { getBooks } from "../../services/BookService";

export type BookProps = {
  id: number;
  code: string;
  name: string;
  releaseDate: Date;
  progress: number;
  availability: boolean;
  author: {
    name: string;
  };
};

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
  columnHelper.accessor((row) => row.author.name, {
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
  const { register, handleSubmit, getValues } = useForm<SearchBookFormInput>({
    resolver: zodResolver(searchBookFormSchema),
  });

  let bookValidated: SearchBookFormInput = getValues();

  const {
    isFetching,
    data: books,
    refetch,
  } = useQuery<BookProps[], Error>("books", () => {
    return getBooks(bookValidated);
  });

  function handleSearchBook(e: SearchBookFormInput) {
    bookValidated = e;
    refetch();
  }

  return (
    <div>
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
    </div>
  );
}
