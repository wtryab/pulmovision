// import { useNavigation } from '@react-navigation/native';
import MyLoader from '@/components/loader';
import { useUser } from '@/hooks/useUser';
import { account } from '@/lib/appwrite';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { Dimensions, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const { width,height} = Dimensions.get('window');

const PatientDashboard = () => {
  const {user,logOut}= useUser()
  console.log(user.name);
  const [loading, setLoading] = useState(false);

  const handleNewCase= ()=>{
  //fix later accordingly//
  router.push("/patient/seeStatus")
}

const handleLogout= async()=>{
  try {
    setLoading(true)
    const response = await account.deleteSession("current")
    setLoading(false)
    if(response){
      router.replace("/startscreens/signinlogin")
    }
    
  } catch (error) {
    
  }
  /*
  Alert.alert('Logout?', 'Are you sure?', [
      {
        text: 'Cancel',
      },
      {
        text: 'OK',
        onPress: async() => {
          await logOut()
        } 
      },
    ])
    */  
    }

  
  // const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.name}>{user.name}</Text>
          <Text style={styles.id}>{user.$id}</Text>
        </View>
        <Image
          source={require('@/assets/placeholders/1.png' )} // Replace with actual image URL or local path
          style={styles.avatar}
        />
      </View>

      {/* Case Status Card */}
      <TouchableOpacity style={styles.card} onPress={handleNewCase}>
        <Text style={styles.cardTitle}>Click to {"\n"}<Text style={{ fontWeight: 'bold' }}>case status</Text></Text>
        <View style={styles.cardContent}>
          <TouchableOpacity onPress={handleNewCase}
            style={styles.statusButton}// Navigate to the status screen
          >
            <Text style={styles.buttonText}>See Status</Text>
          </TouchableOpacity>
          <Image
  source={require('@/assets/images/questionMark2.png')} 
  style={{ width: 60, height: 60,borderRadius: 30,
    resizeMode: 'cover', transform: [{ translateY: -25 }, { translateX: -20 }, ]}}
/>

        </View>
      </TouchableOpacity>

      {/* Logout */}
      <TouchableOpacity style={styles.logout}
      onPress={handleLogout}
      >
        <Ionicons name="alert-circle-outline" size={20} color="red" />
        <Text style={styles.logoutText}>Logout</Text>
        <Ionicons name="chevron-forward" size={20} color="gray" />
      </TouchableOpacity>


      {/* Bottom Navigation */}
      <View style={styles.navbar}>
        <Ionicons name="home" size={26} color="#2974f0" />
        <Ionicons name="calendar-outline" size={26} color="#ccc" />
        <TouchableOpacity onPressIn={()=>{router.navigate("/patient/patientProfileUpdate")
        }}>
        <Ionicons name="person-outline" size={26} color="#ccc"/>

        </TouchableOpacity>
      </View>

      {loading && (
        <View style={styles.loaderOverlay}>
          <MyLoader />
        </View>
      )}

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, position:"relative", backgroundColor: '#fff', padding: 20 },
  loaderOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 999,
  },
  header: {
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 30, paddingHorizontal: width*0.05, marginTop:height*0.1 ,
  },
  name: { fontSize: 18, fontWeight: 'bold' },
  id: { fontSize: 16, color: '#444' },
  avatar: { width: 50, height: 50, borderRadius: 25 },

  card: {
    backgroundColor: '#e5f4ff',
    borderRadius: 12,
    padding: 20,
    marginBottom: 30,
  },
  cardTitle: { fontSize: 18,fontWeight: 'bold', marginBottom: 15, color: '#000' ,justifyContent: 'space-between',
    alignItems: 'center', paddingLeft:0,},
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // textAlign: 'center',
  },
  statusButton: {
    backgroundColor: '#2974f0',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    transform: [{ translateY: -15 }]
  },
  buttonText: { color: '#fff', fontWeight: 'bold' },

  logout: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    padding: 15,
    borderRadius: 12,
    justifyContent: 'space-between',
  },
  logoutText: { color: 'red', fontWeight: '500', marginLeft: 10, flex: 1 },

  navbar: {
    flexDirection: 'row',
    marginBottom:height*0.05,
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 15,
    borderTopWidth: 1,
    borderColor: '#eee',
    position: 'absolute',
    bottom: 0,
    width: width,
    backgroundColor: '#fff',
  },
});

export default PatientDashboard;