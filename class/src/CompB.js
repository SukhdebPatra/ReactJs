import React  from "react";

function CompB(props){

    return (
        <>
        <h2>component B</h2>
        <pre>{JSON.stringify(this.props)}</pre>

        <h2>property 1:{props.props1}</h2>
        <h2>property 2:{props.props2}</h2>
        </>
    )
};

export default CompB