import { useState } from 'react';
import { Link } from 'react-router-dom';

export const Equipe3 = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div>

            <div className="relative">
                <button
                    className="bg-blue-500 text-white font-semibold py-2 px-4 rounded inline-flex items-center w-60 mt-10"
                    onClick={toggleDropdown}
                >
                    <span>TEAM US</span>
                    <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M10 12a1 1 0 01-.707-.293l-4-4a1 1 0 011.414-1.414L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4A1 1 0 0110 12z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>

                {isOpen && (
                    <div className="origin-top-right absolute right-20 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                        <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">

                            <Link to="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Presentation</Link>
                            <Link to="/festi" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Membres</Link>
                            <Link to="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Galerie</Link>
                        </div>
                    </div>
                )}
            </div>

        </div>
    )
}
