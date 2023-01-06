import {
  Books,
  Gear,
  House,
  MagnifyingGlass,
  Person,
  User,
} from "phosphor-react";
import { Box, Image, List, Tooltip } from "@chakra-ui/react";
import { ReactNode } from "react";
import logoImg from "../../assets/logo_ufn.png";
import { NavLink, useLocation } from "react-router-dom";

interface SidebarMenuItems {
  name: string;
  icon: ReactNode;
  to: string;
}

const sidebarItems: SidebarMenuItems[] = [
  { name: "Página Principal", to: "", icon: <House size={22} /> },
  // { name: "Pesquisa", to: "/", icon: <MagnifyingGlass size={22} /> },
  { name: "Livros", to: "/book", icon: <Books size={22} /> },
  { name: "Autores", to: "/author", icon: <User size={22} /> },
  { name: "Configurações", to: "", icon: <Gear size={22} /> },
];

export default function Sidebar() {
  const { pathname } = useLocation();

  function bgColorSidebarItemFocus(item: SidebarMenuItems) {
    return item.to === pathname ? "blue.600" : "";
  }

  return (
    // // <SidebarContainer>
    //   {/* <SidebarLogoContainer> */}
    //   {/*  <img src={logoImg} alt={""} width={100} /> */}
    //   {/* </SidebarLogoContainer> */}
    //   // <Box p={3}>
    //   //   <CaretDoubleLeft size={22} />
    //   // </Box>
    //   // <hr />
    <List
      p={3}
      bg="blue.900"
      color="white"
      minHeight="100vh"
      height="100%"
      position="fixed"
      w="4rem"
    >
      <Box mb="1rem">
        <Image boxSize={""} src={logoImg} alt="" />
      </Box>

      {sidebarItems.map((item) => {
        return (
          <Tooltip
            placement="right-start"
            key={item.name}
            bg="gray.300"
            hasArrow
            label={item.name}
            color="black"
            borderRadius="2px"
            p="2"
            display="flex"
          >
            <NavLink to={item.to}>
              <Box
                p="2"
                mt="1"
                _hover={{ bg: "blue.600" }}
                borderRadius="8px"
                bg={bgColorSidebarItemFocus(item)}
                cursor="pointer"
              >
                {item.icon}
              </Box>
            </NavLink>
          </Tooltip>
        );
      })}
      <li></li>
    </List>
  );
}
