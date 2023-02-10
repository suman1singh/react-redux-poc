import { buyBook } from "./BookTypes";

//Action creater
const purchase_book = () => {
  return {
    type: buyBook,
  };
};
