import React from 'react';
import classnames from 'classnames';
import styles from './Item.module.css'
import PropTypes from 'prop-types'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import Favorite from '@material-ui/icons/Favorite';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import IconButton from '@material-ui/core/IconButton';

class Item extends React.Component {

    componentDidMount() {
        this.timerID = setInterval(() => console.log('memory leak'), 1000);
    };

    componentDidUpdate() {
        console.log('componentDidUpdate');
    };
    
    componentWillUnmount() {
        clearInterval(this.timerID)
    };

    render() {
        const { value, isDone, onClickDone, id, onClickDelete} = this.props;
        return (

            <div className={styles.wrap}>
                <FormControlLabel
                control={
                <Checkbox 
                checked={isDone}
                color="secondary"
                icon={<FavoriteBorder />} 
                checkedIcon={<Favorite />} 
                onClick={() => onClickDone(id)}
                />
                }
                label={<span className={
                    classnames({
                        [styles.item]: true,
                        [styles.done]: isDone
                    })
                }>{ value }</span>}
                />

                <div onClick={() => onClickDelete(id)}>
                    <IconButton aria-label='delete' >
                    <DeleteOutlinedIcon fontSize='small' />
                    </IconButton>
                </div>
            </div>   
        )
    }   
}

Item.defaultProps = {
    value: 'task not found',
    isDone: false
};

Item.propTypes = {
    value: PropTypes.string.isRequired,
    isDone: PropTypes.bool.isRequired
};

export default Item; 

