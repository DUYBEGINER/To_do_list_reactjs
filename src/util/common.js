import React from "react";


export function objectWithOnly(object, attrs){
    let newObject = {};

    attrs.forEach(attr => {
        newObject[attr] = object[attr].bind(object);

    });

    return newObject;
}

export function stringInclues(str, substr) {
    return str.indexOf(substr) !== -1;
}

export function wrapChildrenWith(children, props) {
    return React.Children.map(children, child => React.cloneElement(child, props));
}