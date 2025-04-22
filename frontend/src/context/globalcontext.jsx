import React from "react"
const GlobalContext = React.createContext()
import axios from "axios"
import { useContext, useState } from "react"

const BASE_URL= "https://expensemanager-whi2.onrender.com"
export const  GlobalProvider = ({children}) => {

    const [incomes, setIncomes] = useState([])
    const [expenses, setExpenses] = useState([])
    const [error,setError] = useState(null)
    const addIncome = async (income) =>{
        const response = await axios.post(`${BASE_URL}add-expense`,income).catch((err) =>{
            setError(err.response.data.message)
        })
    }

    return(
       <GlobalContext.Provider value={{
        addIncome,
       }}>
        {children}
       </GlobalContext.Provider> 
    )
    
}
export const  useGlobalContext = () =>{
        return useContext(GlobalContext)
}
