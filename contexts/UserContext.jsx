import { account } from "@/lib/appwrite";
import { createContext, useState } from "react";
import { ID } from "react-native-appwrite";

account 
ID
//basically remembers the state of the user, if logged in or not//
export const UserContext = createContext()

export function UserProvider({children}){
    const [user, setUser] = useState(null);

    async function login(email, password){
        try {
        await account.createEmailPasswordSession(email, password)  
        const currentUser = await account.get()
        setUser(currentUser)
        return true
        } catch (error) { 
            console.log(error);
            return false
        }
        
    }
    async function signUp(name, age, gender, email, cnic, password){
    }
    async function logOut(){

    }

    return (
    <UserContext.Provider value={{login, logOut, user, signUp}}>
        {children}
    </UserContext.Provider>
    )
}