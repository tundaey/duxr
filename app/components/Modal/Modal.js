import React from 'react';
import PropTypes from 'prop-types'
import {default as ReactModal} from 'react-modal';
import { formatDuck } from 'helpers/utils'
import {
    newDuckTop, pointer, newDuckInputContainer, newDuckInput,
    submitDuckBtn, darkBtn
} from './styles.css';

const modalStyles = {
    content: {
        width: 350,
        margin: '0px auto',
        height: 200,
        borderRadius: 5,
        background: '#EBEBEB',
        padding: 0
    }
}

export default function Modal(props){
    function submitDuck(){
        console.log('Duck', props.duckText);
        console.log('User', props.user);
        props.duckFanOut(formatDuck(props.duckText, props.user))
    }

    return (
        <span className={darkBtn} onClick={props.openModal}>
            {'Duck'}
            <ReactModal style={modalStyles} contentLabel={'New Duck'} isOpen={props.isOpen} onRequestClose={props.closeModal}>
                <div className={newDuckTop}>
                    <span>{'Compose new Duck'}</span>
                    <span onClick={props.closeModal} className={pointer}>{'X'}</span>
                </div>

                <div className={newDuckInputContainer}>
                    <textarea
                        onChange={(e)=> {props.updateDuckText(e.target.value)}} 
                        value={props.duckText}
                        maxLength={140}
                        type="text"
                        className={newDuckInput}
                        placeholder="Whats on your mind?"
                    />
                </div>
                <button 
                    className={submitDuckBtn}
                    onClick={submitDuck}
                    disabled={props.isSubmitDisabled}> {'Duck'} </button>
            </ReactModal>
        </span>
    )
}

const {object, string, bool, func} = PropTypes
Modal.propTypes = {
    duckText: string.isRequired,
    isOpen: bool.isRequired,
    user: object.isRequired,
    openModal: func.isRequired,
    closeModal: func.isRequired,
    updateDuckText: func.isRequired,
    isSubmitDisabled: bool.isRequired,
    duckFanOut: func.isRequired
}