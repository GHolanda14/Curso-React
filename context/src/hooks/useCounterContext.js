import { CounterContext } from "../context/CounterContext";
import { useContext } from "react";

export const useCounterContext = () => {
    const context = useContext(CounterContext);

    if(!context) console.log("Context o não encontrado!");
    
    return context
}