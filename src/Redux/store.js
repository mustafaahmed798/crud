import {configureStore} from '@reduxjs/toolkit';
import  crudSlice  from './crudSlice';

const store = configureStore({
    reducer :{
        crud : crudSlice
    }
});

export default store ;