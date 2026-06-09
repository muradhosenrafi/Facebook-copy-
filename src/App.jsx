
import Login from './layouts/Login';
import Home from "./pages/Home"
import SingUp from './layouts/SingUp';
import {createRoutesFromElements,createBrowserRouter, Route,RouterProvider,} from "react-router-dom";
import FontPage from './layouts/FontPage';
import Settings from './layouts/Settings';
import Splash from './layouts/Splash';
import ShareContatent from './layouts/ShareContatent';


const router = createBrowserRouter(
  createRoutesFromElements(
<>
    <Route path="/" element={<FontPage/>} ></Route>
    <Route path="/home" element={<Home/>} ></Route>
    <Route path="/login" element={<Login/>} ></Route>
    <Route path="/singup" element={<SingUp/>} ></Route>
    <Route path="/setting" element={<Settings/>} ></Route>
    <Route path="/sharecontatent" element={<ShareContatent/>} ></Route>
    <Route path="/splash" element={<Splash/>} ></Route>
</>
  )
);


const App = () => {
  return (
<RouterProvider router={router}/>
  )
}

export default App