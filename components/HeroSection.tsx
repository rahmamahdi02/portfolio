"use client"
import React from 'react'
import Image from 'next/image'
import { Link } from "react-scroll/modules"

const HeroSection = () => {

  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
        <div className="md:mt-2 md:w-1/2">
          <Image
            className="rounded-full"
            src="/headshot.png"
            alt="Headshot of Rahma, a woman wearing a purple headscarf, grey shirt and navy blue blazer."
            width={300}
            height={300}
          />
        </div>
        <div className="md:mt-2 md:w-3/5">
          <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl"> Hi, I&apos;m Rahma!</h1>
          <p className="font-semibold text-yellow-800 dark:text-yellow-800 mt-4 mb-6 md:text-2xl">Based in San Fransisco Bay Area</p>
          <p className="text-lg mt-4 mb-6 md:text-2xl">
            I'm a <span className="font-semibold text-yellow-500 dark:text-yellow-500">
            Software Developer{" "}
            </span>
            with 3+ years skilled in production ready software, debugging complex codebases, toolchain migration, and UI frameworks.
          </p>
          <a
            href="/MahdiRahma_Resume.pdf"
            target="_blank"
            className="text-neutral-50 dark:text-stone-900 font-semibold px-6 py-3 mr-2 bg-yellow-500 dark:bg-yellow-500 rounded shadow hover:bg-yellow-900 dark:hover:bg-yellow-300"
          >
            Resume
          </a>
          <Link
            to="projects"
            className="text-neutral-50 dark:text-stone-900 font-semibold px-6 py-3 bg-yellow-500 dark:bg-yellow-500 rounded shadow cursor-pointer hover:bg-yellow-900 dark:hover:bg-yellow-300"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Projects
          </Link>
        </div>
      </div>
    </section>
  )
}

export default HeroSection

