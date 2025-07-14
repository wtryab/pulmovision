import { Account, Avatars, Client } from "react-native-appwrite";

export const client = new Client()
.setProject("687238ec0034615c8829")
.setPlatform("com.fypv1.pulmovision")


export const account =new Account(client)
export const avatar =new Avatars(client)



/*
EXPO_PUBLIC_APPWRITE_PROJECT_ID=687238ec0034615c8829
EXPO_PUBLIC_APPWRITE_ENDPOINT=https://fra.cloud.appwrite.io/v1*/