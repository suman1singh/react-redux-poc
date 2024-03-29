import React from "react";
import { useDispatch, useSelector } from "react-redux";
import purchase_book from "./BookAction";

function BookContainer() {
  const noOfBooks = useSelector((state) => state.NumberOfBooks);
  const dispatch = useDispatch();
  return (
    <>
      <h1>BookContainer</h1>
      <h2>No Of Books: {noOfBooks}</h2>
      <button
        onClick={() => {
          dispatch(purchase_book());
        }}
      >
        Buy Book
      </button>
    </>
  );
}

export default BookContainer;
