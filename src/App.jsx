import {React, useState} from "react"
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Form from "./components/form"
import Table from "./components/table"
import Navigations from "./components/navigations"

function App() {
  const [totalData, setTotalData] = useState([]);
  return(
   <div>
    <BrowserRouter>
       <Navigations />
       <Routes>
        <Route path="/" element={<Form totalData={totalData} setTotalData={setTotalData} />} />
        <Route path="/petdata" element={<Table totalData={totalData} />} />
       </Routes>
    </BrowserRouter>
   </div>
  )
}

export default App
