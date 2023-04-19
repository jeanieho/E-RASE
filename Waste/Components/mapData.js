const Images = [
    { image: require("../assets/drop-off.jpg") },
    { image: require("../assets/sts.jpeg") },
    { image: require("../assets/ztech.png") },
    { image: require("../assets/dessau.jpeg") },
    { image: require("../assets/cmc.jpeg") },
    { image: require("../assets/wright.png") },
];

export const markers = [
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
        description: 'This is a drop-off center for recyclable items. ',
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
        description: 'This is a drop-off center for recyclable items. ',
        link: 'https://www.ztechglobal.net/',
        address: '8812 Shoal Creek Blvd, Austin, TX 78757',
        coordinates: {
            latitude: 30.37744152,
            longitude: -97.73549831,
        },
        image: Images[2].image,
        rating: 3,
        reviews: 220,
    },
    {
        title: 'Recycling Center',
        description: 'This is a drop-off center for recyclable items. ',
        address: '9405 Dessau Rd, Austin, TX 78754',
        link: 'http://www.recyclingcenteraustin.com/',
        coordinates: {
            latitude: 30.35266713,
            longitude: -97.67458248,
        },
        image: Images[3].image,
        rating: 4,
        reviews: 48,
    },
    {
        title: 'CMC Recycling',
        description: 'This is a drop-off center for recyclable items. ',
        link: 'https://www.cmcrecycling.com/locations/austin-north',
        address: '1704 Howard Ln, Austin, TX 78728',
        coordinates: {
            latitude: 30.42831122,
            longitude: -97.67817194,
        },
        image: Images[4].image,
        rating: 4,
        reviews: 178,
    },
    {
        title: 'Wright Recycling',
        description: 'This is a drop-off center for recyclable items. ',
        link: 'https://wrightrecyclingllc.com/',
        address: '9513 Brown Lane, Austin, Texas 78754, United States',
        coordinates: {
            latitude: 30.35183934,
            longitude: -97.66963042,
        },
        image: Images[5].image,
        rating: 4,
        reviews: 178,
    },
];

export const mapDarkStyle = [
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

export const mapStandardStyle = [
    {
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
];
