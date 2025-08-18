import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Example from './example.jsx'
import Greetings from './Greetings.jsx'
import UserInfo from './UserInfo.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Example/>
    <Greetings name= "Joan" />
    <UserInfo name = "Kelvin" age = {23} gender = "Male" />

    
  </StrictMode>,
)
