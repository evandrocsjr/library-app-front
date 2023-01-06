import { Route, Routes } from "react-router-dom";
import { SearchBook } from "./pages/SearchBook";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { RegistrationBook } from "./pages/BookList/RegistrationBook";
import { RegistrationAuthor } from "./pages/AuthorList/RegistrationAuthor";
import { BookList } from "./pages/BookList";
import { AuthorList } from "./pages/AuthorList";

export function Router() {
  return (
    <Routes>
      <Route path={"/"} element={<DefaultLayout />}>
        <Route path={"/"} element={<SearchBook />} />
        <Route path={"/book"} element={<BookList />} />
        <Route path={"/registrationBook"} element={<RegistrationBook />} />
        <Route path={"/author"} element={<AuthorList />} />
        <Route path={"/registrationAuthor"} element={<RegistrationAuthor />} />
      </Route>
    </Routes>
  );
}
