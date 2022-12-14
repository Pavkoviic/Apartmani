import React from 'react'
import { HeartIcon } from "@heroicons/react/outline"
import { StarIcon } from "@heroicons/react/solid"



function ApartCard({ searchResults }) {

  const getServerSideProps = async () => {
    const searchResults = await fetch('https://console.firebase.google.com/u/0/project/zavrsnirad-2d45c/database/zavrsnirad-2d45c-default-rtdb/data/~2F/test.json')
      .then((response) => response.json())
      .then((response) =>{
        if(response.ok){
          console.log("Succes")
    
        }else{
          console.log("Nope")
        }
      }
      
  )
      return {
        props: {
          searchResults
        }
      }
  }

  return (
    
    <div>
    <div className="flex py-7 px-2 pr-4 border-b cursor-pointer hover:opacity-80 hover:shadow-lg transition duration-200 ease-out first:border-t">
      <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0">
        <img src="https://a0.muscache.com/im/pictures/miso/Hosting-3524556/original/24e9b114-7db5-4fab-8994-bc16f263ad1d.jpeg?im_w=1440" layout="fill" objectFit="cover" className="rounded-2xl"/>
      </div>

      <div className="flex flex-col flex-grow pl-5">
        <div className="flex justify-between">
          <p>Lokacija</p>
          <HeartIcon className="h-7 cursor-pointer"/>
        </div>

        <h4 className="text-xl">Naslov</h4>

        <div className="border-b w-10 pt-2"/>

        <p className="pt-2 text-sm text-gray-500 flex-grow">Opis</p>

        <div className="flex justify-between items-end pt-5">
          <p className="flex items-center">
            <StarIcon className="h-5 text-red-400"/>
            zvijezda
          </p>

          <div>
            <p className="text-lg lg:text-2xl font-semibold pb-2">cijena</p>
          </div>
        </div>
    </div>

    </div>

    </div>
  )
}

export default ApartCard


