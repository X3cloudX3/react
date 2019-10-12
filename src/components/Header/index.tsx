import React from 'react';


export default function Header(props: any) {
    const restrictedStyle = { backgroundColor: "black", border: "solid 1px black", color: "white", height: "70px", margin: "0" }
    const { title = {} } = props;


    return <div>
        <h1 style={restrictedStyle}> {title} </h1>
    </div>
}