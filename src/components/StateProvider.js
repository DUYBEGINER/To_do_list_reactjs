import React, {Component} from 'react';
import {FILTER_ALL} from '../services/filter';
import {objectWithOnly, wrapChildrenWith} from '../util/common';
import {getAll, addToList, updateStatus, deleteToList} from '../services/todo';
import { MODE_CREATE, MODE_NONE } from '../services/mode';

class StateProvider extends Component {
    constructor() {
        super();
        this.state = {
            query: '',
            mode: MODE_NONE,
            filter: FILTER_ALL,
            list: getAll()
        }
    }
    render() {
        let children = wrapChildrenWith(this.props.children, {
            data: this.state,
            actions: objectWithOnly(this, ['addNew', 'changeFilter', 'changeStatus', 'changeMode', 'setSearchQuery', 'deleteItemComplete'])
        });
        return <div>{children}</div>;
    }
    addNew(text) {
        let updatedList = addToList(this.state.list, {text, completed: false});
        this.setState({list: updatedList})
    }
    changeFilter(filter) {
        this.setState({filter});
    }
    changeStatus(itemId, completed) {
        const updatedList = updateStatus(this.state.list, itemId, completed);
        this.setState({list: updatedList});
    }

    changeMode(mode = MODE_NONE) {
        this.setState({mode});
    }

    setSearchQuery(text) {
        this.setState({query: text || ''});
    }

    deleteItemComplete(){
        const updateList = deleteToList(this.state.list);
        this.setState({list: updateList})
    }

}
export default StateProvider;