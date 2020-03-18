import ergast from '../Apis/ergast';

//Denne action creator returnerer en funktion, som kaldes når DriverList componenten er mountet. 
//Middleware delen i vores Store behandler dernæst den returnerede funktion og kalder dispatcheren med funktionens resultat, som en action.
export const fetchDrivers = () => async dispatch => {
    const response = await ergast.get('/api/f1/2019/drivers.json');
    dispatch({type: 'FETCH_DRIVERS', payload: response.data.MRData.DriverTable.Drivers})
} 

//Denne action creator returnerer en funktion, som kaldes når Racelist componenten er mountet. 
//Middleware delen i vores Store behandler dernæst den returnerede funktion og kalder dispatcheren med funktionens resultat, som en action.
export const fetchRaces = () => async dispatch => {
    const response = await ergast.get('/api/f1/2019/races.json');
    dispatch({type: 'FETCH_RACES', payload: response.data.MRData.RaceTable.Races})
};

