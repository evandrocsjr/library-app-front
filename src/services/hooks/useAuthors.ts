import { useQuery } from "react-query";
import { getAuthors } from "../AuthorService";

export function useAuthors() {
  return useQuery(["authors"], getAuthors);
}
