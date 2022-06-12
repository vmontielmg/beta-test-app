function Packages() {
    const packageStyles = {
        packages: {
            display: "inline-block",
            width: "100%"
        },
        packageCard: {
            border: '1px solid #000',
            borderRadius: 50,
            display: "inline-block",
            width: "25%",
            height: "20%"
        }
    }
    return ( 
        <div className="packages" style={packageStyles.packages}>
            <h1>Select the right Package for your business!</h1>

            <div className="package" id="freeTier" style={packageStyles.packageCard}>
                <h3>Free Tier</h3>
                <p>This is our free subscription tier that includes a few basic features.</p>
                <ul>
                    <li>1 product</li>
                    <li>access to post product...?</li>
                    <li>...?</li>
                </ul>
                <button type="button">Select</button>
            </div>

            <div className="package" id="basicTier" style={packageStyles.packageCard}>
                <h3>Basic Tier</h3>
                <p>This is our basic subscription tier that includes ...</p>
                <ul>
                    <li>Up to 5 products</li>
                    <li>access to post product...?</li>
                    <li>access to premium beta testers</li>
                </ul>
                <button type="button">Select</button>
            </div>

            <div className="package" id="premiumTier" style={packageStyles.packageCard}>
                <h3>Premium Tier</h3>
                <p>This is our premium subscription tier that includes ...</p>
                <ul>
                    <li>Unlimited products</li>
                    <li>access to post product...?</li>
                    <li>access to premium beta testers</li>
                    <li>Alert system for testers?</li>
                    <li>Something else!</li>
                </ul>
                <button type="button">Select</button>
            </div>
        </div>
    );
}

export default Packages;