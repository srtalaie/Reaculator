import React from 'react';
import { createStore, combineReducers } from 'redux';
import reducers from '../reducers/index.js';

export const store = createStore(
    combineReducers({
        state: reducers
    })
);