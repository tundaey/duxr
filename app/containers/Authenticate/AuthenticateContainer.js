/**
 * Created by Tundaey on 5/22/2017.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Authenticate } from 'components'
import * as userActionCreators from 'redux/modules/users';

import { connect } from 'react-redux';
import {bindActionCreators} from 'redux'

const AuthenticateContainer = React.createClass({
    handleAuth(){
        this.props.fetchAndHandleAuthedUser()
    },
    render(){
        return (
            <div>
                <Authenticate
                    isFetching={this.props.isFetching}
                    error={this.props.error}
                    onAuth={this.handleAuth} />
            </div>
        )
    }
})

AuthenticateContainer.propTypes = {
    isFetching: PropTypes.bool.isRequired,
    error: PropTypes.string.isRequired,
    fetchAndHandleAuthedUser: PropTypes.func.isRequired
}

function mapStateToProps(state){
    console.log('STATE', state)
    return {
        isFetching: state.isFetching,
        error: state.error
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators(userActionCreators, dispatch)
}

export default connect(
    mapStateToProps, 
    mapDispatchToProps)(AuthenticateContainer)