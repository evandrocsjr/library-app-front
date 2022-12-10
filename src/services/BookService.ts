import { api } from "../lib/axios";

export const getBooks = async () => {
  return await api.get("books").catch((e) => e.message);
};

export const getBookById = async () => {
  console.log("ssss");
};
