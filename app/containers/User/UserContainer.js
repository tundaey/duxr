import React from 'react' 
import PropTypes from 'prop-types' 
import { User } from 'components'
import {connect} from 'react-redux'

import {bindActionCreators} from 'redux'

import * as usersActionCreators from 'redux/modules/users'
import * as usersDucksActionCreators from 'redux/modules/userDucks'

import {staleUser, staleDucks} from 'helpers/utils'



 class UserContainer extends React.Component {

    componentDidMount(){
        const uid = this.props.routeParams.uid
        if(this.props.noUser === true || staleUser(this.props.lastUpdatedUser)){
            console.log('stale user')
            this.props.fetchAndHandleUser(uid)
        }

        if(this.props.noUser === true || staleDucks(this.props.lastUpdatedDucks)){
            console.log('stale ducks')
            this.props.fetchAndHandleUsersDucks(uid)
        }
        
        
    }

    render () {
        return (
            <User
            noUser={this.props.noUser}
            name={this.props.name}
            isFetching={this.props.isFetching}
            error={this.props.error}
            duckIds={this.props.duckIds}/>
        )
    }
}

UserContainer.propTypes = {
    noUser: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    isFetching: PropTypes.bool.isRequired,
    error: PropTypes.string.isRequired,
    duckIds: PropTypes.array.isRequired,
    fetchAndHandleUser: PropTypes.func.isRequired,
    fetchAndHandleUsersDucks: PropTypes.func.isRequired,
    lastUpdatedUser : PropTypes.number.isRequired,
    lastUpdatedDucks: PropTypes.number.isRequired
}

function mapStateToProps({users, userDucks}, props){
    
    const user = users[props.routeParams.uid]
    const specificUsersDucks = userDucks[props.routeParams.uid]
    console.log('user ducks', specificUsersDucks)
    const noUser= typeof user === 'undefined'
    return {
        noUser,
        name : noUser ? '' : user.info.name,
        isFetching: users.isFetching || userDucks.isFetching,
        error: users.error || userDucks.error,
        duckIds: specificUsersDucks ? specificUsersDucks.duckIds : [],
        lastUpdatedUser: user ? user.lastUpdated : 0,
        lastUpdatedDucks: specificUsersDucks ? specificUsersDucks.lastUpdated : 0
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({...usersActionCreators, ...usersDucksActionCreators}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)