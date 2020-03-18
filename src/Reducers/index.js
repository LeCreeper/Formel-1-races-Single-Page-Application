import driversReducer from './driverReducer'
import raceReducer from './raceReducer'
import { combineReducers } from 'redux'


export default combineReducers( {drivers: driversReducer, races: raceReducer} );
