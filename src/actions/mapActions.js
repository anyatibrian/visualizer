import firebase from '../firebase/config'
import { LOAD_MAP_DATA } from './actionsTypes'
import unsplash from '../assets/unsplash.jpg'

export const generateGeoJson = () => async dispatch => {
    const GeoJSON = []
    const response = await firebase.firestore().collection('observations').get()
    response.forEach((snapshort) => {
        GeoJSON.push({
            "type": "Feature",
            "properties": {
                "healthArea": snapshort.data().healthArea,
                "healthZone": snapshort.data().healthZone,
                "popupContent": `
                <h4 style="font-size:20px">Visits summery</h4>
                <p>Households Visited ${snapshort.data().HouseholdsVisited}
                Number OF Voluteers ${snapshort.data().NumberOFVoluteers}</p>
                \n<img src="${unsplash}" width="250px"/>
                `
            },
            geometry: {
                "type": "Point",
                "coordinates": [parseFloat(snapshort.data().long), parseFloat(snapshort.data().lat)]
            }
        })
    })
    //console.log(GeoJSON)
    dispatch({
        type: LOAD_MAP_DATA,
        payload: GeoJSON
    })
}