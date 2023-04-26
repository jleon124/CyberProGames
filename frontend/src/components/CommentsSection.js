import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setComments, setGameData } from '../state'
import SingleComment from './SingleComment'

const CommentsSection = ({ gameId, userId }) => {

  const dispatch = useDispatch()
  const comments = useSelector((state) => state.comments)

  const getComments = async () => {
    const response = await fetch(`http://localhost:3500/comment/${gameId}/comments`, {
      method: "GET",
    })
    const data = await response.json()
    if (response.ok) {
      dispatch(setComments({ comments: data }))
    }
    if (!response.ok) {
      dispatch(setComments([]))
    }
  }

  useEffect(() => {
    getComments()
  }, [])

  return (
    <>
      {!comments && (
        <div>No comments found</div>
      )}
      {comments && (
        <>
          {comments.map(
            ({
              _id,
              userId,
              gameId,
              username,
              profilePicture,
              content,
              likes,
              dislikes,
              createdAt
            }) => (
              <SingleComment
                key={_id}
                commentId={_id}
                commentUserId={userId}
                commendGameId={gameId}
                username={username}
                content={content}
                likes={likes}
                dislikes={dislikes}
                createdAt={createdAt}
              />
            )
          )}
        </>
      )}

    </>
  )

}

export default CommentsSection