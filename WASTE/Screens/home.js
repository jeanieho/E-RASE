import {React, useEffect, useState} from 'react';
import { StyleSheet, Text, View, Button } from "react-native";

import { db, auth, dbb } from "../Firebase"
// import { doc, updateDoc, setDoc, addDoc, deleteDoc } from "firebase/firestore"
import { collection, onSnapshot, query, getDoc, doc } from "firebase/firestore";

function readData () {
  const displayPhoto = async () => {
    const query = query(collection(db, "For Sale"));
    const unsubscribe = onSnapshot(query, (querySnapshot) => {querySnapshot.forEach((doc) => {data = doc.data()})});
    const docRef = doc(db, "photo", "{itemID}");
    const doc = await getDoc(docRef);
    data = doc.itemID;
    setImage(doc.data);
}
}

const HomeScreen = () => {
  const [data, setData] = useState(null);
  const [id, setID] = useState(null);
  // const docRef = doc(db, "For Sale", "12");

  // async function FetchDoc(){
  //   const docRef = doc(db, "For Sale", "5");
  //   const doc = await getDoc(docRef);
  //   setData(doc)
  //   }

useEffect(() => {

  // FetchDoc();
  const q1 = query(collection(db, `For Sale`));
  const unsubscribe1 = onSnapshot(q1, (querySnapshot) => {
     const myId = [];
     const myName = [];
     querySnapshot.forEach((doc) => {
            myId.push(doc.data().id);
            myName.push(doc.data().name);
          });
          setID(myId);
          setData(myName);
        });
 }, []);
 
  // db.collections("For Sale").get().then((querySnapshot) => {
  //   const users = [];
  //   querySnapshot.forEach((doc) => {
  //     const data = doc.data();
  //     users.push({
  //       id: itemID
  //     });
  //   });
  // });

  useEffect(() => {

    // dbb.collections("For Sale").get().then((querySnapshot) => {
    //   const users = [];
    //   querySnapshot.forEach((doc) => {
    //     const data = doc.data();
    //     users.push({
    //       id: itemID
    //     });
    //   });
    // });
    // async function fetchData(){
    //   const docRef = doc(db, "For Sale", "5");
    //   const doc  = await getDoc(docRef);
    //   setData(doc);
    //   setID(doc.itemID)
    // }

  }, []);

  const displayPhoto = async () => {
    const doc = await getDoc(docRef);
    setData(doc);
    setImage(doc.data);
}

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home! </Text>
        <Text>{id} </Text>
        <Text>{data} </Text>
        {/* <Button
        title = "Read Data"
        onPress = {displayPhoto}/> */}
      </View>
    );
  }

export default HomeScreen;