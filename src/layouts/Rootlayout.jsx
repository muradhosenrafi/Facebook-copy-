
import { Outlet } from 'react-router-dom'
import MenuBar from '../layouts/MenuBar'

const Rootlayout = () => {
  return (
    <div className="min-h-screen pb-20">
      <Outlet />
      <MenuBar />
    </div>
  )
}

export default Rootlayout