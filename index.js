import React from "react"
import RouterDom from 'react-dom'
import 'antd/dist/antd.less'
import { BrowserRouter as Router } from 'react-router-dom'
import AppRoutes from './src/routes/index'
import 'leaflet/dist/leaflet.css'
import './styles/app.less'

RouterDom.render(
    <Router>
        <AppRoutes />
    </Router>,
    document.getElementById("root"))
