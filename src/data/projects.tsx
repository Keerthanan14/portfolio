import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowDownUpIcon, ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiChakraui,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
  SiVite,
  SiNetlify,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiApachemaven,
  SiCplusplus,
  SiArduino,
  SiPhp,
  SiLaravel,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import css from "styled-jsx/css";
const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link
        className="font-mono underline flex gap-2"
        rel="noopener"
        target="_new"
        href={live}
      >
        <Button variant={"default"} size={"sm"}>
          Visit Website
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  chakra: {
    title: "Chakra UI",
    bg: "black",
    fg: "white",
    icon: <SiChakraui />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  prisma: {
    title: "prisma",
    bg: "black",
    fg: "white",
    icon: <SiPrisma />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  reactQuery: {
    title: "React Query",
    bg: "black",
    fg: "white",
    icon: <SiReactquery />,
  },
  shadcn: {
    title: "ShanCN UI",
    bg: "black",
    fg: "white",
    icon: <SiShadcnui />,
  },
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  yjs: {
    title: "Y.js",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  sockerio: {
    title: "Socket.io",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  vue: {
    title: "Vue.js",
    bg: "black",
    fg: "white",
    icon: <SiVuedotjs />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  sanity: {
    title: "Sanity",
    bg: "black",
    fg: "white",
    icon: <SiSanity />,
  },
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  gsap: {
    title: "GSAP",
    bg: "black",
    fg: "white",
    icon: "",
  },
  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  supabase: {
    title: "Supabase",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
  },
  // +
  vite: {
    title: "Vite",
    bg: "black",
    fg: "white",
    icon: <SiVite />,
  },
  openai: {
    title: "OpenAI",
    bg: "black",
    fg: "white",
    icon: <img src="assets/icons/openai-svgrepo-com_white.svg" alt="OpenAI"/>,
  },
  netlify: {
    title: "Netlify",
    bg: "black",
    fg: "white",
    icon: <SiNetlify/>,
  },
  html: {
    title: "HTML5",
    bg: "black",
    fg: "white",
    icon: <SiHtml5/>,
  },
  css: {
    title: "CSS3",
    bg: "black",
    fg: "white",
    icon: <SiCss3/>,
  },
  bootstrap: {
    title: "Bootstrap",
    bg: "black",
    fg: "white",
    icon: <SiBootstrap/>,
  },
  maven: {
    title: "Maven",
    bg: "black",
    fg: "white",
    icon: <SiApachemaven/>,
  },
  java: {
    title: "Java",
    bg: "black",
    fg: "white",
    icon: <img src="assets/icons/icons8-java.svg" alt="Java"/>,
  },
  cplusplus: {
    title: "C++",
    bg: "black",
    fg: "white",
    icon: <SiCplusplus/>,
  },
  arduino: {
    title: "Arduino",
    bg: "black",
    fg: "white",
    icon: <SiArduino/>,
  },
  php: {
    title: "PHP",
    bg: "black",
    fg: "white",
    icon: <SiPhp/>,
  },
  laravel: {
    title: "Laravel",
    bg: "black",
    fg: "white",
    icon: <SiLaravel/>,
  },
  blade: {
    title: "Blade",
    bg: "black",
    fg: "white",
    icon: <SiLaravel/>,
  },
};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};
const projects: Project[] = [
  

  // +
  { // 01. Coffee Shop project
    id: "coffeeshop",
    category: "Web Development",
    title: "Coffee Shop",
    src: "/assets/projects-screenshots/CoffeeShop/2.jpeg",
    screenshots: ["1.jpeg", "2.jpeg", "3.jpeg"],
    live: "https://github.com/luxaprathan/Coffee-shop",
    github:"https://github.com/luxaprathan/Coffee-shop",
    skills: {
      frontend: [PROJECT_SKILLS.html, PROJECT_SKILLS.css, PROJECT_SKILLS.js],
      backend: [PROJECT_SKILLS.php],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Welcome to Coffee Shop - a modern, full-featured web application for managing your favorite coffee shop experience. 
            Browse our delicious menu, place orders online, and enjoy seamless service. Built with responsive design and 
            user-friendly interface, this application brings the warmth of your local coffee shop to your fingertips. 
            Perfect for coffee lovers who want convenience without compromising on quality!
          </TypographyP>
          <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
            <Link
              className="font-mono underline flex gap-2"
              rel="noopener"
              target="_new"
              href={this.github!}
            >
              <Button variant={"default"} size={"sm"}>
                Github
                <ArrowUpRight className="ml-3 w-5 h-5" />
              </Button>
            </Link>
          </div>
          <SlideShow
            images={[
              `${BASE_PATH}/CoffeeShop/1.jpeg`,
              `${BASE_PATH}/CoffeeShop/2.jpeg`,
              `${BASE_PATH}/CoffeeShop/3.jpeg`,
            ]}
          />
        </div>
      );
    },
  },
  { // 02. Garden store project
    id: "gardenstore",
    category: "Web Development",
    title: "Garden store",
    src: "/assets/projects-screenshots/GardenStore/1.jpeg",
    screenshots: ["/assets/projects-screenshots/GardenStore/1.jpeg"],
    skills: {
      frontend: [
        PROJECT_SKILLS.html,
        PROJECT_SKILLS.css,
        PROJECT_SKILLS.js,
        PROJECT_SKILLS.bootstrap,
      ],
      backend: [
        PROJECT_SKILLS.php,
      ],
    },
    live: "https://github.com/luxaprathan/Garden",
    github: "https://github.com/luxaprathan/Garden",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Garden Store
          </TypographyP>
          <TypographyP className="font-mono ">
            Discover the perfect plants for your home and garden! Garden Store is a comprehensive 
            e-commerce platform featuring a wide variety of plants, gardening tools, and accessories. 
            Browse through our curated collection, add items to your cart, and create your dream garden. 
            With a user-friendly interface and secure checkout process, bringing nature to your doorstep 
            has never been easier. Built with modern web technologies for a seamless shopping experience!
          </TypographyP>
          <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
            <Link
              className="font-mono underline flex gap-2"
              rel="noopener"
              target="_new"
              href={this.github!}
            >
              <Button variant={"default"} size={"sm"}>
                Github
                <ArrowUpRight className="ml-3 w-5 h-5" />
              </Button>
            </Link>
          </div>
          <TypographyH3 className="my-4 mt-8">Features</TypographyH3>
          <p className="font-mono mb-2">
            • Browse extensive plant catalog with detailed descriptions
            <br />• Shopping cart and checkout functionality
            <br />• User-friendly product search and filtering
            <br />• Responsive design for mobile and desktop
            <br />• Secure and easy-to-use interface
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/GardenStore/2.jpeg`,
              `${BASE_PATH}/GardenStore/3.jpeg`,
              `${BASE_PATH}/GardenStore/4.jpeg`,
              `${BASE_PATH}/GardenStore/5.jpeg`,
            ]}
          />
        </div>
      );
    },
  },
  { // 03. Portfolio project
    id: "portfolio",
    category: "Portfolio",
    title: "Luxprathan | Portfolio",
    src: "/assets/projects-screenshots/myportfolio/landing.png",
    screenshots: ["assets/projects-screenshots/myportfolio/landing.png"],
    live: "https://portfolio-git-main-luxaprathan.vercel.app?_vercel_share=ZFItMhpWKilvJz1LgNPLyIf6puuXt4X3",
    github:"https://github.com/luxaprathan/portfolio",
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.shadcn,
        PROJECT_SKILLS.aceternity,
        PROJECT_SKILLS.framerMotion,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.spline,
      ],
      backend: [],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Welcome to my digital playground, where creativity meets code in the
            dopest way possible.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">
            Beautiful 3D Objects{" "}
          </TypographyH3>
          <p className="font-mono mb-2">
            Did you see that 3D keyboard modal? Yeah! I made that. That
            interactive keyboard is being rendered in 3D on a webpage 🤯, and
            pressing each keycap reveals a skill in a goofy way. It&apos;s like
            typing, but make it art.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/myportfolio/landing.png`,
              `${BASE_PATH}/portfolio/skills.png`,
            ]}
          />
          <TypographyH3 className="my-4 ">Space Theme</TypographyH3>
          <p className="font-mono mb-2">
            Dark background + floating particles = out-of-this-world cool.
          </p>
          <SlideShow images={[`${BASE_PATH}/myportfolio/navbar.png`]} />
          <TypographyH3 className="my-4 mt-8">Projects</TypographyH3>

          <p className="font-mono mb-2">
            My top personal and freelance projects — no filler, all killer.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/myportfolio/projects.png`,
              `${BASE_PATH}/myportfolio/project.png`,
            ]}
          />
          <p className="font-mono mb-2 mt-8 text-center">
            This site&apos;s not just a portfolio — it&apos;s a whole vibe.
          </p>
        </div>
      );
    },
  },
  { // 04. MediCarePlus
    id: "medicareplus",
    category: "Full stack",
    title: "MediCarePlus",
    src: "/assets/projects-screenshots/MediCarePlus/1.jpg",
    screenshots: ["1.jeg", "2.jpg"],
    live: "https://github.com/luxaprathan/MediCarePlus",
    github:"https://github.com/luxaprathan/MediCarePlus",
    skills: {
      frontend: [],
      backend: [PROJECT_SKILLS.java, PROJECT_SKILLS.maven],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            MediCarePlus is a comprehensive healthcare management system designed to streamline 
            medical services and patient care. This robust platform enables efficient appointment 
            scheduling, patient record management, and healthcare provider coordination. Built with 
            Java and Maven for reliability and scalability, it offers secure data handling and 
            seamless integration with existing healthcare infrastructure. Empowering healthcare 
            professionals to deliver better patient outcomes with modern technology!
          </TypographyP>
          <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
            <Link
              className="font-mono underline flex gap-2"
              rel="noopener"
              target="_new"
              href={this.github!}
            >
              <Button variant={"default"} size={"sm"}>
                Github
                <ArrowUpRight className="ml-3 w-5 h-5" />
              </Button>
            </Link>
          </div>
          <SlideShow
            images={[
              `${BASE_PATH}/MediCarePlus/1.jpg`,
              `${BASE_PATH}/MediCarePlus/2.jpg`,
            ]}
          />
        </div>
      );
    },
  },
  { // 05. RentTent project
    id: "renttent",
    category: "Full stack",
    title: "RentTent",
    src: "/assets/projects-screenshots/RentTent/1.jpeg",
    screenshots: ["1.jpeg", "2.jpeg", "3.jpeg","4.jpeg","5.jpeg","6.jpeg","7.jpeg"],
    live: "https://github.com/luxaprathan/RentTent",
    github:"https://github.com/luxaprathan/RentTent",
    skills: {
      frontend: [PROJECT_SKILLS.html, PROJECT_SKILLS.css, PROJECT_SKILLS.js],
      backend: [PROJECT_SKILLS.laravel, PROJECT_SKILLS.blade, PROJECT_SKILLS.php],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            RentTent is a futuristic, all-in-one web platform that connects boarding seekers with 
            trusted room providers and local food vendors. Designed with a premium, user-friendly 
            interface, RentTent simplifies the entire process of finding safe accommodation and 
            subscribing to meal services in one place. Built with Laravel, Blade, PHP, and HTML 
            for robust performance and seamless user experience!
          </TypographyP>
          <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
            <Link
              className="font-mono underline flex gap-2"
              rel="noopener"
              target="_new"
              href={this.github!}
            >
              <Button variant={"default"} size={"sm"}>
                Main Project
                <ArrowUpRight className="ml-3 w-5 h-5" />
              </Button>
            </Link>
            <Link
              className="font-mono underline flex gap-2"
              rel="noopener"
              target="_new"
              href="https://github.com/luxaprathan/RentTent-admins"
            >
              <Button variant={"default"} size={"sm"}>
                Admin Panel
                <ArrowUpRight className="ml-3 w-5 h-5" />
              </Button>
            </Link>
          </div>
          <SlideShow
            images={[
              `${BASE_PATH}/RentTent/1.jpeg`,
              `${BASE_PATH}/RentTent/2.jpeg`,
              `${BASE_PATH}/RentTent/3.jpeg`,
              `${BASE_PATH}/RentTent/4.jpeg`,
              `${BASE_PATH}/RentTent/5.jpeg`,
              `${BASE_PATH}/RentTent/6.jpeg`,
              `${BASE_PATH}/RentTent/7.jpeg`,
            ]}
          />
        </div>
      );
    },
  },
  
];
export default projects;
