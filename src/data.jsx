/* eslint-disable react-refresh/only-export-components */
import { ImRocket } from "react-icons/im";
import { CgEyeAlt } from "react-icons/cg";
import { BsFire } from "react-icons/bs";
import { teamImages } from "./assets/Agency/HomePage Images";
import { testImages } from "./assets/Agency/HomePage Images";

export const details = [
  {
    h3: "12k+",
    p: "Project COmplete",
  },
  {
    h3: "7k+",
    p: "Happy Client",
  },
  {
    h3: "10+",
    p: "Years Experience",
  },
  {
    h3: "270+",
    p: "Win Awards",
  },
];

export const DesignData = [
  {
    h1: "Branding Design",
    p: "Creating memorable brand identities that resonate with target audiences and reflect core values.",
    bullets: [
      "Visual Identity",
      "Brand Guidelines",
      "Logos",
      "Typography",
      "Color Palettes",
    ],
    svg: <ImRocket />,
  },

  {
    h1: "Interactive Design",
    p: "Crafting intuitive user experiences through thoughtful design and functionality.",
    bullets: [
      "User Experience",
      "Wireframes",
      "Prototypes",
      "Interactive Design",
      "User Interface",
    ],
    svg: <CgEyeAlt />,
  },
  {
    h1: "Illustration Modeling",
    p: "Bringing ideas to life with captivating illustrations and 3D models that engage and inspire.",
    bullets: [
      "Conceptualization",
      "Sketching",
      "Digital Illustration",
      "3D Modeling",
      "Rendering",
    ],
    svg: <BsFire />,
  },
];

export const links = [
  {
    id: "01",
    text: "Web & Mobile Development",
  },
  {
    id: "02",
    text: "Interaction Design",
  },
  {
    id: "03",
    text: "Digital Marketing",
  },
  {
    id: "04",
    text: "Branding & Stratergy",
  },
];

export const teamDetails = [
  {
    img: teamImages[0],
    name: "Aimee Colderon",
    title: "Web Developer",
  },
  {
    img: teamImages[1],
    name: "Raymond Horn",
    title: "Digital Marketer",
  },
  {
    img: teamImages[2],
    name: "Linda Towner",
    title: "App Designer",
  },
];

export const testimoialsDetails = [
  {
    img: testImages[0],
    name: "Chester Feil",
    text: "Working with their digital solution agency was a game-changer for our business - their innovative approach and expertise propelled our online presence to new heights.",
  },
  {
    img: testImages[1],
    name: "Malina Williams",
    text: "Their branding design services helped us establish a strong brand identity that truly resonated with our target audience, leading to increased brand recognition and customer loyalty.",
  },
];

export const updateDetails = [
  {
    type: "UI design",
    date: "15Dec 2022",
    text: "What is Digital Agency Marketing",
  },
  {
    type: "Marketing",
    date: "15Dec 2022",
    text: "A Simple Social Media Marketing Checklist",
  },
  {
    type: "Business",
    date: "15Dec 2022",
    text: "Support During the Exponential Growth",
  },
  {
    type: "Marketing",
    date: "15Dec 2022",
    text: "The Importance of Making Content Right Now",
  },
];

export const footerDetails = [
  {
    text: "Home",
    link: "#",
  },
  {
    text: "About Us",
    link: "#about",
  },
  {
    text: "Meet our team",
    link: "#team",
  },
  {
    text: "Our Work",
    link: "#portfolio",
  },
  {
    text: "Contact",
    link: "#contact",
  },
  {
    text: "Testimonials",
    link: "#testimonials",
  },
 
];
