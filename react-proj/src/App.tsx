import { useState } from 'react'
import Products from './components/Products'
import CartContext from './components/ContextAPI/Context/CartContext'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      {/* <Products /> */}
      <CartContext />
    </div>
  )
}

export default App
