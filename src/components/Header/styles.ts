import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  padding: 1rem 2rem;
  background-color: ${(props) => props.theme["blue-900"]};
  box-shadow: black 1px 0.3px 4px;
  max-height: 3.3rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: static;

  img {
    max-height: 100px;
    max-width: 100px;
  }
`;

export const HeaderIcons = styled.div`
  font-weight: bold;
  display: flex;
  gap: 1.3rem;
  justify-content: space-around;

  button {
    border: 0;
    background: transparent;
    color: ${(props) => props.theme.white};
    cursor: pointer;
    font-size: 1.5rem;
  }
`;
// export const HeaderLogo = styled.img``;
