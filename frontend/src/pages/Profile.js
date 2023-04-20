import React from 'react'
import UserInfo from '../components/UserInfo'

const Profile = () => {

  return (
    <main>
      <body class="profile bg-cover bg-no-repeat bg-center pt-12 z-10 pb-52">
        <br></br>

        <UserInfo />

        {/* {/ columnBox-container /} */}
        <div class="flex flex-wrap justify-evenly align-center mt-[100px]">
          {/* {/ column /} */}
          <div class="column">
            {/* {/ titleBox-small /} */}
            <div class="w-[200px] h-[60px] bg-cyan-600 m-[20px] clip-custom1">&nbsp; Favorite</div>
            {/* {/ titleBox-big /} */}
            <div class="w-[400px] h-[600px] bg-cyan-600 m-[20px] clip-custom2"></div>
          </div>
          {/* {/ column /} */}
          <div class="column">
            {/* {/ titleBox-small /} */}
            <div class="w-[200px] h-[60px] bg-cyan-600 m-[20px] clip-custom1">&nbsp; Recently Played</div>
            {/* {/ titleBox-big */}
            <div class="w-[400px] h-[600px] bg-cyan-600 m-[20px] clip-custom2"></div>
          </div>
        </div>

      </body>
    </main>
  )

}


export default Profile