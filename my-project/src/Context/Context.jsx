import React, { useReducer } from "react";
import Reducer from "./Reducer";

export const store = React.createContext({
    state:{},
    dispatch:()=>{}
}) 

const ContextProvider = ({children}) => {
    const initial = {name:'', email:'', jobPosition:'', phone:'' ,rezome:''}
    const [state , dispatch] = useReducer(Reducer , initial)

    return(
        <store.Provider value={{
            state , dispatch
        }}>{children}</store.Provider>
    )
}
export default ContextProvider