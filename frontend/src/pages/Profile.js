import React from 'react'
import UserInfo from '../components/UserInfo'

const Profile = () => {

  return (
    <main>
      <div className="profile bg-cover bg-no-repeat bg-center pt-12 z-10 pb-52">
        <br></br>

        <UserInfo />

        {/* {/ columnBox-container /} */}
        <div className="flex flex-wrap justify-evenly align-center mt-[100px]">
          {/* {/ column /} */}
          <div className="column">
            {/* {/ titleBox-small /} */}
            <div className="w-[200px] h-[60px] bg-cyan-600 m-[20px] clip-custom1">&nbsp; Favorite</div>
            {/* {/ titleBox-big /} */}
            <div className="w-[400px] h-[600px] bg-cyan-600 m-[20px] clip-custom2"></div>
          </div>
          {/* {/ column /} */}
          <div className="column">
            {/* {/ titleBox-small /} */}
            <div className="w-[200px] h-[60px] bg-cyan-600 m-[20px] clip-custom1">&nbsp; Recently Played</div>
            {/* {/ titleBox-big */}
            <div className="w-[400px] h-[600px] bg-cyan-600 m-[20px] clip-custom2"></div>
          </div>
        </div>

      </div>
    </main>
  )

}


export default Profile