import React, { useState } from "react";
import "./user.css";
import mailSvg from "../assets/image/mail.svg";
import manSvg from "../assets/image/man.svg";
import womanSvg from "../assets/image/woman.svg";
import manAgeSvg from "../assets/image/growing-up-man.svg";
import womanAgeSvg from "../assets/image/growing-up-woman.svg";
import mapSvg from "../assets/image/map.svg";
import phoneSvg from "../assets/image/phone.svg";
import padlockSvg from "../assets/image/padlock.svg";
const UserInfos = ({ userData }) => {
  // console.log(userData);
  const fullName = `${userData.name.first} ${userData.name.last}`;

  const [show, setShow] = useState("name");

  const handleEnter = (e) => {
    if (e.target.tagName === "IMG") {
      show !== e.target.closest("button").id &&
        setShow(e.target.closest("button").id);
    } else if (e.target.tagName === "BUTTON") {
      show !== e.target.id && setShow(e.target.id);
    }
  };

  return (
    <>
      <div className="img-container text-center p-5 pb-4">
        <img
          src={userData.picture.large}
          alt=""
          className="user-img rounded-circle  shadow border-2 p-1 bg-white"
        />
      </div>
      <div className="all-infos d-flex flex-column align-items-center justify-content-center gap-3 mb-3">
        <p className=" m-1 p-1">
          My {show.includes(".") ? show.split(".")[1] : show} is
        </p>
        <h3 className="  m-1 p-1">
          {show
            ? show === "name"
              ? fullName
              : show.includes(".")
              ? userData[show.split(".")[0]][show.split(".")[1]]
              : userData[show]
            : ""}
        </h3>

        <div className="icon-container">
          <button
            className="icon"
            onMouseEnter={handleEnter}
            id="name"
          >
            <img
              src={userData.gender === "female" ? womanSvg : manSvg}
              alt=""
              className="display-4 rounded-circle p-2 w-100"
              
            />
            
          </button>

          <button
            className="icon"
            onMouseEnter={handleEnter}
            id="dob.age"
          >
            <img
              src={userData.gender === "female" ? womanAgeSvg : manAgeSvg}
              alt=""
              className="display-4 rounded-circle p-2 w-100"
              
            />
            
          </button>

          <button
            type="button"
            className="icon"
            onMouseEnter={handleEnter}
            id="email"
          >
            <img
              src={mailSvg}
              alt=""
              className="rounded-circle p-2 w-100"
              
            />
          </button>

          <button
            className="icon"
            onMouseEnter={handleEnter}
            id="location.city"
          >
            <img
              src={mapSvg}
              alt=""
              className="display-4 rounded-circle p-2 w-100"
              
            />
            
          </button>

          <button
            className="icon"
            onMouseEnter={handleEnter}
            id="phone"
          >
            <img
              src={phoneSvg}
              alt=""
              className="display-4 rounded-circle p-2 w-100"
              
            />
            
          </button>

          <button
            className="icon "
            onMouseEnter={handleEnter}
            id="login.password"
          >
            <img
              src={padlockSvg}
              alt=""
              className="display-4 rounded-circle p-2 w-100"
              
            />
            
          </button>
        </div>
      </div>
    </>
  );
};

export default UserInfos;
