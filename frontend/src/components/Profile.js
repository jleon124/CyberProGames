import React from 'react'

const Profile = () => {
  return (
    <body id ="profile">
      <br></br>

    <div className='profileContainer'>
    <div className='profileBackground'></div>

    <div className='profilePictureBox' title='Change Pic'>
      
      <img src="profile-picture.jpg" alt="Profile Picture"></img>
    <input type="file" name="profile-picture"></input>
      </div>
      
    <div className='profileBox'>
      <br></br>
      <br></br>
      <div className='profile-info'>
      <h2>Gender: n/a</h2>
      <h2>Age: n/a</h2>
      <h2>Height: n/a</h2>
      <h2>Skills: n/a</h2>
      </div>

    </div>

    
    

<div className='descriptionContainer'>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
    </div>
    <div class="columnBox-container">
  <div class="column">
    <div class="titleBox-small">Favorite</div>
    <div class="titleBox-big"></div>
  </div>
  <div class="column">
    <div class="titleBox-small">Recently Played</div>
    <div class="titleBox-big"></div>
  </div>
</div>

    
    </body>
  )
}

export default Profile