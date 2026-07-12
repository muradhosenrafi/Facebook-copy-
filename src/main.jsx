// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import firebaseConfig from './firebaseConfig.js'
import { Toaster } from "react-hot-toast";
import store from './pages/store.js'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
     <Toaster position="top-center" />
    <App />
  </Provider>,
)
