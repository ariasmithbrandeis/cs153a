import React from "react";
import ValueProvider from "./ValueContext";
import HomeStack from "./HomePage";
//import SyncReddit from "./HomePage";

const App = () => {
    const data = {username: "anon",firstName: "anon",emailAddress: "anon@brandeis.edu"};

    return (
        <ValueProvider value = {data}>
            <HomeStack/>
        </ValueProvider>
    )
}

export default App;