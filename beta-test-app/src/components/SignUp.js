import { AuthErrorCodes } from "firebase/auth";
import React from "react";
import OwnerForm from "./OwnerForm";
import TesterForm from "./TesterForm";
import "../index.css";

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

        const loginStyles = {
            card: {
                border: "2px solid #0D3B66",
                borderRadius: 20,
                width: 350,
                boxShadow: "-1px 5px 10px #0D3B66",
                backgroundColor: "#FFFEFB",
                color: "#0D3B66",
                margin: "auto",
                marginTop: "5%",
                height: "auto",
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
                margin: 5,
                height: 50,
                fontSize: "large"
            }
        }

        return (
            <div className="SignUp" style={loginStyles.card}>
                <h1>Sign Up</h1>
                <p>Already have an account? <a href="./login.js" style={loginStyles.linkStyle}>Login</a></p>
                {this.state.userType === "" && (<>
                    <h4>Select User Type</h4>
                    <button type="button" className="user" data-type="Beta Tester" onClick={this.handleClick}  style={loginStyles.submit}>Beta Tester</button>  
                    <p>or</p>         
                    <button type="button" className="user" data-type="Product Owner" onClick={this.handleClick} style={loginStyles.submit}>Product Owner</button> 
                </>)}
                {this.state.userType !== "" && <p>Signing up as a {this.state.userType}</p>}
                {this.state.userType === "Beta Tester" && <TesterForm />}
                {this.state.userType === "Product Owner" && <OwnerForm />}
            </div>
        );
    }
}

export default SignUp;