import {
  mobile,
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  threejs,
  vuejs,
  web3js,
  exinous,
  studantdotin,
  nisb,
  gfg,
  bootstrap,
  creator,
  arcompanion,
  chatalong,
  vorm
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Development",
    icon: web,
  },
  {
    title: "Backend Development",
    icon: backend,
  },
  {
    title: "Cross Platform Development",
    icon: mobile,
  },
  {
    title: "UI / UX",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Vue JS",
    icon: vuejs,
  },
  {
    name: "Web3 JS",
    icon: web3js,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Frontend Development Intern",
    company_name: "Exinous Technologies, Inc.",
    icon: exinous,
    iconBg: "#E6DEDD",
    date: "August 2022 - Present",
    points: [
      "Re developed a vuetify v-data-table component used by 10+ pages by cutting down the code by 50%.",
      "Developed digital invoice for the vendors cutting down the manual work by 100%.",
      "Worked with tools and framework like TypeScript and Vue.js for building responsive, fast and scalable softwares.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Frontend Development Intern",
    company_name: "Studant.in",
    icon: studantdotin,
    iconBg: "#383E56",
    date: "Jul 2021 – Aug 2021",
    points: [
      "Improved and fixed the UI of 10+ projects to make it interactive and responsive as per client requirements.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Computer Society Chairperson",
    company_name: "NISB",
    icon: nisb,
    iconBg: "#000000",
    date: "2022 - Present",
    points: [
      "Serving as the Computer Society Chairperson at IEEE Student Branch at The National Institute of Engineering, Mysore.",
      "Empowering Computer Science and Engineering Professionals to Fuel Continued Advancement",
      "A not-for-profit organization, the Institute of Electrical and Electronics Engineers (IEEE) is the world's largest technical professional organization dedicated to advancing technology for the benefit of humanity."
    ],
  },
  {
    title: "Chairperson",
    company_name: "NIE GFG Student Chapter",
    icon: gfg,
    iconBg: "#ffffff",
    date: "Jan 2023 - Present",
    points: [
      "Geeksforgeeks Student Chapter is a student-led organization at NIE that provides an opportunity to engage with the latest technologies and stay ahead of the curve.",
      "We provide a platform for students to collaborate, learn, and build innovative projects with the help of our experienced mentors.",
      "Our events are filled with exciting activities, expert talks, and workshops that are sure to help you get the most out of your college experience.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Bagged an internship for the role of Frontend Developer in the first year off-campus.",
    name: "Internship",
    id: 1,
  },
  {
    testimonial:
      "Working with a startup for the role of Frontend Developer as an intern since my second year off-campus.",
    name: "Internship",
    id: 2,
  },
  {
    testimonial:
      "Won the 1st position of NIE IEEE Web-Design competition consecutively for the year 2021 and 2022.",
    name: "Web Dev",
    id: 3,
  },
  {
    testimonial:
      "Won the 6th position in a National level Hackathon conducted by INeuron.",
    name: "Hackathon",
    id: 4,
  },
  {
    testimonial:
      "Elected as the Computer Society Chairperson 2023 at NIE IEEE Student Branch.",
    name: "IEEE Computer Society",
    id: 5,
  },
  {
    testimonial:
      "Elected as the Chairperson of GeeksforGeeks Student Chapter 2023.",
    name: "Techical Student Society",
    id: 6,
  },
  {
    testimonial:
      "Built & Delivered 2 freelance projects for businesses.",
    name: "Freelancing",
    id: 7,
  },
  {
    testimonial:
      "Took workshops on Python, JavaScript, Git, etc. and mentored students from different colleges across India.",
    name: "Workshop",
    id: 8,
  },
  {
    testimonial:
      "Developed and maintained the website of IEEE Conference at NIE (ICRTEC’23) for the college.",
    name: "Volunteering",
    id: 9,
  },
];

const projects = [
  {
    name: "Chat Along",
    description:
      "A real-time Chat Application built and designed on React.js and Firebase for Authentication through email id and password with an avatar image as the display picture and Firestore database.",
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "firebase auth",
        color: "green-text-gradient",
      },
      {
        name: "firestore database",
        color: "pink-text-gradient",
      },
      {
        name: "bootstrap",
        color: "blue-text-gradient",
      },
    ],
    image: chatalong,
    source_code_link: "https://github.com/ahmadsohail404/chat-app",
    live_site_link: "https://chat-along.netlify.app"
  },
  {
    name: "VORM - The Form Builder",
    description:
      "A Form Builder Web App built using Vue.js and other libraries like Bootstrap, Vue Draggable, JSON Viewer to build a customized form and the data can be exported as a JSON/csv/txt/xls file.",
    tags: [
      {
        name: "vue.js",
        color: "blue-text-gradient",
      },
      {
        name: "vuetify",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
      {
        name: "vue-draggable",
        color: "green-text-gradient",
      },
    ],
    image: vorm,
    source_code_link: "https://github.com/ahmadsohail404/vorm-the-formbuilder",
    live_site_link: "https://vorm-the-formbuilder.netlify.app/#/"
  },
  {
    name: "AR Companion",
    description:
      "This android app uses Computer Vision API to read & extract the text from anywhere . Based on the coordinate of the screen tapped, the app finds the meaning and details of the word and the subject can be viewed in the open space too. AR Core and AR Market API are used to visualise the model.",
    tags: [
      {
        name: "Kotlin",
        color: "blue-text-gradient",
      },
      {
        name: "Javascript",
        color: "green-text-gradient",
      },
      {
        name: "Dictionary API",
        color: "pink-text-gradient",
      },
      {
        name: "AR Market API",
        color: "pink-text-gradient",
      },
      {
        name: "AR Core",
        color: "green-text-gradient",
      },
      {
        name: "OCR-ML",
        color: "blue-text-gradient",
      },
    ],
    image: arcompanion,
    source_code_link: "https://github.com/BugsApocalypse/AR-companion",
    live_site_link: "https://play.google.com/store/apps/details?id=com.adityagupta.arcompanion"
  },
];

export { services, technologies, experiences, testimonials, projects };
