import HomePage from './components/Homepage'
import './App.css'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
    </Routes>
  )
}

export default App
