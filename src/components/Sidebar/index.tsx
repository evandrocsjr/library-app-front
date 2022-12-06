import { SidebarContainer, SidebarItem, SidebarLogoContainer } from "./styles";
import { House, MagnifyingGlass } from "phosphor-react";
import logoImg from "../../assets/logo_ufn.png";

export default function Sidebar() {
  return (
    <SidebarContainer>
      <SidebarLogoContainer>
        <img src={logoImg} alt={""} width={100} />
      </SidebarLogoContainer>
      <hr />
      <ul>
        <SidebarItem>
          <i>
            <House size={27} />
          </i>
          <span>Página Principal</span>
        </SidebarItem>
        <SidebarItem>
          <i>
            <MagnifyingGlass size={27} />
          </i>
          <span>Pesquisas</span>
        </SidebarItem>
        <li></li>
      </ul>
    </SidebarContainer>
  );
}
