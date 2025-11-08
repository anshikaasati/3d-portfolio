import { useState } from 'react';
import Globe from 'react-globe.gl';

import Button from '../components/Button.jsx';

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('asatianshikawork@gmail.com');
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Hi, I’m Anshika Asati</p>
              <p className="grid-subtext">
                I am a <strong>Backend Developer at GoQuant.</strong> <br></br>
                <span>
                  Completed my Bachelor’s degree in <strong>Information Technology</strong> from 
                  <strong> Madhav Institute of Technology and Science, Gwalior</strong> with a <strong>CGPA of 8.06</strong>, graduated in <strong>2025</strong>.
                </span>
                <br></br>
                <span>
                  Completed my <strong>12th grade in 2021</strong> with <strong>92.8%</strong>.
                </span>
                <br></br>
                <span>
                  Completed my <strong>10th grade in 2019</strong> with <strong>90.6%</strong>.
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <div className="w-full sm:h-[276px] h-fit grid grid-cols-2 gap-8 place-items-center relative p-4">
              <a 
                href="https://github.com/anshikaasati" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="platform-card group w-full"
              >
                <div className="floating-icon animation-delay-100 flex flex-col items-center">
                  <div className="bg-black-300/50 p-6 rounded-2xl backdrop-blur-sm group-hover:bg-black-300 transition-colors w-full flex flex-col items-center">
                    <img src="/assets/icons8-github-48.png" alt="github" className="w-16 h-16 group-hover:scale-110 transition-transform mb-3" />
                    <span className="text-white/70 group-hover:text-white/90 transition-colors text-lg">GitHub</span>
                  </div>
                </div>
              </a>

              <a 
                href="http://linkedin.com/in/anshika-asati-8ba882245" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="platform-card group w-full"
              >
                <div className="floating-icon animation-delay-200 flex flex-col items-center">
                  <div className="bg-black-300/50 p-6 rounded-2xl backdrop-blur-sm group-hover:bg-black-300 transition-colors w-full flex flex-col items-center">
                    <img src="/assets/icons8-linkedin-48.png" alt="linkedin" className="w-16 h-16 group-hover:scale-110 transition-transform mb-3" />
                    <span className="text-white/70 group-hover:text-white/90 transition-colors text-lg">LinkedIn</span>
                  </div>
                </div>
              </a>

              <a 
                href="https://www.codechef.com/users/asatianshika14" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="platform-card group w-full"
              >
                <div className="floating-icon animation-delay-300 flex flex-col items-center">
                  <div className="bg-black-300/50 p-6 rounded-2xl backdrop-blur-sm group-hover:bg-black-300 transition-colors w-full flex flex-col items-center">
                    <img src="/assets/icons8-codechef-48.png" alt="codechef" className="w-16 h-16 group-hover:scale-110 transition-transform mb-3" />
                    <span className="text-white/70 group-hover:text-white/90 transition-colors text-lg">CodeChef</span>
                  </div>
                </div>
              </a>

              <a 
                href="https://leetcode.com/anshikaasati/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="platform-card group w-full"
              >
                <div className="floating-icon animation-delay-400 flex flex-col items-center">
                  <div className="bg-black-300/50 p-6 rounded-2xl backdrop-blur-sm group-hover:bg-black-300 transition-colors w-full flex flex-col items-center">
                    <img src="/assets/icons8-leetcode-24.png" alt="leetcode" className="w-16 h-16 group-hover:scale-110 transition-transform mb-3" />
                    <span className="text-white/70 group-hover:text-white/90 transition-colors text-lg">LeetCode</span>
                  </div>
                </div>
              </a>

              <a 
                href="https://leetcode.com/anshikaasati/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="platform-card group w-full"
              >
                <div className="floating-icon animation-delay-400 flex flex-col items-center">
                  <div className="bg-black-300/50 p-6 rounded-2xl backdrop-blur-sm group-hover:bg-black-300 transition-colors w-full flex flex-col items-center">
                    <img src="/assets/icons8-geeksforgeeks-48.png" alt="gfg" className="w-16 h-16 group-hover:scale-110 transition-transform mb-3" />
                    <span className="text-white/70 group-hover:text-white/90 transition-colors text-lg">GeeksforGeeks</span>
                  </div>
                </div>
              </a>

              <a 
                href="https://leetcode.com/anshikaasati/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="platform-card group w-full"
              >
                <div className="floating-icon animation-delay-400 flex flex-col items-center">
                  <div className="bg-black-300/50 p-6 rounded-2xl backdrop-blur-sm group-hover:bg-black-300 transition-colors w-full flex flex-col items-center">
                    <img src="/assets/icons8-ninja-head-48.png" alt="coding ninja" className="w-16 h-16 group-hover:scale-110 transition-transform mb-3" />
                    <span className="text-white/70 group-hover:text-white/90 transition-colors text-lg">CodingNinja</span>
                  </div>
                </div>
              </a>  
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[{ lat: 40, lng: -100, text: 'Rjieka, Croatia', color: 'white', size: 15 }]}
              />
            </div>
            <div>
              <p className="grid-headtext">I&apos;m very flexible with time zone communications & locations</p>
              <p className="grid-subtext">Based in Gwalior, India, and open to both remote and in-office opportunities worldwide.</p>
              <div className="flex flex-col gap-4 mt-10">
                <a href="#contact">
                  <Button 
                    name="Contact Me" 
                    isBeam 
                    containerClass="w-full" 
                  />
                </a>
                <a href="https://drive.google.com/file/d/1p7QbD19pgmYi-SN2RZsU7hIP_OaAS-XZ/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                  <Button 
                    name="View Resume" 
                    isBeam 
                    containerClass="w-full" 
                  />
                </a>
                <a href="https://drive.google.com/file/d/19kxtY84RO0VF8kPc1EaXiDK2bT-2Zodl/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                  <Button 
                    name="View Transcript" 
                    isBeam 
                    containerClass="w-full" 
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">My Passion for Coding</p>
              <p className="grid-subtext flex flex-col gap-3">
                <span className="text-white/90">
                  Passionate about coding and problem-solving, with a strong foundation in Data Structures and Algorithms.
                </span>
                <span className="text-white/90">
                  Experienced in competitive programming — Level 7 Expert at Coding Ninjas and 1560-rated on CodeChef.
                </span>
                <span className="text-white/90">
                  Google Girls Hackathon Finalist and former TechBuzz event lead, showcasing teamwork and innovation.
                </span>
                <span className="text-white/90">
                  Led a Quality Assurance Engineering Bootcamp at GoQuant, mentoring 50+ participants on testing strategies and automation practices; several trainees were successfully hired as interns at GoQuant.
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />

            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">asatianshikawork@gmail.com</p>
              </div>
              <p className="grid-subtext text-center mt-2">Phone: +91 9981100245</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
