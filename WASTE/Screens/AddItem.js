import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { navigation, useNavigation, NavigationContainer, navigate, useRoute } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Camera, CameraType } from 'expo-camera';
import * as React from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// import Snap from './TakePhoto'


export default AddItemScreen = () => {

  const navigation = useNavigation();
  const handlePress = () => {
    navigation.navigate('New Item', {
      itemID: 0,
      photo: null,
    })
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Do you want to list an item on _____?</Text>
      <Button
        title="Create New Listing"
        onPress={handlePress}
      />
      {/* {image && <Image source={{uri: image}} style={{flex:1, flexDirection: 'row',}}/>} */}
    </View>
  );
}


// const Stack = createNativeStackNavigator();

// export function Snap() {
//   const [hasCameraPermission, setHasCameraPermission] = useState(null);
//   const [camera, setCamera] = useState(null);
//   const [image, setImage] = useState(null);
//   const [type, setType] = useState(Camera.Constants.Type.back);
// useEffect(() => {
//     (async () => {
//       const cameraStatus = await Camera.requestCameraPermissionsAsync();
//       setHasCameraPermission(cameraStatus.status === 'granted');
// })();
//   }, []);
//   function toggleCameraType() {
//       setType(current => (current === Camera.Constants.Type.back ? Camera.Constants.Type.front : Camera.Constants.Type.back));
//     }
// const takePicture = async () => {
//     if(camera){
//         const data = await camera.takePictureAsync(null)
//         setImage(data.uri);
//     }
//   }

//   if (hasCameraPermission === false) {
//     return <Text>No access to camera</Text>;
//   }
//   return (
//       <View style={styles.cameraContainer}>
//             <Camera 
//             ref={ref => setCamera(ref)}
//             style={styles.fixedRatio} 
//             type={type} >
//               <View>
//                   <TouchableOpacity onPress={toggleCameraType}>
//                       <Text style={styles.title}>Flip Camera</Text>
//                   </TouchableOpacity>

//               </View>
//               <View>
//                   <TouchableOpacity onPress={() => takePicture()}>
//                       <Text style={styles.pic}>Take Photo</Text>
//                   </TouchableOpacity>
//               </View>
//               {/* {image && <Image source={{uri: image}} style={{flex:1, flexDirection: 'row',}}/>} */}
//        </Camera>
//        {/* {image && <Image source={{uri: image}} style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}/>} */}
//    </View>
//   );
// }

// const CommunityScreen = () => {
    
    // const goToSnap = () => {
    //   navigation.navigate{'Snap'};
    // }

//     function Photo () {

//         return (
//             <NavigationContainer>
//               <Stack.Navigator>
//                 <Stack.Screen name="Snap" component={Snap} />
//               </Stack.Navigator>
//             </NavigationContainer>
//           );
//     }
//     return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//             <Button title = "Photo" style={styles.button} onPress={Photo}>
//                 <Text style={styles.text}>Flip Camera</Text>
//             </Button>
//       </View>
//     );
//   }

// export default CommunityScreen;

// export default function NewItem() {
//       const [type, setType] = useState(CameraType.back);
//       const [permission, requestPermission] = Camera.useCameraPermissions();
    
//       if (!permission) {
//         // Camera permissions are still loading
//         return <View />;
//       }
    
//       if (!permission.granted) {
//         // Camera permissions are not granted yet
//         return (
//           <View style={styles.container}>
//             <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
//             <Button onPress={requestPermission} title="grant permission" />
//           </View>
//         );
//       }
    
//       function toggleCameraType() {
//         setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
//       }
    
//       return (
//         <View style={styles.container}>
//           <Camera style={styles.camera} type={type}>
//             <View style={styles.buttonContainer}>
//               <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
//                 <Text style={styles.text}>Flip Camera</Text>
//               </TouchableOpacity>
//             </View>
//           </Camera>
//         </View>
//       );
//     }
    
// const styles = StyleSheet.create({
//   cameraContainer: {
//       flex: 1, 
//       flexDirection: 'row',
//   },
//   fixedRatio:{
//       flex: 1,
//       aspectRatio: .5,
//   },camera: {
//       flex: 1,
//     },
//     buttonContainer: {
//       flex: 0,
//       MarginTop: 200,
//       flexDirection: 'row',
//       backgroundColor: 'transparent',
//       margin: 150,
//     },
//     button: {
//       flex: 1,
//       alignSelf: 'flex-end',
//       alignItems: 'center',
//     },
//     title: {
//       marginTop: 620,
//       paddingVertical: 5,
//       color: 'white',
//       textAlign: 'center',
//       fontSize: 30,
//       fontWeight: 'bold',
//     },
//     pic: {
//       marginTop: 10,
//       paddingVertical: 5,
//       color: 'white',
//       textAlign: 'center',
//       fontSize: 30,
//       fontWeight: 'bold',
//     },
//     photo: {
//       MarginBotton: 20,

//     },
//     text: {
//       fontSize: 24,
//       fontWeight: 'bold',
//       color: 'white'
//     },
// })
