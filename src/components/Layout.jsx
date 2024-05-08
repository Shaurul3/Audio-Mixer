import { Outlet } from "react-router-dom";
import { NavBar } from "./Navbar";

export function Layout() {
    return (
        <>
            <NavBar/>
            <main>
                <Outlet/>
            </main>
        </>
    )
}