import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const About = () => {

  return (
    <>
      <main className='h-auto bg-[linear-gradient(to_bottom,#050b13,#11131e,#1c1727,#2b192e,#3c1b30,#431a2f,#4a192c,#511929,#511627,#501324,#501022,#4f0c1f)]'>
        <h1 className="about_title_page text-5xl text-[yellow] font-[bolder] ml-[100px] pt-[70px]">CyberProGames</h1>

        <br></br><br></br>

        <div className='flex'>
          <div data-aos="fade-right" className="about_description text-center bg-[rgba(0,0,0,0.4)] h-80 w-[650px] ml-[100px] mt-[100px] border-[rgba(88,221,229,255)] border-[3px]">
            <div className="about_text text-left text-base uppercase text-[rgba(26,250,141,255)] leading-loose font-bold p-[50px] font-sans">
              A website with a purpose of hosting various <br></br>
              games ranging from just-for-fun to game to <br></br>
              learning about programming/computer science. <br></br>
              This project was created as part of our <br></br>
              semester long project in the ITEC 4860 <br></br>
              course to get us comfortable with the MERN <br></br>
              stack and deploy a full-stack web application. <br></br>

            </div>

          </div>

          <div data-aos="fade-right" className="about_description text-center bg-[rgba(0,0,0,0.4)] h-80 w-[650px] ml-[100px] mt-[100px] border-[rgba(88,221,229,255)] border-[3px] ">
            <div className="about_text text-left text-base uppercase text-[rgba(26,250,141,255)] leading-loose font-bold p-[50px] font-sans">
              Technologies Used <br></br>
              <div className='flex'>
                <img className='h-[100px] w-[100px] mx-5 my-2' src='logos\react_logo.png' alt="error"></img>
                <img className='h-[100px] w-[110px] mx-5 my-2' src='logos\nodeJS_logo.png' alt="error"></img>
                <img className='h-[100px] w-[180px] mx-5 my-2' src='logos\express_logo.png' alt="error"></img>
              </div>
              <div className='flex'>
                <img className='h-[100px] w-[100px] mx-5 my-2' src='logos\mongoDB_logo.png' alt="error"></img>
                <img className='h-[80px] w-[200px] mx-5 my-2' src='logos\tailwind_logo.png' alt="error"></img>
                <img className='h-[100px] w-[100px] mx-5 my-2' src='logos\github_logo.png' alt="error"></img>
              </div>
            </div>

          </div>
        </div>

        <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br>


        <div data-aos="fade-right">
          <div className="box_profile_img h-[350px] w-[250px] absolute z-[2] ml-[380px] mb-[400px]">
            <img src='teampictures/miranda_pic.png' alt="souvenir"></img>

          </div>
          <div className="profile_about_Box bg-[rgba(6,11,19,0.8)] h-[450px] w-[600px] m-[50px] border-solid border-4 border-[rgba(88,221,229,255)]">
            <div>
              <p className="profile_desciptions text-left uppercase text-[rgba(26,250,141,255)] leading-loose pl-[30px] pt-[70px] font-sans font-extrabold text-lg">
                Name: <span className="text-white">Miranda </span><br></br>
                <span className="text-white">Darlington</span> <br></br>
                Gender: <span className="text-white">Female</span><br></br>
                Age: <span className="text-white">25</span><br></br>
                Height: <span className="text-white">5'5"</span><br></br>
                Skills: <span className="text-white">HTML, CSS, Java,<br></br> Python</span> <br></br>
                <br></br>
                Role: <span className="text-white">Graphic Designer, Game Developer, Frontend</span><br></br>
                Social content: <span className="text-white"><a href="https://www.linkedin.com/in/m1darl1ng/" target="blank" >LinkedIn</a></span>
              </p>

            </div>
          </div>
        </div>

        <div className="white_profileBox h-[500px] w-[400px]"></div>

        <div data-aos="fade-right">
          <div className="box_profile_img_right h-[350px] w-[250px] absolute z-[2] mr-[50px] mb-[400px] p-2.5 right-[330px]">
            <img src='teampictures/jafet_pic.png' alt="souvenir" />

          </div>
          <div className="profileBox_right_side text-center bg-[rgba(6,11,19,255)] h-[450px] w-[600px] float-right m-[50px] border-solid border-4 border-[rgba(88,221,229,255)]">
            <div>
              <p className="profile_desciptions_right text-left uppercase text-[rgba(26,250,141,255)] leading-loose pl-[280px] pt-[70px] font-sans font-extrabold text-lg">
                Name: <span className="text-white">Jafet Leon-Perez</span> <br></br>
                Gender: <span className="text-white">Male</span><br></br>
                Age: <span className="text-white">Data Lost</span><br></br>
                Height: <span className="text-white">Data Lost</span><br></br>
                Skills: <span className="text-white">HTML, CSS, Java</span> <br></br>
                <br></br>
                Role: <span className="text-white">Unknown</span><br></br>
                Social content: <span className="text-white"><a href="https://www.linkedin.com/in/jafet-leon-perez/" target="blank">LinkedIn</a></span>
              </p>

            </div>
          </div>
        </div>

        <div className="white_profileBox h-[500px] w-[400px]"></div>
        <div className="white_profileBox h-[500px] w-[400px]"></div>

        <div data-aos="fade-right">
          <div className="box_profile_img h-[350px] w-[250px] absolute z-[2] ml-[380px] mb-[400px]">
            <img src='teampictures/person_holder.png' alt="souvenir" />
          </div>
          <div className="profile_about_Box  bg-[rgba(6,11,19,0.8)] h-[450px] w-[600px] m-[50px] border-solid border-4 border-[rgba(88,221,229,255)]">
            <div>
              <p className="profile_desciptions text-left uppercase text-[rgba(26,250,141,255)] leading-loose pl-[30px] pt-[70px] font-sans font-extrabold text-lg">
                Name: <span className="text-white">Saif Shaikh</span> <br></br>
                Gender: <span className="text-white">Male</span><br></br>
                Age: <span className="text-white">23</span><br></br>
                Height: <span className="text-white">5'9"</span><br></br>
                Skills: <span className="text-white">HTML, CSS, Java</span> <br></br>
                <br></br>
                Role: <span className="text-white">UI/UX Designer, <br></br>Game Developer, Frontend</span><br></br>
                Social content: <span className="text-white"><a href="https://www.linkedin.com/in/-saif-shaikh/" target="blank">LinkedIn</a></span>
              </p>

            </div>
          </div>
        </div>

        <div className="white_profileBox h-[500px] w-[400px]"></div>

        <div data-aos="fade-right">
          <div className="box_profile_img_right h-[350px] w-[250px] absolute z-[2] mr-[50px] mb-[400px] p-2.5 right-[330px]">
            <img src='teampictures/Javier_pic.png' alt="souvenir" />
          </div>
          <div className="profileBox_right_side text-center bg-[rgba(6,11,19,255)] h-[450px] w-[600px] float-right m-[50px] border-solid border-4 border-[rgba(88,221,229,255)]">
            <div>
              <p className="profile_desciptions_right text-left uppercase text-[rgba(26,250,141,255)] leading-loose pl-[280px] pt-[70px] font-sans font-extrabold text-lg">
                Name: <span className="text-white">Javier Zarate</span> <br></br>
                <span className="text-white">Zaragoza</span> <br></br>
                Gender: <span className="text-white">Male</span><br></br>
                Age: <span className="text-white">Data Lost</span><br></br>
                Height: <span className="text-white">Data Lost</span><br></br>
                Skills: <span className="text-white">HTML, CSS, Java</span> <br></br>
                <br></br>
                Role: <span className="text-white">Unknown</span><br></br>
                Social content: <span className="text-white"><a href="https://www.linkedin.com/in/javier-zarate-zaragoza-7b6817240/" target="blank">LinkedIn</a></span>
              </p>

            </div>
          </div>
        </div>

        <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <br></br><br></br><br></br><br></br>

      </main>
    </>
  )

}

export default About