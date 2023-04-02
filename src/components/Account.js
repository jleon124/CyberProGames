import React from 'react'


const Account = () => {
  return (


    <body className='bg-[linear-gradient(to_bottom,#050b13,#11131e,#1c1727,#2b192e,#3c1b30,#431a2f,#4a192c,#511929,#511627,#501324,#501022,#4f0c1f)]'>

      <h1 className="about_title_page text-[100px] text-[yellow] font-[bolder] ml-[100px] pt-[70px]">CyberProGames</h1>
      <br></br><br></br>

      <div className="clear-box2">
        <h1 className="setting-headers text-[40px] text-[rgba(255,255,255,0.4)] ml-[50px] mt-[100px] mb-5">Security</h1>
        <h2 className="text-[rgba(26,250,141,255)] text-[25px] ml-[50px]">Change Password</h2>
        <form className="flex flex-col ml-[50px]">
          <input className="inputEntry-settings" placeholder='   Old Password'></input>
          <input className="inputEntry-settings" placeholder='   New Password'></input>

        </form>
      </div>


      <div className="clear-box2">
        <h1 className="setting-headers text-[40px] text-[rgba(255,255,255,0.4)] ml-[50px] mt-[100px] mb-5">Profile Picture</h1>

        <p className="choose-img-text">Choose a image</p>


        <img id="profile-main-pic" src='default_profilepic.png' alt="CyberProGames logo" width='200' height='200' />


        <div className="pic-container grid grid-cols-[auto_auto_auto] gap-x-[50px] gap-y-5 ml-[500px] mt-20">

          <button onClick="changeImage('cpg_logo.png')"><img src='eye_profile.png' alt="CyberProGames logo" width='100' height='100' /></button>


          <button onClick="changeImage('account-image.gif')"><img src='glasses_profile.png' alt="CyberProGames logo" width='100' height='100' /></button>


          <button onClick="changeImage('jafet_pic.png')"><img src='griz_profile.png' alt="CyberProGames logo" width='100' height='100' /></button>


          <button onClick="changeImage('Javier_pic.png')"><img src='img_profile.png' alt="CyberProGames logo" width='100' height='100' /></button>


          <button onClick="changeImage('miranda_pic.png')"><img src='mask_profilepic.png' alt="CyberProGames logo" width='100' height='100' /></button>


          <button onClick="changeImage('person_holder.png')"><img src='angy_profilepic.png' alt="CyberProGames logo" width='100' height='100' /></button>


        </div>
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

        {/* <div>
          <img src="samurai_img2.png" id="sam-pic"></img>

        </div> */}


      </div>

        

      {/* <div classNameName="bg-white dark:bg-slate-700">
        <img className="moon cursor-pointer" src="cpg_logo.png" alt=''></img>
        <img className="sun cursor-pointer" src="griz_profile.png" alt=''></img>
        <p className="bg-white dark:bg-slate-700">basrhgard</p>

      </div> */}


      <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      <script src='./drkMod.js'></script>
        
    </body>


  )
}

export default Account