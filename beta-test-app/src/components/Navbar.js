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
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { getDatabase, onValue, ref } from "firebase/database";

const navbarStyles = {
    link: {
        display: "inline",
        textDecoration: "none",
        color: "#FFF",
        fontSize: "large",
        justifyContent: "center",
        paddingTop: 1,
        verticalAlign: "sub"
    },
    menu: {
        display: "inline",
        width: "100%"
    },
    item: {
        display: "inline",
        margin: 0,
        padding: 10,
        verticalAlign: "sub"
    }
}


function Navbar() {
    const [user, setUser] = useState();
    const [userInfo, setUserInfo] = useState();
    const auth = getAuth();


      useEffect(() => {
        onAuthStateChanged(auth, (u) => {
            if (u) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                const uid = u.uid;
                // ...
            //   console.log(u);
                setUser(u);
                const db = getDatabase();
                const userRef = ref(db, 'users/' + uid);
                onValue(userRef, (snapshot) => {
                const data = snapshot.val();
                    console.log(data);
                    setUserInfo(data);
                });
                
            } else {
                // User is signed out
                // ...
                setUser(undefined);
            }
            });
      }, []);

    return (
        <BrowserRouter>
            <div className="navmenu">
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
                    {!user && <li style={navbarStyles.item}>
                        <a href="login.js" style={navbarStyles.link}>Login</a>
                        {/* <Link to="/login" style={navbarStyles.link}>Login</Link> */}
                    </li>}
                    {user && <p>Logged in as {userInfo?.firstName} {userInfo?.lastName} ({user.email}). <button onClick={(e) => signOut(auth)}>Sign out</button></p>}
                    
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