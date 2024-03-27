import { useState } from 'react';
import { Link } from 'react-router-dom';

export const Equipe5 = () => {
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
                    <span>ONGOLA FC</span>
                    <svg
                        className="w-6 h-10 ml-2"
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
                    <div >
                        <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">

                            <Link to="/preongola" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">PRESENTATION DE ONGOLA FC</Link>
                            <Link to="/membreongola" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">MEMBRES DE ONGOLA FC</Link>
                            <Link to="/galerieongola" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">GALERIE DE ONGOLA FC</Link>
                        </div>
                    </div>
                )}
            </div>

        </div>
    )
}
