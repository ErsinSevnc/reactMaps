import React from 'react';
import {Map, GoogleApiWrapper, Marker} from 'google-maps-react'

const mapWrapper = {
    position:'relative',
    height: '450px',
    width:  '100%',
    padding: 0,
    margin: 0
};
const mapStyle = {
    height: '100%',
    widht: '100%'
};

const Maper = (props) => {

    return(
        //This is our wrapper for Google Maps, we can define any desired style in mapWrapper variable
        <div style={mapWrapper}>
            <Map
                google={props.google}
                zoom={6}
                initialCenter={props.mapCenter}
                style={mapStyle}
            >
                {/*Calling Markers with position ! */}
                <Marker position={props.mapCenter} />
            </Map>
        </div>
    )
};

export default GoogleApiWrapper({
    //Get your api Key from google cloud console !
    apiKey: 'YOUR_API_KEY_HERE !!!'
})(Maper)