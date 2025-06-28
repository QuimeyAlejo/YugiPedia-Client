import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const CardContext = createContext();

export const CardProvider = ({children}) => {
    const [cards , setCards] = useState([])
    const [loading, setLoading] = useState(true);
    

    useEffect(()=> {
        const getInfo = async () => {
            try {
                const response = await axios.get ("http://localhost:3000/deck");
                setCards(response.data)
                setLoading(false);
            } catch (error) {
                console.error("error al traer la informacion",error)
            }
        }
        getInfo()
    },[])

    return (
        <CardContext.Provider value={{cards,setCards, loading}}>
        {children}
        </CardContext.Provider>
    )
}

export const useCardContext = () => useContext(CardContext);