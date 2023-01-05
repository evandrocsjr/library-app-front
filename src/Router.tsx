import { Route, Routes } from "react-router-dom";
import { SearchBook } from "./pages/SearchBook";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { RegistrationBook } from "./pages/RegistrationBook";
import { Registration } from "./pages/Registration";
import { RegistrationAuthor } from "./pages/RegistrationAuthor";

export function Router() {
  return (
    <Routes>
      <Route path={"/"} element={<DefaultLayout />}>
        <Route path={"/"} element={<SearchBook />} />
        <Route path={"/registration"} element={<Registration />}></Route>
        <Route path={"/registrationBook"} element={<RegistrationBook />} />
        <Route path={"/registrationAuthor"} element={<RegistrationAuthor />} />
      </Route>
    </Routes>
  );
}
