import { Book, Check, X } from "phosphor-react";
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Card,
  CardBody,
  Divider,
  Heading,
  HStack,
  Input,
  Text,
} from "@chakra-ui/react";
import { TableComponent } from "../components/TableComponent";
import { createColumnHelper } from "@tanstack/react-table";

export type BookProps = {
  code: string;
  name: string;
  releaseDate: Date;
  progress: number;
  availability: boolean;
};

const columnHelper = createColumnHelper<BookProps>();

const dataInfo: BookProps[] = [
  {
    code: "811.134.3'asd232 aaas",
    name: "tanner",
    releaseDate: new Date(),
    progress: 50,
    availability: false,
  },
  {
    code: "811.134.3'3232 A485d",
    name: "tandy",
    releaseDate: new Date(),
    progress: 80,
    availability: true,
  },
  {
    code: "811.134.3'282 A485d",
    name: "joe",
    releaseDate: new Date(),
    progress: 10,
    availability: true,
  },
];

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
    cell: (info) => info.getValue().toLocaleDateString(),
    header: () => <span>Data de Lançamento</span>,
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

export function SearchBook() {
  return (
    <div>
      <Heading as="h3" size="lg" display="flex" alignItems="center">
        <Book />
        <Text>Pesquisa de Livros</Text>
      </Heading>

      <Divider orientation="horizontal" my="1rem" />

      <Card>
        <CardBody>
          <div>
            <Text>Nome do Livro</Text>
            <Input />
          </div>

          <Divider orientation="horizontal" my="1rem" />

          <Accordion allowToggle>
            <AccordionItem>
              <h2>
                <AccordionButton _expanded={{ bg: "blue.300", color: "white" }}>
                  <Box flex="1" textAlign="left">
                    Mais Filtros
                  </Box>
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <HStack spacing="1rem">
                  <Box w="50%">
                    <Text>Nome do Autor</Text>
                    <Input />
                  </Box>
                  <Box w="50%">
                    <Text>Data de Lançamento</Text>
                    <Input />
                  </Box>
                </HStack>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>

          <TableComponent
            dataInfo={dataInfo}
            columns={columns}
          ></TableComponent>
        </CardBody>
      </Card>
    </div>
  );
}
