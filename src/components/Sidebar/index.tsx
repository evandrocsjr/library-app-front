import { Books, Gear, House, MagnifyingGlass } from "phosphor-react";
import { Box, Image, Img, List, Tooltip } from "@chakra-ui/react";
import { ReactNode } from "react";
import logoImg from "../../assets/logo_ufn.png";

interface SidebarMenuItems {
  name: string;
  icon: ReactNode;
}

const sidebarItems: SidebarMenuItems[] = [
  { name: "Página Principal", icon: <House size={22} /> },
  { name: "Pesquisa", icon: <MagnifyingGlass size={22} /> },
  { name: "Cadastros", icon: <Books size={22} /> },
  { name: "Configurações", icon: <Gear size={22} /> },
];

export default function Sidebar() {
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
      position="absolute"
      w={"4rem"}
    >
      <Box mb="1rem">
        <Image boxSize={""} src={logoImg} alt="" />
      </Box>

      {sidebarItems.map((item) => {
        return (
          <Tooltip
            key={item.name}
            bg="gray.300"
            hasArrow
            label={item.name}
            color="black"
            borderRadius="2px"
            p={2}
            display={"flex"}
          >
            <Box
              p={2}
              _hover={{ bg: "blue.600" }}
              borderRadius="8px"
              cursor={"pointer"}
            >
              {item.icon}
            </Box>
          </Tooltip>
        );
      })}
      <li></li>
    </List>
  );
}
