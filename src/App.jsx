import Login from "./layouts/Login";
import Home from "./pages/Home";
import SingUp from "./layouts/SingUp";
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import FontPage from "./layouts/FontPage";
import Settings from "./layouts/Settings";
import Splash from "./layouts/Splash";
import ShareContatent from "./layouts/ShareContatent";
import GroupPage from "./pages/GroupPage";
import Rootlayout from "./layouts/Rootlayout";
import Notifications from "./pages/Notifications";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/fontpage" element={<FontPage />}></Route>

      <Route path="/login" element={<Login />}></Route>
      <Route path="/singup" element={<SingUp />}></Route>
      <Route path="/sharecontatent" element={<ShareContatent />}></Route>
      <Route path="/" element={<Splash />}></Route>

      <Route path="/" element={<Rootlayout />}>
        <Route path="home" element={<Home />}></Route>
        <Route path="grouppage" element={<GroupPage />}></Route>
        <Route path="setting" element={<Settings />}></Route>
        <Route path="notifications" element={<Notifications />}></Route>
      </Route>
    </>,
  ),
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
