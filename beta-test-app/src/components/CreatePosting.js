import React from "react";
import { components } from "react-select";
import { default as ReactSelect } from "react-select";

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

class CreatePosting extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {

        const postStyles = {
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
                width: 180,
                height: 15,
                borderRadius: 5,
                margin: 0,
                padding: "5px",
                marginRight: 1,
                float: "right"
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
            <div>
                <h1>Create a Posting</h1>
                <h3>Let's find some beta testers!</h3>

                <div className="ownerForm">
                                                {this.state.error && <p style={{color: "red"}}>{this.state.error}</p>}

                <form onSubmit={this.handleSubmit}>
                    <label> <p>Product
                        <input type="text" name="product" onChange={this.onChange} style={postStyles.input} /></p>
                    </label>
                    <label> <p>Company
                        <input type="text" name="company" onChange={this.onChange} style={postStyles.input}  /></p>
                    </label>
                    <label> <p>Description
                        <input type="textarea" name="description" onChange={this.onChange} style={postStyles.input}  /></p>
                    </label>
                    <label> <p>Optional: Select labels to target specific testers</p>
                    </label>
                    <span 
                        class="d-inline-block"
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
                            style={postStyles.label}
                        />
                    </span>
                    <button type="submit"  style={postStyles.submit} disabled={!(this.state.email && this.state.password && this.state.passwordConfirm)}>Submit</button>
                </form>
                </div>
            </div>
        );
    }
}

export const labelOptions = [
    { value: "topic1", label: "Accessibility - Design" },
    { value: "topic2", label: "Accessibility - Color" },
    { value: "topic3", label: "Accessibility - General" },
    { value: "topic4", label: "Functionality" },
    { value: "topic5", label: "Topic - Games" },
    { value: "topic6", label: "Topic - HealthTech" },
    { value: "topic7", label: "Topic - EdTech" },
    { value: "topic8", label: "Topic - Mature Age" },
    { value: "topic9", label: "All" }
];


export default CreatePosting;