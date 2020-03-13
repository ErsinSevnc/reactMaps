import React, {Fragment, useState} from 'react'
//*** DO NOT FORGET TO IMPORT HOOKS !!! ****

//COMPS
import ShowLocations from './FromLocations'


const Locations = (props) => {

    //Now the beauty of React; Hooks. As you can see we are in Function Component and we have different style than Class Comps
    //First Things first, you do not have to extend from something. This is just a JavaScript Function. We defined our Component above.

    //Now this is hooks ! Actually below lines are defining our state. You can learn more from  ** https://reactjs.org/docs/hooks-intro.html **
    //It is obvious useState hook for State ! We destructure useState hook, most of hooks returns two value one of them is
    //value it self, other is updater function. If we want to update something in our state just write setLocations('someting something') after we will split states
    //for better management
    const [locations, setLocations] = useState({
                istanbul: ['Küçükçekmece', 'Büyükçekmece', 'Sarıyer', 'Beşiktaş', 'Kadıköy'],
                izmir : ['Karşıyaka', 'Bostanlı', 'Alsancak', 'Konak']
            });



    //Function Components does not need some other methods to return smth !
    return(
        <Fragment>
            {props.city == 'istanbul' ? <ShowLocations mapLocations={locations.istanbul} />
                : props.city == 'izmir' ?  <ShowLocations mapLocations={locations.izmir} />
                : null}
        </Fragment>
    )
};

export default Locations