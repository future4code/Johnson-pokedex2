import './App.css';
import React from 'react'
import { Router } from './Route/Router';
import {GlobalState} from './Components/GlobalState/GlobalState'

export default function App() {
  return (
    <GlobalState>
    <Router />
    </GlobalState>
  )
}
