import {StatusBar} from 'expo-status-bar'
import { useState, useEffect} from 'react'
import {StyleSheet, Text, View, TouchableOpacity, Alert, ImageBackground, Button, Image} from 'react-native'
import {Camera} from 'expo-camera'
import { navigation, useNavigation, NavigationContainer, navigate, useRoute} from '@react-navigation/native';
import { CameraRoll } from 'react-native-cameraroll';
import * as MediaLibrary from 'expo-media-library'
import * as FileSystem from 'expo-file-system';
import * as ImagePicker from 'expo-image-picker';

import { db, auth } from "../Firebase"
import { doc, updateDoc, setDoc, addDoc, deleteDoc } from "firebase/firestore"

export default function Snap() {
    const route = useRoute();
    const { itemID, param} = route.params;
    const [hasCameraPermission, setHasCameraPermission] = useState(null);
    const [hasSavePermission, setHasSavePermission] = useState(null);
    const [camera, setCamera] = useState(null);
    const [image, setImage] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [png, setPng] = useState(null);
    const navigation = useNavigation();
  
    async function uploadImageAsync(uri) {
      const blob = await new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.onload = function () {
          resolve(xhr.response);
        };
        xhr.onerror = function (e) {
          console.log(e);
        reject(new TypeError("Network request failed"));
        };
        xhr.responseType = "blob";
        xhr.open("GET", uri, true);
        xhr.send(null);
    });
        setImage(blob);
   }

    // const getCameraRollPermissions = async() => {
      
      
    //   const { Permissions } = expo;
    //   const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    //   if (status === 'granted') {
    //   } else {
    //     /// Handle permissions denied;
    //     console.log('Uh oh! The user has not granted us permission.');
    //   }
    // }
    useEffect(() => {
      (async () => {
        const cameraStatus = await Camera.requestCameraPermissionsAsync();
        setHasCameraPermission(cameraStatus.status === 'granted');
        const storeStatus = await MediaLibrary.requestPermissionsAsync();
        setHasSavePermission(storeStatus.status === 'granted');
  })();
    }, []);
    function toggleCameraType() {
        setType(current => (current === Camera.Constants.Type.back ? Camera.Constants.Type.front : Camera.Constants.Type.back));
      }
      const checkPhoto = async () => {
          await setDoc(doc(db, `photo`, '{itemID}'), { itemID, image})
          navigation.navigate('CheckPhoto', {
          itemID: 0,
          })
      }
  const takePicture = async () => {
      // if(!camera){
      //   return
      // }
      if(camera){
        const photo = await ImagePicker.launchCameraAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          quality: 0.5, 
          base64: true,
        });
          const base64 = await FileSystem.readAsStringAsync(photo.uri, { encoding: 'base64' });
          const ppng = 'data:image/png;base64,' + base64;
          setPng(ppng);

          // if(data.uri == NULL) {
          //   return;
          // }
          // getCameraRollPermissions();
          const asset = await MediaLibrary.createAssetAsync(data.uri);
          blob = await uploadImageAsync(data.uri);
          const decoded = decodeURI(data.uri)
          let id = itemID.toString();
          const uri = data.uri
          await setDoc(doc(db, `photo`, id), { itemID, png})
          navigation.navigate('CheckPhoto', {
            itemID: itemID,
            photo: asset,
          })
//          checkPhoto ();
      }
    }
  
    if (hasCameraPermission === false || hasSavePermission === false) {
      return <Text>No access to camera</Text>; 
    }
    return (
        <View style={styles.cameraContainer}>
              <Camera 
              ref={ref => setCamera(ref)}
              style={styles.fixedRatio} 
              type={type} >
                <View>
                    <TouchableOpacity onPress={toggleCameraType}>
                        <Text style={styles.title}>Flip Camera</Text>
                    </TouchableOpacity>

                </View>
                <View>
                    <TouchableOpacity onPress={() => takePicture()}>
                        <Text style={styles.pic}>Take Photo </Text>
                    </TouchableOpacity>
                </View>
                {/* <Text> photo URL: image </Text> */}
                <Text> itemID: {JSON.stringify(itemID)} </Text>
                {/* {image && <Image source={{uri: image}} style={{flex:1, flexDirection: 'row',}}/>} */}
         </Camera>
         {/* {image && <Image source={{uri: image}} style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}/>} */}
     </View>
    );
  }
  const styles = StyleSheet.create({
    cameraContainer: {
        flex: 1, 
        flexDirection: 'row',
    },
    fixedRatio:{
        flex: 1,
        aspectRatio: .5,
    },camera: {
        flex: 1,
      },
      buttonContainer: {
        flex: 0,
        MarginTop: 200,
        flexDirection: 'row',
        backgroundColor: 'transparent',
        margin: 150,
      },
      button: {
        flex: 1,
        alignSelf: 'flex-end',
        alignItems: 'center',
      },
      title: {
        marginTop: 520,
        paddingVertical: 5,
        color: 'white',
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
      },
      pic: {
        marginTop: 10,
        paddingVertical: 5,
        color: 'white',
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
      },
      photo: {
        MarginBotton: 20,

      },
      text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white'
      },
  })

  // export function CheckPhoto() {
  //   const navigation = useNavigation();
  //   const returnPress = () => {
  //     navigation.navigate('Add Item')
  //   }
  //   const retryPress = () => {
  //     navigation.navigate('Snap')
  //   }
  
  //   return (
  //     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
  //        {/* {image && <Image source={{uri: image}} style={{flex:1, flexDirection: 'row',}}/>} */}
  //       <Button
  //         title="Retake Photo"
  //         onPress={retryPress}
  //       />
  //       <Button
  //         title="Submit Photo"
  //         onPress={returnPress}
  //       />
  //       {/* {image && <Image source={{uri: image}} style={{flex:1, flexDirection: 'row',}}/>} */}
  //     </View>
  //   );
  // }