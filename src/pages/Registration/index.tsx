import { Divider, Grid, GridItem, Heading, Link, Text } from "@chakra-ui/react";
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

      <Grid gridTemplateColumns="repeat(2, 1fr)" gap="1rem">
        <GridItem borderRadius="8px" bgColor="gray.200" p="1rem">
          <NavLink to="/registrationBook">Cadastro de Livros</NavLink>
        </GridItem>
        <GridItem borderRadius="8px" bgColor="gray.200" p="1rem">
          <NavLink to="/registrationAuthor">Cadastro de Autores</NavLink>
        </GridItem>
      </Grid>
    </Grid>
  );
}
