import React, { useEffect } from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    ScrollView,
    Animated,
    Image,
    TouchableOpacity,
    Dimensions,
    Platform,
    Linking,
} from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";

import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';

//import { markers, mapDarkStyle, mapStandardStyle } from '../Components/mapData';
import StarRating from '../Components/StarRating';

import { useTheme } from '@react-navigation/native';

const { width, height } = Dimensions.get("window");
const CARD_HEIGHT = 220;
const CARD_WIDTH = width * 0.8;
const SPACING_FOR_CARD_INSET = width * 0.1 - 10;


export default ExploreScreen = () => {
    const Images = [
        { image: require("../assets/drop-off.jpg") },
        { image: require("../assets/sts.jpeg") },
        { image: require("../assets/ztech.png") },
        { image: require("../assets/dessau.jpeg") },
        { image: require("../assets/cmc.jpeg") },
        { image: require("../assets/wright.png") },
    ];
    const theme = useTheme();


    const mapDarkStyle = [
        {
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#212121"
                }
            ]
        },
        {
            "elementType": "labels.icon",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#757575"
                }
            ]
        },
        {
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "color": "#212121"
                }
            ]
        },
        {
            "featureType": "administrative",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#757575"
                }
            ]
        },
        {
            "featureType": "administrative.country",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#9e9e9e"
                }
            ]
        },
        {
            "featureType": "administrative.land_parcel",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "administrative.locality",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#bdbdbd"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#757575"
                }
            ]
        },
        {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#181818"
                }
            ]
        },
        {
            "featureType": "poi.park",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#616161"
                }
            ]
        },
        {
            "featureType": "poi.park",
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "color": "#1b1b1b"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#2c2c2c"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#8a8a8a"
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#373737"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#3c3c3c"
                }
            ]
        },
        {
            "featureType": "road.highway.controlled_access",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#4e4e4e"
                }
            ]
        },
        {
            "featureType": "road.local",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#616161"
                }
            ]
        },
        {
            "featureType": "transit",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#757575"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#000000"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#3d3d3d"
                }
            ]
        }
    ];

    const mapStandardStyle = [
        {
            "elementType": "labels.icon",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
    ];

    const initialMapState = {
        markers: [
            {
                title: 'Austin Recycle & Reuse Drop-off Center',
                description: 'M-Sa 9:00 AM - 5:00 PM Closed Sunday ',
                image: Images[0].image,
                link: 'https://www.austintexas.gov/dropoff',
                address: '2514 Business Center Dr, Austin, TX 78744',
                coordinate: {
                    latitude: 30.21542134,
                    longitude: -97.7381713,
                },
                rating: 4,
                reviews: 99,
            },
            {
                title: 'STS Electronic Recycling',
                description: 'M-F 8:00 AM - 5:00 PM Weekends Closed ',
                link: 'https://www.stselectronicrecyclinginc.com/austin',
                address: '9442 Capital of Texas Highway Plaza Suite 500 Austin, TX 78759',
                coordinate: {
                    latitude: 30.39046244,
                    longitude: -97.74851063,
                },
                image: Images[1].image,
                rating: 5,
                reviews: 102,
            },
            {
                title: 'Z-Tech Global Solutions',
                description: "M-F 8:00 AM - 4:00 PM Weekends Closed",
                link: 'https://www.ztechglobal.net/',
                address: '8812 Shoal Creek Blvd, Austin, TX 78757',
                coordinate: {
                    latitude: 30.37744152,
                    longitude: -97.73549831,
                },
                image: Images[2].image,
                rating: 3,
                reviews: 220,
            },
            {
                title: 'Recycling Center',
                description: "M-F 8:00 AM - 6:00 PM Sa 8: 00 AM - 5: 00 PM Su 12: 00 PM - 5: 00 PM",
                address: '9405 Dessau Rd, Austin, TX 78754',
                link: 'http://www.recyclingcenteraustin.com/',
                coordinate: {
                    latitude: 30.35266713,
                    longitude: -97.67458248,
                },
                image: Images[3].image,
                rating: 4,
                reviews: 48,
            },
            {
                title: 'CMC Recycling',
                description: 'M - F 8: 00 AM - 5: 00 PM Weekends Closed',
                link: 'https://www.cmcrecycling.com/locations/austin-north',
                address: '1704 Howard Ln, Austin, TX 78728',
                coordinate: {
                    latitude: 30.42831122,
                    longitude: -97.67817194,
                },
                image: Images[4].image,
                rating: 4,
                reviews: 178,
            },
            {
                title: 'Wright Recycling',
                description: "M-F 8:00 AM - 4:30 PM Sa 9: 00 AM - 1: 30 PM Closed Sunday",
                link: 'https://wrightrecyclingllc.com/',
                address: '9513 Brown Lane, Austin, Texas 78754, United States',
                coordinate: {
                    latitude: 30.35183934,
                    longitude: -97.66963042,
                },
                image: Images[5].image,
                rating: 4,
                reviews: 178,
            },
        ],
        categories: [
            {
                name: 'Metal Scraps',
                icon: <MaterialCommunityIcons style={styles.chipsIcon} name="recycle" size={18} />,
            },
            {
                name: 'Wires',
                icon: <MaterialCommunityIcons style={styles.chipsIcon} name="firewire" size={18} />,
            },
            {
                name: 'Consumer Electronics',
                icon: <MaterialCommunityIcons style={styles.chipsIcon} name="phone" size={18} />,
            },
            {
                name: 'Batteries',
                icon: <MaterialCommunityIcons name="battery" style={styles.chipsIcon} size={18} />,
            },
            {
                name: 'Money Maker',
                icon: <Fontisto name="dollar" style={styles.chipsIcon} size={15} />,
            },
        ],
        region: {
            latitude: 30.28637797789029,
            longitude: -97.73658908311805,
            latitudeDelta: 0.04864195044303443,
            longitudeDelta: 0.040142817690068,
        },
    };

    const [state, setState] = React.useState(initialMapState);

    const openMaps = (latitude, longitude) => {
        const daddr = `${latitude},${longitude}`;
        const company = Platform.select === "ios" ? "apple" : "google";
        Linking.openURL(`http://maps.${company}.com/maps?daddr=${daddr}`);
    }
    
    let mapIndex = 0;
    let mapAnimation = new Animated.Value(0);

    useEffect(() => {
        mapAnimation.addListener(({ value }) => {
            let index = Math.floor(value / CARD_WIDTH + 0.3); // animate 30% away from landing on the next item
            if (index >= state.markers.length) {
                index = state.markers.length - 1;
            }
            if (index <= 0) {
                index = 0;
            }

            clearTimeout(regionTimeout);

            const regionTimeout = setTimeout(() => {
                if (mapIndex !== index) {
                    mapIndex = index;
                    const { coordinate } = state.markers[index];
                    _map.current.animateToRegion(
                        {
                            ...coordinate,
                            latitudeDelta: state.region.latitudeDelta,
                            longitudeDelta: state.region.longitudeDelta,
                        },
                        350
                    );
                }
            }, 10);
        });
    });

    const interpolations = state.markers.map((marker, index) => {
        const inputRange = [
            (index - 1) * CARD_WIDTH,
            index * CARD_WIDTH,
            ((index + 1) * CARD_WIDTH),
        ];

        const scale = mapAnimation.interpolate({
            inputRange,
            outputRange: [1, 1.5, 1],
            extrapolate: "clamp"
        });

        return { scale };
    });

    const onMarkerPress = (mapEventData) => {
        const markerID = mapEventData._targetInst.return.key;

        let x = (markerID * CARD_WIDTH) + (markerID * 20);
        if (Platform.OS === 'ios') {
            x = x - SPACING_FOR_CARD_INSET;
        }

        _scrollView.current.scrollTo({ x: x, y: 0, animated: true });
    }

    const _map = React.useRef(null);
    const _scrollView = React.useRef(null);

    return (
        <View style={styles.container}>
            <MapView
                ref={_map}
                initialRegion={state.region}
                style={styles.container}
                provider={PROVIDER_GOOGLE}
                showsUserLocation={true}
                customMapStyle={theme.dark ? mapDarkStyle : mapStandardStyle}
            >
                {state.markers.map((marker, index) => {
                    const scaleStyle = {
                        transform: [
                            {
                                scale: interpolations[index].scale,
                            },
                        ],
                    };
                    return (
                        <Marker key={index} coordinate={marker.coordinate} onPress={(e) => onMarkerPress(e)}>
                            <Animated.View style={[styles.markerWrap]}>
                                <Animated.Image
                                    source={require('../assets/map_marker.png')}
                                    style={[styles.marker, scaleStyle]}
                  
                                    resizeMode="cover"
                                />
                            </Animated.View>
                        </Marker>
                    );
                })}
            </MapView>
            <View style={styles.searchBox}>
                <TextInput
                    placeholder="Search here"
                    placeholderTextColor="#000000"
                    autoCapitalize="none"
                    style={{ flex: 1, padding: 0 }}
                />
                <Ionicons name="ios-search" size={20} />
            </View>
            <ScrollView
                horizontal
                scrollEventThrottle={1}
                showsHorizontalScrollIndicator={false}
                height={50}
                style={styles.chipsScrollView}
                contentInset={{ // iOS only
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 20
                }}
                contentContainerStyle={{
                    paddingRight: Platform.OS === 'android' ? 20 : 0
                }}
            >
                {state.categories.map((category, index) => (
                    <TouchableOpacity key={index} style={styles.chipsItem}>
                        {category.icon}
                        <Text>{category.name}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
            <Animated.ScrollView
                ref={_scrollView}
                horizontal
                pagingEnabled
                scrollEventThrottle={1}
                showsHorizontalScrollIndicator={false}
                snapToInterval={CARD_WIDTH + 20}
                snapToAlignment="center"
                style={styles.scrollView}
                contentInset={{
                    top: 0,
                    left: SPACING_FOR_CARD_INSET,
                    bottom: 0,
                    right: SPACING_FOR_CARD_INSET
                }}
                contentContainerStyle={{
                    paddingHorizontal: Platform.OS === 'android' ? SPACING_FOR_CARD_INSET : 0
                }}
                onScroll={Animated.event(
                    [
                        {
                            nativeEvent: {
                                contentOffset: {
                                    x: mapAnimation,
                                }
                            },
                        },
                    ],
                    { useNativeDriver: true }
                )}
            >
                {state.markers.map((marker, index) => (
                    <View style={styles.card} key={index}>
                        <Image
                            source={marker.image}
                            style={styles.cardImage}
                            resizeMode="cover"
                        />
                        <View style={styles.textContent}>
                            <Text numberOfLines={1} style={styles.cardtitle}>{marker.title}</Text>
                            <StarRating ratings={marker.rating} reviews={marker.reviews} />
                            <Text numberOfLines={1} style={styles.cardDescription}>{marker.description}</Text>
                            <View style={styles.button}>
                                <TouchableOpacity
                                    onPress={() => openMaps(marker.coordinate.latitude, marker.coordinate.longitude)}
                    
                                    style={[styles.signIn, {
                                        borderColor: '#571182',
                                        borderWidth: 1
                                    }]}
                                >
                                    <Text style={[styles.textSign, {
                                        color: '#571182'
                                    }]}>Take Me Here</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                ))}
            </Animated.ScrollView>
        </View>
    );
}

// export default ExploreScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    searchBox: {
        position: 'absolute',
        marginTop: Platform.OS === 'ios' ? 40 : 20,
        flexDirection: "row",
        backgroundColor: '#fff',
        width: '90%',
        alignSelf: 'center',
        borderRadius: 5,
        padding: 10,
        shadowColor: '#ccc',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 10,
    },
    chipsScrollView: {
        position: 'absolute',
        top: Platform.OS === 'ios' ? 90 : 80,
        paddingHorizontal: 10
    },
    chipsIcon: {
        marginRight: 5,
    },
    chipsItem: {
        flexDirection: "row",
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: 8,
        paddingHorizontal: 20,
        marginHorizontal: 10,
        height: 35,
        shadowColor: '#ccc',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 10,
    },
    scrollView: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        paddingVertical: 10,
    },
    endPadding: {
        paddingRight: width - CARD_WIDTH,
    },
    card: {
        // padding: 10,
        elevation: 2,
        backgroundColor: "#FFF",
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        marginHorizontal: 10,
        shadowColor: "#000",
        shadowRadius: 5,
        shadowOpacity: 0.3,
        shadowOffset: { x: 2, y: -2 },
        height: CARD_HEIGHT,
        width: CARD_WIDTH,
        overflow: "hidden",
    },
    cardImage: {
        flex: 3,
        width: "100%",
        height: "100%",
        alignSelf: "center",
    },
    textContent: {
        flex: 2,
        padding: 10,
    },
    cardtitle: {
        fontSize: 12,
        // marginTop: 5,
        fontWeight: "bold",
    },
    cardDescription: {
        fontSize: 12,
        color: "#444",
    },
    markerWrap: {
        alignItems: "center",
        justifyContent: "center",
        width: 50,
        height: 50,
    },
    marker: {
        width: 30,
        height: 30,
    },
    button: {
        alignItems: 'center',
        marginTop: 5
    },
    signIn: {
        width: '100%',
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 0
    },
    textSign: {
        fontSize: 14,
        fontWeight: 'bold'
    }
});