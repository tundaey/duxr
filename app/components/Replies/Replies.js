import React from 'react' 
import PropTypes from 'prop-types' 

import {
  avatar, replyContainer, header,
  cushion, center, author } from './styles.css'
import { formatTimeStamp } from 'helpers/utils'
import { errorMsg, subHeader } from 'sharedStyles/styles.css'

function Reply ({comment}) {
  return (
    <div className={replyContainer}>
      <img src={comment.avatar} alt={comment.name} className={avatar} />
      <div>
        <div className={author}>{comment.name}</div>
        <div className={cushion}>{formatTimeStamp(comment.timestamp)}</div>
        <div className={cushion}>{comment.reply}</div>
      </div>
    </div>
  )
}

export default function Replies ({isFetching, error, replies}) {
    console.log('isFetching', isFetching)
    const replyIds = Object.keys(replies)
    return (
        <div>
            {error ? <h3 className={errorMsg}>{error}</h3>: null}
            {isFetching === true 
            ? <p className={subHeader}>{'Fetching Replies'}</p>
            : <div>
                <h1 className={header}>{'Replies'}</h1>
                {replyIds.map((replyId)=> (
                    <Reply key={replyId} comment={replies[replyId]}/>
                ))}
            </div>}
        </div>
    )
}

Replies.propTypes = {
    isFetching: PropTypes.bool.isRequired,
    error: PropTypes.string.isRequired,
    replies: PropTypes.object
}