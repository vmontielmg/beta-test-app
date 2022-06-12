import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import React from "react";
import '../index.css';

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
                alert("You should now be logged in!")
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

        const loginStyles = {
            card: {
                border: "2px solid #0D3B66",
                borderRadius: 20,
                width: 350,
                margin: "0 auto",
                marginTop: "5%",
                height: "auto",
                boxShadow: "-1px 5px 10px #0D3B66",
                backgroundColor: "#FFFEFB",
                color: "#0D3B66",
                paddingBottom: "5%",
                paddingTop: "5%"
            },
            input: {
                width: 200,
                height: 15,
                borderRadius: 5,
                margin: 0,
                padding: 5
            },
            submit: {
                border: "0.5px solid 0D3B66",
                borderRadius: 8,
                backgroundColor: "#2084E2",
                color: "#FFF",
                width: "40%",
                height: 40,
                marginTop: 30,
                fontSize: "large"
            }
        }

        return (            
            <div className="login" style={loginStyles.card}>
                <form onSubmit={this.handleSubmit}>
                    <h1>Login</h1>
                    {this.state.error && <p style={{color: "red"}}>{this.state.error}</p>}
                    <label>
                        <p>Email</p>
                        <input style={loginStyles.input} type="email" name="email" value={this.state.email} onChange={this.handleInputChange} required />
                    </label>
                    <label>
                        <p>Password</p>
                        <input style={loginStyles.input} type="password" name="password" value={this.state.password} onChange={this.handleInputChange} required />
                    </label>
                    <p>
                        <a href="#top">Forgot Password?</a>
                    </p>
                    <input style={loginStyles.submit} type="submit" value="Login" />
                    <p>Not a member? 
                        <a href="signup.js">Sign Up</a>
                    </p>
                </form>
            </div>         
        );
    }
}

export default Login;