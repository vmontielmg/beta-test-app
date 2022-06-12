function handleClick() {
    console.log("apply button clicked!");
}

function Product() {
    const productStyle = {
        position: "absolute",
        width: 750,
        height: 20,
        textAlign: "left",
        marginBottom: 50,
        padding: 1
    };

    return (
        <div>
            <div className="product" style={productStyle}>
                <h3 className="projectName">Project name</h3>
                <h4 className="companyName">Company</h4>
                <p className="productDescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <div className="labelsContainer">

                </div>
            </div>
            {/* <button id="apply" onSubmit={()=>this.apply()} type="button">Apply</button> */}
            <button id="apply" onSubmit={handleClick} type="button">Apply</button>
        </div>
        
    );
}



export default Product;