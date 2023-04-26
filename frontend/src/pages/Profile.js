import React from 'react'
import { useSelector } from 'react-redux'
import ProfilePicture from '../components/ProfilePicture'
import FavGameList from '../components/FavGameList'

const Profile = () => {

  const user = useSelector((state) => state.user)

  return (
    <main>
      <div className="profile bg-cover bg-no-repeat bg-center pt-12 z-10 pb-52">
        <br></br>

        <div className='flex flex-wrap justify-evenly relative'>
          <div className='absolute top-[-70px] h-96 left-0 w-full bg-black z-0 bg-opacity-20 '></div>
          <div className='text-left w-80 inline-block relative bg-cyan-600 clip-custom3'>
            <br></br>
            <br></br>
            {/* profile-info /} */}
            <div className='w-[200px] bg-cyan-600 font-bold'>
              <ProfilePicture alt={'userpic'} picNum={user.profilePicture} />
            </div>
          </div>
          {/* {/ descriptionContainer /} */}
          <div className='font-bold bg-transparent h-[250px] w-[400px] m-[10px] z-20 text-[#1afa8d]'>
            <p>{user.username}</p>
            <p>{user.description}</p>
            <p>Created at {user.createdAt}</p>
          </div>
        </div>

        <FavGameList favorites={user.favGames} className={"flex bg-black/40 mt-20"}/>

      </div>
    </main>
  )

}


export default Profile