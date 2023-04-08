import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Linking } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps';
import * as Location from 'expo-location';

this.state = {
  latitude: 37.78825,
  longitude: -122.4324,
  markers: [
    {
      title: 'Austin Recycle & Reuse Drop-off Center',
      description: 'This is a drop-off center for recyclable items. ',
      link: 'https://www.austintexas.gov/dropoff',
      coordinates: {
        latitude: 30.21542134,
        longitude: -97.7381713,
      },
    },
    {
      title: 'STS Electronic Recycling',
      description: 'This is a drop-off center for recyclable items. ',
      link: 'https://www.stselectronicrecyclinginc.com/austin',
      coordinates: {
        latitude: 30.39046244,
        longitude: -97.74851063,
      },
    },
    {
      title: 'Z-Tech Global Solutions',
      description: 'This is a drop-off center for recyclable items. ',
      link: 'https://www.ztechglobal.net/',
      coordinates: {
        latitude: 30.37744152,
        longitude: -97.73549831,
      },
    },
    {
      title: 'Recycling Center',
      description: 'This is a drop-off center for recyclable items. ',
      link: 'http://www.recyclingcenteraustin.com/',
      coordinates: {
        latitude: 30.35266713,
        longitude: -97.67458248,
      },
    },
    {
      title: 'CMC Recycling',
      description: 'This is a drop-off center for recyclable items. ',
      link: 'https://www.cmcrecycling.com/locations/austin-north',
      coordinates: {
        latitude: 30.42831122,
        longitude: -97.67817194,
      },
    },
    {
      title: 'Wright Recycling',
      description: 'This is a drop-off center for recyclable items. ',
      link: 'https://wrightrecyclingllc.com/',
      coordinates: {
        latitude: 30.35183934,
        longitude: -97.66963042,
      },
    },
  ],
};

export default function App() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let region = {
    latitude: location ? location.coords.latitude : 37.78825,
    longitude: location ? location.coords.longitude : -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  return (
    <View style={styles.container}>
      {location ? (<MapView
        style={styles.map}
        region={region}
        // provider={PROVIDER_GOOGLE}
        showUserLocation={true}
      >
        {this.state.markers.map((marker, index) => (
          <Marker
            key={index}
            title={marker.title}
            coordinate={marker.coordinates}
            // pinColor={'#0000FF'}
            image={require('./assets/favicon.png')}
          >
            <Callout>
              <View style={styles.callout}>
                <Text style={styles.calloutTitle}>{marker.title}</Text>
                <Text style={styles.calloutDescription}>{marker.description}
                  <Image style={{ height: 50, width: 50 }} source={{ uri: 'https://lh3.googleusercontent.com/-fGDBQow57RE/AAAAAAAAAAI/AAAAAAAAAAA/DOcuEhjAv74/s110-p-k-no-ns-nd/photo.jpg'}} resizeMode="cover" />
                  <Text style={{ color: 'blue' }}
                    onPress={() => Linking.openURL(marker.link)}>
                    Click here to learn more.
                  </Text>
                </Text>
              </View>
            </Callout>
          </Marker>
        ))}
        {/* <Text> E-RASE </Text> */}
      </MapView>
    ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
}



//   return (
//     <MapView
//       style={{ flex: 1 }}
//       region={{
//         latitude: '37.78875',
//         longitude: '-122.4328',
//         latitudeDelta: 0.0922,
//         longitudeDelta: 0.0421,Z
//       }}


//     >
//       {this.state.markers.map((marker, index) => (
//         <Marker
//           key={index}
//           title={marker.title}
//           coordinate={marker.coordinates}
//         />
//       ))}
//       <Text> Hello map</Text>
//     </MapView>
//   );
// };



var styles = StyleSheet.create({

  callout: {
    width: 300,
    height: 150,
    padding: 0,
    borderRadius: 0,
    backgroundColor: '#fff',
  },
  calloutTitle: {
    fontWeight: 'bold',
    justifyContent: 'center',
    fontSize: 10,
    width: 500,
    height: 50,
  },
  calloutDescription: {
    fontSize: 10,
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 60,
  }
});
//}