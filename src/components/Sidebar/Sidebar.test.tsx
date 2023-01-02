import { render, screen } from "@testing-library/react";
import Sidebar from "./index";
import { mock } from "jest-mock-extended";
import { ReactNode } from "react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

jest.mock("../../assets/logo_ufn.png", () => {
  return {
    default: "logoImg",
  };
});

describe("Sidebar", () => {
  it("Check content rendering", () => {
    render(
      <BrowserRouter>
        <Sidebar />
      </BrowserRouter>
    );
    // const mockInterface = mock<SidebarMenuItems>();
    // mockInterface.name("Página Principal");

    // expect(mockInterface.name).toHaveBeenCalledWith("Página Principal");
    expect(screen.getByText("Pesquisa")).toBeInTheDocument();
  });
});
