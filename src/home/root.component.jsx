import React from "react";

function Home() {
    return (
        <div style={styles.container}>
            <h1>React</h1>
            <img src="http://www.nycresistor.com/wp-content/uploads/2016/03/React.js_logo.svg_.png" height="100" width="100"/>
        </div>
    )
}

const styles = {};
styles.container = {
    display: 'flex',
    flexFlow: 'column wrap',
    width: '100%',
    alignItems: 'center',
    border: '5px dashed blue',
    padding: '50px',
    boxSizing: 'border-box',
    marginBottom: '20px'
};

export default Home;
