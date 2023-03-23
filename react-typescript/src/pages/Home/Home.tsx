import { FC } from "react";
import { NavLink, Outlet } from "react-router-dom";

const Home: FC = (): JSX.Element =>{
    return(
        <>
        <h1>Home Page</h1>
        <ul>
            <li>
                <NavLink to={'/introduction'}>Introduction</NavLink>
            </li>
            <li>
            <NavLink to={'/dashboard'}>Dashboard</NavLink>
            </li>
            <li>
                <NavLink to={'/memory-leak'}>Memory Leak</NavLink>
            </li>
        </ul>
        <Outlet/>
        </>
    )
}

export default Home;