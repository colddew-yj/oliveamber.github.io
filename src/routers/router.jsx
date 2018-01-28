import React from 'react'
import {
    Route,
} from 'react-router-dom'
const Login = require('./../components/Login').default;
const Routes = (
    <Route>
        <Route path="/" component={Login}/>
    </Route>
)
export  default  Routes