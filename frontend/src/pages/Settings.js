import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setLogout, updateUser } from '../state'
import { Link, useNavigate } from 'react-router-dom'

const Account = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const token = useSelector((state) => state.token)
  const user = useSelector((state) => state.user)

  // profile picture
  const [picture, setPicture] = useState('')
  const onPicChanged = e => setPicture(e.target.value)

  const updatePic = async (pic) => {
    const updatedPicResponse = await fetch(`http://localhost:3500/user/${user._id}/editPicture`, {
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

  const showProfilePicture = (user) => {
    switch (user.profilePicture) {
      case 1:
        return 'profilepictures/default_profilepic.png'
      case 2:
        return 'profilepictures/eye_profile.png'
      case 3:
        return 'profilepictures/glasses_profile.png'
      case 4:
        return 'profilepictures/griz_profile.png'
      case 5:
        return 'profilepictures/img_profile.png'
      case 6:
        return 'profilepictures/mask_profilepic.png'
      case 7:
        return 'profilepictures/angy_profilepic.png'
      default:
        return 'profilepictures/default_profilepic.png'
    }
  }

  // description
  const [description, setDescription] = useState('')
  const onDescriptionChanged = e => setDescription(e.target.value)

  const updateDes = async (des) => {
    const updatedDesResponse = await fetch(`http://localhost:3500/user/${user._id}/editDescription`, {
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
    const updatedPwdResponse = await fetch(`http://localhost:3500/user/${user._id}/editPassword`, {
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
  const deleteAcc = async (theuser) => {
    const deletedResponse = await fetch(`http://localhost:3500/user/${user._id}`, {
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

      <div className='clear-box2'>
        <h1 className='setting-headers text-[40px] text-[rgba(255,255,255,0.4)] ml-[50px] mt-[100px] mb-5'>Description</h1>
        <h2 className="text-[rgba(26,250,141,255)] text-[25px] ml-[50px]">Change Description</h2>

        <form onSubmit={onChosenDes} id='desform'>
          <textarea form='desform' onChange={onDescriptionChanged} value={description} className='resize-none' placeholder={user.description} rows={4} cols={50} maxLength={160}></textarea>
          <button type='submit' className='bg-slate-500 text-white mt-5 ml-5'>Change Description</button>
        </form>
      </div>

      <div className="clear-box2">
        <h1 className="setting-headers text-[40px] text-[rgba(255,255,255,0.4)] ml-[50px] mt-[100px] mb-5">Security</h1>
        <h2 className="text-[rgba(26,250,141,255)] text-[25px] ml-[50px]">Change Password</h2>
        <form className="ml-[50px]" onSubmit={onChangePassword}>
          <input className="inputEntry-settings" onChange={onOldPwdChange} value={oldPassword} placeholder='Old Password'></input>
          <input className="inputEntry-settings" onChange={onNewPwdChange} value={newPassword} placeholder='New Password'></input>
          <button type='submit' className='bg-slate-500 text-white mt-5 ml-5'>Change Password</button>
        </form>
      </div>


      <div className="clear-box2">
        <h1 className="setting-headers text-[40px] text-[rgba(255,255,255,0.4)] ml-[50px] mt-[100px] mb-5">Profile Picture</h1>
        <p className="choose-img-text">Choose a image</p>
        <img id="profile-main-pic" src={showProfilePicture(user)} alt="user pp" width='200' height='200' />

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


      {/* <script>
        function changeImage(filename) {
          img = document.querySelector("#profile-main-pic");
          img.setAttribute("src", filename);

          }
       </script>  */}


      <div className="clear-box2">
        <h1 className="setting-headers text-[40px] text-[rgba(255,255,255,0.4)] ml-[50px] mt-[100px] mb-5">Themes</h1>
        <div className="theme-selector-box">
          <button className="theme-button">Classic</button>
          <div className="palete-shape">Image</div>
          <button className="theme-button">Samurai</button>
          <div className="palete-shape"></div>
          <button className="theme-button">Retro</button>
          <div className="palete-shape"></div>
        </div>
        <button className="save-changes">Save Changes</button>
      </div>

      <div className='clear-box2'>
        <h1 className="setting-headers text-[40px] text-[rgba(255,255,255,0.4)] ml-[50px] mt-[100px] mb-5">Account Deletion</h1>
        <Link to="/" onClick={() => deleteAcc(user)} className='bg-red-600 text-white'>Click to Delete</Link>
      </div>



      {/* <div classNameName="bg-white dark:bg-slate-700">
        <img className="moon cursor-pointer" src="cpg_logo.png" alt=''></img>
        <img className="sun cursor-pointer" src="griz_profile.png" alt=''></img>
        <p className="bg-white dark:bg-slate-700">basrhgard</p>

      </div> */}


      <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      <script src='./drkMod.js'></script>

    </main>
  )

}

export default Account