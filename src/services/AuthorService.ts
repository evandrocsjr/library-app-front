import { api } from "../lib/axios";

export interface AuthorProps {
  id: string;
  name: string;
  description: string;
}

export const postAuthor = async (data: AuthorProps) => {
  const response = await api.post("authors", data);
  return response.data;
};

export const getAuthors = async (): Promise<AuthorProps[]> => {
  const response = await api.get("authors");
  return response.data;
};
