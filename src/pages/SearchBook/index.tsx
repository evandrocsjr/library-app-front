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
  Heading,
  HStack,
  Input,
  InputGroup,
  Text,
} from "@chakra-ui/react";
import { TableComponent } from "../components/TableComponent";
import { createColumnHelper } from "@tanstack/react-table";
import { useQuery } from "react-query";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "../../lib/axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { getBooks } from "../../services/BookService";

export type BookProps = {
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
  name: z.string(),
  author: z.object({
    name: z.string(),
  }),
});

type SearchBookFormInput = z.infer<typeof searchBookFormSchema>;

export function SearchBook() {
  const [books, setBooks] = useState<BookProps[]>([]);
  const { register, handleSubmit, reset } = useForm<SearchBookFormInput>({
    resolver: zodResolver(searchBookFormSchema),
  });

  const { isLoading, data } = useQuery("book", getBooks);
  console.log(data);

  let dataBookParams: SearchBookFormInput;

  function handleSearchBook(dataBook: SearchBookFormInput) {
    console.log("sdadasd");
    dataBookParams = dataBook;
    // const { isLoading, error, data, isFetching } = useQuery(["data"], () => {
    //   api.get("books", { headers: { params: dataBook } }).then((r) => {
    //     setBooks(r.data);
    //   });
    // });
  }

  // const teste = useQuery(["data"], () => {
  //   api.get("books", { params: { dataBookParams } }).then((r) => {
  //     setBooks(r.data);
  //   });
  // });
  // const getBooks = async () => {};

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
            <div>
              <Text>Nome do Livro</Text>
              <InputGroup>
                <Input borderRightRadius={0} {...register("name")} />
                <Button
                  variant="solid"
                  isLoading={isLoading}
                  loadingText={"Carregando"}
                  borderLeftRadius="0"
                  type="submit"
                >
                  <MagnifyingGlass size={32} /> Pesquisar
                </Button>
              </InputGroup>
            </div>

            <Divider orientation="horizontal" my="1rem" />

            <Accordion allowToggle>
              <AccordionItem>
                <h2>
                  <AccordionButton
                    bg={"gray.200"}
                    _expanded={{ bg: "blue.300", color: "white" }}
                  >
                    <Box flex="1" textAlign="left">
                      <Text fontWeight="bold">Mais Filtros</Text>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <HStack spacing="1rem">
                    <Box w="50%">
                      <Text>Nome do Autor</Text>
                      <Input {...register("author.name")} />
                    </Box>
                    <Box w="50%">
                      <Text>Data de Lançamento</Text>
                      <Input type="datetime-local" />
                    </Box>
                  </HStack>
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
