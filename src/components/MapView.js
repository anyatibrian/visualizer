import React, { Component } from 'react'
import * as L from 'leaflet'

class MapView extends Component {
    constructor(props) {
        super(props)
    }
    componentWillReceiveProps(nextProps) {
        console.log(nextProps)
        this.GenerateMap(nextProps.GeoJSON)
    }
    componentDidMount() {
    }

    GenerateMap = (GeoJSON) => {
        //map box access tokens basically for the public
        const access_token = 'pk.eyJ1IjoiYW55YXRpYnJpYW4iLCJhIjoiY2s1cGdrN3Y2MHNqbjNobW80eXF2MHAwNyJ9.3valCGJERUuqC_EqTY-E1Q'
        //attribution 
        const attribution = 'Map data & copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a> , Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'
        const map = L.map('map-container', {
            center: [0.0512, 32.4637],
            zoom: 15
        })
        L.tileLayer(`https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=${access_token}`, {
            attribution: attribution,
            maxZoom: 12,
            id: 'mapbox/streets-v11',
            accessToken: 'your.mapbox.access.token'
        }).addTo(map);
        //coloring options to the map
        const geojsonMarkerOptions = {
            radius: 8,
            fillColor: "red",
            color: "#000",
            weight: 1,
            opacity: 1,
            fillOpacity: 0.8
        };
        //the maps popupContent of the application
        const onEachFeature = (feature, layer) => {
            // does this feature have a property named popupContent?
            if (feature.properties && feature.properties.popupContent) {
                layer.bindPopup(feature.properties.popupContent)
            }
        }
        //passing the geo json object into the map
        const geojsonFeature = {
            "type": "Feature",
            "properties": {
                "name": "Coors Field",
                "amenity": "Baseball Stadium",
                "popupContent": "This is where the Rockies play!"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-104.99404, 39.75621]
            }
        };
        L.geoJSON(GeoJSON, {
            style: () => { },
            onEachFeature: onEachFeature,
            pointToLayer: (feature, latlng) => {
                return L.circleMarker(latlng, geojsonMarkerOptions)
            },
        }).addTo(map)

    }
    render() {
        return (
            <div>
                <div id="map-container" style={{ width: '1380px', height: '700px' }}>
                </div>
            </div >
        )
    }
}
export default MapView