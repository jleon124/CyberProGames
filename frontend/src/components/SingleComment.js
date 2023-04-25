import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setComment, setGameData, updateUser } from '../state'

const SingleComment = ({
  commentId,
  commentUserId,
  commentGameId,
  username,
  profilePicture,
  content,
  likes,
  dislikes,
  createdAt
}) => {

  const dispatch = useDispatch()
  const token = useSelector((state) => state.token)
  const loggedUser = useSelector((state) => state.user)
  // const isLiked = Boolean(likes[loggedUser._id])
  // const likeCount = Object.keys(likes).length

  const patchLike = async () => {
    const response = await fetch(`http://localhost:3500/comment/${commentId}/liketoggle`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ userId: loggedUser._id, gameId: commentGameId })
    })
    const updatedComment = await response.json()
    dispatch(
      updateUser({
        user: updatedComment.user
      }),
      setGameData({
        game: updatedComment.game
      }),
      setComment({
        comment: updatedComment.comment
      })
    )
  }

  return (
    <div>
      <div>
        ProfilePic: {profilePicture}
      </div>
      <div>
        Username: {username}
      </div>
      <div>
        Comment: {content}
      </div>
      <div>
        Created: {createdAt}
      </div>
      {/* {isLiked ? (<h1>True</h1>) : (<h1>False</h1>)} */}
      <div>
        {/* Like Count: {likeCount} */}
      </div>
    </div>
  )

}

export default SingleComment