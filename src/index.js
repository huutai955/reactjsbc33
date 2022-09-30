import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../src/App.jsx'
// Cấu hình cho react 
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Detail from './pages/Detail.jsx';
import Register from './pages/Register.jsx';
import Page404 from './pages/Page404.jsx';
import ReactForm from './pages/ReactForm.jsx';
import ReactLifeCycle from './pages/ReactLifeCycle/ReactLifeCycle.jsx';

// Nếu ta dùng thẻ a để chuyển trang thì nó sẽ mất đi ưu điểm của
// react là load lại trang nhanh vì thế trong react ta sẽ thay thế 
// thẻ a bằng một thẻ gọi là NavLink trong Router-dom
// và href thay thế bằng to

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path='' element={<App />}>
                <Route index element={<Home />}></Route>
                <Route path='login' element={<Login />}></Route>
                <Route path='detail' element={<Detail />}></Route>
                <Route path='register' element={<Register />}></Route>
                <Route path='form' element={<ReactForm />}></Route>
                <Route path='reactlifecycle' element={<ReactLifeCycle />}></Route>
                <Route path='*' element={<Navigate to=""/>}></Route>
                
                {/* <Route path='*' element={<Page404 />}></Route> */}
            </Route>
        </Routes>
    </BrowserRouter>
);


