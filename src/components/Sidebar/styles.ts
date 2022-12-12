import styled from "styled-components";

export const SidebarContainer = styled.div`
  //border-radius: 8px;
  background-color: ${(props) => props.theme["blue-900"]};
  height: 100%;
  min-height: 100vh;
  width: 4.3rem;
  //margin-left: 1rem;
  //margin-top: 1rem;
  color: ${(props) => props.theme.white};
  transition: ease 0.2s;
  padding: 1rem 1rem 0 1rem;
  white-space: nowrap;
  position: absolute;
  z-index: 99999;

  div img {
    width: 40px;
  }

  ul li span {
    display: none;
  }

  ul {
    margin-top: 1.5rem;
    list-style: none;
  }

  //&:hover {
  //  width: 18rem;
  //
  //  div img {
  //    width: 100px;
  //  }
  //
  //  ul li span {
  //    display: block;
  //  }
  }
`;

export const SidebarLogoContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 1.5rem;
`;

export const SidebarItem = styled.li`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 0.5rem 0 0.5rem 0.5rem;
  border-radius: 5px;

  &:hover {
    background-color: ${(props) => props.theme["blue-600"]};
  }

  span {
    margin-left: 1.2rem;
  }
`;
