import { Book } from "phosphor-react";
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Card,
  CardBody,
  Divider,
  Flex,
  Heading,
  HStack,
  Input,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { TableComponent } from "../components/TableComponent";

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

          <TableComponent></TableComponent>
        </CardBody>
      </Card>
    </div>
  );
}
