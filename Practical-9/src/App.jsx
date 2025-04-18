import { ThemeProvider } from './context/ThemeContext'
import ThemeToggle from './components/ThemeToggle'
import Content from './components/Content'
import './App.css'

function App() {
  return (
    <ThemeProvider>
      <div className="app-container">
        <header>
          <ThemeToggle />
        </header>
        <main>
          <Content />
        </main>
      </div>
    </ThemeProvider>
  )
}

export default App
