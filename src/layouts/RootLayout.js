import { NavLink, Outlet } from "react-router-dom"

export default function RootLayout() {
  return (
    <div className='root-layout'>
        <header>
        <nav>
            <h1>CF</h1>
            <NavLink to="/">Home</NavLink>
            {/* NavLink puts an active class for styling */}
            <NavLink to="drake">Drake</NavLink>
            <NavLink to="grandview">Grandview</NavLink>
            <NavLink to="dmacc">DMACC</NavLink>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  )
}
