import { useState } from "react";
import { MenuIcon } from "@heroicons/react/solid";


const DropDown = () => {
    const [showOptions, setShowOptions] = useState(false);
    const handleClick = () => {
        setShowOptions(!showOptions);
    };

    return (
        <div>
            <div>
                <button onClick={handleClick} className="flex items-center border-2 p-2 rounded-full focus:ring-5" id="dropdownUserAvatarButton" data-dropdown-toggle="dropdownAvatar" type="button">

                    <MenuIcon className="h-8 cursor-pointer hover:scale-90" />
                </button>

                <div id="dropdownAvatar" class="hidden z-10 w-56 h-34 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                    {showOptions && (
                        <ul class="py-1 text-md text-gray-700 dark:text-gray-200" aria-labelledby="dropdownUserAvatarButton">
                            <li>
                                <a href="#" class="block py-5 px-4 hover:bg-gray-100">Prijavi se</a>
                            </li>
                            <li>
                                <a href="#" class="block py-5 px-4 hover:bg-gray-100">Registriraj se</a>
                            </li>
                        </ul>
                    )}

                </div>
            </div>


        </div>

    )

}

export default DropDown