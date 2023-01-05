import { api } from "../lib/axios";

export interface AuthorProps {
  name: string;
  description: string;
}

export const postAuthor = async (data: AuthorProps) => {
  const response = await api.post("authors", data);
  return response.data;
};
