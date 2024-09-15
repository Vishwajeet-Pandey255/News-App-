import { useState } from "react"
import Navbar from "./Components/Navbar"
import NewsArea from "./Components/NewsArea"


const App = () => {

  const [category,setCategory] = useState('general')

  return (
    <div>
      <Navbar setCategory={setCategory}/>
      <NewsArea category={category}/>
    
    </div>
  )
}

export default App