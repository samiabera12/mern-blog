import { Footer, FooterCopyright, FooterDivider, FooterIcon } from "flowbite-react";
import { Link } from "react-router-dom";
import {BsFacebook,BsInstagram,BsTwitter} from 'react-icons/bs'
export default function FooterCom() {
  return (
  <Footer container className="border border-t-8 border-teal-700">
    <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
            <div className="mt-10">
            <Link to="/" className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white">
                <span className="px-4 py-3 bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-600 rounded-lg text-lg text-yellow-100">Sami's</span>
                <span className="text-lg text-black-100">Blog</span>
            </Link>
            </div>
            <div className="grid grid-cols-2 gap-8  mt-4 sm:grid-cols-3 sm:gap-6">
                <div>
                <Footer.Title title="About"/>
                <Footer.LinkGroup col>
                    <Footer.Link
                        href='https://www.100jsprojects.com'
                        target='blank'
                        rel="noopener noreferrer">
                        100 js Projects
                    </Footer.Link>

                    <Footer.Link
                        href='/about'
                        target='blank'
                        rel="noopener noreferrer">
                        sami blog
                    </Footer.Link>
                </Footer.LinkGroup>
                </div>
                <div>
                <Footer.Title title="Follow Us"/>
                <Footer.LinkGroup col>
                    <Footer.Link
                        href='https://www.github.com/samiabera12'
                        target='blank'
                        rel="noopener noreferrer">
                        github
                    </Footer.Link>

                    <Footer.Link
                        href='#'>
                        Discord
                    </Footer.Link>
                </Footer.LinkGroup>
                </div>

                <div>
                <Footer.Title title="Legal"/>
                <Footer.LinkGroup col>
                    <Footer.Link
                        href='#'>
                      Privacy Policy
                    </Footer.Link>

                    <Footer.Link
                        href='#'>
                            Terms &amp; Conditions
                    </Footer.Link>
                </Footer.LinkGroup>
                </div>
            </div>
        </div>
        <FooterDivider/>
        <div className=" w-full sm:flex sm:items-center sm:justify-between">
            <FooterCopyright href="#" by="Sami's blog   "
            year={new Date().getFullYear()}/>

<div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
    <FooterIcon   href='https://www.facebook.com'
                        target='blank'
                        rel="noopener noreferrer" icon={BsFacebook}/>


<FooterIcon   href='https://www.instagram.com'
                        target='blank'
                        rel="noopener noreferrer" icon={BsInstagram}/>

<FooterIcon   href='https://www.twitter.com'
                        target='blank'
                        rel="noopener noreferrer" icon={BsTwitter}/>
</div>
        </div>
    </div>
  </Footer>
  )
}
