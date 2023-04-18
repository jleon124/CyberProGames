import React from 'react'
import { useAuthContext } from '../hooks/useAuthContext'

const UserInfo = () => {
    const { user } = useAuthContext()

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

    return (
        <>
            <div class='flex flex-wrap justify-evenly relative'>
                <div class='absolute top-[-70px] h-96 left-0 w-full bg-black z-0 bg-opacity-20 '></div>
                <div class='text-left w-80 inline-block relative bg-cyan-600 clip-custom3'>
                    <br></br>
                    <br></br>
                    {/* profile-info /} */}
                    <div class='w-[200px] bg-cyan-600 font-bold'>
                        <h2>Gender: n/a</h2>
                        <h2>Age: n/a</h2>
                        <h2>Height: n/a</h2>
                        <h2>Skills: n/a</h2>
                    </div>

                </div>



                {/* {/ descriptionContainer /} */}
                <div class='font-bold bg-transparent h-[250px] w-[400px] m-[10px] z-20 text-[#1afa8d]'>
                    <p>{user.username}</p>
                    <p>{user.description}</p>
                    <p>Created at {user.createdAt}</p>
                </div>
            </div>
            <img alt='userpic' src={showProfilePicture(user)} class="w-32 h-32 rounded-full absolute top-36 left-1/3 transform -translate-x-1/2 z-30"></img>
        </>
    )
}

export default UserInfo