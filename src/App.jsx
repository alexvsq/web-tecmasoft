import './App.css'
import Layout from './pages/layout'
import { Outlet } from 'react-router'


function App() {

  return (
    <>

      <Layout />

      <Outlet />
    </>
  )
}

export default App
