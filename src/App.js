import React from "react";
import WithContext from "./component/WithContext";
import WithoutContext from "./component/WithoutContext";

function App() {
  return (
    <div>
      {/* <WithoutContext /> */}
      <WithContext />
    </div>
  );
}

export default App;
