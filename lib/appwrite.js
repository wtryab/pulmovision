import { Account, Client, Databases } from "react-native-appwrite";



export const appwriteConfig = {
  //endpoint: 'https://fra.cloud.appwrite.io/v1',
  platform: 'com.fypv1.pulmovision',
  projectId: '687238ec0034615c8829',
  databaseId: '6877c186002c58b78863', 
  userProfilesCollectionId: '6877c1a300020bfa0ef7'
};

export const client = new Client()
.setProject(appwriteConfig.projectId)
.setPlatform(appwriteConfig.platform)


export const account =new Account(client)
export const database =new Databases(client)



/*
EXPO_PUBLIC_APPWRITE_PROJECT_ID=687238ec0034615c8829
EXPO_PUBLIC_APPWRITE_ENDPOINT=https://fra.cloud.appwrite.io/v1*/