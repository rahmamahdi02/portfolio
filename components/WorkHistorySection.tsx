import React from 'react'

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
  // Add more jobs as needed
]

export const WorkHistorySection = () => {
  return (
    <section id="workhistory">
      <div className="text-xl my-12 pb-12 md:pb-10">
        <hr className="w-6 h-1 mx-auto my-10 bg-yellow-500 border-0 rounded" />
        <div className="flex flex-col space-y-10 md:space-y-0 md:space-x-10 md:p-4 md:flex-row md:text-left">
          {/* Left side intro */}
          <div className="md:w-1/2">
            <h2 className="text-center text-3xl font-bold mb-6 md:text-left">
              Work History
            </h2>
            <p>
              Over the years, I’ve contributed to cutting-edge projects at top tech companies, driving product innovation and delivering scalable software solutions. Below is a quick interactive overview of some key roles I've held.
            </p>
          </div>

          {/* Right side horizontal scroll of jobs */}
          <div className="md:w-1/2">
            <div className="flex space-x-6 overflow-x-auto scrollbar-thin scrollbar-thumb-yellow-500 scrollbar-track-gray-100 py-4 px-2">
              {workHistory.map(({ company, role, period, description, logo }, idx) => (
                <div
                  key={idx}
                  className="min-w-[280px] flex-shrink-0 bg-gray-100 dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition"
                >
                  <div className="flex items-center mb-4">
                    <img
                      src={logo}
                      alt={`${company} logo`}
                      className="w-12 h-12 object-contain rounded"
                      loading="lazy"
                    />
                    <div className="ml-4">
                      <h3 className="font-bold text-lg">{role}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{company}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{period}</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700 dark:text-gray-200">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WorkHistorySection
