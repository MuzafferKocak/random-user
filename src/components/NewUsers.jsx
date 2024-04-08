import React, { useState } from "react";


const NewUsers = (props) => {
  console.log(props);

  const [savedUsers,setSavedUsers] = useState([])

   const addSavedUser = () => {
    savedUsers.some(user => user?.id === props.userData?.id?.value) ||
    setSavedUsers([
      ...savedUsers,
      {
        id:props.userData?.id?.value,
        fullName:`${props.userData?.name?.first} ${props.userData?.name.last}  `,
        email: props.userData?.email,
        phone:props.userData?.phone,
        age:props.userData?.dob?.age

      }
    ]);
  } 
 






  return (
    <div className="new-user mt-5 mx-4 w-75">

      <div className="buttons d-flex justify-content-evenly">
        <button className="btn border" onClick={props.getuser}>New User</button>
        <button className="btn border" onClick={addSavedUser}>Add User</button>
      </div>
      <div class="table-responsive">

      <table className="table border">
        <thead>
          <tr className="table-danger">
            <th scope="col" >Fullname</th>
            <th scope="col"  className="email-column">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Age</th>
          </tr>
        </thead>

        <tbody className=" "> 
          {
          savedUsers.map(user=> {
            return (

          <tr className="new-table">
            <td className="text-nowrap other-columns">{user.fullName}</td>
            <td className="email-column">{user.email}</td>
            <td className="text-nowrap  other-columns">{user.phone}</td>
            <td className="text-nowrap  other-columns">{user.age}</td>
          </tr>

            )
          })

          }

        </tbody>
      </table>

      </div>
      
    </div>
  );
};

export default NewUsers;