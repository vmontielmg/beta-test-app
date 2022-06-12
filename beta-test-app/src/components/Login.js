import React from "react";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        event.preventDefault();
        const target = event.target;
        this.setState({
            [target.email]: target.value,
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({
            email: this.state.email,
            password: this.password
        });
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
                    <label>
                        <p>Email</p>
                        <input type="text" name="email" value={this.state.value} onChange={this.handleInputChange} required />
                    </label>
                    <label>
                        <p>Password</p>
                        <input type="password" name="password" value={this.state.value} onChange={this.handleInputChange} required />
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