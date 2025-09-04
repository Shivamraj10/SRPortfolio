import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: "Quality Engineer",
    company: "Jabil Circuit India Pvt. Ltd.",
    date: "Sept 2022 - Sept 2023",
    responsibilities: [
      "Monitored and ensured quality standards across manufacturing processes.",
      "Collaborated with cross-functional teams to improve production efficiency.",
      "Proposed process improvements to enhance product quality and reduce defects.",
    ],
  },
  {
    job: "React JS Intern",
    company: "Celebal Technologies",
    date: " May 2025 - July 2025",
    responsibilities: [
      "Developed reusable and responsive components using React.js and Tailwind CSS.",
      "Optimized frontend performance for large-scale web applications.",
      "Contributed design ideas to improve overall user experience and accessibility.",
    ],
  },
  {
    job: "Full Stack Intern",
    company: "Javadhi Limited",
    date: "June 2025 - Present",
    responsibilities: [
      "Developed and maintained responsive UI components using React.js and Tailwind CSS.",
      "Integrated RESTful APIs and handled state management with React Context API.",
      "Improved performance, accessibility, and cross-browser compatibility of web interfaces.",
    ],
  },
];

const AllExperiences = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => {
        return (
          <>
            <SingleExperience key={index} experience={experience} />
            {index < 2 ? (
              <motion.div
                variants={fadeIn("right", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
                <FaArrowRightLong className="text-5xl text-orange lg:block sm:hidden" />
              </motion.div>
            ) : (
              ""
            )}
          </>
        );
      })}
    </div>
  );
};

export default AllExperiences;
