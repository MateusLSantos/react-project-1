/*
Person Component

@author  Mateus Lins

This Component represents the characteristics of a person.

*/

import React from 'react';

const person = () => {
    return <p>I'm a person and I am {Math.floor(Math.random() * 30)} years old.</p>
};

export default person;