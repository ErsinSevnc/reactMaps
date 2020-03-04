import React, {Fragment} from 'react'

const ShowLocations = (props) => {

    console.log(props.mapLocations);
    return(
        <Fragment>
            <h3>İstanbul !</h3>
            <ul>
                { props.mapLocations.istanbul.map( (v, i) => <li key={i}> {v} </li>) }
            </ul>
            <h3>İzmir !</h3>
            <ul>
                { props.mapLocations.izmir.map( (v ,i) => <li key={i} > {v} </li>)}
            </ul>
        </Fragment>
    )
};

export default ShowLocations