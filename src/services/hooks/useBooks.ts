import { useQuery } from "react-query";
import { SearchBooksProps, getBooks } from "../BookService";

export function useBooks(bookData: SearchBooksProps) {
  return useQuery(["books", bookData], () => {
    return getBooks(bookData);
  });
}
