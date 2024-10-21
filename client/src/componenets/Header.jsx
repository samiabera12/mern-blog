import { Button, Navbar, NavbarCollapse, NavbarLink, NavbarToggle, TextInput } from 'flowbite-react';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaMoon } from 'react-icons/fa';

export default function Header() {
    const path = useLocation().pathname;

    return (
        <Navbar className="border-b-2 mt-4 pt-2">
            <Link to="/" className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white">
                <span className="px-4 py-3 bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-600 rounded-lg text-lg text-yellow-100">Sami's</span>
                <span className="text-lg text-black-100">Blog</span>
            </Link>

            <form>
                <TextInput
                    type="text"
                    placeholder="Search"
                    rightIcon={AiOutlineSearch}
                    className="hidden lg:inline"
                />
            </form>
            <Button className="w-12 h-10 lg:hidden" color="red" pill>
                <AiOutlineSearch />
            </Button>

            <div className="flex gap-2 md:order-2">
                <Button className="w-12 h-10 hidden sm:inline" color="red" pill>
                    <FaMoon />
                </Button>

                <Link to="/signin">
                    <Button gradientDuoTone="purpleToBlue">Sign In</Button>
                </Link>
                <NavbarToggle />
            </div>

            <NavbarCollapse>
                <NavbarLink active={path === "/"} as={'div'}>
                    <Link to="/">Home</Link>
                </NavbarLink>

                <NavbarLink active={path === "/about"} as={'div'}>
                    <Link to="/about">About</Link>
                </NavbarLink>

                <NavbarLink active={path === "/projects"} as={'div'}>
                    <Link to="/projects">Projects</Link>
                </NavbarLink>
            </NavbarCollapse>
        </Navbar>
    );
}
