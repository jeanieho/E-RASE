import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { navigation, useNavigation, NavigationContainer, navigate, useRoute } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Camera, CameraType } from 'expo-camera';
import { useState, useEffect, useCallback} from 'react'
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View, Image, ScrollView } from 'react-native';
// import Snap from './TakePhoto'
import DropDownPicker from "react-native-dropdown-picker";
import {useForm, Controller} from 'react-hook-form';
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';
import * as MediaLibrary from 'expo-media-library'
import { LinearGradient } from 'expo-linear-gradient';



import { db, auth } from "../Firebase"
import { doc, updateDoc, setDoc, addDoc, deleteDoc } from "firebase/firestore"
// import * as firebase from 'firebase';
// import { getStorage, ref, uploadString } from "firebase/storage";
// import { getDatabase, ref, onValue } from 'firebase/database';


export default NewItemScreen = () => {
    const route = useRoute();
    const {newid} = route.params;
    const id = String(Number(newid) + 1);
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [hasSavePermission, setHasSavePermission] = useState(null);

  const [categoryOpen, setCategoryOpen] = useState(false);
  const [categoryValue, setCategoryValue] = useState(null);
  const [category, setCategory] = useState([
    { label: "Consumer Electronic Devices", value: "CED" },
    { label: "Cooling Equipment", value: "CE" },
    { label: "LED", value: "LED" },
    { label: "TVs, Monitors and Screens", value: "TMS" },
    { label: "Wiring", value: "W" },
    { label: "Other Items", value: "O" },
  ]);

  const [conditionOpen, setConditionOpen] = useState(false);
  const [conditionValue, setConditionValue] = useState(null);
  const [condition, setCondition] = useState([
    { label: "New", value: "New" },
    { label: "Lightly Used", value: "Lightly Used" },
    { label: "Used", value: "Used" },
    { label: "Heavily Used", value: "Heavily Used" },
  ]);
  
  const [image, setImage] = useState(null);
  const [base64, setBase64] = useState(null);
  const [png, setPng] = useState('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHwAAAB8CAMAAACcwCSMAAAAZlBMVEX///8AAAC0tLQVFRXg4ODl5eX8/Pzx8fGhoaH39/enp6fMzMzp6embm5vJycnd3d2+vr4NDQ1ra2tZWVlQUFBxcXGLi4teXl6VlZUlJSWCgoIqKio6OjowMDBLS0vW1tZDQ0N5eXlcBE/0AAADQklEQVRoge3baWOCMAwGYOsBqHjgxGPe//9PDlGUI0mTUsqH9f3K4JEqSeO2geoxg3+NJ6MekrzxaDJ2nkn0xoeDHjL0uMc97nGPe9zjksyjVV94sM2u/9sTnuZ7tVlbfGpij0c5fm6L7wIDfP7apY7idnicmLw5BT5ph6/V0eDWby/8CByS4BulFnJ8sM/xQzs8OGY/Z3Dr8Sk7bwN9WAX4ErsBXcLoMQRftADf5csXGuhYBHiS42Cp6hxfvcdKuEx3jC/e+KYP/FpM1HP3ePgZ57fu8dkHV2vnePrFT67x76ojvblLfF3GE5PW2gJPy7hRfzHHw3MFT+wUWSZ+U9XsXOK/NVwB+5LO8HMdT93h9VXPcnOGR038xxl+aeI2+gsLjwFbXRzhMwi30F9Y+B7EL62LLAcPQNtCf+HgawQ/tS2yHLxR3oqYbOKF+DTBcGjyLE6yhAPlrcgDOydIOToDR1c9yxg5Z60iK/j0SuDYJv6sRoxPox4fEzY2vzyvymj5enxB4vAmPj+Efxr5OLXqWZbAKRH5lgjwFfqgvXJtFtni2dS2fC0+pG3ozOKN0rZ8Lb7V4ef6Ex1+1krX93R4qFl11ewvO/x1CXHtqit1rD7Rk9LL1VQaHZ5iZCnVJ/qBvy4pzrCrT/SqcoSuNBp8zsLL/WWDvy4pvoMs6tZXtSPkcKHBTzz8W8x+6oeoSkPjdFMBiGbvpyoNjR+4+B67cbLSkHgAXAvJi1gCR+54pSFxcFKBc3/2lwCsxfgOm8ThSQXO8wLwHhuvNCTOX/VsJxsMgsYU/wpaaSg8PgpwtcD7APY1BoVjkwqSKVoUsD0NhW+wi8FBFv0Z5GtyAsfvRByk0hA49NCaBq40BE5NKtLAlYbALdpIpcFxYj40CDjL4zg9qYgDVRocJ54co0h+kRvqLiYNUGlQXNJUeGnuaVBcWN4YaVYaDLe+6goYaDFc2FRYudcHWgy3v+qqWWkQPIS+Z26dS8jCeZOKOAcW/ugGr/3JCILbLm9FUgbe0aqrWqWBcfakIs5Vj9vbQDWy1OHs+dAg5UoD4sBvsuxlpsHjSZfRveeO4nGPe9zjHve4x63ivf6bYK//INlb/i/+B+9pLsz8GMOjAAAAAElFTkSuQmCC');

  // const [png, setPng] = useState('../assets/icon.png')
  const { handleSubmit, control } = useForm();

  useEffect(() => {
    (async () => {
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === 'granted');
      const storeStatus = await MediaLibrary.requestPermissionsAsync();
      setHasSavePermission(storeStatus.status === 'granted');
})();
  }, []);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: .2,
    });
    const base64 = await FileSystem.readAsStringAsync(result.uri, { encoding: 'base64' });
    const picked = 'data:image/png;base64,' + base64;
    setPng(picked);
    setBase64(base64);
//     if (!result.cancelled) {
//         setImage(result.uri);
//         uploadImage(result.uri,"test-image");
//       }
     };
//   var uploadImage = async (uri,imageName) => {
//     const response = await fetch(uri);
//     const blob = await response.blob();
//     var ref = firebase.storage().ref().child("images/"+imageName);
//   };

  const photoPress = async () => {
    const photo = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        quality: 0.2, 
        base64: true,
      });
        const base64 = await FileSystem.readAsStringAsync(photo.uri, { encoding: 'base64' });
        const ppng = 'data:image/png;base64,' + base64;
        setPng(ppng);
  }
  const choosePress = () => {
    // navigation.navigate('Select Photo', {
    //     itemID: 12,
    //     param: 52,
    // })
  }
  const finalPress = async () => {
    // navigation.navigate('Add Item')
    // let id = '5';
    // navigation.navigate('Add Item')
    await setDoc(doc(db, `For Sale`, id), { id, categoryValue, conditionValue, name, email, price, description, png})
    navigation.navigate('Community')
  }
  return (
    // <ScrollView>
    <View style={styles.container}>
        <LinearGradient
          colors={['black', 'purple', 'black' ]}
          style={styles.linearGradient}
        >
        <Text style={styles.title}>E-RASE your item</Text>
        <Text style={styles.nameText}>Item name</Text>
        <View style={styles.nameBub}>
          <TextInput
            style={styles.nameInput}
            placeholder="Add an Item"
            placeholderTextColor='rgba(255, 255, 255, 0.42)'
            onChangeText={newName => setName(newName)}
            defaultValue={name} />
        </View>
        <Text style={styles.catText}>Category</Text>
        <View style={styles.catView}>
          <DropDownPicker
              style={styles.catBub}
              dropDownContainerStyle={{backgroundColor: 'rgba(200, 76, 242, 0.72)'}}
              open={categoryOpen}
              value={categoryValue} //genderValue
              items={category}
              setOpen={setCategoryOpen}
              setValue={setCategoryValue}
              setItems={setCategory}
              placeholder="Select Category"   
              textStyle = {styles.dropdownChoice}
              placeholderStyle={styles.catInput}
            // //   onOpen={onGenderOpen}
            //   onChangeValue={onChange}
              zIndex={3000}
              zIndexInverse={1000}
          />
        </View>
        <Text style={styles.condText}>Condition</Text>
          <View style={styles.condView}> 
                  <DropDownPicker
              style={styles.condBub}
              dropDownContainerStyle={{backgroundColor: 'rgba(200, 76, 242, 0.72)'}}
              open={conditionOpen}
              value={conditionValue} //genderValue
              items={condition}
              setOpen={setConditionOpen}
              setValue={setConditionValue}
              setItems={setCondition}
              placeholder="Condition"
              textStyle = {styles.dropdownChoice}
              placeholderStyle={styles.condInput}
            // //   onOpen={onGenderOpen}
            //   onChangeValue={onChange}
              zIndex={3000}
              zIndexInverse={1000}
            />        
        </View>     
        <Text style={styles.descText}>Description</Text>
        <View style={styles.descBub}>
          <TextInput
            // editable='true'
            multiline={true}
            blurOnSubmit={true}
            numberOfLines={10}
            style={styles.descInput}
            placeholder="128 GB storage, etc."
            placeholderTextColor='rgba(255, 255, 255, 0.42)'
            onChangeText={newDesc => setDescription(newDesc)}
            defaultValue={description} />
        </View>
        <Text style={styles.priceText}>Price</Text>
        <View style={styles.priceBub}>
          <TextInput
            style={styles.priceInput}
            placeholder="$100"
            placeholderTextColor='rgba(255, 255, 255, 0.42)'
            onChangeText={newName => setPrice(newName)}
            defaultValue={price} />
        </View>

      <Text style={styles.mailText}>Email</Text>
      <View style={styles.mailBub}>
          <TextInput
            style={styles.mailInput}
            placeholder="peterporker@gmail.com"
            placeholderTextColor='rgba(255, 255, 255, 0.42)'
            onChangeText={newName => setEmail(newName)}
            defaultValue={email} />
        </View>

      {/* <Button
        title="Take a Photo"
        onPress={photoPress}
      /> */}
      {/* <Button title="Pick an image from camera roll" onPress={pickImage} /> */}
      {/* <Text>{png}</Text> */}
      {/* <Image source={{uri: png}} style={{ width: 200, height: 200 }} /> */}
      {/* <Button
        title="Testing"
        onPress={choosePress}
      /> */}
      {/* <Button
        title="Submit Listing"
        onPress={finalPress}
      /> */}
      {/* <Text>{image}</Text> */}
      {/* {image && <Image source={{uri: image}} style={{flex:1, flexDirection: 'row',}}/>} */}
       
      </LinearGradient>
    </View>
  //  {/* </ScrollView> */}
  );
}

const styles = StyleSheet.create({
    container: {
    position: 'absolute',
    width: 390,
    height: 844,
    left: 0,
    top: 3,
    // LinearGradient: '#6F2282',
    },
    linearGradient: {
      alignItems: 'center',
      justifyContent: 'center',
      width: 390,
      height: 844,
      left: 0,
      top: -5,
    },
    title: {
      position: 'absolute',
      width: 207,
      // height: 60,
      left: 91,
      top: 123,
      
      // fontFamily: 'Lato',
      fontStyle: 'normal',
      fontWeight: '700',
      fontSize: 24,
      // lineHeight: 100,
      /* identical to box height, or 24px */
      
      textAlign: 'center',
      letterSpacing: 0.05,
      
      color: '#FFFFFF',
    },
    nameText: {
      position: 'absolute',
      width: 84,
      // height: 56,
      left: 24,
      top: 183,
      
      // fontFamily: 'Lato',
      fontStyle: 'normal',
      fontWeight: '600',
      fontSize: 16,
      // lineHeight: 100,
      /* identical to box height, or 16px */
      
      textAlign: 'center',
      letterSpacing: 0.07,
      
      color: '#FFFFFF',
    },
    nameInput: {
      position: 'absolute',
      // width: 72,
      // height: 13,
      left: 12,
      top: 8,
      
      // fontFamily: 'Lato',
      fontStyle: 'normal',
      fontWeight: '500',
      fontSize: 13,
      // lineHeight: 100,
      /* identical to box height, or 13px */
      
      // textAlign: 'center',
      // letterSpacing: 0.04,
      
      color: 'rgba(255, 255, 255, 0.42)',
    },
    nameBub: {
      position: 'absolute',
      width: 353,
      height: 31,
      left: 21,
      top: 210,
      
      backgroundColor: 'rgba(200, 76, 242, 0.72)',
      // box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      borderRadius: 5,
    },
    catText: {
      position: 'absolute',
      width: 73,
      // height: 16,
      left: 24,
      top: 266,
      
      // fontFamily: 'Lato',
      fontStyle: 'normal',
      fontWeight: '600',
      fontSize: 16,
      // lineHeight: 100,
      color: '#FFFFFF',
    },
    catInput: {
      position: 'absolute',
      width: 134,
      // height: 13,
      left: 52,
      // top: 303,
      
      // fontFamily: 'Lato',
      fontStyle: 'normal',
      fontWeight: '500',
      fontSize: 13,
      // lineHeight: 100,
      
      color: 'rgba(255, 255, 255, 0.42)',
    },
    catView: {
      position: 'absolute',
      width: 199,
      height: 31,
      left: 21,
      top: 294,
      
      // backgroundColor: 'rgba(200, 76, 242, 0.72)',
      // box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      borderRadius: 5,
    },
    catBub: {
      borderColor: 'rgba(200, 76, 242, 0.72)',
      height: 31,
      backgroundColor: 'rgba(200, 76, 242, .72)',
    },
    condText: {
      position: 'absolute',
      width: 83,
      // height: 16,
      left: 241,
      top: 266,
      
      // fontFamily: 'Lato',
      fontStyle: 'normal',
      fontWeight: '600',
      fontSize: 16,
      // lineHeight: 100,
      
      color: '#FFFFFF',
    },
    condInput: {
      position: 'absolute',
      width: 100,
      // height: 13,
      left: 47,
      // top: 303,
      
      // fontFamily: 'Lato',
      fontStyle: 'normal',
      fontWeight: '500',
      fontSize: 13,
      // lineHeight: 100,
      
      color: 'rgba(255, 255, 255, 0.42)',
    },
    dropdownChoice: {
      // position: 'absolute',
      // width: 100,
      // height: 13,
      // left: 47,
      // top: 303,
      
      // fontFamily: 'Lato',
      fontStyle: 'normal',
      fontWeight: '500',
      fontSize: 13,
      // lineHeight: 100,
      
      color: 'rgba(255, 255, 255, 0.42)',
    },
    condView: {
      position: 'absolute',
      width: 133,
      height: 50,
      left: 239,
      top: 294,
      
      // backgroundColor: 'rgba(200, 76, 242, 0.72)',
      // box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      borderRadius: 5,
    },
    condBub: {
      borderColor: 'rgba(200, 76, 242, 0.72)',
      height: 31,
      backgroundColor: 'rgba(200, 76, 242, 0.72)',
    },
    priceText: {
      position: 'absolute',
      width: 78,
      // height: 16,
      left: 245,
      top: 542,
      
      // fontFamily: 'Lato',
      fontStyle: 'normal',
      fontWeight: '600',
      fontSize: 16,
      // lineHeight: 100,
      
      color: '#FFFFFF',
    },
    priceInput: {
      position: 'absolute',
      width: 111,
      // height: 13,
      left: 11,
      top: 8,
      
      // fontFamily: 'Lato',
      fontStyle: 'normal',
      fontWeight: '500',
      fontSize: 13,
      // lineHeight: 100,
      
      color: 'rgba(255, 255, 255, 0.42)',
    },
    priceBub: {
      position: 'absolute',
      width: 133,
      height: 31,
      left: 241,
      top: 569,
      
      backgroundColor: 'rgba(200, 76, 242, 0.72)',
      // box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      borderRadius: 5,
    },
    descText: {
      position: 'absolute',
      width: 103,
      // height: 15.72,
      left: 24,
      top: 351,
      
      fontFamily: 'Lato',
      fontStyle: 'normal',
      fontWeight: '600',
      fontSize: 16,
      // lineHeight: 100,
      
      color: '#FFFFFF',
    },
    descInput: {
      position: 'absolute',
      width: 329,
      // height: 127.8,
      left: 12,
      top: 7.86,
      flexWrap: "wrap",
      overflow: "scroll",

// fontFamily: 'Lato',
      fontStyle: 'normal',
      fontWeight: '500',
      fontSize: 13,
      // lineHeight: 100,
      color: 'rgba(255, 255, 255, 0.42)',
    },
    descBub: {
      position: 'absolute',
      width: 353,
      height: 143.48,
      left: 21,
      top: 378.52,
      
      backgroundColor: 'rgba(200, 76, 242, 0.72)',
      // box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      borderRadius: 5,
    },
    mailText: {
      position: 'absolute',
      width: 78,
      // height: 16,
      left: 24,
      top: 542,
      
      // fontFamily: 'Lato',
      fontStyle: 'normal',
      fontWeight: '600',
      fontSize: 16,
      // lineHeight: 100,
      
      color: '#FFFFFF',
    },
    mailInput: {
      position: 'absolute',
      width: 177,
      // height: 13,
      left: 11,
      top: 8,
      
      // fontFamily: 'Lato',
      fontStyle: 'normal',
      fontWeight: '500',
      fontSize: 13,
      // lineHeight: 100,
      
      color: 'rgba(255, 255, 255, 0.42)',
    },
    mailBub: {
      position: 'absolute',
      width: 199,
      height: 31,
      left: 18,
      top: 569,
      
      backgroundColor: 'rgba(200, 76, 242, 0.72)',
      // box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      borderRadius: 5,
    },
    photoText: {
    },
    photoSelect: {},
    selBub: {},
    photoTake: {},
    takeBub: {},
    cancel: {},
    post: {},

    container: {
      flex: 1,
    },
    input: {
      borderStyle: "solid",
      borderColor: "#B7B7B7",
      borderRadius: 7,
      borderWidth: 1,
      fontSize: 15,
      height: 50,
      marginHorizontal: 10,
      paddingStart: 10,
      marginBottom: 15,
    },
    label: {
      marginBottom: 7,
      marginStart: 10,
    },
    placeholderStyles: {
      color: "grey",
      marginHorizontal: 90,
      width: 200,
      height: 50,
      textAlign: "center",
    },
    dropdownGender: {
      marginHorizontal: 10,
      width: 100,
      marginBottom: 15,
    },
    dropdownCompany: {
      marginHorizontal: 10,
      width: 100,
      marginBottom: 15,
    },
    dropdown: {
      borderColor: "#B7B7B7",
      marginHorizontal: 90,
      width: 200,
      height: 50,
      textAlign: "center",
    },
  });
  