import { createContext, useReducer } from "react";

export const ThemeContext = createContext()

const initialState = { theme: 1 }

const themeReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case "1":
			return { ...state, theme: 2 }
		case "2":
			return { ...state, theme: 3 }
		case "3":
			return { ...state, theme: 1 }
		default:
			return state
		}
}

export const ThemeProvider = (props) => {
	const [state, dispatch] = useReducer(themeReducer, initialState)
	return (
		<ThemeContext.Provider value={{ state, dispatch }}>
			{props.children}
		</ThemeContext.Provider>
	)
}