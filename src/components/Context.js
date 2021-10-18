import React, {useState} from "react";
const Context  = React.createContext()

function ContextProvider({children}){
    const [displayStyle, setDisplayStyle] = useState('hidden')

    return <Context.Provider value={{displayStyle, setDisplayStyle}}>
        {children}
    </Context.Provider>
}
export {ContextProvider, Context}