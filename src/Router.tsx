import { Route, Routes } from "react-router-dom";
import { SearchBook } from "./pages/SearchBook";
import { DefaultLayout } from "./layouts/DefaultLayout";

export function Router() {
  return (
    <Routes>
      <Route path={"/"} element={<DefaultLayout />}>
        <Route path={"/"} element={<SearchBook />} />
      </Route>
    </Routes>
  );
}
