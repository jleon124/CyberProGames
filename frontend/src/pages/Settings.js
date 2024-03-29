import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setLogout, updateUser } from '../state'
import { Link, useNavigate } from 'react-router-dom'
import ProfilePicture from '../components/ProfilePicture'

const Account = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const token = useSelector((state) => state.token)
  const user = useSelector((state) => state.user)

  // profile picture
  const [picture, setPicture] = useState('')
  const onPicChanged = e => setPicture(e.target.value)

  const updatePic = async (pic) => {
    const updatedPicResponse = await fetch(`https://cyber-pro-games-backend.vercel.app/user/${user._id}/editPicture`, {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ profilePicture: pic })
    })

    const newPic = await updatedPicResponse.json()

    if (newPic) {
      dispatch(
        updateUser({
          user: newPic.user
        })
      )
    }
  }

  const onChosenPic = async (e) => {
    e.preventDefault()

    updatePic(picture)
  }

  // description
  const [description, setDescription] = useState('')
  const onDescriptionChanged = e => setDescription(e.target.value)

  const updateDes = async (des) => {
    const updatedDesResponse = await fetch(`https://cyber-pro-games-backend.vercel.app/user/${user._id}/editDescription`, {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ description: des })
    })

    const newDes = await updatedDesResponse.json()

    if (newDes) {
      dispatch(
        updateUser({
          user: newDes.user
        })
      )
    }
  }

  const onChosenDes = async (e) => {
    e.preventDefault()

    updateDes(description)
  }

  const [oldPassword, setOldPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const onOldPwdChange = e => setOldPassword(e.target.value)
  const onNewPwdChange = e => setNewPassword(e.target.value)

  const updatePwd = async (oldPwd, newPwd) => {
    const updatedPwdResponse = await fetch(`https://cyber-pro-games-backend.vercel.app/user/${user._id}/editPassword`, {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ oldPassword: oldPwd, newPassword: newPwd })
    })

    const changedPwd = await updatedPwdResponse.json()

    if (changedPwd) {
      dispatch(
        updateUser({
          user: changedPwd.user
        })
      )
    }
  }

  const onChangePassword = async (e) => {
    e.preventDefault()

    updatePwd(oldPassword, newPassword)
  }


  // delete
  const deleteAcc = async () => {
    const deletedResponse = await fetch(`https://cyber-pro-games-backend.vercel.app/user/${user._id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
    })

    const deletedData = await deletedResponse.json()

    if (deletedData) {
      dispatch(
        setLogout()
      )
    }
    navigate('/')
  }

  return (
    <main className='bg-[linear-gradient(to_bottom,#050b13,#11131e,#1c1727,#2b192e,#3c1b30,#431a2f,#4a192c,#511929,#511627,#501324,#501022,#4f0c1f)]'>

      <h1 className="about_title_page text-5xl text-[yellow] font-[bolder] ml-[100px] pt-[70px]">CyberProGames</h1>
      <br></br><br></br>

      <div className='clear-box2' data-aos="fade-right" >
        <h1 className='setting-headers text-[40px] text-[rgba(255,255,255,0.4)] ml-[50px] mt-[100px] mb-5'>Description</h1>
        <h2 className="text-[rgba(26,250,141,255)] text-[25px] ml-[50px]">Change Description</h2>

        <form onSubmit={onChosenDes} id='desform' className='ml-11'>
          <textarea form='desform' onChange={onDescriptionChanged} value={description} className='resize-none bg-black/30 text-white ' placeholder={user.description} rows={4} cols={50} maxLength={160}></textarea>
          <button type='submit' className='flex text-[rgba(88,221,229,255)] mt-5 bg-black h-[40px] w-[150px] border-[3px] border-[rgba(88,221,229,255)]'>Change Description</button>
        </form>
      </div>

      <div className="clear-box2" data-aos="fade-right" >
        <h1 className="setting-headers text-[40px] text-[rgba(255,255,255,0.4)] ml-[50px] mt-[100px] mb-5">Security</h1>
        <h2 className="text-[rgba(26,250,141,255)] text-[25px] ml-[50px]">Change Password</h2>
        <form className="ml-[50px]" onSubmit={onChangePassword}>
          <input className="inputEntry-settings bg-black/30 text-white" onChange={onOldPwdChange} value={oldPassword} placeholder='Old Password'></input>
          <input className="inputEntry-settings flex bg-black/30 text-white" onChange={onNewPwdChange} value={newPassword} placeholder='New Password'></input>
          <button type='submit' className='flex text-[rgba(88,221,229,255)] mt-5 bg-black h-[40px] w-[140px] border-[3px] border-[rgba(88,221,229,255)]'>Change Password</button>
        </form>
      </div>


      <div className="clear-box2" data-aos="fade-right" >
        <h1 className="setting-headers text-[40px] text-[rgba(255,255,255,0.4)] ml-[50px] mt-[100px] mb-5">Profile Picture</h1>
        <p className="choose-img-text">Choose a image</p>
        <ProfilePicture picNum={user.profilePicture} height={200} width={200} className={'absolute ml-40 mt-12'} alt={'userpp'}/>

        <form onSubmit={onChosenPic} className="pic-container grid grid-cols-[auto_auto_auto] gap-x-[50px] gap-y-5 ml-[500px] mt-20">
          <button onClick={onPicChanged} type='submit' name='option1' value={1} className='bg-defaulticon h-[100px] w-[100px] bg-no-repeat bg-cover bg-center'
          >
          </button>
          <button onClick={onPicChanged} type='submit' name='option2' value={2} className='bg-eyeicon h-[100px] w-[100px] bg-no-repeat bg-cover bg-center'
          >
          </button>
          <button onClick={onPicChanged} type='submit' name='option3' value={3} className='bg-glassesicon h-[100px] w-[100px] bg-no-repeat bg-cover bg-center'
          >
          </button>
          <button onClick={onPicChanged} type='submit' name='option4' value={4} className='bg-grizicon h-[100px] w-[100px] bg-no-repeat bg-cover bg-center'
          >
          </button>
          <button onClick={onPicChanged} type='submit' name='option5' value={5} className='bg-imgicon h-[100px] w-[100px] bg-no-repeat bg-cover bg-center'
          >
          </button>
          <button onClick={onPicChanged} type='submit' name='option6' value={6} className='bg-maskicon h-[100px] w-[100px] bg-no-repeat bg-cover bg-center'
          >
          </button>
          <button onClick={onPicChanged} type='submit' name='option7' value={7} className='bg-angyicon h-[100px] w-[100px] bg-no-repeat bg-cover bg-center'
          >
          </button>
        </form>
      </div>

      <div className='clear-box2' data-aos="fade-right" >
        <h1 className="setting-headers text-[40px] text-[rgba(255,255,255,0.4)] ml-[50px] mt-[100px] mb-5">Account Deletion</h1>
        <div className='save-changes h-[60px] w-[110px] bg-black text-[rgba(88,221,229,255)] text-center ml-[50px] border-[3px] border-[rgba(88,221,229,255)] py-3 '>
          <Link to="/" onClick={() => deleteAcc(user)}>Click to Delete</Link>
        </div>
        
      </div>

      <br></br><br></br><br></br><br></br><br></br><br></br><br></br>

    </main>
  )

}

export default Account