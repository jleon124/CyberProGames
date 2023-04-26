import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setComment, setGameData, updateUser } from '../state'
import ProfilePicture from './ProfilePicture'

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

  const formatDate = createdAt.slice(0, 10)

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
      <div className='flex'>
        <ProfilePicture alt={'otheruser'} src={profilePicture} height={70} width={70} />
        <div className='flex flex-col'>
          <p>{username}</p>
          <p>{content}</p>
          <p>Posted on: {formatDate}</p>
        </div>
      </div>
    </div>
  )

}

export default SingleComment