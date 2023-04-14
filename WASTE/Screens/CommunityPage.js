import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SectionList,
  SafeAreaView,
  Image,
  FlatList,
  TouchableOpacity, TextInput, Button, TouchableHighlight, 
} from 'react-native';
import { useState, useEffect, useCallback} from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { navigation, useNavigation, NavigationContainer, navigate, useRoute} from '@react-navigation/native';
import AddItem from './AddItem';
// import { Icon } from 'react-native-icons';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';


import { db, auth, dbb } from "../Firebase"
// import { doc, updateDoc, setDoc, addDoc, deleteDoc } from "firebase/firestore"
import { collection, onSnapshot, query, getDoc, doc } from "firebase/firestore";


// const ListItem = ({ item }) => {
//   const navigation = useNavigation();

//   const itemDescription = () => {
//     navigation.navigate('Item', 
//     {item: item})
//   }

//     return (
//     <TouchableOpacity onPress={itemDescription} style={styles.item}>
//       <Image
//         source={{
//           uri: item.uri,
//         }}
//         style={styles.itemPhoto}
//         resizeMode="cover"
//       />
//       <Text style={styles.itemName}>{item.text}</Text>
//       <Text style={styles.itemPrice}>{item.price}</Text>
//       <Text style={styles.itemCondition}>used</Text>
//     </TouchableOpacity>
//   );
// };

const ListCE = ({ item, filter }) => {
  if(item.category == "CE"){
  const navigation = useNavigation();

  const itemDescription = () => {
    navigation.navigate('Item', 
    {item: item})
  }

    return (
    <TouchableOpacity onPress={itemDescription} style={styles.item}>
      <Image
        source={{
          uri: item.uri,
        }}
        style={styles.itemPhoto}
        resizeMode="cover"
      />
      <Text style={styles.itemName}>{item.text}</Text>
      <Text style={styles.itemPrice}>{item.price}</Text>
      <Text style={styles.itemCondition}>used</Text>
    </TouchableOpacity>
  );
  }
};

const ListW = ({ item, filter }) => {
  if(item.category == "W"){

  const navigation = useNavigation();

  const itemDescription = () => {
    navigation.navigate('Item', 
    {item: item})
  }

    return (
    <TouchableOpacity onPress={itemDescription} style={styles.item}>
      <Image
        source={{
          uri: item.uri,
        }}
        style={styles.itemPhoto}
        resizeMode="cover"
      />
      <Text style={styles.itemName}>{item.text}</Text>
      <Text style={styles.itemPrice}>{item.price}</Text>
      <Text style={styles.itemCondition}>used</Text>
    </TouchableOpacity>
  );
  }
};


export default CommunityScreen = () => {
  const navigation = useNavigation();
  const [search, setSearch] = useState('');
  const CE = 'CE';
  const All = 1;

  const [device, setDevice] = useState(null);
  const [cool, setCool] = useState(null);
  const [light, setLight] = useState(null);
  const [tv, setTv] = useState(null);
  const [wire, setWire] = useState(null);
  const [other, setOther] = useState(null);

  const [id, setID] = useState(null);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [png, setPng] = useState("");
  const [email, setEmail] = useState("");
  const [cat, setCat] = useState("");
  const [cond, setCond] = useState("");
  const [desc, setDesc] = useState("");
  const [lastid, setLastid] = useState("");

  useEffect(() => {
    // const query = query(collection(db, "For Sale"));
    // const unsubscribe = onSnapshot(query, (querySnapshot) => {querySnapshot.forEach((doc) => {data = doc.data()})});
    const q1 = query(collection(db, `For Sale`));
    const unsubscribe1 = onSnapshot(q1, (querySnapshot) => {
       const myId = [];
       const myName = [];
       const myPrice = [];
       const myPng = [];
       const myEmail = [];
       const myCat = [];
       const myCond = [];
       const myDesc = [];
       querySnapshot.forEach((doc) => {
              myId.push(doc.data().id);
              myName.push(doc.data().name);
              myPrice.push(doc.data().price);
              myPng.push(doc.data().png);
              myEmail.push(doc.data().email);
              myCat.push(doc.data().categoryValue);
              myCond.push(doc.data().conditionValue);
              myDesc.push(doc.data().description);
            });
            setID(myId);
            setName(myName);
            setPrice(myPrice);
            setPng(myPng);
            setEmail(myEmail);
            setCat(myCat);
            setCond(myCond);
            setDesc(myDesc);
          });

  //   i = 0;
  //   iCED = 0;
  //   iCE = 0;
  //   iLED = 0;
  //   iTMS = 0;
  //   iW = 0;
  //   iO = 0;
  //   const CED = [];
  //   const CE = [];
  //   const LED = [];
  //   const TMS = [];
  //   const W = [];
  //   const O = [];
  //   while(id != null){
  //   while(id[i]){
  //     if(cat[i] == "CED"){
  //       CED[iCED] = i;
  //       setDevice(CED);
  //       iCED++;
  //     } else if(cat[i] == "CE"){
  //       CE[iCE] = i;
  //       setCool(CE);
  //       iCE++;
  //     } else if(cat[i] == "LED"){
  //       LED[iLED] = i;
  //       setLight(LED);
  //       iLED++;
  //     } else if(cat[i] == "TMS"){
  //       TMS[iTMS] = i;
  //       setTv(TMS);
  //       iTMS++;
  //     } else if(cat[i] == "W"){
  //       W[iW] = i;
  //       setWire(W);
  //       iW++;
  //     } else if(cat[i] == "O"){
  //       O[iO] = i;
  //       setOther(O);
  //       iO++;
  //     }
  //     i++;
  //   }
  // }
  // Catalogs();
   }, []);

  function Catalogs(){
    i = 0;
    iCED = 0;
    iCE = 0;
    iLED = 0;
    iTMS = 0;
    iW = 0;
    iO = 0;
    const CED = [];
    const CE = [];
    const LED = [];
    const TMS = [];
    const W = [];
    const O = [];
    if(id != null){
    while(id[i]){
      if(cat[i] == "CED"){
        CED[iCED] = i;
        setDevice(CED);
        iCED++;
      } else if(cat[i] == "CE"){
        CE[iCE] = i;
        setCool(CE);
        iCE++;
      } else if(cat[i] == "LED"){
        LED[iLED] = i;
        setLight(LED);
        iLED++;
      } else if(cat[i] == "TMS"){
        TMS[iTMS] = i;
        setTv(TMS);
        iTMS++;
      } else if(cat[i] == "W"){
        W[iW] = i;
        setWire(W);
        iW++;
      } else if(cat[i] == "O"){
        O[iO] = i;
        setOther(O);
        iO++;
      }
      i++;
    }
  }
  }

  const ListItem = ({ item }) => {
    const navigation = useNavigation();
    const numid = Number(item);
  
    const itemDescription = () => {
      navigation.navigate('Item', {
      id: id[numid],
      name: name[numid],
      price: price[numid],
      png: png[numid],
      email: email[numid],
      cat: cat[numid],
      cond: cond[numid],
      desc: desc[numid],
      })
    }
  
      return (
      <TouchableOpacity onPress={itemDescription} style={styles.item}>
       <Image
          source={{
            uri: png[numid],
          }}
          style={styles.itemPhoto}
          resizeMode="cover"
        />
         <Text style={styles.itemName}>{name[numid]}</Text>
         <Text style={styles.itemPrice}>{price[numid]}</Text>
         <Text style={styles.itemCondition}>{cond[numid]}</Text>
      </TouchableOpacity>
      // <Text>{id[item]}</Text>
    );
  };

  
  const addItem = () => {
    i = 0;
    while(id[i]){
      i++;
    }
    i--;
    navigation.navigate('New Item', {
      newid: id[i],
  }
    )
  }
  return (
    <View style={styles.container}>

        <LinearGradient
          colors={['black', 'purple', 'black' ]}
          style={styles.linearGradient}
        >
      <StatusBar style="light" />
      <SafeAreaView style={{ flex: 1 }}>

        <SectionList
          contentContainerStyle={{ paddingHorizontal: 10 }}
          stickySectionHeadersEnabled={false}
          sections={SECTIONS}
          renderSectionHeader={({ section }) => (
            <>
              <Text style={styles.sectionHeader}>Made For You</Text>
                <FlatList
                  horizontal
                  data={id}
                  renderItem={({ item }) => <ListItem item={item} />}
                  showsHorizontalScrollIndicator={false}
                />
                {device ? (
                  <>
                  <Text style={styles.sectionHeader2}>Consumer Electronic Devices</Text>
                  <FlatList
                    horizontal
                    data={device}
                    renderItem={({ item }) => <ListItem item={item} />}
                    showsHorizontalScrollIndicator={false}
                  />
                  </>
                ) : null}

                {cool ? (
                  <>
                  <Text style={styles.sectionHeader2}>Cooling Equipment</Text>
                  <FlatList
                    horizontal
                    data={cool}
                    renderItem={({ item }) => <ListItem item={item} />}
                    showsHorizontalScrollIndicator={false}
                  />
                  </>
                ) : null}

                {light ? (
                  <>
                  <Text style={styles.sectionHeader2}>LEDs</Text>
                  <FlatList
                    horizontal
                    data={light}
                    renderItem={({ item }) => <ListItem item={item} />}
                    showsHorizontalScrollIndicator={false}
                  />
                  </>
                ) : null}

                {tv ? (
                  <>
                  <Text style={styles.sectionHeader2}>TVs, Monitors, and Screens</Text>
                  <FlatList
                    horizontal
                    data={tv}
                    renderItem={({ item }) => <ListItem item={item} />}
                    showsHorizontalScrollIndicator={false}
                  />
                  </>
                ) : null}

                {wire ? (
                  <>
                  <Text style={styles.sectionHeader2}>Wiring Equipment</Text>
                  <FlatList
                    horizontal
                    data={wire}
                    renderItem={({ item }) => <ListItem item={item} />}
                    showsHorizontalScrollIndicator={false}
                  />
                  </>
                ) : null}

                {other ? (
                  <>
                  <Text style={styles.sectionHeader2}>Other Items</Text>
                  <FlatList
                    horizontal
                    data={other}
                    renderItem={({ item }) => <ListItem item={item} />}
                    showsHorizontalScrollIndicator={false}
                  />
                  </>
                ) : null}
            </>
          )}
          renderItem={({ item, section }) => {
            if (item.category == "CE") {
                <>
                <Text style={styles.sectionHeader}>{section.title}</Text>
                  <FlatList
                    horizontal
                    data={id}
                    renderItem={({ item }) => <ListItem item={item} />}
                    showsHorizontalScrollIndicator={false}
                  />
              </>
            }
          }
        }
        />
      </SafeAreaView>
      </LinearGradient>
      <View style={styles.searchBar}>
            <TextInput
              style={styles.searchText}
              placeholder="What are you looking for?"
              placeholderTextColor='#FFFFFF'
              onChangeText={newSearch => setSearch(newSearch)}
              defaultValue={search} />
          <TouchableOpacity onPress={Catalogs}>
            <Ionicons position='center' name="search" size={20} color="white" style={styles.searchIcon}></Ionicons>
          </TouchableOpacity>
        </View> 
      <TouchableOpacity onPress={addItem} style={styles.add}>
        <Ionicons position='center' name="add" size={60} color="white" style={{left: 1}}></Ionicons>
      </TouchableOpacity>
    </View>
  );
};


const SECTIONS = [
  {
    title: 'Made for you',
    horizontal: true,
    data: [
      {
        key: '1',
        text: 'Item text 1',
        uri: 'https://picsum.photos/id/1/200',
        name: "Computer",
        price: "5.00",
        description: "cool",
        email: "Bob.Chapek@disney.com",
        category: "W",
        png: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHwAAAB8CAMAAACcwCSMAAAAZlBMVEX///8AAAC0tLQVFRXg4ODl5eX8/Pzx8fGhoaH39/enp6fMzMzp6embm5vJycnd3d2+vr4NDQ1ra2tZWVlQUFBxcXGLi4teXl6VlZUlJSWCgoIqKio6OjowMDBLS0vW1tZDQ0N5eXlcBE/0AAADQklEQVRoge3baWOCMAwGYOsBqHjgxGPe//9PDlGUI0mTUsqH9f3K4JEqSeO2geoxg3+NJ6MekrzxaDJ2nkn0xoeDHjL0uMc97nGPe9zjksyjVV94sM2u/9sTnuZ7tVlbfGpij0c5fm6L7wIDfP7apY7idnicmLw5BT5ph6/V0eDWby/8CByS4BulFnJ8sM/xQzs8OGY/Z3Dr8Sk7bwN9WAX4ErsBXcLoMQRftADf5csXGuhYBHiS42Cp6hxfvcdKuEx3jC/e+KYP/FpM1HP3ePgZ57fu8dkHV2vnePrFT67x76ojvblLfF3GE5PW2gJPy7hRfzHHw3MFT+wUWSZ+U9XsXOK/NVwB+5LO8HMdT93h9VXPcnOGR038xxl+aeI2+gsLjwFbXRzhMwi30F9Y+B7EL62LLAcPQNtCf+HgawQ/tS2yHLxR3oqYbOKF+DTBcGjyLE6yhAPlrcgDOydIOToDR1c9yxg5Z60iK/j0SuDYJv6sRoxPox4fEzY2vzyvymj5enxB4vAmPj+Efxr5OLXqWZbAKRH5lgjwFfqgvXJtFtni2dS2fC0+pG3ozOKN0rZ8Lb7V4ef6Ex1+1krX93R4qFl11ewvO/x1CXHtqit1rD7Rk9LL1VQaHZ5iZCnVJ/qBvy4pzrCrT/SqcoSuNBp8zsLL/WWDvy4pvoMs6tZXtSPkcKHBTzz8W8x+6oeoSkPjdFMBiGbvpyoNjR+4+B67cbLSkHgAXAvJi1gCR+54pSFxcFKBc3/2lwCsxfgOm8ThSQXO8wLwHhuvNCTOX/VsJxsMgsYU/wpaaSg8PgpwtcD7APY1BoVjkwqSKVoUsD0NhW+wi8FBFv0Z5GtyAsfvRByk0hA49NCaBq40BE5NKtLAlYbALdpIpcFxYj40CDjL4zg9qYgDVRocJ54co0h+kRvqLiYNUGlQXNJUeGnuaVBcWN4YaVYaDLe+6goYaDFc2FRYudcHWgy3v+qqWWkQPIS+Z26dS8jCeZOKOAcW/ugGr/3JCILbLm9FUgbe0aqrWqWBcfakIs5Vj9vbQDWy1OHs+dAg5UoD4sBvsuxlpsHjSZfRveeO4nGPe9zjHve4x63ivf6bYK//INlb/i/+B+9pLsz8GMOjAAAAAElFTkSuQmCC",

      },
      {
        key: '2',
        text: 'Item text 2',
        uri: 'https://picsum.photos/id/10/200',
        name: "Computer",
        price: "5.00",
        description: "cool",
        email: "Bob.Chapek@disney.com",
        category: "W",
        png: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHwAAAB8CAMAAACcwCSMAAAAZlBMVEX///8AAAC0tLQVFRXg4ODl5eX8/Pzx8fGhoaH39/enp6fMzMzp6embm5vJycnd3d2+vr4NDQ1ra2tZWVlQUFBxcXGLi4teXl6VlZUlJSWCgoIqKio6OjowMDBLS0vW1tZDQ0N5eXlcBE/0AAADQklEQVRoge3baWOCMAwGYOsBqHjgxGPe//9PDlGUI0mTUsqH9f3K4JEqSeO2geoxg3+NJ6MekrzxaDJ2nkn0xoeDHjL0uMc97nGPe9zjksyjVV94sM2u/9sTnuZ7tVlbfGpij0c5fm6L7wIDfP7apY7idnicmLw5BT5ph6/V0eDWby/8CByS4BulFnJ8sM/xQzs8OGY/Z3Dr8Sk7bwN9WAX4ErsBXcLoMQRftADf5csXGuhYBHiS42Cp6hxfvcdKuEx3jC/e+KYP/FpM1HP3ePgZ57fu8dkHV2vnePrFT67x76ojvblLfF3GE5PW2gJPy7hRfzHHw3MFT+wUWSZ+U9XsXOK/NVwB+5LO8HMdT93h9VXPcnOGR038xxl+aeI2+gsLjwFbXRzhMwi30F9Y+B7EL62LLAcPQNtCf+HgawQ/tS2yHLxR3oqYbOKF+DTBcGjyLE6yhAPlrcgDOydIOToDR1c9yxg5Z60iK/j0SuDYJv6sRoxPox4fEzY2vzyvymj5enxB4vAmPj+Efxr5OLXqWZbAKRH5lgjwFfqgvXJtFtni2dS2fC0+pG3ozOKN0rZ8Lb7V4ef6Ex1+1krX93R4qFl11ewvO/x1CXHtqit1rD7Rk9LL1VQaHZ5iZCnVJ/qBvy4pzrCrT/SqcoSuNBp8zsLL/WWDvy4pvoMs6tZXtSPkcKHBTzz8W8x+6oeoSkPjdFMBiGbvpyoNjR+4+B67cbLSkHgAXAvJi1gCR+54pSFxcFKBc3/2lwCsxfgOm8ThSQXO8wLwHhuvNCTOX/VsJxsMgsYU/wpaaSg8PgpwtcD7APY1BoVjkwqSKVoUsD0NhW+wi8FBFv0Z5GtyAsfvRByk0hA49NCaBq40BE5NKtLAlYbALdpIpcFxYj40CDjL4zg9qYgDVRocJ54co0h+kRvqLiYNUGlQXNJUeGnuaVBcWN4YaVYaDLe+6goYaDFc2FRYudcHWgy3v+qqWWkQPIS+Z26dS8jCeZOKOAcW/ugGr/3JCILbLm9FUgbe0aqrWqWBcfakIs5Vj9vbQDWy1OHs+dAg5UoD4sBvsuxlpsHjSZfRveeO4nGPe9zjHve4x63ivf6bYK//INlb/i/+B+9pLsz8GMOjAAAAAElFTkSuQmCC",

      },

      {
        key: '3',
        text: 'Item text 3',
        uri: 'https://picsum.photos/id/1002/200',
        name: "Computer",
        price: "5.00",
        description: "cool",
        email: "Bob.Chapek@disney.com",
        category: "CE",
        png: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHwAAAB8CAMAAACcwCSMAAAAZlBMVEX///8AAAC0tLQVFRXg4ODl5eX8/Pzx8fGhoaH39/enp6fMzMzp6embm5vJycnd3d2+vr4NDQ1ra2tZWVlQUFBxcXGLi4teXl6VlZUlJSWCgoIqKio6OjowMDBLS0vW1tZDQ0N5eXlcBE/0AAADQklEQVRoge3baWOCMAwGYOsBqHjgxGPe//9PDlGUI0mTUsqH9f3K4JEqSeO2geoxg3+NJ6MekrzxaDJ2nkn0xoeDHjL0uMc97nGPe9zjksyjVV94sM2u/9sTnuZ7tVlbfGpij0c5fm6L7wIDfP7apY7idnicmLw5BT5ph6/V0eDWby/8CByS4BulFnJ8sM/xQzs8OGY/Z3Dr8Sk7bwN9WAX4ErsBXcLoMQRftADf5csXGuhYBHiS42Cp6hxfvcdKuEx3jC/e+KYP/FpM1HP3ePgZ57fu8dkHV2vnePrFT67x76ojvblLfF3GE5PW2gJPy7hRfzHHw3MFT+wUWSZ+U9XsXOK/NVwB+5LO8HMdT93h9VXPcnOGR038xxl+aeI2+gsLjwFbXRzhMwi30F9Y+B7EL62LLAcPQNtCf+HgawQ/tS2yHLxR3oqYbOKF+DTBcGjyLE6yhAPlrcgDOydIOToDR1c9yxg5Z60iK/j0SuDYJv6sRoxPox4fEzY2vzyvymj5enxB4vAmPj+Efxr5OLXqWZbAKRH5lgjwFfqgvXJtFtni2dS2fC0+pG3ozOKN0rZ8Lb7V4ef6Ex1+1krX93R4qFl11ewvO/x1CXHtqit1rD7Rk9LL1VQaHZ5iZCnVJ/qBvy4pzrCrT/SqcoSuNBp8zsLL/WWDvy4pvoMs6tZXtSPkcKHBTzz8W8x+6oeoSkPjdFMBiGbvpyoNjR+4+B67cbLSkHgAXAvJi1gCR+54pSFxcFKBc3/2lwCsxfgOm8ThSQXO8wLwHhuvNCTOX/VsJxsMgsYU/wpaaSg8PgpwtcD7APY1BoVjkwqSKVoUsD0NhW+wi8FBFv0Z5GtyAsfvRByk0hA49NCaBq40BE5NKtLAlYbALdpIpcFxYj40CDjL4zg9qYgDVRocJ54co0h+kRvqLiYNUGlQXNJUeGnuaVBcWN4YaVYaDLe+6goYaDFc2FRYudcHWgy3v+qqWWkQPIS+Z26dS8jCeZOKOAcW/ugGr/3JCILbLm9FUgbe0aqrWqWBcfakIs5Vj9vbQDWy1OHs+dAg5UoD4sBvsuxlpsHjSZfRveeO4nGPe9zjHve4x63ivf6bYK//INlb/i/+B+9pLsz8GMOjAAAAAElFTkSuQmCC",

      },
      {
        key: '4',
        text: 'Item text 4',
        uri: 'https://picsum.photos/id/1006/200',
        name: "Computer",
        price: "5.00",
        description: "cool",
        email: "Bob.Chapek@disney.com",
        category: "CE",
        png: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHwAAAB8CAMAAACcwCSMAAAAZlBMVEX///8AAAC0tLQVFRXg4ODl5eX8/Pzx8fGhoaH39/enp6fMzMzp6embm5vJycnd3d2+vr4NDQ1ra2tZWVlQUFBxcXGLi4teXl6VlZUlJSWCgoIqKio6OjowMDBLS0vW1tZDQ0N5eXlcBE/0AAADQklEQVRoge3baWOCMAwGYOsBqHjgxGPe//9PDlGUI0mTUsqH9f3K4JEqSeO2geoxg3+NJ6MekrzxaDJ2nkn0xoeDHjL0uMc97nGPe9zjksyjVV94sM2u/9sTnuZ7tVlbfGpij0c5fm6L7wIDfP7apY7idnicmLw5BT5ph6/V0eDWby/8CByS4BulFnJ8sM/xQzs8OGY/Z3Dr8Sk7bwN9WAX4ErsBXcLoMQRftADf5csXGuhYBHiS42Cp6hxfvcdKuEx3jC/e+KYP/FpM1HP3ePgZ57fu8dkHV2vnePrFT67x76ojvblLfF3GE5PW2gJPy7hRfzHHw3MFT+wUWSZ+U9XsXOK/NVwB+5LO8HMdT93h9VXPcnOGR038xxl+aeI2+gsLjwFbXRzhMwi30F9Y+B7EL62LLAcPQNtCf+HgawQ/tS2yHLxR3oqYbOKF+DTBcGjyLE6yhAPlrcgDOydIOToDR1c9yxg5Z60iK/j0SuDYJv6sRoxPox4fEzY2vzyvymj5enxB4vAmPj+Efxr5OLXqWZbAKRH5lgjwFfqgvXJtFtni2dS2fC0+pG3ozOKN0rZ8Lb7V4ef6Ex1+1krX93R4qFl11ewvO/x1CXHtqit1rD7Rk9LL1VQaHZ5iZCnVJ/qBvy4pzrCrT/SqcoSuNBp8zsLL/WWDvy4pvoMs6tZXtSPkcKHBTzz8W8x+6oeoSkPjdFMBiGbvpyoNjR+4+B67cbLSkHgAXAvJi1gCR+54pSFxcFKBc3/2lwCsxfgOm8ThSQXO8wLwHhuvNCTOX/VsJxsMgsYU/wpaaSg8PgpwtcD7APY1BoVjkwqSKVoUsD0NhW+wi8FBFv0Z5GtyAsfvRByk0hA49NCaBq40BE5NKtLAlYbALdpIpcFxYj40CDjL4zg9qYgDVRocJ54co0h+kRvqLiYNUGlQXNJUeGnuaVBcWN4YaVYaDLe+6goYaDFc2FRYudcHWgy3v+qqWWkQPIS+Z26dS8jCeZOKOAcW/ugGr/3JCILbLm9FUgbe0aqrWqWBcfakIs5Vj9vbQDWy1OHs+dAg5UoD4sBvsuxlpsHjSZfRveeO4nGPe9zjHve4x63ivf6bYK//INlb/i/+B+9pLsz8GMOjAAAAAElFTkSuQmCC",

      },
      {
        key: '5',
        text: 'Item text 5',
        uri: 'https://picsum.photos/id/1008/200',
        name: "Computer",
        price: "5.00",
        description: "cool",
        email: "Bob.Chapek@disney.com",
        category: "CE",
        png: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHwAAAB8CAMAAACcwCSMAAAAZlBMVEX///8AAAC0tLQVFRXg4ODl5eX8/Pzx8fGhoaH39/enp6fMzMzp6embm5vJycnd3d2+vr4NDQ1ra2tZWVlQUFBxcXGLi4teXl6VlZUlJSWCgoIqKio6OjowMDBLS0vW1tZDQ0N5eXlcBE/0AAADQklEQVRoge3baWOCMAwGYOsBqHjgxGPe//9PDlGUI0mTUsqH9f3K4JEqSeO2geoxg3+NJ6MekrzxaDJ2nkn0xoeDHjL0uMc97nGPe9zjksyjVV94sM2u/9sTnuZ7tVlbfGpij0c5fm6L7wIDfP7apY7idnicmLw5BT5ph6/V0eDWby/8CByS4BulFnJ8sM/xQzs8OGY/Z3Dr8Sk7bwN9WAX4ErsBXcLoMQRftADf5csXGuhYBHiS42Cp6hxfvcdKuEx3jC/e+KYP/FpM1HP3ePgZ57fu8dkHV2vnePrFT67x76ojvblLfF3GE5PW2gJPy7hRfzHHw3MFT+wUWSZ+U9XsXOK/NVwB+5LO8HMdT93h9VXPcnOGR038xxl+aeI2+gsLjwFbXRzhMwi30F9Y+B7EL62LLAcPQNtCf+HgawQ/tS2yHLxR3oqYbOKF+DTBcGjyLE6yhAPlrcgDOydIOToDR1c9yxg5Z60iK/j0SuDYJv6sRoxPox4fEzY2vzyvymj5enxB4vAmPj+Efxr5OLXqWZbAKRH5lgjwFfqgvXJtFtni2dS2fC0+pG3ozOKN0rZ8Lb7V4ef6Ex1+1krX93R4qFl11ewvO/x1CXHtqit1rD7Rk9LL1VQaHZ5iZCnVJ/qBvy4pzrCrT/SqcoSuNBp8zsLL/WWDvy4pvoMs6tZXtSPkcKHBTzz8W8x+6oeoSkPjdFMBiGbvpyoNjR+4+B67cbLSkHgAXAvJi1gCR+54pSFxcFKBc3/2lwCsxfgOm8ThSQXO8wLwHhuvNCTOX/VsJxsMgsYU/wpaaSg8PgpwtcD7APY1BoVjkwqSKVoUsD0NhW+wi8FBFv0Z5GtyAsfvRByk0hA49NCaBq40BE5NKtLAlYbALdpIpcFxYj40CDjL4zg9qYgDVRocJ54co0h+kRvqLiYNUGlQXNJUeGnuaVBcWN4YaVYaDLe+6goYaDFc2FRYudcHWgy3v+qqWWkQPIS+Z26dS8jCeZOKOAcW/ugGr/3JCILbLm9FUgbe0aqrWqWBcfakIs5Vj9vbQDWy1OHs+dAg5UoD4sBvsuxlpsHjSZfRveeO4nGPe9zjHve4x63ivf6bYK//INlb/i/+B+9pLsz8GMOjAAAAAElFTkSuQmCC",

      },
    ],
  },
//   {
//     title: 'Punk and hardcore',
//     data: [
//       {
//         key: '1',
//         text: 'Item text 1',
//         uri: 'https://picsum.photos/id/1011/200',
//       },
//       {
//         key: '2',
//         text: 'Item text 2',
//         uri: 'https://picsum.photos/id/1012/200',
//       },

//       {
//         key: '3',
//         text: 'Item text 3',
//         uri: 'https://picsum.photos/id/1013/200',
//       },
//       {
//         key: '4',
//         text: 'Item text 4',
//         uri: 'https://picsum.photos/id/1015/200',
//       },
//       {
//         key: '5',
//         text: 'Item text 5',
//         uri: 'https://picsum.photos/id/1016/200',
//       },
//     ],
//   },
//   {
//     title: 'Based on your recent listening',
//     data: [
//       {
//         key: '1',
//         text: 'Item text 1',
//         uri: 'https://picsum.photos/id/1020/200',
//       },
//       {
//         key: '2',
//         text: 'Item text 2',
//         uri: 'https://picsum.photos/id/1024/200',
//       },

//       {
//         key: '3',
//         text: 'Item text 3',
//         uri: 'https://picsum.photos/id/1027/200',
//       },
//       {
//         key: '4',
//         text: 'Item text 4',
//         uri: 'https://picsum.photos/id/1035/200',
//       },
//       {
//         key: '5',
//         text: 'Item text 5',
//         uri: 'https://picsum.photos/id/1038/200',
//       },
//     ],
//   },
];

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
      background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
      },
  sectionHeader: {
    fontWeight: '800',
    fontSize: 18,
    color: '#f4f4f4',
    marginTop: 65,
    marginBottom: 5,
  },
  sectionHeader2: {
    fontWeight: '800',
    fontSize: 18,
    color: '#f4f4f4',
    marginTop: 15,
    marginBottom: 5,
  },
  item: {
    margin: 10,
    width: 148,
    height: 169,
    left: 0,
    top: 4,

    backgroundColor: '#27242D',
    borderRadius: 25,

  },
  itemPhoto: {
    width: 148,
    height: 112,
    // left: calc(50% - 148/2 - 112),
    // top: calc(50% - 112/2 - 25.5),
    
    // background: url(image.png);
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  itemName: {
    marginTop: 5,

    // width: 102,
    // height: 14,
    left: 10,
    // top: 122,
//     fontFamily: 'Lato',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: 12,
    lineHeight: 14,
    color: '#FFFFFF',
  },
  itemPrice: {
    // position: absolute;
    // width: 33,
    // height: 17,
    left: 10,
    // top: 141,
    
    // fontFamily: 'Lato';
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: 14,
    lineHeight: 17,
    color: '#BE00FF',
  },
  itemCondition: {

//     position: absolute,
width: 138,
height: 13,
left: 0,
// top: 145,

// fontFamily: 'Lato',
fontStyle: 'normal',
fontWeight: 400,
fontSize: 11,
lineHeight: 13,
textAlign: 'right',

color: 'rgba(255, 255, 255, 0.47)',
  },
  add: {
position: 'absolute',
padding: 0,
// width: 50,
// height: 50,
left: 319,
top: 632,
borderRadius: 35,

backgroundColor: 'purple',

  },
  searchBar: {
    position: 'absolute',
    width: 354,
    height: 45,
    left: 18,
    top: 44,
    
    backgroundColor: '#27242D',
    borderRadius: 30,

  },
  searchText: {
    position: 'relative',
    // width: 147.48,
    height: 15,
    left: 51.87,
    top: 15,
    
    // fontFamily: 'Inter',
    fontStyle: 'normal',
    // fontWeight: 400,
    fontSize: 12,
    lineHeight: 15,
    /* identical to box height */
    color: '#FFFFFF',
  },
  searchIcon: {
    position: 'absolute',
    width: 20,
    height: 20.04,
    left: 19,
    top: -3,
  },
});

// import React from 'react';
// import { useState, useEffect, useCallback} from 'react'
// import { StyleSheet, Text, View, Image, TextInput } from "react-native";
// import Greeting from '../Components/ItemDisplay';


// const ItemsAdded = [
//     {
//         name: "Computer",
//         price: "5.00",
//         description: "cool",
//         email: "Bob.Chapek@disney.com",
//         category: "W",
//         png: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHwAAAB8CAMAAACcwCSMAAAAZlBMVEX///8AAAC0tLQVFRXg4ODl5eX8/Pzx8fGhoaH39/enp6fMzMzp6embm5vJycnd3d2+vr4NDQ1ra2tZWVlQUFBxcXGLi4teXl6VlZUlJSWCgoIqKio6OjowMDBLS0vW1tZDQ0N5eXlcBE/0AAADQklEQVRoge3baWOCMAwGYOsBqHjgxGPe//9PDlGUI0mTUsqH9f3K4JEqSeO2geoxg3+NJ6MekrzxaDJ2nkn0xoeDHjL0uMc97nGPe9zjksyjVV94sM2u/9sTnuZ7tVlbfGpij0c5fm6L7wIDfP7apY7idnicmLw5BT5ph6/V0eDWby/8CByS4BulFnJ8sM/xQzs8OGY/Z3Dr8Sk7bwN9WAX4ErsBXcLoMQRftADf5csXGuhYBHiS42Cp6hxfvcdKuEx3jC/e+KYP/FpM1HP3ePgZ57fu8dkHV2vnePrFT67x76ojvblLfF3GE5PW2gJPy7hRfzHHw3MFT+wUWSZ+U9XsXOK/NVwB+5LO8HMdT93h9VXPcnOGR038xxl+aeI2+gsLjwFbXRzhMwi30F9Y+B7EL62LLAcPQNtCf+HgawQ/tS2yHLxR3oqYbOKF+DTBcGjyLE6yhAPlrcgDOydIOToDR1c9yxg5Z60iK/j0SuDYJv6sRoxPox4fEzY2vzyvymj5enxB4vAmPj+Efxr5OLXqWZbAKRH5lgjwFfqgvXJtFtni2dS2fC0+pG3ozOKN0rZ8Lb7V4ef6Ex1+1krX93R4qFl11ewvO/x1CXHtqit1rD7Rk9LL1VQaHZ5iZCnVJ/qBvy4pzrCrT/SqcoSuNBp8zsLL/WWDvy4pvoMs6tZXtSPkcKHBTzz8W8x+6oeoSkPjdFMBiGbvpyoNjR+4+B67cbLSkHgAXAvJi1gCR+54pSFxcFKBc3/2lwCsxfgOm8ThSQXO8wLwHhuvNCTOX/VsJxsMgsYU/wpaaSg8PgpwtcD7APY1BoVjkwqSKVoUsD0NhW+wi8FBFv0Z5GtyAsfvRByk0hA49NCaBq40BE5NKtLAlYbALdpIpcFxYj40CDjL4zg9qYgDVRocJ54co0h+kRvqLiYNUGlQXNJUeGnuaVBcWN4YaVYaDLe+6goYaDFc2FRYudcHWgy3v+qqWWkQPIS+Z26dS8jCeZOKOAcW/ugGr/3JCILbLm9FUgbe0aqrWqWBcfakIs5Vj9vbQDWy1OHs+dAg5UoD4sBvsuxlpsHjSZfRveeO4nGPe9zjHve4x63ivf6bYK//INlb/i/+B+9pLsz8GMOjAAAAAElFTkSuQmCC",

//     }
// ]

// function ForSale() {
//     // const num = parseInt(this.props.name);

//   return (
//     <View style={styles.block}>
//       <Text>{ItemsAdded[0].name}</Text>
//       <Text>{ItemsAdded[0].price}</Text>
//       <Text>{ItemsAdded[0].description}</Text>
//       <Text><Image source={{ uri: ItemsAdded[0].png }} style={{ width: 200, height: 200 }} /></Text>
//     </View>
//    );
//  }

// const CommunityScreen = () => {

//     const [search, setSearch] = useState('');

//     return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         {/* <Text style = {styles.search}>What are you looking for?</Text> */}
        
//             <TextInput
//             style={styles.search}
//             placeholderTextColor={'#FFFFFF'}
//             placeholder="What are you looking for?"
//             onChangeText={newSearch => setSearch(newSearch)}
//             defaultValue={search} 
//             textAlign = 'Center'/>

          
//         <Greeting  name="hi" price= '$5.00' description= 'cool' email= 'blah' category= 'PP' png= 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHwAAAB8CAMAAACcwCSMAAAAZlBMVEX///8AAAC0tLQVFRXg4ODl5eX8/Pzx8fGhoaH39/enp6fMzMzp6embm5vJycnd3d2+vr4NDQ1ra2tZWVlQUFBxcXGLi4teXl6VlZUlJSWCgoIqKio6OjowMDBLS0vW1tZDQ0N5eXlcBE/0AAADQklEQVRoge3baWOCMAwGYOsBqHjgxGPe//9PDlGUI0mTUsqH9f3K4JEqSeO2geoxg3+NJ6MekrzxaDJ2nkn0xoeDHjL0uMc97nGPe9zjksyjVV94sM2u/9sTnuZ7tVlbfGpij0c5fm6L7wIDfP7apY7idnicmLw5BT5ph6/V0eDWby/8CByS4BulFnJ8sM/xQzs8OGY/Z3Dr8Sk7bwN9WAX4ErsBXcLoMQRftADf5csXGuhYBHiS42Cp6hxfvcdKuEx3jC/e+KYP/FpM1HP3ePgZ57fu8dkHV2vnePrFT67x76ojvblLfF3GE5PW2gJPy7hRfzHHw3MFT+wUWSZ+U9XsXOK/NVwB+5LO8HMdT93h9VXPcnOGR038xxl+aeI2+gsLjwFbXRzhMwi30F9Y+B7EL62LLAcPQNtCf+HgawQ/tS2yHLxR3oqYbOKF+DTBcGjyLE6yhAPlrcgDOydIOToDR1c9yxg5Z60iK/j0SuDYJv6sRoxPox4fEzY2vzyvymj5enxB4vAmPj+Efxr5OLXqWZbAKRH5lgjwFfqgvXJtFtni2dS2fC0+pG3ozOKN0rZ8Lb7V4ef6Ex1+1krX93R4qFl11ewvO/x1CXHtqit1rD7Rk9LL1VQaHZ5iZCnVJ/qBvy4pzrCrT/SqcoSuNBp8zsLL/WWDvy4pvoMs6tZXtSPkcKHBTzz8W8x+6oeoSkPjdFMBiGbvpyoNjR+4+B67cbLSkHgAXAvJi1gCR+54pSFxcFKBc3/2lwCsxfgOm8ThSQXO8wLwHhuvNCTOX/VsJxsMgsYU/wpaaSg8PgpwtcD7APY1BoVjkwqSKVoUsD0NhW+wi8FBFv0Z5GtyAsfvRByk0hA49NCaBq40BE5NKtLAlYbALdpIpcFxYj40CDjL4zg9qYgDVRocJ54co0h+kRvqLiYNUGlQXNJUeGnuaVBcWN4YaVYaDLe+6goYaDFc2FRYudcHWgy3v+qqWWkQPIS+Z26dS8jCeZOKOAcW/ugGr/3JCILbLm9FUgbe0aqrWqWBcfakIs5Vj9vbQDWy1OHs+dAg5UoD4sBvsuxlpsHjSZfRveeO4nGPe9zjHve4x63ivf6bYK//INlb/i/+B+9pLsz8GMOjAAAAAElFTkSuQmCC' />
//         <Greeting  name="hi" price= '$5.00' description= 'cool' email= 'blah' category= 'PP' png= 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHwAAAB8CAMAAACcwCSMAAAAZlBMVEX///8AAAC0tLQVFRXg4ODl5eX8/Pzx8fGhoaH39/enp6fMzMzp6embm5vJycnd3d2+vr4NDQ1ra2tZWVlQUFBxcXGLi4teXl6VlZUlJSWCgoIqKio6OjowMDBLS0vW1tZDQ0N5eXlcBE/0AAADQklEQVRoge3baWOCMAwGYOsBqHjgxGPe//9PDlGUI0mTUsqH9f3K4JEqSeO2geoxg3+NJ6MekrzxaDJ2nkn0xoeDHjL0uMc97nGPe9zjksyjVV94sM2u/9sTnuZ7tVlbfGpij0c5fm6L7wIDfP7apY7idnicmLw5BT5ph6/V0eDWby/8CByS4BulFnJ8sM/xQzs8OGY/Z3Dr8Sk7bwN9WAX4ErsBXcLoMQRftADf5csXGuhYBHiS42Cp6hxfvcdKuEx3jC/e+KYP/FpM1HP3ePgZ57fu8dkHV2vnePrFT67x76ojvblLfF3GE5PW2gJPy7hRfzHHw3MFT+wUWSZ+U9XsXOK/NVwB+5LO8HMdT93h9VXPcnOGR038xxl+aeI2+gsLjwFbXRzhMwi30F9Y+B7EL62LLAcPQNtCf+HgawQ/tS2yHLxR3oqYbOKF+DTBcGjyLE6yhAPlrcgDOydIOToDR1c9yxg5Z60iK/j0SuDYJv6sRoxPox4fEzY2vzyvymj5enxB4vAmPj+Efxr5OLXqWZbAKRH5lgjwFfqgvXJtFtni2dS2fC0+pG3ozOKN0rZ8Lb7V4ef6Ex1+1krX93R4qFl11ewvO/x1CXHtqit1rD7Rk9LL1VQaHZ5iZCnVJ/qBvy4pzrCrT/SqcoSuNBp8zsLL/WWDvy4pvoMs6tZXtSPkcKHBTzz8W8x+6oeoSkPjdFMBiGbvpyoNjR+4+B67cbLSkHgAXAvJi1gCR+54pSFxcFKBc3/2lwCsxfgOm8ThSQXO8wLwHhuvNCTOX/VsJxsMgsYU/wpaaSg8PgpwtcD7APY1BoVjkwqSKVoUsD0NhW+wi8FBFv0Z5GtyAsfvRByk0hA49NCaBq40BE5NKtLAlYbALdpIpcFxYj40CDjL4zg9qYgDVRocJ54co0h+kRvqLiYNUGlQXNJUeGnuaVBcWN4YaVYaDLe+6goYaDFc2FRYudcHWgy3v+qqWWkQPIS+Z26dS8jCeZOKOAcW/ugGr/3JCILbLm9FUgbe0aqrWqWBcfakIs5Vj9vbQDWy1OHs+dAg5UoD4sBvsuxlpsHjSZfRveeO4nGPe9zjHve4x63ivf6bYK//INlb/i/+B+9pLsz8GMOjAAAAAElFTkSuQmCC' />

//         {/* <ForSale name="0"/> */}
//       </View>
//     );
//   }

//   var styles = StyleSheet.create({
//     block:{
//         // position: 'absolute',
//         width: 148,
//         height: 169,
//         left: 18,
//         top: 4,

//         background: '#27242D',
//         borderRadius: 25,
//     },
//     search:{
//         position: 'absolute',
//         width: 297,
//         height: 45,
//         left: 18,
//         top: 44,

//         backgroundColor: '#27242D',
//         borderRadius: 30,

//         fontFamily: 'Inter',
//         fontStyle: 'normal',
//         // fontWeight: 400,
//         fontSize: 12,
//         lineHeight: 15,
//         // fontColor: '#FFFFFF',
//     },
//     searchtext:{
//         position: 'absolute',
//         width: 147.48,
//         height: 15,
//         left: 69.87,
//         top: 59,

//         fontFamily: 'Inter',
//         fontStyle: 'normal',
//         fontWeight: 400,
//         fontSize: 12,
//         lineHeight: 15,
// /* identical to box height */


//         color: '#FFFFFF',
//     }

//   });

// export default CommunityScreen;