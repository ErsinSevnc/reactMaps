import React, {Fragment, useState, useEffect ,useContext} from 'react'

import Maper from '../Map'
import ShowLocations from './LocationProvider'
import ThemeContext from './ThemeContext';

const container = {
    width: '500px',
    color: 'white',
    padding: '32px',
    outline: '1px solid white',
    outlineOffset: '-10px'
};
const selectStyle = {
    width: '50%',
    minHeight: '24px',
    backgroundColor: 'white'
};

const MyDropDown = () => {
    const [center, setCenter] = useState({lat: 39.91987, lng: 32.85427});
    const [location, setLocation] = useState('Ankara');
    const [bg, setBg] = useContext(ThemeContext);

    //Use Effect hook runs after first render and every re-render after that. It takes 2 parameter. One of them is function for actions.
    //Other one is like state.Whatever we define into that second parameter, useEffect hook will run whenever the value of this parameter changes.

    useEffect( () => {
        location == 'istanbul' ?  ( setBg('orange'),setCenter({lat:41.01384 , lng: 28.94966}))  : location == 'izmir' ? ( setBg('gray'), setCenter({lat:38.41273 , lng: 27.13838}) ): setBg('black')
    },[location] );

    const handleSelectChange = (e) => setLocation(e.target.value);

    return(
        <Fragment>
            <div style={container} className={bg}>
                <h3>Locations !</h3>
                <select  style={selectStyle} name="locationSelector" id="" onChange={handleSelectChange}>
                    <option defaultValue></option>
                    <option style={{backgroundColor:'orange'}} value="istanbul">Istanbul</option>
                    <option style={{backgroundColor:'gray'}} value="izmir">Izmir</option>
                </select>
            </div>
            <hr/>
            <Maper mapCenter = {center}/>
            <ShowLocations city={location}/>
        </Fragment>
    )
};

export default MyDropDown