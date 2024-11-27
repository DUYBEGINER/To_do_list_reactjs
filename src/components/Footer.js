import React from 'react';
import Filter from './Filter';
import {MODE_CREATE, MODE_SEARCH} from './../services/mode';
import ButtonWrapper from './ButtonWrapper';

function Footer(props) {

    const {count, filter, changeFilter, deleteItemComplete} = props;

    return (
        <div className='todo-footer clearfix'>
            <div className="pull-left buttons">
                <ButtonWrapper {...props}/>
            </div>

            <div className="pull-left">
                {`${count} items left`}
            </div>
            <div className="pull-right">
                <Filter {...{filter, changeFilter}}/>
            </div>
        </div>
    );
}

export default Footer;