/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';

import Fade from 'react-reveal/Fade';

export default function AllTeam({ data }) {
  return (
    <section className="container mx-0 sm:mx-auto">
      <h1 className="text-5xl text-theme-blue text-center font-bold mb-5">Co founders</h1>

      <div className="gap-y-10 gap-x-10 sm:gap-14 lg:gap-20 mx-16 justify-center flex">
        {
                    data.map((item, index) => (
                      <Fade bottom delay={200 * index}>
                        <div>
                          <div className="flex flex-col w-44 h-60 sm:w-56 sm:h-72 rounded-xl shadow-xl border border-light-theme-purple justify-center transform transition duration-500 hover:scale-105">
                            <div className="flex justify-center xl:mb-5">
                              <img src={item.imageUrl} alt="Team Member" className="flex w-32 h-32 rounded-full" />
                            </div>
                            <h2 className="text-theme-blue text-center text-xl">{item.name}</h2>
                            <p className="font-light text-gray-400 text-center mb-3">{item.position}</p>
                          </div>
                        </div>
                      </Fade>
                    ))
                }
      </div>
    </section>
  );
}
