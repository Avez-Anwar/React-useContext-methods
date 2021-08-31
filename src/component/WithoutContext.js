import React, { useState } from "react";

function WithoutContext() {
  const [userName, setUserName] = useState({
    name: "John Doe",
    age: 30
  });
  return (
    <div>
      <ChildComponent userName={userName} />
    </div>
  );
}

export default WithoutContext;

function ChildComponent(props) {
  return (
    <div>
      <SubChildComponent userName={props.userName} />
    </div>
  );
}

function SubChildComponent(props) {
  return (
    <div>
      Name: {props.userName.name}
      <br />
      <br />
      Age:{props.userName.age}
    </div>
  );
}
