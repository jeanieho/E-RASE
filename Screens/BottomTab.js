import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import HomeScreen from "./Screens/HomeScreen";
import ProfileScreen from "./Screens/ProfileScreen";


const Tab = createBottomTabNavigator();


const BottomTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default BottomTab;

const styles = StyleSheet.create({});