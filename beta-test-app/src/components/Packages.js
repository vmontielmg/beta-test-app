function Packages() {
    const packageStyles = {
        packages: {
            display: "inline-block",
            width: "100%"
        },
        packageCard: {
            border: '1px solid #000',
            borderRadius: 30,
            boxShadow: "-1px 5px 5px #0D3B66",
            display: "inline-block",
            width: "27%",
            height: 360,
            margin: "3px 5px",
            padding: "2px 5px",
            backgroundColor: "#FFFEFB"
        },
        submit: {
            border: "0.5px solid #0D3B66",
            borderRadius: 8,
            backgroundColor: "#2084E2",
            color: "#FFF",
            width: "40%",
            height: 40,
            marginTop: 20,
            fontSize: "large"
        },
        text: {
            color: "#0D3B66"
        }
    }
    return ( 
        <div className="packages" style={packageStyles.packages}>
            <h1 style={packageStyles.text}>Select the right Package for your business!</h1>

            <div className="package" id="freeTier" style={packageStyles.packageCard}>
                <h3>Free Tier</h3>
                <p>This is our free subscription tier that includes a few basic features.</p>
                <ul>
                    <li>Post 1 product to our beta testers</li>
                    <li>Available access to all testers</li>
                </ul>
                <button type="button" style={packageStyles.submit}>Select</button>
            </div>

            <div className="package" id="basicTier" style={packageStyles.packageCard}>
                <h3>Basic Tier</h3>
                <p>This is our basic subscription tier that includes ...</p>
                <ul>
                    <li>Post up to 5 product to our beta testers</li>
                    <li>Access to premium beta testers</li>
                    <li>+ Free Tier features</li>
                </ul>
                <button type="button" style={packageStyles.submit}>Select</button>
            </div>

            <div className="package" id="premiumTier" style={packageStyles.packageCard}>
                <h3>Premium Tier</h3>
                <p>This is our premium subscription tier that includes ...</p>
                <ul>
                    <li>Post unlimited amount of products to our beta testers</li>
                    <li>Alert system for testers</li>
                    <li>+ Basic Tier features</li>
                </ul>
                <button type="button" style={packageStyles.submit}>Select</button>
            </div>
        </div>
    );
}

export default Packages;