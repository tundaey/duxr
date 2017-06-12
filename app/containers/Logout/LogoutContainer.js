import React from 'react'
import PropTypes from 'prop-types'
import { Logout } from 'components'
import { logoutAndUnauth } from 'redux/modules/users'

import {connect} from 'react-redux'

const LogoutContainer = React.createClass({
	componentDidMount() {
		this.props.dispatch(logoutAndUnauth())
	},
	render() {
		return (
			<Logout/>
		)
	}
})

LogoutContainer.propTypes = {
	dispatch: PropTypes.func.isRequired
}

export default connect()(LogoutContainer)