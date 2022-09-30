import React from 'react'

function MediumCard() {
  return (

    <div className='flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3'>

      <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out">
        <div className="relative h-80 w-80">
          <img src='https://a0.muscache.com/im/pictures/miso/Hosting-3524556/original/24e9b114-7db5-4fab-8994-bc16f263ad1d.jpeg?im_w=1440'

            layout="fill"
            className="rounded-xl"
            alt=""
          />
        </div>
        <h3 className="text-2xs mt-3">El Port de la Selva, Katalonija, Španija</h3>
      </div>

      <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out">
        <div className="relative h-80 w-80">
          <img src='https://a0.muscache.com/im/pictures/968e8541-eb21-4a38-9402-259691ada4ad.jpg?im_w=1200'

            layout="fill"
            className="rounded-xl h-80 w-80"
            alt=""
          />
        </div>
        <h3 className="text-2xs mt-3">Hyrynsalmi, Finska</h3>
      </div>

      <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out">
        <div className="relative h-80 w-80">
          <img src='https://a0.muscache.com/im/pictures/00e5d9bf-fdc8-44ac-aff4-afe00338ca5e.jpg?im_w=1440'

            layout="fill"
            className="rounded-xl h-80 w-80"
            alt=""
          />
        </div>
        <h3 className="text-2xs mt-3">Žižanj, Zadarska županija, Hrvatska</h3>
      </div>

      <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out">
        <div className="relative h-80 w-80">
          <img src='https://a0.muscache.com/im/pictures/miso/Hosting-644845711696098721/original/65072fd8-2675-4a97-8380-f95a9feca5df.jpeg?im_w=1440'

            layout="fill"
            className="fill rounded-xl h-80 w-80"
            alt=""
          />
        </div>
        <h3 className="text-2xs mt-3">Postira, Splitsko-dalmatinska županija, Hrvatska</h3>


      </div>



    </div>

  )
}

export default MediumCard