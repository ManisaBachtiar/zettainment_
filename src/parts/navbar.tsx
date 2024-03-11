import { useState } from "react";

import ThemeToggle from "../components/theme-toggle";

const NavBar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex justify-center">
        <nav className="bg-another mx-auto p-4 border-b border-background shadow fixed z-10 w-full lg:max-w-7xl">
            <div className={"max-w-8xl flex justify-between items-center"}>
                <div className="flex items-center mx-2 lg:mx-12">
                <a href="/" className="text-primary-foreground text-xl font-bold">
                    <span className="text-[#ECC50D]">Zettain</span>ment
                </a>
                </div>
                <div className="md:hidden">
                    <ThemeToggle />
                    <button
                        className="text-foreground hover:text-[#ECC50D] focus:outline-none"
                        onClick={toggleSidebar}
                    >
                        <svg
                            className="h-6 w-6 fill-current"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                        {isOpen ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon icon-tabler icon-tabler-x"
                                width="30"
                                height="30"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                fill="none"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M18 6l-12 12" />
                            <path d="M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon icon-tabler icon-tabler-menu-2"
                                width="30"
                                height="30"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M4 6l16 0" />
                            <path d="M4 12l16 0" />
                            <path d="M4 18l16 0" />
                            </svg>
                        )}
                        </svg>
                    </button>
                </div>
                <div className="lg:mx-12 md:flex items-center hidden text-md font-bold text-primary-foreground">
                    <a href="/" className=" hover:text-[#ECC50D] px-3 py-2">
                        Home
                    </a>
                    <a href="/" className="hover:text-[#ECC50D] px-3 py-2">
                        About
                    </a>
                    <a href="/" className="hover:text-[#ECC50D] px-3 py-2">
                        Services
                    </a>
                    <a href="/" className="hover:text-[#ECC50D] px-3 py-2">
                        Contact
                    </a>

                    <ThemeToggle />

                </div>
            </div>
            {/* Sidebar */}
            <div
                className={`md:hidden fixed top-0 left-0 h-full w-64 bg-another transition transform ${
                isOpen ? "translate-x-0" : "-translate-x-full"
                }`}
            >
                <div className="mx-24 font-bold text-foreground py-16">
                    <a href="/" className="block no-underline hover:text-gray-500 py-5">
                        Home
                    </a>
                    <a href="/" className="block hover:text-gray-500 py-5">
                        About
                    </a>
                    <a href="/" className="block hover:text-gray-500 py-5">
                        Services
                    </a>
                    <a href="/" className="block hover:text-gray-500 py-5">
                        Contact
                    </a>
                </div>
            </div>
        </nav>
    </div>

  );
}

export default NavBar;