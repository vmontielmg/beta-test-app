class TesterForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    handleSubmit() {

    }

    render() {
        return (
            <div className="testerForm">
                <form onSubmit={handleSubmit}>
                    <label> First Name
                        <input type="text" />
                    </label>
                    <label> Last Name
                        <input type="text" />
                    </label>
                    <label> Email
                        <input type="email" />
                    </label>
                    <label> Password
                        <input type="password" />
                    </label>
                    <label> Confirm Password
                        <input type="password" />
                    </label>
                    <label> Optional: Select any labels you feel comfortable indentifying yourself with
                        <input type="checkbox" id="" name="" value="" />
                    </label>
                </form>
            </div>
        );
    }
}

export default TesterForm;