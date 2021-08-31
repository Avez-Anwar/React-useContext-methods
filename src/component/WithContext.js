import React, { useState, useContext } from "react";

const userOldDetails = React.createContext();

function WithContext() {
  const [userName, setUserName] = useState({
    name: "John Doe",
    age: 30
  });
  return (
    <userOldDetails.Provider value={userName}>
      <ChildComponent />
    </userOldDetails.Provider>
  );
}

export default WithContext;

function ChildComponent() {
  return (
    <div>
      <SubChildComponent />
    </div>
  );
}

function SubChildComponent() {
  const userNewDetails = useContext(userOldDetails);
  return (
    <div>
      {userNewDetails.name}
      <br />
      <br />
      {userNewDetails.age}
    </div>
  );
}
