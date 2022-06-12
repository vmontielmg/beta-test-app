import React from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

class OwnerForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        alert(this.state);

        if(this.state.email && this.state.password && this.state.passwordConfirm) {
            if (this.state.password  === this.state.passwordConfirm) {
                const auth = getAuth();
                createUserWithEmailAndPassword(auth, this.state.email, this.state.password).then((userCredential) => {
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
            } else {
                alert("Passwords do not match")
            }
        }
    }

    onChange = (e) => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <div className="ownerForm">
                                                {this.state.error && <p style={{color: "red"}}>{this.state.error}</p>}

                <form onSubmit={this.handleSubmit}>
                    <label> First Name
                        <input type="text" name="firstName" onChange={this.onChange} />
                    </label>
                    <label> Last Name
                        <input type="text" name="lastName" onChange={this.onChange}  />
                    </label>
                    <label> Company
                        <input type="text" name="company" onChange={this.onChange}  />
                    </label>
                    <label> Email
                        <input type="email" name="email" onChange={this.onChange} />
                    </label>
                    <label> Password
                        <input type="password" name="password" onChange={this.onChange} />
                    </label>
                    <label> Confirm Password
                        <input type="password" name="passwordConfirm" onChange={this.onChange} />
                    </label>
                    <label> Optional: Select a label for your project...?
                        <input type="checkbox" id="" name="" value="" />
                    </label>
                    <button type="submit" disabled={!(this.state.email && this.state.password && this.state.passwordConfirm)}>Submit</button>
                </form>
            </div>
        );
    }
}

export default OwnerForm;