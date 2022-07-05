import React, { PropsWithChildren } from "react";
import { useState } from "react";
import { AppContainer } from "./App.styles";

const App = (props:PropsWithChildren<{}>)=>{
    const [isNavigationVisible, setIsNavigationVisible] = useState(false);
    return <AppContainer>
        
    </AppContainer>
}

export default App;