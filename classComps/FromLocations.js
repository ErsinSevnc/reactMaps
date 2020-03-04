import React, {Fragment} from 'react'

class ShowLocations extends React.Component {

    //If your Class Component just need props you do not have to define constructor() method or call super()
    //You can access them with this keyword.
    render(){
        return(
            <Fragment>
                <h3>İstanbul</h3>
                <ul>
                    {this.props.mapLocations.istanbul.map( (v, i) => <li key={i} > {v} </li> )}
                </ul>
                <h3>İzmir</h3>
                <ul>
                    {this.props.mapLocations.izmir.map( (v ,i) => <li key={i} > {v} </li> )}
                </ul>
            </Fragment>
        )
    }
}

export default ShowLocations