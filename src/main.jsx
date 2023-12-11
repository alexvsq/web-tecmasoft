import React from 'react'
import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { BrowserRouter, Route } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(

    <BrowserRouter>
        <StrictMode>
            <App />
        </StrictMode>
    </BrowserRouter>

)
