import React from "react";
import Axios from 'axios';


import ValueProvider from './ValueStorageContext';
import AsyncDemo from './AsyncDemo';

const App = () => {

  
  let data = {name:"Timothy Hickey",
              age:"69",
              weight:"165",
              height:"168",
             }

  return (
    <ValueProvider value={data} tag="exam6a">
        <AsyncDemo />
    </ValueProvider>
  )
}

export default App;