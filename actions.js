/**
 * Created by Tundaey on 5/19/2017.
 */
//Users
{
    type: AUTH_USER,
    uid
}

{
    type: UNAUTH_USER
}

{
    type: FETCHING_USER
}

{
    type: FETCHING_USER_FAILURE,
    error: 'Error fetching user'
}

{
    type: FETCHING_USER_SUCCESS,
    uid,
    user,
    timestamp
}

//Ducks
{
    type: FETCHING_DUCK
}

{
    type: FETCHING_DUCK_ERROR,
    error: 'Error fetching duck'
}

{
    type: FETCHING_DUCK_SUCCESS,
    duck
}

{
    type: REMOVE_FETCHING
}

{
    type: ADD_DUCK,
    duck
}

{
    type: ADD_MULTIPLE_DUCKS,
    ducks
}

//Feed
{
    type: SETTING_FEED_LISTENER
}

{
    type: SETTING_FEED_LISTENER_ERROR,
    error: 'Error Fetching Feeds'
}

{
    type: SETTING_FEED_LISTENER_SUCCESS,
    duckIds
}
{
    type: ADD_NEW_DUCKID_TO_FEED,
    duckId
}

{
    type: RESET_NEW_DUCKS_AVAILABLE
}

{
    type: ADD_LISTENER,
    listenerId
}

//Modal
{
    type: OPEN_MODAL
}

{
    type: CLOSE_MODAL
}

{
    type: UPDATE_DUCK_TEXT,
    newDuckText
}

//Replies
{
    type: FETCHING_REPLIES
}

{
    type: FETCHING_REPLIES_ERROR,
    error: 'Error fetching replies'
}

{
    type: FETCHING_REPLIES_SUCCESS,
    replies,
    duckId,
    lastUpdated: Date.now()
}

{
    type: ADD_REPLY,
    duckId,
    reply
}

{
    type: ADD_REPLY_ERROR,
    error: 'Error adding reply'
}

{
    type: REMOVE_REPLY,
    replyId,
    duckId
}

//likeCount
{
    type: FETCHING_COUNT
}

{
    type: FETCHING_COUNT_ERROR,
    error: 'Error fetching the duck like count'
}

{
    type: FETCHING_COUNT_SUCCESS,
    duckId,
    count
}

//Users Ducks

{
    type: FETCHING_USERS_DUCKS
    uid
}

{
    type: FETCHING_USERS_DUCKS_ERROR,
    error: 'Error fetching Users Duck Ids'
}

{
    type: FETCHING_USERS_DUCKS_SUCCESS,
    uid,
    duckIds,
    lastUpdated
}

{
    type: ADD_SINGLE_USERS_DUCK,
    uid,
    duckIds,
    lastUpdated
}

//Users Likes
{
    type: FETCHING_LIKES
}

{
    type: FETCHING_LIKES_ERROR,
    error: 'Error fetching likes'
}

{
    type: FETCHING_LIKES_SUCCESS,
    likes
}

{
    type: ADD_LIKE,
    duckId
}

{
    type: REMOVE_LIKE ,
    duckId
}

























