import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./Login"
import HomeApp from "./HomeApp"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path=":currentRoute" element={<HomeApp/>}/>
        <Route path="/*" element={<HomeApp/>}/>
      </Routes>
    </BrowserRouter>
  )
}


export default App
