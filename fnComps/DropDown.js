import React, {Fragment} from 'react'

const container = {
    width: '500px',
    backgroundColor: 'black',
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


    const handleOptionClick = () => { return alert('clicked !')};

    return(
        <Fragment>
            <div style={container}>
                <h3>Locations !</h3>
                <select  style={selectStyle} name="locationSelector" id="">
                    <option defaultValue value=" "></option>
                    <option style={{backgroundColor:'orange'}} value="istanbul" onClick={handleOptionClick} >Istanbul</option>
                    <option value="izmir">Izmir</option>
                </select>
                <button onClick={handleOptionClick}>Click Me !</button>
            </div>
        </Fragment>
    )
};

export default MyDropDown