import { api } from "../lib/axios";
import { BookProps } from "../pages/SearchBook";

interface GetBooksProps {
  name?: string;
  code?: string;
  author: {
    name?: string;
  };
}

export const getBooks = ({
  name,
  code,
  author,
}: GetBooksProps): Promise<BookProps[]> => {
  return api
    .get("books", {
      params: {
        name_like: name,
        code_like: code,
      },
    })
    .then((r) => r.data);
};

export const getBookById = async ({ id }: BookProps) => {
  const response = await api.get(`book/${id}`);
  return response.data;
};

export const deleteBook = ({ id }: BookProps) => {
  return api.delete(`book/${id}`);
};

export const updateBook = (book: BookProps) => {
  return api.put(`book/${book.id}`, book);
};
