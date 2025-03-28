import React, {useState} from 'react';


import CSSImage from '../assets/CSS_icon.png';
import JSImage from '../assets/JS_icon.png';
import TypeScriptImage from '../assets/typescript_icon.png';
import ReactImage from '../assets/react.svg';
import RestApiImage from '../assets/RestApi.gif';
import GraphQLImage from '../assets/graphql_icon.png';
import SQLImage from '../assets/SQL_icon.png';
import MongoDBImage from '../assets/mongodb.png';
import CRUDImage from '../assets/CRUD_icon.png';
import NodeJSImage from '../assets/nodejs-logo.svg';
import GitHubImage from '../assets/GitHUB.svg';
import MicrosoftOfficeImage from '../assets/MicrosoftOffice.png';
import FigmaImage from '../assets/Figma.png';

type Skill = {
  id: number;
  label: string;
  icon: string;
  description: string;
};


const skills: Skill[] = [
  {
    id: 1,
    label: 'CSS/HTML',
    icon: CSSImage,
    description: 'CSS and HTML are the building blocks of web development, providing structure and styling for web pages. Leverage semantic HTML for accessibility and CSS features like Flexbox, Grid, and animations to create responsive, visually appealing designs. Mastering these tools ensures your applications are user-friendly and optimized for various devices.'

  },
  {
    id: 2,
    label: 'JavaScript',
    icon: JSImage,
    description: 'JavaScript enables dynamic and interactive web applications by manipulating the DOM and handling events. Use it with modern ES6+ features to build client-side logic and integrate it with libraries like React for scalable SPAs. Its versatility allows you to create everything from simple scripts to complex, feature-rich applications.'

  },
  {
    id: 3,
    label: 'TypeScript',
    icon: TypeScriptImage,
    description: 'TypeScript adds static typing to JavaScript, improving code maintainability and reducing runtime errors. Use it with React to build robust, scalable applications with better tooling and type safety. It also enhances collaboration in teams by enforcing type contracts and improving code readability.',
  },
  {
    id: 4,
    label: 'ReactJS',
    icon:  ReactImage,
    description: 'React is a library for building reusable UI components and managing state efficiently. Use it to create dynamic SPAs, leveraging tools like React Router for navigation and React Query for data fetching. Its component-based architecture simplifies development and makes your codebase more modular and maintainable.',
  },
  {
    id: 5,
    label: 'REST API',
    icon: RestApiImage,
    description: 'REST APIs enable communication between the frontend and backend using HTTP methods. Use them to fetch and send data, integrating with tools like Axios or Fetch API for seamless interaction. REST is widely supported and provides a standardized way to connect your application to external services.',
  },
  {
    id: 6,
    label: 'GraphQL',
    icon: GraphQLImage,
    description: 'GraphQL allows clients to request only the data they need, reducing over-fetching. Use it with Apollo Client in React for efficient data querying and mutation in modern applications. Its flexibility makes it ideal for complex applications with diverse data requirements.',
  },
];

const skills2: Skill[] = [
  {
    id: 1,
    label: 'SQL',
    icon: SQLImage,
    description: 'SQL is used to manage relational databases, enabling efficient data storage and retrieval. Use it with ORMs like Sequelize to simplify database interactions in backend applications. Its structured approach ensures data integrity and is ideal for applications requiring complex relationships between entities.',
  },
  {
    id: 2,
    label: 'MongoDB',
    icon: MongoDBImage,
    description: 'MongoDB is a NoSQL database ideal for unstructured or semi-structured data. Use it with Mongoose for schema validation and scalable backend solutions. Its flexibility makes it perfect for real-time applications, such as chat systems or analytics dashboards.',
  },
  {
    id: 3,
    label: 'CRUD Operations',
    icon: CRUDImage,
    description: 'CRUD operations (Create, Read, Update, Delete) are essential for managing data in applications. Implement them in backend APIs using frameworks like Express.js or NestJS. They form the backbone of most web applications, enabling seamless interaction with databases.',
  },
  {
    id: 4,
    label: 'NodeJS',
    icon: NodeJSImage,
    description: 'Node.js is a runtime for running JavaScript on the server, ideal for scalable, real-time applications. Use it with Express.js for routing and middleware or NestJS for structured backend development. Its non-blocking architecture makes it highly efficient for handling concurrent requests.',
  },
];

const skills3: Skill[] = [
  {
    id: 1,
    label: 'GitHub',
    icon: GitHubImage,
    description: 'GitHub is a platform for version control and collaboration. Use it to manage code repositories, track changes, and collaborate with teams using pull requests and branches. It also integrates with CI/CD pipelines, enabling automated testing and deployment workflows.',
  },
  {
    id: 2,
    label: 'Microsoft Office',
    icon: MicrosoftOfficeImage,
    description: 'Microsoft Office tools like Excel and PowerPoint are essential for data analysis, documentation, and presentations. Use them to organize project data, create reports, and communicate effectively with stakeholders. Excel’s advanced features, like pivot tables and formulas, are particularly useful for tracking project metrics.',
  },
  {
    id: 3,
    label: 'User Interface',
    icon: FigmaImage,
    description: 'Tools like Figma or Adobe XD help create visually appealing designs and prototypes. Use them to design user interfaces and ensure a seamless user experience before development. These tools also facilitate collaboration between developers and designers, ensuring the final product aligns with user needs.',
  },
];



export const Skillset: React.FC = () => {
  const [selectedFrontendSkill, setSelectedFrontendSkill] = useState<string>(skills[0].label);
  const [selectedBackendSkill, setSelectedBackendSkill] = useState<string>(skills2[0].label);
  const [selectedOtherSkill, setSelectedOtherSkill] = useState<string>(skills3[0].label);

  return (
    <div className="flex flex-col items-center gap-8">
      {/* Frontend Stack */}
      <div className="w-full flex flex-col items-baseline border-zinc-500/50 border-4 border-double p-2">
        <h2 className="text-2xl font-bold mb-8 mt-4">Frontend Stack</h2>
        <ul className="flex flex-col sm:flex-row justify-between w-full  flex-wrap mb-4">
          {skills.map((skill) => (
            <li
              key={skill.id}
              onClick={() => setSelectedFrontendSkill(skill.label)}
              className={`flex flex-row items-center p-4 w-full sm:w-1/6 rounded-lg shadow-md cursor-pointer ${
                selectedFrontendSkill === skill.label ? 'bg-blue-100' : ''
              }`}
            >
              <img
                src={skill.icon}
                alt={`${skill.label} icon`}
                className="w-12 h-12 mr-4"
              />
              <div>
                <h3 className="text-lg font-semibold">{skill.label}</h3>
              </div>
            </li>
          ))}
        </ul>
        <p className="text-left text-lg text-gray-700 mt-6 mb-6">
          {skills.find((skill) => skill.label === selectedFrontendSkill)?.description}
        </p>
      </div>

      {/* Backend Stack */}
      <div className="w-full flex flex-col items-baseline border-zinc-500/50 border-4 border-double p-2">
        <h2 className="text-2xl font-bold mb-8 mt-4">Backend Stack</h2>
        <ul className="flex flex-col sm:flex-row justify-start w-full  flex-wrap mb-4">
          {skills2.map((skill) => (
            <li
              key={skill.id}
              onClick={() => setSelectedBackendSkill(skill.label)}
              className={`flex flex-row items-center p-4 w-full sm:w-1/6 rounded-lg shadow-md cursor-pointer ${
                selectedBackendSkill === skill.label ? 'bg-blue-100' : ''
              }`}
            >
              <img
                src={skill.icon}
                alt={`${skill.label} icon`}
                className="w-12 h-12 mr-4"
              />
              <div>
                <h3 className="text-lg font-semibold">{skill.label}</h3>
              </div>
            </li>
          ))}
        </ul>
        <p className="text-left text-lg text-gray-700 mt-6 mb-6">
          {skills2.find((skill) => skill.label === selectedBackendSkill)?.description}
        </p>
      </div>

      {/* Other Skills */}
      <div className="w-full flex flex-col items-baseline border-zinc-500/50 border-4 border-double p-2">
        <h2 className="text-2xl font-bold mb-8 mt-4">Other Skills</h2>
        <ul className="flex flex-col sm:flex-row justify-start w-full  flex-wrap mb-4">
          {skills3.map((skill) => (
            <li
              key={skill.id}
              onClick={() => setSelectedOtherSkill(skill.label)}
              className={`flex flex-row items-center p-4 w-full sm:w-1/6 rounded-lg shadow-md cursor-pointer ${
                selectedOtherSkill === skill.label ? 'bg-blue-100' : ''
              }`}
            >
              <img
                src={skill.icon}
                alt={`${skill.label} icon`}
                className="w-12 h-12 mr-4"
              />
              <div>
                <h3 className="text-lg font-semibold">{skill.label}</h3>
              </div>
            </li>
          ))}
        </ul>
        <p className="text-left text-lg text-gray-700 mt-6 mb-6">
          {skills3.find((skill) => skill.label === selectedOtherSkill)?.description}
        </p>
      </div>
    </div>
  );
};