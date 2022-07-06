import React from "react";

import ValueProvider from './ValueStorageContext';
import NavigationArt from './NavigationArt';

const App = () => {
    let data = {fName: "talented",lName: "artist" , email: "artstudent@brandeis.edu"};

    return (
        <ValueProvider value={data} tag="portfolioApp">
            <NavigationArt />
        </ValueProvider>    
    )
}

export default App;