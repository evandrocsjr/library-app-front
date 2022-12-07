import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import { Outlet } from "react-router-dom";

export function DefaultLayout() {
  return (
    <div>
      <Header />
      <div className={"d-flex"}>
        <Sidebar />
        <div className={"p-3 w-100"}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
