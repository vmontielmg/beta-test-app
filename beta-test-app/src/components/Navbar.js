import Feed from "./Feed";
import About from "./About";
import User from "./User"; // work in figma prototype
import Packages from "./Packages";
import Login from "./Login";
import {
    BrowserRouter,
    Routes,
    Route,
    Link
  } from "react-router-dom";
import SignUp from "./SignUp";

const navbarStyles = {
    link: {
        display: "inline",
        textDecoration: "none"
    },
    menu: {
        display: "inline",
        width: "100%"
    },
    item: {
        display: "inline",
        margin: 0,
        padding: 10
    },
}

function Navbar() {
    return (
        <BrowserRouter>
            <div>
                <ul className="navbar" style={navbarStyles.menu}>
                    <li style={navbarStyles.item}>
                        <Link to="/feed" style={navbarStyles.link}>Feed</Link>
                    </li>
                    <li style={navbarStyles.item}>
                        <Link to="/about" style={navbarStyles.link}>About</Link>
                    </li>
                    <li style={navbarStyles.item}>
                        <Link to="/user" style={navbarStyles.link}>Work</Link>
                    </li>
                    <li style={navbarStyles.item}>
                        <Link to="/packages" style={navbarStyles.link}>Packages</Link>
                    </li>
                    <li style={navbarStyles.item}>
                        <a href="login.js" style={navbarStyles.link}>Login</a>
                        {/* <Link to="/login" style={navbarStyles.link}>Login</Link> */}
                    </li>
                    
                </ul>
            </div>

            <Routes>
                <Route path="/feed" element={<Feed />} />
                <Route path="/about" element={<About />} />
                <Route path="/user" element={<User />} />
                <Route path="/packages" element={<Packages />} />
                <Route path="/login.js" element={<Login />} />
                <Route path="/signup.js" element={<SignUp />} />

            </Routes>
        </BrowserRouter>
    );

}

export default Navbar;