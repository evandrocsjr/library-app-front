import { Route, Routes } from "react-router-dom";
import { SearchBook } from "./pages/SearchBook";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { RegistrationBook } from "./pages/RegistrationBook";

export function Router() {
  return (
    <Routes>
      <Route path={"/"} element={<DefaultLayout />}>
        <Route path={"/"} element={<SearchBook />} />
        <Route path={"/registrationBook"} element={<RegistrationBook />} />
      </Route>
    </Routes>
  );
}
