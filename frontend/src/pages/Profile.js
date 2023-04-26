import React from 'react'
import { useSelector } from 'react-redux'
import ProfilePicture from '../components/ProfilePicture'
import FavGameList from '../components/FavGameList'

const Profile = () => {

  const user = useSelector((state) => state.user)

  const formatDate = user.createdAt
  const newDate = formatDate.slice(0, 10)

  return (
    <main>
      <div className="profile bg-cover bg-no-repeat bg-center pt-12 z-10 pb-52 ">
        <br></br>

        <div className='flex flex-wrap justify-evenly relative'>

          <div className='absolute top-[-70px] h-96 left-0 w-full bg-black z-0 bg-opacity-20 '></div>

          <div data-aos="zoom-out-down" className='h-[200px] w-[200px] bg-transparent border-4 border-[rgba(88,221,229,255)] clip-custom3'>
            <ProfilePicture alt={'userpic'} picNum={user.profilePicture} />
          </div>

          <div className='font-bold clip-custom3 border-4 border-[rgba(88,221,229,255)] bg-transparent h-[250px] w-[600px] m-[10px] z-20 text-[#1afa8d] text-2xl pt-6 pl-6'>
            <p>{user.username}</p>
            <p>{user.description}</p>
            <p>Created on {newDate}</p>
          </div>
        </div>

        <div data-aos="zoom-out-down" className="mt-20 ml-20">
          <h1 className="font-valo text-3xl text-[rgb(255,255,255,0.4)] mb-6">Favorite Games:</h1>
          <FavGameList favorites={user.favGames} className={"flex "} />
        </div>

      </div>
    </main>
  )

}


export default Profile