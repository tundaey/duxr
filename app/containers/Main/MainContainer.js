/**
 * Created by Tundaey on 5/21/2017.
 */
import React from 'react';
import PropTypes from 'prop-types'
import { container, innerContainer} from './style.css'
import { Navigation } from 'components';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as userActionCreators from 'redux/modules/users'
import { formatUserinfo } from 'helpers/utils'
import { firebaseAuth }  from 'config/constants'

const MainContainer = React.createClass({
    componentDidMount(){
      firebaseAuth().onAuthStateChanged((user) => {
        if(user) {
          const userData = user.providerData[0];
          const userInfo = formatUserinfo(userData.displayName, userData.photoURL, userData.uid);
          this.props.authUser(user.uid);
          this.props.fetchingUserSuccess(user.uid, userInfo, Date.now())
          if(this.props.location.pathname === '/'){
            this.context.router.replace('feed')
          }
        }else{
          this.props.removeFetchingUser()
        }

      })
    },
    render(){
        return this.props.isFetching === true 
        ? null
        : <div className={container}>
             <Navigation isAuthed={this.props.isAuthed} />
             <div className={innerContainer}>
                 {this.props.children}
             </div>
           </div>
    }
})

MainContainer.propTypes = {
  isAuthed: PropTypes.bool.isRequired,
  authUser: PropTypes.func.isRequired,
  fetchingUserSuccess: PropTypes.func.isRequired
}

MainContainer.contextTypes = {
  router: PropTypes.object.isRequired
}

export default connect(
    (state)=> ({isAuthed: state.isAuthed, isFetching: state.isFetching}),
    (dispatch)=> bindActionCreators(userActionCreators, dispatch)
  )(MainContainer)