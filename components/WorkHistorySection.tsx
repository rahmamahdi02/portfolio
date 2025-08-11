import React from 'react'
import Image from 'next/image'

const workHistory = [
  {
    company: 'Sony Interactive Entertainment',
    role: 'Software Engineer',
    period: '2021 - Present',
    description: 'Led feature integrations and native UI framework development for PlayStation consoles, reducing data downloads by 30%.',
    logo: '/logos/sony.png',
  },
  {
    company: 'Google',
    role: 'UI/UX Developer',
    period: '2019 - 2021',
    description: 'Redesigned user interfaces for Google’s Tech Equity Collective, improving accessibility and engagement.',
    logo: '/logos/google.png',
  },
  {
    company: 'UC Berkeley',
    role: 'Curriculum Engineer',
    period: '2017 - 2019',
    description: 'Created open-source educational content reaching 600+ developers worldwide.',
    logo: '/logos/ucberkeley.jpg',
  },
]

const logos = [
  { src: '/logos/playstation.png', alt: 'Playstation' },
  { src: '/logos/sony.png', alt: 'Sony' },
  { src: '/logos/google.png', alt: 'Google' },
]

export const WorkHistorySection = () => {
  return (
    <section id="workhistory">
      <div className="text-xl my-12 pb-12 md:pb-10 max-w-5xl mx-auto">
        <hr className="w-6 h-1 mx-auto my-10 bg-yellow-500 border-0 rounded" />

        {/* Title & Intro */}
        <h2 className="text-center text-3xl font-bold mb-6">
          Professional Experience
        </h2>
        <p className="text-center max-w-3xl mx-auto mb-12">
          My recent work includes feature development at Sony Interactive Entertainment,
          UI redesigns for Google’s Tech Equity Collective, and curriculum engineering
          for open-source education initiatives reaching 600+ developers.
        </p>

        {/* Job List - Vertical, Smooth Scroll, No Scrollbar */}
        <div
          className="space-y-8 overflow-y-auto max-h-[600px] px-4"
          style={{
            scrollbarWidth: 'none',       // Firefox
            msOverflowStyle: 'none',      // IE/Edge
            WebkitOverflowScrolling: 'touch', // Momentum scroll on iOS
            scrollBehavior: 'smooth',     // Smooth scrolling
          }}
        >
          {workHistory.map(({ company, role, period, description, logo }, idx) => (
            <div
              key={idx}
              className="bg-gray-100 dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition transform hover:scale-[1.02]"
            >
              <div className="flex items-center mb-6">
                <img
                  src={logo}
                  alt={`${company} logo`}
                  className="w-20 h-20 object-contain rounded"
                  loading="lazy"
                />
                <div className="ml-6">
                  <h3 className="font-bold text-2xl">{role}</h3>
                  <p className="text-lg text-gray-600 dark:text-gray-300">{company}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{period}</p>
                </div>
              </div>
              <p className="text-base text-gray-700 dark:text-gray-200">{description}</p>
            </div>
          ))}
        </div>

        {/* Logos */}
        <div className="flex items-center justify-center gap-12 mt-12 flex-wrap">
          {logos.map(({ src, alt }) => (
            <div key={alt} className="transition duration-300">
              <Image
                src={src}
                alt={alt}
                width={120}
                height={60}
                objectFit="contain"
                priority={true}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WorkHistorySection

