import React from 'react';

function Intro() {
   return (
      <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
         <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold">Bader Eddine Ben-Lhachemi</h1>
         <p className="text-base md:text-xl mb-3 font-medium">Software Engineer & Web Developer</p>
         <p className="text-sm max-w-xl mb-6 font-bold">
            I am a software engineer specializing in web development, with a degree in Computer and Network Engineering from the Moroccan School of Engineering Sciences (EMSI). Passionate about challenges, problem solving, and innovation, I have extensive experience in Java, Spring Framework, SQL, and Angular.
            <br/>
            My coding projects are built from the ground up, involving meticulous planning and thoughtful design to solve real-life problems effectively with elegant, efficient code.
            <br/>
            For more details, you can <a href="/assets/resume.pdf" target="_blank" className="text-blue-500 hover:text-blue-700">view</a> or <a href="/assets/resume.pdf" download className="text-blue-500 hover:text-blue-700">download</a> my resume.
         </p>
      </div>
   )
}

export default Intro;