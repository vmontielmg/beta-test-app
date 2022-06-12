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
        alert(this.state)
    }

    onChange = (key, e) => {
        this.setState({
            ...this.state,
            [key]: e.target.value
        })
    }

    render() {
        return (
            <div className="ownerForm">
                <form onSubmit={this.handleSubmit}>
                    <label> First Name
                        <input type="text" onChange={(e) => this.onChange("firstName", e)} />
                    </label>
                    <label> Last Name
                        <input type="text"onChange={(e) => this.onChange("lastName", e)}  />
                    </label>
                    <label> Company
                        <input type="text"onChange={(e) => this.onChange("lastName", e)}  />
                    </label>
                    <label> Email
                        <input type="email" onChange={(e) => this.onChange("email", e)} />
                    </label>
                    <label> Password
                        <input type="password" onChange={(e) => this.onChange("password", e)} />
                    </label>
                    <label> Confirm Password
                        <input type="password" onChange={(e) => this.onChange("passwordConfirm", e)} />
                    </label>
                    <label> Optional: Select a label for your project...?
                        <input type="checkbox" id="" name="" value="" />
                    </label>
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default OwnerForm;