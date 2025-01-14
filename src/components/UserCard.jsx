import React, { useEffect, useState } from "react";

import UserInfo from "./UserInfo";

import NewUsers from "./NewUsers";

const UserCard = () => {
  const [userData, setUserData] = useState({
    name: { first: "", last: "" },
    dob: { age: "" },
    email: "",
    phone: "",
    picture: { large: "" },
    location: { city: "" },
    login: { password: "" },
  });

  const getUser = async () => {
    try {
      const response = await fetch("https://randomuser.me/api/");
      if (!response.ok) {
        throw new Error("not 200 error", response.status, response.text);
      }
      const json = await response.json();
      setUserData(json.results[0]);
    } catch (error) {
      console.log("catch error: ", error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  console.log(userData);

  return (
    <div className="container">
      

        <UserInfo userData={userData} />
        <NewUsers getuser={getUser} userData={userData} />
      
      
    </div>
  );
};

export default UserCard;
