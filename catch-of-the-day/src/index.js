// getting from module
// or written import { Component } from 'react';
import React from 'react';
// sometimes you only need some methods from module, i.e. render method
import { render } from 'react-dom';
// have to import component from path to use it (.js not needed)
import StorePicker from './components/StorePicker';


//////////////////////
// mounting app to the page
//////////////////////

// what to render, where to render it (i.e. empty div w ID of 'main')
render(<StorePicker />, document.querySelector('#main'));