import React from "react";
import Link from "next/link";

const HomeBanner = () => {
  return (
    <section className='m-w-[100%] h-[70vh] bg-hero-background bg-cover bg-top bg-no-repeat'>
      <div className='relative left-[10%] top-[35%] w-[77%]'>
        <div>
          <h1 className=' text-[2.5rem] font-[700]  '>
            <span
              style={{ filter: "url(#goo)" }}
              className='inline bg-white box-decoration-clone px-4 py-2 focus:outline-none '
            >
              Agence de
              <span className='text-pink'> communication digitale</span>,
              spécialisée dans la
              <span className='text-pink'> gestion des réseaux sociaux</span> et
              la création de
              <span className='text-pink'> site internet</span>.
            </span>
          </h1>
          <svg
            className='absolute hidden'
            width='0'
            height='0'
            xmlns='http://www.w3.org/2000/svg'
            version='1.1'
          >
            <defs>
              <filter id='goo'>
                <feGaussianBlur
                  in='SourceGraphic'
                  stdDeviation='10'
                  result='blur'
                />
                <feColorMatrix
                  in='blur'
                  mode='matrix'
                  values='1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9'
                  result='goo'
                />
                <feComposite in='SourceGraphic' in2='goo' operator='atop' />
              </filter>
            </defs>
          </svg>
        </div>
        <div className='m-w-full mt-[2rem] flex items-center justify-end pr-8'>
          <Link
            href='/contact'
            className='rounded-[calc(5rem/6.2)] border-4 border-pink bg-dark-light px-4 py-2 text-4xl font-bold text-white transition duration-500 ease-out hover:border-white hover:bg-dark-light hover:text-pink  '
          >
            Nous contacter
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
