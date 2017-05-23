/**
 * Created by Tundaey on 5/23/2017.
 */
import React from 'react';
import PropTypes from 'prop-types';

import {button} from './styles.css'

export default function FacebookAuthButton({onAuth, isFetching}){
    return (
        <button className={button} onClick={onAuth}>
            {isFetching ===  true
                ? 'Loading'
                : 'Login with Facebook'
            }
        </button>
    )
}

FacebookAuthButton.propTypes = {
    onAuth: PropTypes.func.isRequired,
    isFetching: PropTypes.bool.isRequired
}