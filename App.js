import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import './App.css';
import { StyleSheet, Text, View } from "react-native";
import BottomTab from "./Screens/BottomTab";
import { NavigationContainer } from '@react-navigation/native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
// added comment
//   );
// }


export default function App() {
  return (
    <NavigationContainer>
      <BottomTab />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
