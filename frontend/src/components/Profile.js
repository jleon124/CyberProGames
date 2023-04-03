import React from 'react'

const Profile = () => {
  return (
    <main>
    <body class ="profile bg-cover bg-no-repeat bg-center pt-12 z-10 pb-52">
      <br></br>

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
    <p>DESCRIPTION: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
    </div>
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
<div className="bg-red-500 w-32 h-32 rounded-full absolute top-36 left-1/3 transform -translate-x-1/2 z-30"></div>

    </body>
    </main>
  )
}


export default Profile