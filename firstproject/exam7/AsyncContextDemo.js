import React from "react";
import Axios from 'axios';


import ValueProvider from './ValueStorageContext';
import AsyncDemo from './AsyncDemo';

const App = () => {

  
  let data = {width:1,
              depth:2,
              height:3,
             }

  return (
    <ValueProvider value={data} tag="exam7">
        <AsyncDemo />
    </ValueProvider>
  )
}

export default App;