import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import * as Location from 'expo-location';

this.state = {
  latitude: 37.78825,
  longitude: -122.4324,
  markers: [
    {
      title: 'Austin Recycle & Reuse Drop-off Center',
      coordinates: {
        latitude: 30.21542134,
        longitude: -97.7381713,
      },
    },
    {
      title: 'STS Electronic Recycling',
      coordinates: {
        latitude: 30.39046244,
        longitude: -97.74851063,
      },
    },
    {
      title: 'Z-Tech Global Solutions',
      coordinates: {
        latitude: 30.37744152,
        longitude: -97.73549831,
      },
    },
    {
      title: 'Recycling Center',
      coordinates: {
        latitude: 30.35266713,
        longitude: -97.67458248,
      },
    },
    {
      title: 'CMC Recycling',
      coordinates: {
        latitude: 30.42831122,
        longitude: -97.67817194,
      },
    },
    {
      title: 'Wright Recycling',
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
            pinColor={'#0000FF'}
            image={require('./assets/favicon.png')}
          />
        ))}
        <Text> E-RACE </Text>
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
//         longitudeDelta: 0.0421,
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
    bottom: 0,
  }
});
//}