import { createContext, useReducer  } from "react";

export const ThemeContext = createContext()

const initialState = {theme: 1}

const themeReducer = (state = initialState, {type, payload}) => {
    switch(type){
        case "TOGGLE":
            if(state === 1){
                state = 2
                return {theme: state}
            }else if(state === 2){
                state = 3
                return {theme: state}
            }else if(state === 3){
                state = 1
                return {theme: state}
            }
    }
}

export const ThemeProvider = (props) =>{
    const [state, dispatch] = useReducer(themeReducer, initialState)
    return (
        <ThemeContext.Provider value={{state, dispatch}}>
            {props.children}
        </ThemeContext.Provider>
    )
}