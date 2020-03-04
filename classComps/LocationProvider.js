import React from 'react'

//COMPS
import ShowLocations from './FromLocations'

class ClassLocations extends React.Component{
    //If we will use Class components, we have to define our state like below. There is alot of differences between
    //Class and Function components. Function Components are easy to write. But for now you cant handle everything with
    //Function Components. Sometimes you have to write Class Comps.
    //Main differences , Class components use Class pattern in javaScript and sometimes this keyword can be pain for you
    //We will see later but for know ; ' You have to define your this keyword with 'Object.bind' for your functions, or do static
    //Also it uses constructor method. For setting State.
    constructor(props){
        super(props);
        this.state = {
            Locations : {
                istanbul: ['Küçükçekmece', 'Büyükçekmece', 'Sarıyer', 'Beşiktaş', 'Kadıköy'],
                izmir: ['Karşıyaka', 'Bostanlı', 'Alsancak', 'Konak']
            }
        }
    }

    //Other Main difference is , class components call render method before returning smth.
    render (){
        return(
            <ShowLocations mapLocations={this.state.Locations} />
        )
    }
}

export default ClassLocations