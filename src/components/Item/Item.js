import React from 'react';
import classnames from 'classnames';
import styles from './Item.module.css'
import PropTypes from 'prop-types'


const Item = ({ value, isDone }) => (<span className={
    classnames({
        [styles.item]: true,
        [styles.done]: isDone
    })
}>{ value }</span>);

Item.defaultProps = {
    value: 'task not found',
    isDone: false
};

Item.propTypes = {
    value: PropTypes.string.isRequired,
    isDone: PropTypes.bool.isRequired
};

export default Item; 

