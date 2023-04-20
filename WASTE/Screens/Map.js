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
      description: 'M-Sa 9:00 AM - 5:00 PM Closed Sunday ',
      image: 'https://lh3.googleusercontent.com/-fGDBQow57RE/AAAAAAAAAAI/AAAAAAAAAAA/DOcuEhjAv74/s110-p-k-no-ns-nd/photo.jpg',
      link: 'https://www.austintexas.gov/dropoff',
      address: '2514 Business Center Dr, Austin, TX 78744',
      coordinates: {
        latitude: 30.21542134,
        longitude: -97.7381713,
      },
    },
    {
      title: 'STS Electronic Recycling',
      description: 'M-F 8:00 AM - 5:00 PM Closed on weekends ',
      image: 'https://lh4.googleusercontent.com/-kYCjIt8W8R8/AAAAAAAAAAI/AAAAAAAAAAA/M22HxSEzHWA/s110-p-k-no-ns-nd/photo.jpg',
      link: 'https://www.stselectronicrecyclinginc.com/austin',
      address: '9442 Capital of Texas Highway Plaza Suite 500 Austin, TX 78759',
      coordinates: {
        latitude: 30.39046244,
        longitude: -97.74851063,
      },
    },
    {
      title: 'Z-Tech Global Solutions',
      description: "M-F 8:00 AM - 4:00 PM Closed on weekends",
      image: 'https://lh4.googleusercontent.com/-7iYtH2t2z3Y/AAAAAAAAAAI/AAAAAAAAAAA/NzYuDK0wMAk/s110-p-k-no-ns-nd/photo.jpg',
      link: 'https://www.ztechglobal.net/',
      address: '8812 Shoal Creek Blvd, Austin, TX 78757',
      coordinates: {
        latitude: 30.37744152,
        longitude: -97.73549831,
      },
    },
    {
      title: 'Recycling Center',
      description: "M-F 8:00 AM - 6:00 PM Sa 8: 00 AM - 5: 00 PM Su 12: 00 PM - 5: 00 PM",
      image: 'https://lhhttps://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.recycling.com%2Fdownloads%2Frecycling-symbol%2F&psig=AOvVaw2f8elBvd3L2DhmhfUu7XN_&ust=1681062666897000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCLiQzsvsmv4CFQAAAAAdAAAAABAI4.googleusercontent.com/-7iYtH2t2z3Y/AAAAAAAAAAI/AAAAAAAAAAA/NzYuDK0wMAk/s110-p-k-no-ns-nd/photo.jpg',
      address: '9405 Dessau Rd, Austin, TX 78754',
      link: 'http://www.recyclingcenteraustin.com/',
      coordinates: {
        latitude: 30.35266713,
        longitude: -97.67458248,
      },
    },
    {
      title: 'CMC Recycling',
      description: 'M - F 8: 00 AM - 5: 00 PM Closed on weekends',
      image: 'https://lh4.googleuhttps://www.google.com/url?sa=i&url=https%3A%2F%2Fm.facebook.com%2Fcommercialmetals%2F&psig=AOvVaw2R7C8GCpWokzMKeAvetQB3&ust=1681062645204000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCIiSx8Hsmv4CFQAAAAAdAAAAABADsercontent.com/-7iYtH2t2z3Y/AAAAAAAAAAI/AAAAAAAAAAA/NzYuDK0wMAk/s110-p-k-no-ns-nd/photo.jpg',
      link: 'https://www.cmcrecycling.com/locations/austin-north',
      address: '1704 Howard Ln, Austin, TX 78728',
      coordinates: {
        latitude: 30.42831122,
        longitude: -97.67817194,
      },
    },
    {
      title: 'Wright Recycling',
      description: "M-F 8:00 AM - 4:30 PM Sa 9: 00 AM - 1: 30 PM Closed Sunday",
      image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2Frecyclingthewrightway%2F&psig=AOvVaw2AbMfcPmZG2rKUpUu3c4WD&ust=1681062609796000&source=images&cd=vfe&ved=0CBIQjhxqFwoTCPiHkLDsmv4CFQAAAAAdAAAAABAD',
      link: 'https://wrightrecyclingllc.com/',
      address: '9513 Brown Lane, Austin, Texas 78754, United States',
      coordinates: {
        latitude: 30.35183934,
        longitude: -97.66963042,
      },
    },
  ],
};

export default function Map() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  const openMaps = (latitude, longitude) => {
    const daddr = `${latitude},${longitude}`;
    const company = Platform.select === "ios" ? "apple" : "google";
    Linking.openURL(`http://maps.${company}.com/maps?daddr=${daddr}`);
  }

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
    {location ? (
      <MapView
        style={styles.map}
        region={region}
        provider={PROVIDER_GOOGLE}
        showsUserLocation={true}
      >
        {this.state.markers.map((marker, index) => (
          <Marker
            key={index}
            title={marker.title}
            coordinate={marker.coordinates}
            pinColor={'#0000FF'}
            // onPress={() => openMaps(marker.coordinates.latitude, marker.coordinates.longitude)}
          >
            <Callout style={styles.callout}>
              <View>
                <Image style={{ height: 50, width: 50 }} source={{ uri: marker.image }} resizeMode="cover" />
                <Text style={styles.calloutTitle}>{marker.title}</Text>
                <Text style={styles.calloutDescription}>{marker.description}</Text>
                <TouchableOpacity 
                  onPress={() => Linking.openURL(marker.link)} 
                  style={[styles.signIn, {
                    borderColor: '#27242d',
                    borderWidth: 1
                  }]}>
                  <Text style={{ color: 'blue', fontSize: 10 }}>
                    {marker.link}
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => openMaps(marker.coordinates.latitude, marker.coordinates.longitude)}
                  style={[styles.signIn, {
                    borderColor: '#27242d',
                    borderWidth: 1
                  }]}>
                  <Text style={{ color: 'blue', fontSize: 10 }}>
                    {marker.address}
                  </Text>
                </TouchableOpacity>
              </View>
            </Callout>
          </Marker>
        ))}
      </MapView>
      
      ) : (
          <View>
            <Text>E-RASE</Text>
            <Image
              source={require('../assets/logo.png')}
              resizeMode="contain"
              style={styles.loadingImage}
            ></Image>
          </View>
    
        // <Image style={styles.loadingImage}> </Image>
      )}
    </View>
  );
}


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
  },
  calloutDescription: {
    fontSize: 10,
  },
  calloutImage: {
    justifyContent: 'center',
    fontSize: 10,
    width: 50,
    height: 50,
  },
  signIn: {
    width: '100%',
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3
  },
  loadingImage: {
    justifyContent: 'center',
    width: 390,
    height: 844,
    left: 0,
    top: 0,
    backgroundColor: '#27242D',
    // transform: rotate(-90),
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
    bottom: 0,

  }
});

            //onPress={() => openMaps(marker.coordinates.latitude, marker.coordinates.longitude)}
            // image={require('/Users/jeanieho/Documents/Convergent/Sustainability/Waste/assets/Ellipse.png')}
{/* <View style={{ position: 'absolute', bottom: '20' }}> */ }
{/* </View> */ }
{/* <TouchableOpacity onPress={marker.openMapURL(marker.coordinates.latitude, marker.coordinates.longitude)}>
                      <Text style={{ color: 'blue', fontSize: 10 }}>
                        {marker.address}
                      </Text>
                    </TouchableOpacity> */}

{/* <TouchableOpacity onPress={Linking.openURL(this.marker.link)}>
                      <Text style={{ color: 'blue', fontSize: 10 }}>
                        {marker.link}
                      </Text>
                    </TouchableOpacity> */}

{/* <TouchableHighlight onPress={() => Linking.openURL(this.marker.link)}>
  
                    <Text style={{ color: 'blue', fontSize: 10 }}>{marker.link}</Text>
                  </TouchableHighlight> */}


{/* <Text style={{ color: 'blue', fontSize: 10 }}
                  onPress = {() => Linking.openURL(this.marker.link)}>
                  {marker.link}
                </Text> */}

{/* <Text style={{ color: 'blue', fontSize: 10 }}
                  onPress={() => openMaps(marker.coordinates.latitude, marker.coordinates.longitude)}>
                  {marker.address}
                </Text> */}