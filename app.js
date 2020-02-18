import React from 'react'
import ReactDom from 'react-dom'


//Comps
import Maper from './Map'

const App = () => {

    return(
        <div style={{textAlign:'center'}}>
<Maper/>
    <h3>Hello Google Maps & React  !</h3>
    </div>
)
};

ReactDom.render(<App/>,document.getElementById('appRoot'));