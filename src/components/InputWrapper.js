import React from "react";
import InputBox from "./InputBox";
import { MODE_CREATE, MODE_SEARCH } from "../services/mode";
import SearchBox from './SearchBox';

//KIẾN THỨC REDUCER TRONG REDUX
export default function InputWrapper(props){
    const {mode , addNew, query, setSearchQuery} = props;
    // eslint-disable-next-line default-case
    switch (mode){
        case MODE_CREATE:
            return <InputBox {...{addNew}}/>;
        case MODE_SEARCH:
            return <SearchBox {...{query, setSearchQuery}}/>;
        default :
            return null;
            
    }
}