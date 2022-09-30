import { HeartIcon, StarIcon } from '@heroicons/react/solid'
import React from 'react'
import Image from 'next/image'
import Header from '../../components/Header'
import pogled_podatak from './information/pogled_info'
import Footer from '../../components/Footer'



function pogled({ }) {

  return (

    <div className>
      <Header />

      {pogled_podatak.map(pogled => (
        <div key={pogled.id}>

          <div className="rounded-lg md:ml-28 md:mr-28 flex py-7 px-2 pr-4 border-b cursor-pointer hover:opacity-80 hover:shadow-lg transition duration-200 ease-out first:border-t">
            <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0">
              <Image src={pogled.img} layout='fill' objectfit='cover' />
            </div>


            <div className="flex flex-col flex-grow pl-5">
              <div className="flex justify-between">
                <p>{pogled.location}</p>
                <HeartIcon className="h-7 cursor-pointer" />
              </div>


              <h4 className="text-xl">{pogled.title}</h4>

              <div className="border-b w-10 pt-2" />

              <p className="pt-2 text-sm text-gray-500 flex-grow">{pogled.description}</p>

              <div className="flex justify-between items-end pt-5">
                <p className="flex items-center">
                  <StarIcon className="h-5 text-red-400" />
                  {pogled.star}
                </p>

                <div>
                  <p className="text-lg lg:text-2xl font-semibold pb-2">{pogled.price}</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      ))}
      <Footer />
    </div>

  )
}



export default pogled