import React, {Fragment, useContext} from 'react'

import ThemeContext from './ThemeContext'


const ShowLocations = (props) => {
    //Here we can easily manage our style with Context Hook
    const [theme, ...rest] = useContext(ThemeContext);

    return(
        <Fragment>
            <h3>States !</h3>
            <ul>
                { props.mapLocations.map( (v, i) => <li key={i} style={{color:theme}}> {v} </li>) }
            </ul>
        </Fragment>
    )
};

export default ShowLocations