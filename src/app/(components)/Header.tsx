"use client";

import Image from "next/image";
import React from "react";
import { Navbar, Button } from "flowbite-react";

const Header = () => {
  return (
    <header className="header">
      <Navbar fluid rounded>
        <Navbar.Brand>
          <a href="#" className="mr-3 h-6 sm:h-9">
            <Image
              src="/img/logo.svg"
              alt="website logo"
              width={100}
              height={100}
            />
          </a>

          <a href="#portfolio" className="">
            Portfolio<i className="far fa-eye"></i>
          </a>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link active href="#">
            <p>Home</p>
          </Navbar.Link>
          <Navbar.Link>
            <p>About</p>
          </Navbar.Link>
          <Navbar.Link href="#portfolio">Portfolio</Navbar.Link>
          <Navbar.Link href="#skills">Skills</Navbar.Link>
          <Navbar.Link href="#contact">Contact</Navbar.Link>
          <Navbar.Link
            href="./img/Eduardo_Rivas_Resume.pdf"
            target="_blank"
            rel="noopener"
          >
            <Button className="btn btn--outline">DOWNLOAD CV</Button>
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>

    </header>
  );
};

export default Header;
