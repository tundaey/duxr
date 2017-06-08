/**
 * Created by Tundaey on 5/22/2017.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Authenticate } from 'components'
import auth from 'helpers/auth';
import * as userActionCreators from 'redux/modules/users';

import { connect } from 'react-redux';
import {bindActionCreators} from 'redux'

const AuthenticateContainer = React.createClass({
    handleAuth(){
        this.props.fetchingUser()
        auth().then((user)=> {
            this.props.fetchingUserSuccess(user.uid, user, Date.now())
            this.props.authUser(user.uid)
                
        }).catch((error) => this.props.dispatch(userActionCreators.fetchingUserFailure(error)))
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
    authUser: PropTypes.func.isRequired,
    fetchingUser: PropTypes.func.isRequired,
    fetchingUserFailure: PropTypes.func.isRequired,
    fetchingUserSuccess: PropTypes.func.isRequired
}

function mapStateToProps(state){
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