
import React from 'react';
import {MODE_NONE, MODE_CREATE, MODE_SEARCH } from '../services/mode';

function ButtonWrapper(props) {
    const {mode, changeMode, deleteItemComplete} = props;
    const isCreateMode = () => mode === MODE_CREATE;
    const isSearchMode = () => mode === MODE_SEARCH;

    return (
        <div>
            <a titl="Add New"
            className={'button add ' + (isCreateMode() ? 'selected' : '')}
            onClick = { () => changeMode(isCreateMode() ? MODE_NONE : MODE_CREATE)}></a>
            <a title="Search"
            className={'button search ' + (isSearchMode() ? 'selected' : '')}
            onClick={() => changeMode(isSearchMode() ? MODE_NONE : MODE_SEARCH)}></a>
             <a title="Delete"
            className={'button delete '}
            onClick={() => deleteItemComplete()}></a>
        </div>
    );
}

export default ButtonWrapper;