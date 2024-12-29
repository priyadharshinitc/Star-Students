import React, { useContext } from 'react'
import { ListContext } from './ListContextProvider';
import { Slide, ToastContainer, toast } from 'react-toastify';

const FavouritesList = () => {
  let {favList, setFavList} = useContext(ListContext);
  
  function removeStudent(studentName) {
    let tempArr = favList.filter(function(student){
      if(student.studentName === studentName) {
        return false;
      } else {
        return true;
      }
    });
    setFavList(tempArr);

    toast.error(`${studentName} removed from Favourites List!`, {
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
  }
  return (
    <ol className="list-decimal list-inside my-2 min-h-96">
      {favList.map(function(student) {
        return (
          <div key={student.id} className="bg-[#FFE2E2] flex justify-between items-center m-1 rounded-md p-2">
            <li className="p-2 m-1 rounded-md">
              {student.studentName}
            </li>
            <button
              className="bg-[#FE8080] p-2 rounded-md cursor-pointer"
              onClick={function () {removeStudent(student.studentName)}}
            >
              Remove
            </button>
          </div>
        )
      })}
      <ToastContainer />
    </ol>
  )
}

export default FavouritesList