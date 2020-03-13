import React, {Fragment, useState, useContext} from 'react'
import ReactDom from 'react-dom'


//Comps
import Maper from './Map'

//Context
import ThemeContext from './fnComps/ThemeContext'


//Function Components
//********** DO NOT FORGET TO COMMAND/UNCOMMENT BELOW LINES FOR FUNCTION COMPONENTS *********
import Locations from '/fnComps/LocationProvider'
import MyDropDown from '/fnComps/DropDown'

//Class
//********* DO NOT FORGET TO COMMAND/UNCOMMENT BELOW LINES FOR CLASS COMPONENTS **********
import ClassLocations from '/classComps/LocationProvider'

const App = () => {

    //We use , useState hook for getting theme changes correctly
    const theme = useState(ThemeContext);

    return(
       <Fragment>
           <ThemeContext.Provider value={theme}>
               {/*Function Components*/}
               {/*<Locations/>*/}
               <MyDropDown/>
               <hr/>
               {/*Class Components*/}
               {/*<ClassLocations/>*/}
           </ThemeContext.Provider>
       </Fragment>
    )
};

ReactDom.render(<App/>,document.getElementById('appRoot'));