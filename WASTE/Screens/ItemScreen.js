import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { navigation, useNavigation, NavigationContainer, navigate, useRoute } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Camera, CameraType } from 'expo-camera';
import * as React from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import * as MailComposer from 'expo-mail-composer';
import { useState, useEffect, useCallback} from 'react'
import * as SMS from 'expo-sms';
// import { Constants, SMS } from 'expo';



export default ItemScreen = () => {
    const route = useRoute();
    const {id, name, price, png, email, cat, cond, desc} = route.params;
    const navigation = useNavigation();
    // const png = item.uri;
    const [heart, setHeart] = useState('white');

    const changeColor = () => {
        heart == 'white' ? setHeart('red') : setHeart('white');
    }

    const sendEmail = async () => {
        if(MailComposer.isAvailableAsync()){
            MailComposer.composeAsync({
                recipients: email,
                subject: 'Buying your ' + name,
                body: 'I would like to buy your' + name + ' !',
            });
        }
    }
    const sendText = async() => {
        // const status = await SMS.sendSMSAsync(
        //     '(817) 492-5144',
        //     'Is this item available?'
        // );

        // console.log(status);
        const { result } = await SMS.sendSMSAsync(
            '(817) 492-5144',
            'Is the ' + name + ' still available?',
            {
                attachments: [
                    {
                        uri: png,
                        mimeType: 'image/png',
                        filename: 'myfile.png',
                    },
                ],
            }
        )
        console.log(result);
    }

  return (
    <View>
        <Image style={styles.itempic} source={{uri: png}}></Image>
        <View style={styles.descbox}>
            <Image style={styles.profpic} source={{uri: 'https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg'}}></Image>
            <Text style={styles.itemName}>{name}</Text>
            <Text style={styles.price}>${price}</Text>
            <Text style={styles.date}>Listed 2 days ago 5 mi away</Text>
            <Text style={styles.name}>Peter Pan</Text>
            <Text style={styles.verified}>Verified Seller</Text>
            <Text style={styles.details}>Details</Text>
            <Text style={styles.condition}>Condition: {cond}</Text>
            <Text style={styles.description}>{desc}</Text>
            <Ionicons position='center' name="checkmark-circle" size={20} color="white" style={styles.verifIcon}></Ionicons>
            <TouchableOpacity style={styles.heartBubble} onPress={changeColor}>
                <Ionicons position='center' name="heart" size={30} color={heart} style={styles.heart}></Ionicons>
            </TouchableOpacity>
            <TouchableOpacity onPress={sendText}>
                <Ionicons position='center' name="chatbubbles" size={40} color="white" style={styles.message}></Ionicons>
            </TouchableOpacity>

            <TouchableOpacity onPress={sendEmail}>
                <Ionicons position='center' name="mail" size={40} color="white" style={styles.mail}></Ionicons>
            </TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create ({
    itempic: {
        position: 'absolute',
        width: 390,
        height: 328,
// left: calc(50% - 390px/2);
// top: calc(50% - 328px/2 - 258px);

// background: url(image.png);
// borderRadius: 25px 25px 0px 0px;
    },
    descbox: {
        position: 'absolute',
width: 390,
height: 455,
left: 0,
top: 328,

backgroundColor: '#27242D',
    },
    profpic: {
        position: 'absolute',
        width: 60,
        height: 60,
        left: 20,
        top: 131,
        borderRadius: 30,
    },
    itemName: {
        position: 'absolute',
        width: 280,
        height: 29,
        left: 24,
        top: 20,
        
        // fontFamily: 'Lato',
        fontStyle: 'normal',
        fontWeight: 700,
        fontSize: 24,
        // lineHeight: 100,
        color: '#FFFFFF',
    },
    price: {

        position: 'absolute',
// width: 80,
height: 29,
left: 24,
top: 57,

// fontFamily: 'Lato',
fontStyle: 'normal',
fontWeight: 700,
fontSize: 24,
lineHeight: 29,
/* identical to box height */


color: '#BE00FF',
    },
    date: {
        position: 'absolute',
        // width: 172,
        height: 17,
        left: 23,
        top: 94,
        
        // fontFamily: 'Lato';
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: 14,
        lineHeight: 17,
        /* identical to box height */
        
        
        color: 'rgba(255, 255, 255, 0.47)',
    },
    details: {

        position: 'absolute',
// width: 44,
height: 17,
left: 24,
top: 212,

// fontFamily: 'Lato';
fontStyle: 'normal',
fontWeight: 700,
fontSize: 14,
lineHeight: 17,
/* identical to box height */


color: '#FFFFFF',
    },
    condition: {
        position: 'absolute',
        // width: 142,
        height: 17,
        left: 24,
        top: 243,
        
        // fontFamily: 'Lato';
        fontStyle: 'normal',
        fontWeight: 700,
        fontSize: 14,
        lineHeight: 17,
        /* identical to box height */
        
        
        color: '#FFFFFF',
    },
    description: {
        position: 'absolute',
        width: 345,
        // height: 34,
        left: 24,
        top: 277,
        
        // fontFamily: 'Lato',
        fontStyle: 'normal',
        fontWeight: 700,
        fontSize: 14,
        lineHeight: 17,
        
        color: '#FFFFFF',
    },
    name: {
        position: 'absolute',
        width: 133,
        height: 24,
        left: 94,
        top: 137,
        
    //     fontFamily: 'Lato',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: 20,
        lineHeight: 24,
        /* identical to box height */
        
        
        color: '#FFFFFF',
    },
    verified: {
        position: 'absolute',
        // width: 85,
        height: 17,
        left: 120,
        top: 169,
        
        // fontFamily: 'Lato',
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: 14,
        lineHeight: 17,
        /* identical to box height */
        
        
        color: '#FFFFFF',
    },
    verifIcon: {
        position: 'absolute',
        width: 20,
        height: 20,
        left: 94,
        top: 168,
        
        // background: url(.png);
        opacity: 0.2,
    },
    message: {
        position: 'absolute',
        width: 40,
        height: 40,
        left: 272,
        top: 141,
    },
    mail: {
        position: 'absolute',
        width: 40,
        height: 40,
        left: 330,
        top: 141,     
    },
    heart: {
        position: 'absolute',
        width: 30,
        height: 30,
        left: 12.5,
        top: 12.5,
        
        
    },
    heartBubble: {
        position: 'absolute',
        width: 55,
        height: 55,
        left: 314,
        top: 29,
        backgroundColor: '#BE00FF',
        borderRadius: 40,
        
    },
    linearGradient: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 390,
        height: 844,
        left: 0,
        top: -5,
      },
    topLeft: {
        position: 'absolute',
        width: 150,
        height: 150,
        left: 28,
        top: 202,

        backgroundColor: '#27242D',
// box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        borderRadius: 25,
    },
    topRight: {
        position: 'absolute',
        width: 150,
        height: 150,
        left: 211,
        top: 202,

        backgroundColor: '#27242D',
// box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        borderRadius: 25,
    },
    bottomLeft: {
        position: 'absolute',
        width: 150,
        height: 150,
        left: 28,
        top: 364,

        backgroundColor: '#27242D',
// box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        borderRadius: 25,
    },
    bottomRight: {
        position: 'absolute',
        width: 150,
        height: 150,
        left: 211,
        top: 364,

        backgroundColor: '#27242D',
// box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        borderRadius: 25,
    },
    boxTitle: {
        position: 'absolute',
        textAlign: 'center',
        width: 150,
        height: 17.11,
        left: 0,
        top: 26.17,

// fontFamily: 'Lato',
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: 14,
        lineHeight: 17,

        color: '#FFFFFF',

    },
    userAmount: {
        position: 'absolute',
        textAlign: 'center',
        width: 150,
        height: 48.32,
        left: 0,
        top: 57.38,
        
        // fontFamily: 'Lato',
        fontStyle: 'normal',
        fontWeight: 800,
        fontSize: 40,
        lineHeight: 48,
        
        color: '#C84CF2',
    },
    accButton1: {
        position: 'absolute',
        width: 333,
        height: 54,
        left: 28,
        top: 527,

        backgroundColor: '#27242D',
// box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        borderRadius: 15,

    },
    accButton2: {
        position: 'absolute',
        width: 333,
        height: 54,
        left: 28,
        top: 591,

        backgroundColor: '#27242D',
// box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        borderRadius: 15,

    },
    accButton3: {
        position: 'absolute',
        width: 333,
        height: 54,
        left: 28,
        top: 655,

        backgroundColor: '#27242D',
// box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        borderRadius: 15,

    },
    buttonText: {
        position: 'absolute',
        width: 216,
        height: 23,
        left: 82,
        top: 15,

// fontFamily: 'Lato',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: 16,
        lineHeight: 19,

        color: '#FFFFFF',
    },
    buttonIcon: {
        position: 'absolute',
        width: 30,
        height: 30,
        left: 25,
        top: 12,
    },

})