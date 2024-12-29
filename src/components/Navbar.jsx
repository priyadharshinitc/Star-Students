import React from "react";
import { Link } from "react-router-dom";
// import { useState } from "react";

const Navbar = () => {
  // const [isClicked, setIsClicked] = useState(true);
  function toggleButton(buttonType) {
    let allBtn = document.getElementById("allBtn");
    let favouriteBtn = document.getElementById("favouriteBtn");

    if (buttonType == "all") {
      allBtn.classList.add("bg-[#CDE990]");
      allBtn.classList.remove("bg-[#FFFFE8]");

      favouriteBtn.classList.add("bg-[#FFFFE8]");
      favouriteBtn.classList.remove("bg-[#CDE990]");
    } else if (buttonType == "favourite") {
      favouriteBtn.classList.add("bg-[#CDE990]");
      favouriteBtn.classList.remove("bg-[#FFFFE8]");

      allBtn.classList.add("bg-[#FFFFE8]");
      allBtn.classList.remove("bg-[#CDE990]");
    }
  }

  // function isBtnClicked() {
  //   setIsClicked(!isClicked);
  // }

  return (
    <>
      <div className="flex w-fit rounded-2xl overflow-hidden">
        <Link to={"/"} id="allBtn" 
          className='p-2 md:p-4 bg-[#CDE990] border-none'
          onClick={function(){toggleButton("all")}}>List of Students</Link>
        <Link to={"/favouriteslist"} id="favouriteBtn" 
          className='p-2 md:p-4 bg-[#FFFFE8] border-none'
          onClick={function(){toggleButton("favourite")}}>Favourite Students</Link>

        {/* <Link
          to={"/"}
          className={`p-2 md:p-4 ${isClicked ? "bg-[#CDE990]" : "bg-[#FFFFE8]"} border-none`}
          onClick={isBtnClicked}
        >
          List of Students
        </Link>
        <Link
          to={"/favouriteslist"}
          id="favouriteBtn"
          className={`p-2 md:p-4 ${isClicked ? "bg-[#FFFFE8]" : "bg-[#CDE990]"} border-none`}
          onClick={isBtnClicked}
        >
          Favourite Students
        </Link> */}
      </div>
    </>
  );
};

export default Navbar;
