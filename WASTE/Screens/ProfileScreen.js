import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { navigation, useNavigation, NavigationContainer, navigate, useRoute } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Camera, CameraType } from 'expo-camera';
import * as React from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';



export default ProfileScreen = () => {

  return (
    <View>
        <LinearGradient
          colors={['black', 'purple', 'black' ]}
          style={styles.linearGradient}
        >
        <Image style={styles.profpic} source={{uri: 'https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg'}}></Image>
        <Text style={styles.name}>Peter Pan</Text>
        <Text style={styles.erased}>E-rased 12 items</Text>

        <View style={styles.topLeft}>
            <Text style={styles.boxTitle}>CO2e Saved</Text>
            <Text style={styles.userAmount}>11 lbs</Text>
        </View>
        <View style={styles.topRight}>
            <Text style={styles.boxTitle}>Active Groups</Text>
            <Text style={styles.userAmount}>3</Text>
        </View>
        <View style={styles.bottomLeft}>
            <Text style={styles.boxTitle}>Items Sold</Text>
            <Text style={styles.userAmount}>3</Text>
        </View>
        <View style={styles.bottomRight}>
            <Text style={styles.boxTitle}>Spent</Text>
            <Text style={styles.userAmount}>$350</Text>
        </View>
        </LinearGradient>
        <View style={styles.accButton1}>
        <Ionicons position='center' name="person" size={25} color="white" style={styles.buttonIcon}></Ionicons>
            <Text style={styles.buttonText}>Account Details</Text>
        </View>
        <View style={styles.accButton2}>
        <Ionicons position='center' name="heart" size={25} color="white" style={styles.buttonIcon}></Ionicons>
            <Text style={styles.buttonText}>Favorites</Text>
        </View>
        <View style={styles.accButton3}>
        <Ionicons position='center' name="settings" size={25} color="white" style={styles.buttonIcon}></Ionicons>
            <Text style={styles.buttonText}>Settings</Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create ({
    profpic: {
        position: 'absolute',
        width: 120,
        height: 120,
        left: 26,
        top: 60,
        borderRadius: 60,
    },
    name: {
        position: 'absolute',
        width: 208,
        height: 32,
        left: 169,
        top: 92,
        
        // fontFamily: 'Lato',
        fontStyle: 'normal',
        fontWeight: 700,
        fontSize: 32,
        // lineHeight: 100,
        /* identical to box height, or 32px */
        
        letterSpacing: 0.03,
        
        color: '#FFFFFF',
    },
    erased: {
        position: 'absolute',
        width: 127,
        height: 15,
        left: 169,
        top: 132,

        // fontFamily: 'Lato',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: 15,
        // lineHeight: 100,
/* identical to box height, or 15px */
        letterSpacing: -0.02,
        color: '#FFFFFF',
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