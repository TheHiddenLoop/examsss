import { useState } from "react";
import { createContext } from "react";
import axios from "axios"
import { useContext } from "react";
const CardContext=createContext();

export const CardProvider=({children})=>{

    const [data, setData]=useState([]);

    async function getData() {
        try {
            const res=await axios.get("http://localhost:3000/api/all/card");
            setData(res.data.card);
      
            
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <CardContext.Provider value={{getData, data}}>
            {children}
        </CardContext.Provider>
    )
}

export const useCard=()=>{
    return useContext(CardContext)
}