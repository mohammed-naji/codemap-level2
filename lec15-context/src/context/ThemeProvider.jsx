import { useState } from "react";
import ThemeContext from "./ThemeContext";

export default function ThemeProvider({children}) {
    // const value = {
    //     name: "Mohammed"
    // }
    const [theme, setTheme] = useState("light");

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}
