import React from "react";
import OwnerForm from "./OwnerForm";
import TesterForm from "./TesterForm";

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userType: ""
        };
    }

    handleClick = (e)  => {
        this.setState( {
            userType: e.target.dataset.type
        });
    }

    render() {
        const linkStyle = {
            textDecoration: "none",
            color: "#000"
        };

        return (
            <div className="SignUp">
                <h2>Sign Up</h2>
                <p>Already have an account? <a href="./login.js" style={linkStyle}>Login</a></p>
                {this.state.userType === "" && (<>
                    <p>Select User Type</p>
                    <button type="button" className="user" data-type="Beta Tester" onClick={this.handleClick}>Beta Tester</button>  
                    <p>or</p>         
                    <button type="button" className="user" data-type="Product Owner" onClick={this.handleClick}>Product Owner</button> 
                </>)}
                {this.state.userType !== "" && <p>Signing up as a {this.state.userType}</p>}
                {this.state.userType === "Beta Tester" && <TesterForm />}
                {this.state.userType === "Product Owner" && <OwnerForm />}
            </div>
        );
    }
}

export default SignUp;