import React from 'react';
import TextField from '@material-ui/core/TextField';
import styles from './InputItem.module.css';
import Button from '@material-ui/core/Button';

class InputItem extends React.Component {
    state = {
        inputValue: ''
    }

    onButtonClick = () => {
        this.setState({
            inputValue: ''
        })
        this.props.onClickAdd(this.state.inputValue)
    }

    render() {
        const { onClickAdd } = this.props;
        const emptyField = this.props.empty;
        let inputField
        
        if (!emptyField) {
            inputField = <TextField 
            label="What needs to be done?"
            id="standard-full-width"
            margin="normal"
            size="normal"
            fullWidth
            value={this.state.inputValue}
            onChange={event => this.setState({ inputValue: event.target.value.toUpperCase() })}
            />
        } else {
            inputField = <TextField
            error
            id="standard-error"
            label="Please add the task."
            margin="normal"
            size="normal"
            fullWidth
            value={this.state.inputValue}
            onChange={event => this.setState({ inputValue: event.target.value.toUpperCase() })}
            />  
        }

        return (    
            <div className={styles.wrap}>
               { inputField } 
                <Button 
                    color="secondary"
                    variant="outlined"
                    onClick={this.onButtonClick}  
                >
                    Add the task
                </Button>
            </div>
        )
    }
}


export default InputItem;