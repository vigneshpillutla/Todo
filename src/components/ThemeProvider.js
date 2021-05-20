import React ,{useState, useContext} from 'react'
import lightBg from '../images/lightSVG.svg'
import darkBg from '../images/darkSVG.svg'
import sun from '../images/sun.svg'
import moon from '../images/moon.svg'
const ThemeContext = React.createContext();
const ThemeUpdateContext = React.createContext();
const lightGradient = 'linear-gradient(90deg, rgba(214, 109, 117, 0.2) 0%, rgba(226, 149, 135, 0.12) 100%)'
const blueTint = 'linear-gradient(90deg, rgba(0, 57, 115, 0.2) 0%, rgba(229, 229, 190, 0.2) 100%)'
const darkGradient = 'linear-gradient(270deg, #642B73 0%, rgba(198, 66, 110, 0.28) 100%)'

const styles = {
    light:{
        bodyBackground:'#FFFFFF',
        headerBackground:`${lightGradient},${blueTint},url(${lightBg})`,
        toggleButtonBg:'#87CEFA',
        toggleIcon:sun,
        toggleIconPosition:'6%',
        todoListBg:'#FFFFFF',
        textColor:'#000000',
        checkedTodoColor:'linear-gradient(90deg, #D66D75 0%, rgba(226, 149, 135, 0.53) 100%)',
        checkBorder:'1px solid #CDCDCD',
        activeColor:'#0000FF',
    },
    dark:{
        bodyBackground:'#222831',
        headerBackground:`${lightGradient},${blueTint},url(${darkBg})`,
        toggleButtonBg:darkGradient,
        toggleIcon:moon,
        toggleIconPosition:'52%',
        todoListBg:'#393E46',
        textColor:'#FFFFFF',
        checkedTodoColor:darkGradient,
        checkBorder:'1px solid rgba(205, 205, 205, 0.2)',
        activeColor:'#00B2FF'


    }
}
export function useTheme(){
    return useContext(ThemeContext);
}
export function useThemeUpdate(){
    return useContext(ThemeUpdateContext);
}

const ThemeProvider = ({children})=>{
    const [dark,setDark] = useState(localStorage.getItem('dark')==='true');
    const toggleTheme = ()=>{
        document.body.style = `background:${dark?'#FFFFFF':'#222831'} `;
        localStorage.setItem('dark',`${!dark}`)
        setDark(prevTheme=>!prevTheme);
    }
    return(
        <ThemeContext.Provider value={dark?styles.dark:styles.light}>
            <ThemeUpdateContext.Provider value={toggleTheme}>
                {children}
            </ThemeUpdateContext.Provider>
        </ThemeContext.Provider>
    )
}

export default ThemeProvider