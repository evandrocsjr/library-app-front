import { HeaderContainer, HeaderIcons } from "./styles";
import { Gear, SignOut } from "phosphor-react";

export default function Header() {
  return (
    <HeaderContainer>
      <HeaderIcons>
        <button title={"Configurações"}>
          <Gear />
        </button>
        <button title={"Sair"}>
          <SignOut />
        </button>
      </HeaderIcons>
    </HeaderContainer>
  );
}
