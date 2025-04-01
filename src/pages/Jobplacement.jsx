import { div } from 'framer-motion/client';
import React from 'react';

const Jobplacement = () => {
  // Sample data (you can later fetch from an API or database)
  const partnerships = [
    { 
      company: 'TechCorp', 
      role: 'Software Engineer', 
      location: 'Remote',
      description: 'TechCorp is a leading tech company specializing in innovative software solutions for businesses worldwide.',
      careerLink: 'https://techcorp.com/careers'
    },
    { 
      company: 'WebSolutions', 
      role: 'Frontend Developer', 
      location: 'New York',
      description: 'WebSolutions is a digital agency offering web development services to clients globally.',
      careerLink: 'https://websolutions.com/careers'
    },
  ];

  const jobListings = [
    { 
      title: 'React Developer', 
      company: 'TechCorp', 
      deadline: 'April 10, 2025',
      description: 'We are looking for a passionate React Developer to join our remote team and work on exciting projects.',
      applyLink: 'https://techcorp.com/jobs/react-developer'
    },
    { 
      title: 'Backend Developer', 
      company: 'WebSolutions', 
      deadline: 'April 15, 2025',
      description: 'Join our New York office and work on building robust backend services and APIs.',
      applyLink: 'https://websolutions.com/jobs/backend-developer'
    },
  ];

  const alumniSuccess = [
    { 
      name: 'Alice', 
      jobTitle: 'Full Stack Developer', 
      company: 'TechCorp',
      story: 'After completing the full-stack development course, Alice secured a position at TechCorp where she now leads a team of developers working on cutting-edge projects.',
      skillsLearned: ['React', 'Node.js', 'MongoDB', 'Express'],
    },
    { 
      name: 'Bob', 
      jobTitle: 'Frontend Developer', 
      company: 'WebSolutions',
      story: 'Bob started his career as a junior frontend developer, but after the training, he became an expert in React.js and was promoted to a senior position.',
      skillsLearned: ['React', 'JavaScript', 'CSS', 'HTML'],
    },
  ];

  return (
    <div className='bg-blue-50 min-h-screen flex flex-col items-center'>
    <div className="max-w-6xl mt-20 mx-auto p-8 space-y-12">
      {/* Partnerships Section */}
      <section className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Partnerships with Hiring Companies</h2>
        <ul className="space-y-6">
          {partnerships.map((partnership, index) => (
            <li key={index} className="flex flex-col p-3 border-b border-gray-200">
              <div className="flex justify-between mb-2">
                <strong className="text-lg">{partnership.company}</strong>
                <a href={partnership.careerLink} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:underline">View Careers</a>
              </div>
              <p className="text-sm text-gray-500">{partnership.role} - {partnership.location}</p>
              <p className="text-sm text-gray-600 mt-2">{partnership.description}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Job Listings Section */}
      <section className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Job Listings</h2>
        <ul className="space-y-6">
          {jobListings.map((job, index) => (
            <li key={index} className="flex flex-col p-3 border-b border-gray-200">
              <div className="flex justify-between mb-2">
                <strong className="text-lg">{job.title}</strong>
                <span className="text-sm font-medium text-blue-600">{job.deadline}</span>
              </div>
              <p className="text-sm text-gray-500">at {job.company}</p>
              <p className="text-sm text-gray-600 mt-2">{job.description}</p>
              <a href={job.applyLink} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:underline mt-2">Apply Now</a>
            </li>
          ))}
        </ul>
      </section>

      {/* Alumni Success Stories Section */}
      <section className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Alumni Success Stories</h2>
        <ul className="space-y-6">
          {alumniSuccess.map((alumni, index) => (
            <li key={index} className="flex flex-col p-3 border-b border-gray-200">
              <div className="mb-2">
                <strong className="text-lg">{alumni.name}</strong> - {alumni.jobTitle} at {alumni.company}
              </div>
              <p className="text-sm text-gray-600">{alumni.story}</p>
              <div className="mt-2">
                <strong className="text-sm text-gray-700">Skills Learned:</strong>
                <ul className="list-disc ml-6 text-sm text-gray-500">
                  {alumni.skillsLearned.map((skill, skillIndex) => (
                    <li key={skillIndex}>{skill}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
    </div>
  );
};

export default Jobplacement;
