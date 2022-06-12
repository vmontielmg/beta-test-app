import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import React from "react";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(e) {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value,
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.name);
        if(this.state.email && this.state.password) {
            const auth = getAuth();
            signInWithEmailAndPassword(auth, this.state.email, this.state.password).then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
                console.log(user);
                this.setState({
                    ...this.state,
                    error: null
                });
                })
                .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
                console.log(errorCode, errorMessage);
                this.setState({
                    ...this.state,
                    error: errorMessage
                })
                });
        }
    }

    render() {
        const linkStyle = {
            textDecoration: "none",
            color: "#000"
        };

        return (
            <div className="login">
                <form onSubmit={this.handleSubmit}>
                    <h2>Login</h2>
                    {this.state.error && <p style={{color: "red"}}>{this.state.error}</p>}
                    <label>
                        <p>Email</p>
                        <input type="email" name="email" value={this.state.email} onChange={this.handleInputChange} required />
                    </label>
                    <label>
                        <p>Password</p>
                        <input type="password" name="password" value={this.state.password} onChange={this.handleInputChange} required />
                    </label>
                    <p>
                        <a href="#top">Forgot Password?</a>
                    </p>
                    <input type="submit" value="Login" />
                    <p>Not a member? 
                        <a href="signup.js">Sign Up</a>
                    </p>
                </form>
            </div>            
        );
    }
}

export default Login;