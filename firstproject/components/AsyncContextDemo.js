import React from "react";


import ValueProvider from './ValueStorageContext';
import AsyncDemo from './AsyncDemo';

const App = () => {

  
  let data = {name:"Tim Hickey",
              radius:"10",
              height:"100",
             }

  return (
    <ValueProvider value={data} tag="exam6a">
        <AsyncDemo />
    </ValueProvider>
  )
}

export default App;