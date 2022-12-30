import { useQuery } from "react-query";

export function useBooks() {
  return useQuery("books");
}
