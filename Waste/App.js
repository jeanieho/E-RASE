import React, { useState, useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { Camera, CameraType } from 'expo-camera';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from './Screens/home'
// import ProfileScreen from './Screens/profile'
import AddItemScreen from './Screens/AddItem'
import NewItemScreen from './Screens/newitem'
import ExploreScreen from './Screens/ExploreScreen'
import CommunityScreen from './Screens/CommunityPage'
import ProfileScreen from './Screens/ProfileScreen'
import ItemScreen from './Screens/ItemScreen'
import SplashScreen from './Screens/SplashScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
// import Snap from './Screens/TakePhoto'
// import CheckPhoto from './Screens/CheckPhoto'
// import ImagePickerExample from './Screens/ImagePicker'

import { db, auth } from "./Firebase"
import { doc, updateDoc, setDoc, addDoc, deleteDoc } from "firebase/firestore"
// import { collection, onSnapshot, query, getDoc, doc } from "firebase/firestore";

// const HomeStack = createStackNavigator();

// function HomeStackScreen() {
//  return (
//    <HomeStack.Navigator>
//     <HomeStack.Screen name="Home" component={HomeScreen} />          
//    </HomeStack.Navigator>
//   );
// }
const CommunityStack = createStackNavigator();

function CommunityStackScreen() {
  return (
    <CommunityStack.Navigator
    screenOptions={{
      headerShown: false
    }}>
      <CommunityStack.Screen name="Community" component={CommunityScreen}/>
      <CommunityStack.Screen name="New Item" component={NewItemScreen} />
      <CommunityStack.Screen name="Item" component={ItemScreen} />
      {/* <NewItemStack.Screen name="Snap" component={Snap} />
      <NewItemStack.Screen name="CheckPhoto" component={CheckPhoto}/> */}
    </CommunityStack.Navigator>
  );
  }

const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  if (isLoading) {
    return (
      <SafeAreaProvider>
        <SplashScreen></SplashScreen>
      </SafeAreaProvider>
    );
  }
  return (
    <Tab.Navigator
    initialRouteName="Add"
    activeColor="white"
    inactiveColor="white"
      barStyle={{ backgroundColor: '#000000', height: 90 }}
  >

      {/* <Tab.Screen name="Home" component={HomeScreen}
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="home" color={color} size={26} />
        ),
      }} /> */}
      <Tab.Screen name="Add" component={CommunityStackScreen}
        options={{
          tabBarLabel: 'Discover',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="compass-outline" color={"#FFFFFF"} size={30} />
          ),
        }} />
      <Tab.Screen name="Map" component={ExploreScreen}
      options={{
        tabBarLabel: 'Map',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="map" color={"#FFFFFF"} size={30} />
        ),
      }} />
      <Tab.Screen name="Profile" component={ProfileScreen} 
      options={{
        tabBarLabel: 'Profile',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="account" color={"#FFFFFF"} size={30} />
        ),
      }}/>
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
