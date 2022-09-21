import React from 'react'
import Image from 'next/image'

function LargeCard() {
  return (

    <div className="relative py-16 ">
      <div className="relative h-96 min-w-[300px]">
        <Image 
          src='https://links.papareact.com/4cj'
          layout="fill"
          objectFit="cover"
          className="rounded-2xl"
          alt=""
        />
      </div>

      <div className="absolute top-32 left-12">
        <h3 className="text-4xl mb-3 w-64">Iznajmite apartmane</h3>
        <p>Prijavite se</p>

        <button className="text-sm text-white bg-gray-900 px-4 py-2 rounded-lg mt-5">Login</button>
      </div>
    </div>
   
  )
}

export default LargeCard