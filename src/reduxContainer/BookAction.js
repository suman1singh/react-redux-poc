import { buy_book } from "./BookTypes";

//Action creater
const purchase_book = () => {
  return {
    type: buy_book,
  };
};

export default purchase_book
