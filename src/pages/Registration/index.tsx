import {
  Button,
  Divider,
  Grid,
  GridItem,
  Heading,
  Link,
  Text,
} from "@chakra-ui/react";
import { PlusCircle } from "phosphor-react";
import { NavLink } from "react-router-dom";

export function Registration() {
  return (
    <Grid>
      <Heading as="h3" size="lg" display="flex" alignItems="center">
        <PlusCircle />
        <Text>Cadastros</Text>
      </Heading>

      <Divider orientation="horizontal" my="1rem" />

      <Grid gridTemplateColumns={{ md: "repeat(2, 1fr)" }} gap="1rem">
        <GridItem>
          <NavLink to="/registrationBook">
            <Button
              w={"100%"}
              borderRadius="8px"
              bgColor="blue.100"
              _hover={{ bg: "blue.500", color: "white" }}
              p="1rem"
            >
              Cadastro de Livros
            </Button>
          </NavLink>
        </GridItem>
        <GridItem>
          <NavLink to="/registrationAuthor">
            <Button
              w={"100%"}
              borderRadius="8px"
              bgColor="blue.100"
              _hover={{ bg: "blue.500", color: "white" }}
              p="1rem"
            >
              Cadastro de Autores
            </Button>
          </NavLink>
        </GridItem>
      </Grid>
    </Grid>
  );
}
