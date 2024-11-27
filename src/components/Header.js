import React from "react";

import InputWrapper from "./InputWrapper";


function Header(props) {

    return (
        <header>
        <h1>Thing to Do</h1>
            <InputWrapper {...props}/>
        </header>
    );
}

export default Header;