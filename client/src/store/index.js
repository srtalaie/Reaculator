import React from 'react';
import { createStore, combineReducers } from 'redux';
import reducer from '../reducers/index.js';

export const store = createStore(
    combineReducers({reducer})
);