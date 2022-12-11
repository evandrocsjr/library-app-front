import { api } from "../lib/axios";
import { BookProps } from "../pages/SearchBook";

export const getBooks = async () => {
  return await api
    .get("books")
    .then((r) => r.data)
    .catch((e) => e.message);
};

export const getBooksWithProps = async (name: string) => {
  return await api.get(`books`, {
    params: {
      q: name,
    },
  });
};

export const getBookById = async ({ id }: BookProps) => {
  return await api.get(`book/${id}`).then((r) => r.data);
};

export const deleteBook = async ({ id }: BookProps) => {
  return await api.delete(`book/${id}`);
};

export const updateBook = async (book: BookProps) => {
  return await api.put(`book/${book.id}`, book);
};
