import React from "react";
import {IconBrandGithub} from "@tabler/icons-react";
import { IconBrandFacebook } from "@tabler/icons-react";
import { IconBrandInstagram } from "@tabler/icons-react";
import { IconBrandLinkedin } from "@tabler/icons-react";


export function Footer() {
  const currentYear = new Date().getFullYear();
    return (
      <>
        <footer className="relative z-10 bg-secondary-950 pt-20 lg:pt-[120px] poppins">
          <div className="container">
            
            <div className="-mx-4 flex flex-wrap md:justify-between">
              <div className="w-full px-4 sm:w-2/3 lg:w-3/12">
              <div>
              <div className="flex gap-2 ">
                <div>
                  <svg
                    width="35"
                    height="52"
                    viewBox="0 0 35 52"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0.0360356 10.822H0V0.736328H10.0856H24.8922V10.822H10.0856H10.0855L10.0855 20.8714L0.0360356 10.822ZM0.0719173 20.9074L10.0856 30.9211V30.9926H0.0719191V41.0783H10.1575V30.9936H24.8922V20.908H10.1218V20.9074L0.0719173 20.9074ZM24.8922 41.0785H10.0856V41.0791H0.0719173L10.0856 51.0928V51.1641H24.8922V41.0785ZM24.8931 10.7868L34.9429 0.736962L24.8931 0.736963V10.7868ZM34.9429 20.9074L24.8931 30.9573V20.9074H34.9429ZM24.8931 51.129L34.9429 41.0791H24.8931V51.129Z"
                      fill="white"
                      fill-opacity="0.7"
                    />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <div className="flex ">
                    <span className="text-xl">E-SUMMIT</span>
                    <span className="text-gray-300 text-lg">'24</span>
                  </div>
                  <div>
                    <span className="text-gray-400 text-sm">
                      & Innovation Committee
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-8 flex-col items-center mb-10">
                <span>Follow us on</span>
                <div className="flex gap-10 ml-2 mt-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className=" cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-110  duration-300"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
                    <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                    <path d="M16.5 7.5l0 .01" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className=" cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-110  duration-300"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                    <path d="M8 11l0 5" />
                    <path d="M8 8l0 .01" />
                    <path d="M12 16l0 -5" />
                    <path d="M16 16v-3a2 2 0 0 0 -4 0" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className=" cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-110  duration-300"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M2 8a4 4 0 0 1 4 -4h12a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-12a4 4 0 0 1 -4 -4v-8z" />
                    <path d="M10 9l5 3l-5 3z" />
                  </svg>
                </div>
              </div>
            </div>
                   
              </div>
              <LinkGroup header="Quick Links">
                <NavLink link="/" label="Home" />
                <NavLink link="/blogs" label="Blogs" />
                <NavLink link="/events" label="Events" />
                {/* <NavLink link="/members" label="Team" /> */}
              </LinkGroup>  

              <LinkGroup header="Other Links">
                <NavLink link="/" label="About Us" />
                <NavLink link="/" label="Brochure" />
                <NavLink link="/" label="Contact" />
              </LinkGroup>  

             <div className="w-full px-4 sm:w-1/2 lg:w-3/12">
                  <div className="mb-10 w-full">
                    <h4 className=" mb-9 text-lg font-semibold text-dark dark:text-white">
                      Subscribe to Newsletter
                    </h4>
                    <div className="flex items-center">
                      <div className="flex w-full max-w-sm items-center space-x-2">
                          <input className="bg-white rounded-md h-[30px] text-background-950" type="email" placeholder="hello@gmail.com"  disabled/>
                          <button className=" text-white font-bold transition-all duration-300 ease-in-out disabled" type="submit" disabled >Subscribe</button>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 mb-6">
                    <span className="">Contact Us</span>
                    <div className="flex-col items-center justify-center gap-3 mb-2 text-gray-300">
                      <div className="flex items-center mt-3 gap-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="15"
                          height="15"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M22 7.535v9.465a3 3 0 0 1 -2.824 2.995l-.176 .005h-14a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-9.465l9.445 6.297l.116 .066a1 1 0 0 0 .878 0l.116 -.066l9.445 -6.297z" />
                          <path d="M19 4c1.08 0 2.027 .57 2.555 1.427l-9.555 6.37l-9.555 -6.37a2.999 2.999 0 0 1 2.354 -1.42l.201 -.007h14z" />

                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M9 3a1 1 0 0 1 .877 .519l.051 .11l2 5a1 1 0 0 1 -.313 1.16l-.1 .068l-1.674 1.004l.063 .103a10 10 0 0 0 3.132 3.132l.102 .062l1.005 -1.672a1 1 0 0 1 1.113 -.453l.115 .039l5 2a1 1 0 0 1 .622 .807l.007 .121v4c0 1.657 -1.343 3 -3.06 2.998c-8.579 -.521 -15.418 -7.36 -15.94 -15.998a3 3 0 0 1 2.824 -2.995l.176 -.005h4z" />
                        </svg>
                        <span>Email</span>
                      </div>
                      <div className="flex  items-center mt-3  gap-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="15"
                          height="15"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          class="icon icon-tabler icons-tabler-filled icon-tabler-phone"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M9 3a1 1 0 0 1 .877 .519l.051 .11l2 5a1 1 0 0 1 -.313 1.16l-.1 .068l-1.674 1.004l.063 .103a10 10 0 0 0 3.132 3.132l.102 .062l1.005 -1.672a1 1 0 0 1 1.113 -.453l.115 .039l5 2a1 1 0 0 1 .622 .807l.007 .121v4c0 1.657 -1.343 3 -3.06 2.998c-8.579 -.521 -15.418 -7.36 -15.94 -15.998a3 3 0 0 1 2.824 -2.995l.176 -.005h4z" />
                        </svg>
                        <span>Phone: +91-9096642803</span>
                      </div>
                      <div className="flex  items-center mt-3  gap-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="15"
                          height="15"
                          viewBox="0 0 24 24"
                          fill="#f20202"
                          class="mb-5"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M16 3a1 1 0 0 1 .117 1.993l-.117 .007v4.764l1.894 3.789a1 1 0 0 1 .1 .331l.006 .116v2a1 1 0 0 1 -.883 .993l-.117 .007h-4v4a1 1 0 0 1 -1.993 .117l-.007 -.117v-4h-4a1 1 0 0 1 -.993 -.883l-.007 -.117v-2a1 1 0 0 1 .06 -.34l.046 -.107l1.894 -3.791v-4.762a1 1 0 0 1 -.117 -1.993l.117 -.007h8z" />
                        </svg>
                        <div className="flex-col">
                          <div>Address: NITK, NH 66, Srinivasnagar,</div>
                          <div>Surathkal Mangalore, Karnataka- 575025</div>
                        </div>
                      </div>
                    </div>
              </div>

            </div>
            </div>
            <div className="">
                <p className="text-white pb-5 md:hidden">
                    &copy; {currentYear}{" "}ESIC
                  </p>
            </div>
          </div>
       
        </footer>
      </>
      );
    };
    
    export default Footer;
    
    const LinkGroup = ({ children, header }) => {
      return (
        <>
          <div className="w-full px-4 sm:w-1/2 lg:w-2/12">
            <div className="mb-10 w-full">
              <h4 className="mb-9 text-lg font-semibold text-white">
                {header}
              </h4>
              <ul className="space-y-3">{children}</ul>
            </div>
          </div>
        </>
      );
    };
    
    const NavLink = ({ link, label }) => {
      return (
        <li>
          <a
            href={link}
            className="inline-block leading-loose text-white opacity-70 hover:text-secondary-100"
          >
            {label}
          </a>
        </li>
      );
    };
