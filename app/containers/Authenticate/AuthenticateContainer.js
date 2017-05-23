/**
 * Created by Tundaey on 5/22/2017.
 */
import React from 'react';
import { Authenticate } from 'components'
import auth from 'helpers/auth'

const AuthenticateContainer = React.createClass({
    handleAuth(){
        auth().then((user)=> {
            console.log('Authed User', user)
        })
    },
    render(){
        return (
            <div>
                <Authenticate
                    isFetching={false}
                    error=""
                    onAuth={this.handleAuth} />
            </div>
        )
    }
})

export default AuthenticateContainer