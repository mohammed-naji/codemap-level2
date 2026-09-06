import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const Header = () => {
  const {theme, setTheme} = useContext(ThemeContext);

  return (
    <header className="header px-20 py-6 bg-blue-100 dark:bg-blue-950 dark:text-white flex justify-between items-center">
      <h1 className="text-2xl font-bold">My App</h1>
      <div>
        <button className="bg-blue-300 dark:bg-blue-900 dark:text-white p-2 rounded cursor-pointer" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
          {theme === "light" ? "Dark 🌑" : "Light 🌞"}
        </button>
      </div>
    </header>
  )
}

export default Header
