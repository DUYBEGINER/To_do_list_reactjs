import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { applyFilter, search} from '../services/filter';
import FilteredList from './FilteredList';




export default function TodoList(props) {
    const {list, filter, mode, query} = props.data;
    const {addNew, changeFilter, changeStatus, changeMode, setSearchQuery, deleteItemComplete} = props.actions;
    const count = list.length;
    const items = search(applyFilter(list, filter), query);
    

    return (
        <div className="todolist">
            <Header {...{addNew, mode, query, setSearchQuery}}/>
            <FilteredList {...{items, changeStatus}}/>
            <Footer {...{count, filter, changeFilter, mode, changeMode, deleteItemComplete}}/>
        </div>
    );
}

