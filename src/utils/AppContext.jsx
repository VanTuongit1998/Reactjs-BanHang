import { createContext, useEffect, useState } from "react"
export const Context = createContext(); 
function AppContext({children}){
    const storeData = localStorage.getItem("add_cart")
    const initStateHistory =  storeData ? JSON.parse(storeData) : []
    const [history, setHistory] = useState(initStateHistory)
    useEffect(() => {
        localStorage.setItem("add_cart", JSON.stringify(history))
    },[history])


    
    return <Context.Provider value={{history, setHistory}}>{children}</Context.Provider>
}
export default AppContext