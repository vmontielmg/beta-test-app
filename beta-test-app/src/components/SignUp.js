import React from "react";

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userType: ""
        };
    }

    handleClick() {
        this.setState( {
            userType: this.state.userType
        });
        alert("user type: " + this.userType);
    }

    render() {
        alert("signup rendered");

        const linkStyle = {
            textDecoration: "none",
            color: "#000"
        };

        return (
            <div className="SignUp">
                <h2>Sign Up</h2>
                <p>Select User Type</p>
                <button type="button" className="user" onClick={this.handleClick}>Beta Tester</button>  
                <p>or</p>         
                <button type="button" className="user" onClick={this.handleClick}>Product Owner</button> 
                <p>Already have and account? <a href="./login.js" style={linkStyle}>Login</a></p>
            </div>
        );
    }
}

export default SignUp;