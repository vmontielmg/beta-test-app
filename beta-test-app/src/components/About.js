function About() {
    const styles = {
        title: {
            color: "#0D3B66"
        },
        about: {
            border: '1px solid #000',
            borderRadius: 30,
            boxShadow: "-1px 5px 5px #0D3B66",
            display: "inline-block",
            width: "70%",
            height: 230,
            margin: 3,
            marginTop: "10%",
            padding: 5,
            backgroundColor: "#FFFEFB"
        }
    }

    return (
        <div className="about" style={styles.about}>
            <h1 style={styles.title}>About us</h1>
            <p>
            AccPower is a website that connects companies with beta testers comprised of marginalised members of society that could potentially be their customer. <br />
            Our app differs from the rest because our focus is on digital accessibility!
            </p>
        </div>
    );
}


export default About;