import { UserContext } from "@/contexts/UserContext";
import { useContext } from "react";

useContext
UserContext

export function useUser(){
    const context = useContext(UserContext)
    if(!context){
        throw new Error("useUser must be used within UserProvider")
    }

    return context
}
