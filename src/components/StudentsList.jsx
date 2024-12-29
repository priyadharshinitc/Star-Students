import React, { useContext } from "react";
import { ListContext } from "./ListContextProvider";
import { Slide, ToastContainer, toast } from 'react-toastify';

const StudentsList = () => {
  let { scholarsList, favList, setFavList } = useContext(ListContext);

  function isStudentInFav(studentName) {
    return favList.some((fav) => (fav.studentName === studentName));
  }

  function addStudent(studentName) {
    // myList.filter(function (item) {
    //   if (item.id === addID) {
    //     setFavList([...favList, item.studentName]);
    //   }
    // });
    // toast(`${studentName} added to Favourites List! 🦄`)

    toast.success(`${studentName} added to Favourites List!`, {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Slide,
      });

    const studentToAdd = scholarsList.find((student) => student.studentName === studentName);
    if (studentToAdd) {
      setFavList([...favList, studentToAdd]);
    }
  }

  return (
    <ol className="list-decimal list-inside my-2">
      {scholarsList.map(function (student) {
        let isInFav = isStudentInFav(student.studentName);
        return (
          <div key={student.id} className="bg-[#FFE2E2] flex justify-between items-center m-1 rounded-md p-2">
            <li className={`p-2 m-1 rounded-md ${isInFav ? "text-gray-500" : "text-black"}`}>
              {student.studentName}
            </li>
            <button
              className={`p-2 rounded-md ${isInFav ? "bg-[#CCC] cursor-not-allowed" : "bg-[#FFCFCF] cursor-pointer"}`}
              onClick={function () {
                addStudent(student.studentName);
              }}
              disabled={isInFav}
            >
              {isInFav ? "Added" : "Add to Favourites"}
            </button>
          </div>
        );
      })}
      <ToastContainer />
    </ol>
  );
};

export default StudentsList;