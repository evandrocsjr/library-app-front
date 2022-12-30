import { api } from "../lib/axios";

export type BookProps = {
  id?: number;
  code?: string;
  name: string;
  releaseDate?: string;
  progress?: number;
  availability?: boolean;
  author: {
    name: string;
  };
  description?: string;
};

export interface SearchBooksProps {
  name?: string;
  code?: string;
  author?: {
    name: string;
  };
}

export const getBooks = async ({
  name,
  code,
  author,
}: SearchBooksProps): Promise<BookProps[]> => {
  const response = await api.get("books", {
    params: {
      name_like: name,
      code_like: code,
    },
  });
  return response.data;
};

export const getBookById = async ({ id }: BookProps) => {
  const response = await api.get(`book/${id}`);
  return response.data;
};

export const postBook = (book: BookProps) => {
  return api.post(`books`, book);
};

export const deleteBook = ({ id }: BookProps) => {
  return api.delete(`book/${id}`);
};

export const updateBook = (book: BookProps) => {
  return api.put(`book/${book.id}`, book);
};
