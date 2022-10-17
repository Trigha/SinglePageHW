import React from 'react';

function Sponsors() {
  return (
    <div>
      <div
        id="team"
        className="section relative pt-20 pb-8 md:pt-16 bg-white dark:bg-gray-800"
      >
        <div className="container xl:max-w-6xl mx-auto px-4">
          <header className="text-center mx-auto mb-12">
            <h2 class="text-center text-4xl leading-normal mb-2 font-bold text-gray-800 dark:text-gray-100">
              <span class="font-light">Our</span> Sponsors
            </h2>
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 100 60"
              style={{
                margin: '0 auto',
                height: '35px',
              }}
            >
              <circle
                cx="50.1"
                cy="30.4"
                r="5"
                className="stroke-primary"
                style={{
                  fill: 'transparent',
                  strokeWidth: '2',
                  strokeMiterlimit: '10',
                }}
              ></circle>
              <line
                x1="55.1"
                y1="30.4"
                x2="100"
                y2="30.4"
                className="stroke-primary"
                style={{
                  strokeWidth: '2',
                  strokeMiterlimit: '10',
                }}
              ></line>
              <line
                x1="45.1"
                y1="30.4"
                x2="0"
                y2="30.4"
                className="stroke-primary"
                style={{
                  strokeWidth: '2',
                  strokeMiterlimit: '10',
                }}
              ></line>
            </svg>
          </header>
        </div>

        <div class="sm:max-w-5xl rounded-xl bg-white mx-4 sm:mx-8 md:mx-auto">
          <div class="w-11/12 sm:w-2/3 mx-auto mb-10"></div>
          <div class="sm:py-6 px-8 sm:24 flex flex-wrap items-center">
            <div class="w-1/3 sm:w-1/6 flex justify-center xl:pb-10 pb-16 items-center inset-0 transform  hover:scale-75 transition duration-300 contrast-75 hover:contrast-100 drop-shadow-xl">
              <img
                class="focus:outline-none w-12 sm:w-16 "
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMbDqUxLUa3gm9P6VJYgBn3HNHq0soFb5Ijw&usqp=CAU"
                alt=""
                role="img"
              />
            </div>
            <div class="w-1/3 sm:w-1/6 flex justify-center xl:pb-10 pb-16 items-center inset-0 transform  hover:scale-75 transition duration-300 contrast-75 hover:contrast-100 drop-shadow-xl ">
              <img
                class="focus:outline-none w-12 sm:w-16"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Warner_Music_Group_logo.svg/2560px-Warner_Music_Group_logo.svg.png"
                alt=""
                role="img"
              />
            </div>
            <div class="w-1/3 sm:w-1/6 flex justify-center xl:pb-10 pb-16 items-center inset-0 transform  hover:scale-75 transition duration-300 contrast-75 hover:contrast-100 drop-shadow-xl">
              <img
                class="focus:outline-none w-12 sm:w-16"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo5ZxngzbNw57dh21NpbZ7GLG1F1hNvdtqCw&usqp=CAU"
                alt=""
                role="img"
              />
            </div>
            <div class="w-1/3 sm:w-1/6 flex justify-center xl:pb-10 pb-16 items-center inset-0 transform  hover:scale-75 transition duration-300 contrast-75 hover:contrast-100 drop-shadow-xl">
              <img
                class="focus:outline-none w-12 sm:w-16"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Warner_Music_Group_2013_logo.svg/2560px-Warner_Music_Group_2013_logo.svg.png"
                alt=""
                role="img"
              />
            </div>
            <div class="w-1/3 sm:w-1/6 flex justify-center xl:pb-10 pb-16 items-center inset-0 transform  hover:scale-75 transition duration-300 contrast-75 hover:contrast-100 drop-shadow-xl">
              <img
                class="focus:outline-none w-12 sm:w-16"
                src="https://www.logo.wine/a/logo/Groove_Music/Groove_Music-Logo.wine.svg"
                alt=""
                role="img"
              />
            </div>
            <div class="w-1/3 sm:w-1/6 flex justify-center xl:pb-10 pb-16 items-center inset-0 transform  hover:scale-75 transition duration-300 contrast-75 hover:contrast-100 drop-shadow-xl">
              <img
                class="focus:outline-none w-12 sm:w-16"
                src="https://coloradosound.org/wp-content/uploads/2021/08/1280px-MTV-Logo.svg_.png"
                alt=""
                role="img"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sponsors;
