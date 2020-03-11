import React, {Fragment} from 'react'
import ReactDom from 'react-dom'


//Comps
import Maper from './Map'

//Function Components
//********** DO NOT FORGET TO COMMAND/UNCOMMENT BELOW LINES FOR FUNCTION COMPONENTS *********
import Locations from '/fnComps/LocationProvider'
import MyDropDown from '/fnComps/DropDown'

//Class
//********* DO NOT FORGET TO COMMAND/UNCOMMENT BELOW LINES FOR CLASS COMPONENTS **********
import ClassLocations from '/classComps/LocationProvider'

const App = () => {

    return(
       <Fragment>
           {/*Function Components*/}
           {/*<Locations/>*/}
           <MyDropDown/>
           <hr/>
           {/*Class Components*/}
           <ClassLocations/>
       </Fragment>
    )
};

ReactDom.render(<App/>,document.getElementById('appRoot'));