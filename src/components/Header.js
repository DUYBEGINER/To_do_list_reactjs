import React from "react";
import InputBox from "./InputBox";


function Header(props) {

    return (
        <header>
        <h1>Thing to Do</h1>
        <InputBox addNew = {props.addNew}/>
        </header>
    );
}

export default Header;