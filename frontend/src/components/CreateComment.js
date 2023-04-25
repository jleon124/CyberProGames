import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { setComments, setGameData, updateUser } from "../state";

const CreateComment = ({ user, game }) => {

  const dispatch = useDispatch()
  const [comment, setComment] = useState("")
  const onCommentChanged = e => setComment(e.target.value)
  const token = useSelector((state) => state.token)

  const createComment = async (content) => {
    const response = await fetch(`http://localhost:3500/comment/new-comment`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ userId: user._id, gameId: game._id, content: content })
    })
    const result = await response.json()
    dispatch(
      updateUser({
        user: result.user
      }),
      setGameData({
        game: result.game
      }),
      setComments({
        comments: result.comment
      })
    )
    setComment("")
    setGameComments()
  }

  const setGameComments = async () => {
    const response = await fetch(`http://localhost:3500/comment/64446517836062ea7c5bc61f/comments`, {
      method: 'GET',
    })
    const commentData = await response.json()
    if (commentData) {
      dispatch(
        setComments({
          comments: commentData
        })
      )
    }
  }

  const onCreateComment = async (e) => {
    e.preventDefault()

    createComment(comment)
  }

  return (
    <div className="bg-orange-600">
      <div>User Image</div>
      <form id="commentForm" onSubmit={onCreateComment}>
        <textarea
          form="commentForm"
          onChange={onCommentChanged}
          value={comment}
          placeholder="Your comment goes here..."
          rows={2}
          cols={50}
          maxLength={150}
          className="resize-none"
        ></textarea>
        <button
          disabled={!comment}
          type="submit"
          className="bg-slate-500 text-white"
        >
          Comment
        </button>
      </form>
    </div>
  )

}

export default CreateComment