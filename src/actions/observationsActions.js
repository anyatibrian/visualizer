import { CREATEOBSERVATION, FETCHOBSERVATION, GETOBSERVATIONBYZONE } from './actionsTypes'
import fbConfig from '../firebase/config'
//action that handles all the observations within

export const CreateObservationData = (observations) => {
    return (dispatch) => {
        fbConfig.firestore().collection('observations').add(observations).then((d) => {
            dispatch({
                type: CREATEOBSERVATION,
                payload: 'Field data created successfully'
            })
        }).catch((error) => {
            console.log(error)
        })
    }
}

// fetching all the obervation from the data
/**
 * 
 */
export const FetchObservation = () => {
    return (dispatch) => {
        fbConfig.firestore().collection('observations').get().then((snapshot) => {
            const data = []
            snapshot.forEach(doc => {
                data.push({
                    'key': doc.id,
                    'rage': doc.data()['rage'],
                    'HouseholdsVisited': doc.data()['HouseholdsVisited'],
                    'NumberOFVoluteers': doc.data()['NumberOFVoluteers'],
                    'PeopleVisited': doc.data()['PeopleVisited'],
                    'UnusualDeathOrDiseaseInHumans': doc.data()['UnusualDeathOrDiseaseInHumans'],
                    'acuteWateryDiarrhea': doc.data()['acuteWateryDiarrhea'],
                    'chikungunya': doc.data()['chikungunya'],
                    'ebola': doc.data()['ebola'],
                    'healthZone': doc.data()['healthZone'],
                    'healthArea': doc.data()['healthArea'],
                    'yellowFever': doc.data()['yellowFever'],
                    'measles': doc.data()['measles'],
                    'pfa': doc.data()['pfa'],
                    'unusualDeathOrDiseaseInAnimals': doc.data()['unusualDeathOrDiseaseInAnimals'],
                })
            });
            dispatch({
                type: FETCHOBSERVATION,
                payload: data
            })
        }).catch((error) => {
            console.log(error)
        })
    }
}

// fetching all the observations based on the region
/**
 * 
 * @param {*} healthZone 
 */
export const getObservationsByZone = (healthZone) => dispatch => {
    fbConfig.firestore().collection('observations').where("healthZone", "==", healthZone).get()
        .then((snapshot) => {
            const data = []
            snapshot.forEach((doc) => {
                data.push({
                    'rage': doc.data()['rage'],
                    'HouseholdsVisited': doc.data()['HouseholdsVisited'],
                    'NumberOFVoluteers': doc.data()['NumberOFVoluteers'],
                    'PeopleVisited': doc.data()['PeopleVisited'],
                    'UnusualDeathOrDiseaseInHumans': doc.data()['UnusualDeathOrDiseaseInHumans'],
                    'acuteWateryDiarrhea': doc.data()['acuteWateryDiarrhea'],
                    'chikungunya': doc.data()['chikungunya'],
                    'ebola': doc.data()['ebola'],
                    'healthArea': doc.data()['healthArea'],
                    'yellowFever': doc.data()['yellowFever'],
                    'measles': doc.data()['measles'],
                    'pfa': doc.data()['pfa'],
                    'unusualDeathOrDiseaseInAnimals': doc.data()['unusualDeathOrDiseaseInAnimals']

                })
            })
            dispatch({
                type: GETOBSERVATIONBYZONE,
                payload: data
            })
        }).catch((error) => {
            console.log(error)
        })
}

//generate geojson for the observations of data