import React from 'react'
import PropTypes from 'prop-types'
import {Duck} from 'components'
import {bindActionCreators} from 'redux'
import * as usersLikesActions from 'redux/modules/usersLikes'

import {connect} from 'react-redux'


const DuckContainer = React.createClass({
    render(){
        return (
            <Duck
            goToProfile={this.goToProfile}
            onClick={this.props.hideReplyBtn === true ? null : this.handleClick}
            duck={this.props.duck}
            numberOfLikes={this.props.numberOfLikes}
            isLiked={this.props.isLiked}
            hideLikeCount={this.props.hideLikeCount}
            hideReplyBtn={this.props.hideReplyBtn}
            handleDeleteLike={this.props.handleDeleteLike}
            addAndHandleLike= {this.props.addAndHandleLike}/>
        )
    },

    goToProfile(e){
        e.stopPropagation()
        this.context.router.push('/' + this.props.duck.uid)
    },

    handleClick(e){
        e.stopPropagation()
        this.context.router.push('/duckDetail/' + this.props.duck.duckId)
    },

    getDefaultProps(){
        return {
            hideLikeCount: false,
            hideReplyBtn: false
        }
    },
    
    contextTypes: {
        router: PropTypes.object.isRequired
  },
})

const { object, func, bool, number} = PropTypes;

DuckContainer.propTypes = {
    duck: object.isRequired,
    numberOfLikes: number,
    isLiked: bool.isRequired,
    hideLikeCount: bool.isRequired,
    hideReplyBtn: bool.isRequired,
    handleDeleteLike : func.isRequired,
    addAndHandleLike: func.isRequired
}

DuckContainer.contextTypes = {
    router: object.isRequired
}

function mapStateToProps({ducks, likeCount, usersLikes}, props){
    return {
        duck: ducks[props.duckId],
        hideLikeCount: props.hideLikeCount,
        hideReplyBtn: props.hideReplyBtn,
        isLiked: usersLikes[props.duckId] === true,
        numberOfLikes: likeCount[props.duckId]
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators(usersLikesActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(DuckContainer);