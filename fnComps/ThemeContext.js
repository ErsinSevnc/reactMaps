import React, {createContext} from 'react'

//We define our context as array type , because it is easy to use with es6 destructre.
const ThemeContext = createContext([{themeColor: 'default'}, () => {}]);

export default ThemeContext;