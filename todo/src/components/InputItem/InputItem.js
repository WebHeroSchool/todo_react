import React from 'react';
import TextField from '@material-ui/core/TextField';
import styles from './InputItem.module.css';


const InputItem = () => (<div>
    <TextField 
    label="What needs to be done?"
    id="standard-full-width"
    margin="normal"
    fullWidth
    />
</div>);

export default InputItem;