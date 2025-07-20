import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import IMCFormulario from './components/formulario/form'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <IMCFormulario/>
    </>
  )
}

export default App
