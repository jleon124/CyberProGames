import React from 'react'

const ProfilePicture = ({ picNum, height, width, className, alt }) => {

  const showProfilePicture = (picNum) => {
    switch (picNum) {
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
    <img
      alt={alt}
      src={showProfilePicture(picNum)}
      height={height}
      width={width}
      className={className}
    ></img>
  )
}

export default ProfilePicture