import React from 'react'
import { SearchIcon } from '@heroicons/react/solid'
import DropDown from './DropDown'

function Header() {
    return (
        <header className="sticky top-0 z-50 grid 
        grid-cols-3 bg-white shadow-md p-5 md:px-10">
            {/* lijevo logo */}
            <div className="relative flex items-center h-10 cursor-pointer my-auto">
                <a href='/'>
                    <img
                        className='w-35 h-20'
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHinK36u5ehpEJeCDJl1zjsnWQR0fTRR_ipA&usqp=CAU"
                        layout='fill'
                        objectFit="contain"
                        objectPosition="left"
                    />
                </a>
            </div>


            {/* sredina search */}
            <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
                <input
                    className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400"
                    type="text"
                    placeholder="Pretraži " />

                <SearchIcon className="hidden md:inline-flex h-8 hover:scale-125 bg-blue-500 text-white rounded-full p-2 cursor-pointer md:mx-2" />
            </div>

            {/* desno git, dropdown */}
            <div className="flex items-center space-x-6 justify-end text-gray-500 ">
                <a href="https://github.com/Pavkoviic/Apartmani">
                    <h1>GitHub</h1>
                </a>

                <DropDown />

            </div>
        </header>

    )
}

export default Header
