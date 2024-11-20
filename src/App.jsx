import './App.css'
import Adduser from './Component/Adduser'
import Updateuser from './Component/Updateuser'
import Viewuser from './Component/Viewuser'
import {BrowserRouter,Routes,Route}  from 'react-router-dom'

function App() {


  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Adduser/>}/>
      <Route path='/viewuser' element={<Viewuser/>}/>
      <Route path='/updateuser' element={<Updateuser/>}/>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
