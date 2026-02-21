import { useGSAP } from '@gsap/react'
import React, { useState } from 'react'
import gsap from "gsap"
import "remixicon/fonts/remixicon.css";

const App = () => {


  const [showContent, setShowContent] = useState(false)
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".vi-mask-group", {
      rotate: 10,
      duration: 2,
      ease: "power4.easeInOut",
      transformOrigin: "50% 50%"
    })
      .to(".vi-mask-group", {
        scale: 10,
        duration: 2,
        delay: -1.8,
        ease: "Expo.easeInOut",
        transformOrigin: "50% 50%",
        opacity: 0,
        onUpdate: function () {
          if (this.progress() >= .9) {
            document.querySelector(".svg").remove();
            setShowContent(true);
            this.kill();
          }
        }
      })
  });

  useGSAP(() => {

    if(!showContent) return;

    gsap.to(".main",{
      scale:1,
      rotate:0,
      duration:2,
      delay:"-1",
      ease:"Expo.easeInOut"
    });

    gsap.to(".sky",{
      scale:1.2,
      rotate:0,
      duration:2,
      delay: "-.8",
      ease:"Expo.easeInOut"
    });

    gsap.to(".bg",{
      scale:1.2,
      rotate:0,
      duration:2,
      delay: "-.8",
      ease:"Expo.easeInOut",
    });
    gsap.to(".character",{
      scale:0.7,
      x:"-50%",
      bottom:"-60%",
      rotate:0,
      duration:2,
      delay: "-.8",
      ease:"Expo.easeInOut"
    });
    gsap.to(".text", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    const main = document.querySelector(".main");

    main?.addEventListener("mousemove", function (e) {
      const xMove = (e.clientX / window.innerWidth - 0.5) * 500;

      gsap.to(".main .text", {
        x: xMove *0.4,
      })

      gsap.to(".sky",{
        x:xMove *0.2
      })

      gsap.to(".bg", {
        x: -xMove * 0.1,
      });
    })
  }, [showContent])





  return (
    <>
      <div className="svg flex items-center justify-center fixed top-0 left-0 z-100 w-full h-screen overflow-hidden bg-black">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="250"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  VI
                </text>
              </g>
            </mask>
          </defs>
          <image
            href="./bg.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>
      {showContent && (
        <div className='main w-full rotate-[-10deg] scale-[1.7]'>
          <div className='landing overflow-hidden  relative w-full h-screen bg-black'>
            <div className='navbar absolute top-0 left-0 z-10 w-full py-10 px-10 '>
              <div className="logo flex gap-10">
                <div className="lines flex flex-col gap-1.25">
                  <div className="line w-15 h-1 bg-white"></div>
                  <div className="line w-8 h-1 bg-white"></div>
                  <div className="line w-5 h-1 bg-white"></div>
                </div>
                <h3 className='text-4xl -mt-2 leading-none text-white'>Rockstar</h3>
              </div>
            </div>

            <div className='imagesdiv overflow-hidden relative w-full h-screen'>
              <img className='sky rotate-[-20deg] scale-[1.5] absolute w-full h-full object-cover' src="./sky.png" alt="" />
              <img className='bg rotate-[-5deg] scale-[1.8] absolute w-full h-full object-cover' src="./bg.png" alt="" />
              <div className='text absolute top-10 left-1/2 -translate-x-1/2 flex flex-col gap-3 scale-[1.4] rotate-[-10deg]'>
                <h1 className='text-[9rem] leading-none -ml-40'>Grand</h1>
                <h1 className='text-[9rem] leading-none ml-20'>Theft</h1>
                <h1 className='text-[9rem] leading-25 -ml-20'>Auto</h1>
              </div>
              <img className='absolute character -bottom-[380%] left-1/2 -translate-x-1/2 scale-[3] rotate-[-80deg]' src="./girlbg.png" alt="" />

            </div>

            <div className="btmbar absolute bottom-0 left-0 w-full py-15 px-10 bg-linear-to-t from-black to-transparent">
              <div className='flex gap-4 items-center'>
                <i className="text-4xl ri-arrow-down-line"></i>
                <h3 className='font-[Helvetica_Now_Display] text-white text-xl'>Scroll Down</h3>
              </div>
              <img className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-16.25' src="./ps5.png" alt="" />
            </div>
          </div>
          <div className='w-full h-screen flex items-center justify-center bg-black overflow-hidden'>
          <div className="cntnr mt-30 flex w-full h-[80%] ">
            <div className="limg relative w-1/2 h-full">
              <img className='absolute  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' src="imag.png" alt="" />
            </div>
            <div className='rg w-[50%]'>
              <h1 className='text-8xl '>Still running</h1>
              <h1 className='text-8xl'>Not hunting</h1>
              <p className='mt-10 pr-18 text-xl font-[Helvetica_Now_Display]'>Grand Theft Auto VI (GTA 6) is an upcoming open-world action game developed by Rockstar Games. It is set in the modern-day Vice City, inspired by Miami, and features two main characters, Lucia and Jason.</p>
              <p className='mt-3 pr-18 text-xl font-[Helvetica_Now_Display]'>
                The game promises a massive, detailed world with improved graphics, smarter AI, and realistic gameplay mechanics. GTA 6 is expected to release in 2025 for PlayStation 5 and Xbox Series X/S.
              </p>
              <button className='bg-yellow-500 px-10 py-5 text-2xl text-black mt-10'>Download Now</button>
            </div>
          </div>

          </div>
        </div>
      )}
    </>
  )
}




export default App