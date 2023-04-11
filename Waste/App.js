import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { Camera, CameraType } from 'expo-camera';
import { useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from './Screens/home'
// import ProfileScreen from './Screens/profile'
import AddItemScreen from './Screens/AddItem'
import NewItemScreen from './Screens/newitem'
import MAP from './Screens/Map'
import CommunityScreen from './Screens/CommunityPage'
import ProfileScreen from './Screens/ProfileScreen'
import ItemScreen from './Screens/ItemScreen'
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
  return (
    <Tab.Navigator
    initialRouteName="Home"
    activeColor="black"
    inactiveColor="black"
    barStyle={{ backgroundColor: '#694fad' }}
  >
      <Tab.Screen name="Home" component={HomeScreen}
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="home" color={color} size={26} />
        ),
      }} />
      <Tab.Screen name="Map" component={MAP}
      options={{
        tabBarLabel: 'Map',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="map" color={color} size={26} />
        ),
      }} />
      <Tab.Screen name="Add" component={CommunityStackScreen} 
      options={{
        tabBarLabel: 'Add',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="plus" color={color} size={26} />
        ),
      }}/>
      <Tab.Screen name="Profile" component={ProfileScreen} 
      options={{
        tabBarLabel: 'Profile',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="account" color={color} size={26} />
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
