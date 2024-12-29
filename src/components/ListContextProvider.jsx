import React from "react";
import { useState } from "react";
import { createContext } from "react";

const ListContext = createContext();

const ListContextProvider = (props) => {
  const [favList, setFavList] = useState([]);
  let scholarsList = [
    {
      id: 1,
      studentName: "Harry",
    },
    {
      id: 2,
      studentName: "Hermione",
    },
    {
      id: 3,
      studentName: "Ron",
    },
    {
      id: 4,
      studentName: "Ginny",
    },
    {
      id: 5,
      studentName: "Luna",
    },
    {
      id: 6,
      studentName: "Neville",
    },
  ];

  return (
    <ListContext.Provider value={{ scholarsList, favList, setFavList }}>
      {props.children}
    </ListContext.Provider>
  );
};

export default ListContextProvider;
export { ListContext };