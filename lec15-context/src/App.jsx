import Content from "./components/Content"
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import ThemeProvider from "./context/ThemeProvider"

const App = () => {
  return (
    <ThemeProvider>
      <Header />
      <main className="flex min-h-screen">
        <Sidebar />
        <Content />
      </main>
    </ThemeProvider>
  )
}

export default App
