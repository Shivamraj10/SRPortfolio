import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p className="text-justify text-lg max-w-3xl">
        Hey there! I’m Shivam Raj — a creative and detail-oriented Full Stack Developer with a strong passion for crafting clean, efficient, and user-focused digital experiences.

        I specialize in building dynamic, scalable, and interactive web applications using modern technologies like Java, JavaScript, React.js, Node.js, Express.js, and Tailwind CSS. My solid foundation in Data Structures & Algorithms (DSA) fuels my problem-solving abilities and drives me to write optimized, maintainable code.

        🎓 I'm currently pursuing my B.Tech in Computer Science Engineering from Galgotias University, where I continue to enhance my technical and collaborative skills through academic and real-world projects.

        💻 So far, I've worked on a variety of impactful projects, including:

        • BookStore App - An interactive online bookstore with user authentication and cart features.
        • SmartGlass App - A role-based learning platform with smart dashboards.
        • Syncfusion Dashboard - A modern admin dashboard with charts, kanban, calendar, and responsive UI.
        Whether it's crafting sleek front-ends or engineering robust backends, I love transforming ideas into working software that makes a difference.
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
