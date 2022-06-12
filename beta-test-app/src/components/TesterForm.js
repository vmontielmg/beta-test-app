import React from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { components } from "react-select";
import { default as ReactSelect } from "react-select";
import { createUser } from "../db/User";

const Option = (props) => {
  return (
    <div>
      <components.Option {...props}>
        <input
          type="checkbox"
          checked={props.isSelected}
          onChange={() => null}
        />{" "}
        <label>{props.label}</label>
      </components.Option>
    </div>
  );
};

class TesterForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        alert(JSON.stringify(this.state));

        if(this.state.email && this.state.password && this.state.passwordConfirm) {
            if (this.state.password  === this.state.passwordConfirm) {
                const auth = getAuth();
                createUserWithEmailAndPassword(auth, this.state.email, this.state.password).then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    // ...
                    console.log(user);
                    createUser(user.uid, this.state);
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
            } else {
                alert("Passwords do not match")
            }
        }
    }
   
    handleChange = (selected) => {
        this.setState({
          optionSelected: selected
        });
      };

    onChange = (e) => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        })
    }

    render() {
        const loginStyles = {
            card: {
                width: "auto",
                margin: "0 auto",
                marginTop: "5%",
                height: "auto",
                backgroundColor: "#FFFEFB",
                color: "#0D3B66",
                padding: "5% 3%"
            },
            input: {
                width: 100,
                height: 15,
                borderRadius: 5,
                margin: 0,
                padding: 5,
                float: "right"
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
            },
            option: {
                backgroundColor: "#ddd",
                border: "none",
                color: "red",
                padding: "10px 20px",
                textAlign: "center",
                textDecoration: "none",
                display: "inline-block",
                margin: "4px 2px",
                cursor: "pointer",
                borderRadius: "16px"
            }
        }

        return (
            <div className="signupCard"  style={loginStyles.card}>
            <div className="testerForm">
                                {this.state.error && <p style={{color: "red"}}>{this.state.error}</p>}
                <form onSubmit={this.handleSubmit}>
                <label> <p>First Name
                        <input type="text" name="firstName" onChange={this.onChange} style={loginStyles.input}/>
                        </p>
                    </label>
                    <label> <p>Last Name
                        <input type="text" name="lastName" onChange={this.onChange} style={loginStyles.input}  />
                        </p>
                    </label>
                    <label> <p>Email
                        <input type="email" name="email" onChange={this.onChange} style={loginStyles.input} />
                        </p>
                    </label>
                    <label> <p>Password
                        <input type="password" name="password" onChange={this.onChange} style={loginStyles.input} />
                        </p>
                    </label>
                    <label> <p>Confirm Password
                        <input type="password" name="passwordConfirm" onChange={this.onChange} style={loginStyles.input} />
                        </p>
                    </label>
                    <label> <p>Optional: Select any labels you feel comfortable indentifying yourself with </p>
                    </label>
                    
                    <span 
                        className="d-inline-block"
                        data-toggle="popover"
                        data-trigger="focus"
                        data-content="Please select account(s)">
                        
                        <ReactSelect
                            options={labelOptions}
                            isMulti
                            closeMenuOnSelect={false}
                            hideSelectedOptions={false}
                            components={{
                                Option
                            }}
                            onChange={this.handleChange}
                            allowSelectAll={true}
                            value={this.state.optionSelected}
                        />
                    </span>
                    <button type="submit" style={loginStyles.submit}>Submit</button>
                </form>
            </div>
            
            </div>
        );
    }
}

export const labelOptions = [
    { value: "atester1", label: "Accessibility Tester - Design" },
    { value: "atester2", label: "Accessibility Tester - Color" },
    { value: "atester3", label: "Accessibility Tester - General" },
    { value: "ftester1", label: "Functionality Tester" },
    { value: "games", label: "Topic - Games" },
    { value: "healthtech", label: "Topic - HealthTech" },
    { value: "edtech", label: "Topic - EdTech" },
    { value: "matureage", label: "Topic - Mature Age" },
    { value: "other", label: "Other" }
  ];

export default TesterForm;