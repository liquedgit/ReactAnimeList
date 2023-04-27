import { createContext } from "react"

export const THEME = {
    light:{
        backgroundColor : "white",
        foreground:"white",
        color:"black",
        border:"1px solid black",
    },
    dark:{
        backgroundColor : "black",
        foreground:"black",
        color:"white",
        border:"1px solid white",
    }
}

export const ThemeP = createContext(THEME.light);