import { account, appwriteConfig, database } from "@/lib/appwrite";
import { router } from "expo-router";
import { createContext, useState } from "react";
import { Alert } from "react-native";
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
        router.replace("/patient/patientDashboard")
        return true
        } catch (error) { 
            console.log(error);
            return false
        }
        
    }

    async function signUp(name, email, password,phoneNumber, age, CNIC, gender){
        try {
            const newPatientUser = await account.create(ID.unique(), email, password, name, phoneNumber)
            
            await database.createDocument(
            appwriteConfig.databaseId, // Replace with your actual database ID
            appwriteConfig.userProfilesCollectionId, // Replace with your users collection ID
            ID.unique(), // Document ID
            {
                userId: newPatientUser.$id, // Link to the user account
                name,
                email,
                phoneNumber,
                age: Number(age), // Convert to number if needed
                CNIC,
                gender,
            }
        );
        
           const response = await login(email,password)
           if(response){
            return true
           }
           else{
            return false
           }
           
        } catch (error) {
            console.log(error);
            Alert.alert("Error")
            
        }
    }

    async function logOut(){
        try {
            await account.deleteSession("current")
            router.replace("/startscreens/signinlogin")
            setUser(null);
            
        } catch (error) {
            
        }
    }

    return (
    <UserContext.Provider value={{login, logOut, user, signUp}}>
        {children}
    </UserContext.Provider>
    )
}