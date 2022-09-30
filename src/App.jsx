// rfc  

import React from 'react'
import { Outlet } from 'react-router-dom'
import Content from './Components/Content/Content'
import Footer from './Components/Footer/Footer'
import HeaderHome from './Components/HeaderHome/HeaderHome'
import Home from './Components/Home/Home'
import DemoDataBinding from './DataBinding/DemoDataBinding/DemoDataBinding'
import HandleEvent from './HandleEvent/HandleEvent'
import ProductList from './Props/DemoProps/ProductList'
import RenderArrayComponent from './RenderArrayComponent/RenderArrayComponent'
import HeaderLogin from './StateDemo/HeaderLogin'
import StateDemo2 from './StateDemo2/StateDemo2'
import StyleDemo from './StyleDemo/StyleDemo'



export default function App() {
  return (
    <div>
      <HeaderHome />
      <div style={{height:900}}>
        <Outlet />
      </div>
      <footer className='bg-dark p-5 text-center text-success'>
        Footer
      </footer>
    </div>
  )
}
