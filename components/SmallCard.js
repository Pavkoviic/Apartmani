import React from 'react'


function SmallCard() {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>

            <a href='smallcard/nacionalniparkovi'>
                <div className="flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out">
                    <div className="relative h-16 w-16">
                        <img src='https://a0.muscache.com/pictures/c0a24c04-ce1f-490c-833f-987613930eca.jpg' ></img>
                    </div>

                    <div>
                        <h2>Nacionalni parkovi</h2>
                    </div>
                </div>
            </a>

            <a href='smallcard/blizuplaze'>
                <div className="flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out">
                    <div className="relative h-16 w-16">
                        <img src='https://a0.muscache.com/pictures/10ce1091-c854-40f3-a2fb-defc2995bcaf.jpg' ></img>
                    </div>
                    <div>
                        <h2>Blizu plaže
                        </h2>
                    </div>
                </div>
            </a>

            <a href='smallcard/otoci'>
                <div className="flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out">
                    <div className="relative h-16 w-16" href >
                        <img src='https://a0.muscache.com/pictures/8e507f16-4943-4be9-b707-59bd38d56309.jpg' ></img>
                    </div>
                    <div>
                        <h2>Otoci</h2>
                    </div>
                </div>
            </a>

            <a href='smallcard/pogled'>
                <div className="flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out">
                    <div className="relative h-16 w-16">
                        <img src='https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg' ></img>
                    </div>
                    <div>
                        <h2>Nevjerojatni pogledi</h2>
                    </div>
                </div>
            </a>

            <a href='smallcard/vile'>
                <div className="flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out">
                    <div className="relative h-16 w-16">
                        <img src='https://a0.muscache.com/pictures/78ba8486-6ba6-4a43-a56d-f556189193da.jpg' ></img>
                    </div>
                    <div>
                        <h2>Vile</h2>
                    </div>
                </div>
            </a>

            <a href='smallcard/arktik'>
                <div className="flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out">
                    <div className="relative h-16 w-16">
                        <img src='https://a0.muscache.com/pictures/8b44f770-7156-4c7b-b4d3-d92549c8652f.jpg' ></img>
                    </div>
                    <div>
                        <h2>Arktik</h2>
                    </div>
                </div>
            </a>

            <a href='smallcard/tropski'>
                <div className="flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out">
                    <div className="relative h-16 w-16">
                        <img src='https://a0.muscache.com/pictures/ee9e2a40-ffac-4db9-9080-b351efc3cfc4.jpg' ></img>
                    </div>
                    <div>
                        <h2>Tropski smještaj</h2>
                    </div>
                </div>
            </a>

            <a href='smallcard/vinogradi'>
                <div className="flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out">
                    <div className="relative h-16 w-16">
                        <img src='https://a0.muscache.com/pictures/60ff02ae-d4a2-4d18-a120-0dd274a95925.jpg' ></img>
                    </div>
                    <div>
                        <h2>Vinogradi</h2>
                    </div>
                </div>
            </a>

        </div>

    )
}

export default SmallCard