import {
  BenyLogo,
  GAlbumLogo,
  MaxsoftLogo,
  WatcherAILogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Beny Dishon",
  initials: "BD",
  location: "Chennai, India, IST (UTC+5:30)",
  locationLink: "https://www.google.com/maps/place/Chennai",
  about: "Student focused on building products with extra attention to detail",
  summary:
    "As a student and aspiring Full Stack Developer, I have acquired multiple certifications in full stack development. Additionally, I have completed various freelance projects. My current expertise revolves around TypeScript, NextJS, Node.js, and MongoDB. I am continuously seeking new opportunities to expand my knowledge and skills.",
  avatarUrl:
    "https://media.licdn.com/dms/image/D5603AQFj_Qtbn6tt8g/profile-displayphoto-shrink_200_200/0/1705775112790?e=2147483647&v=beta&t=Nc0xGxZJR7OZKo3fbKh4ty6jliwPi19kE9CbDEvkqR4",
  personalWebsiteUrl: "https://beny.one",
  contact: {
    email: "benydishon@gmail.com",
    tel: "+919884819912",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/BenyD",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/benydishon/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/benydishon",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Hindustan Institute of Technology & Science",
      degree: "Bachelor's of Technology Degree in Computer Science Engineering",
      start: "2022",
      end: "2026",
    },
  ],
  work: [
    {
      // → is a special character that can be used to represent an arrow
      company: "Freelance",
      link: "https://beny.one",
      badges: ["Remote"],
      title: "Full Stack Developer",
      logo: BenyLogo,
      start: "2019",
      end: "Present",
      description:
        "Developed websites for clients like G Album, Maxsoft AG and other clients. Technologies: React, Next.js, TypeScript, Figma, Spline, Framer.",
    },
    {
      company: "Maxsoft AG",
      link: "https://www.maxsoft.ch/",
      badges: ["Remote"],
      title: "Frontend Developer",
      logo: MaxsoftLogo,
      start: "2023",
      end: "2024",
      description:
        "Created a website for Maxsoft AG based on Switzerland, To showcase their work and services to clients. Technologies: React, Figma, Spline, Framer.",
    },
  ],
  certification: [
    {
      name: "Google Specialization - IT Support",
      providerName: "Google",
      link: "https://www.coursera.org/account/accomplishments/specialization/certificate/G2ZSSFQ5UVPT",
      issueDate: "2024",
      expirationDate: "",
      certificateId: "G2ZSSFQ5UVPT",
    },
    {
      name: "Meta Certificate - Full-Stack Engineer",
      providerName: "Meta",
      link: "https://www.credly.com/badges/69cfb9d7-825e-4d13-88f0-952da25a826b/linked_in_profile",
      issueDate: "2024",
      expirationDate: "",
      certificateId: "69cfb9d7-825e-4d13-88f0-952da25a826b",
    },
    {
      name: "Meta Specialization - Back-End Developer",
      providerName: "Meta",
      link: "https://www.coursera.org/account/accomplishments/specialization/certificate/RTGRUUVVSLBS",
      issueDate: "2023",
      expirationDate: "",
      certificateId: "RTGRUUVVSLBS",
    },
    {
      name: "Meta Specialization - Front-End Developer",
      providerName: "Meta",
      link: "https://www.coursera.org/account/accomplishments/specialization/certificate/PDL3GAR82CEL",
      issueDate: "2023",
      expirationDate: "",
      certificateId: "PDL3GAR82CEL",
    },
    {
      name: "Version Control with Git",
      providerName: "Atlassian",
      link: "https://www.coursera.org/account/accomplishments/certificate/XLZ7ERRTSR9N",
      issueDate: "2023",
      expirationDate: "",
      certificateId: "XLZ7ERRTSR9N",
    },
  ],

  // publication: [
  //   {
  //     name: "A Block-Chain Based Approach for Food Supply Chain Management",
  //     providerName: "IEEE",
  //     link: "https://ieeexplore.ieee.org/document/9984473",
  //     issueDate: "12/26/2022",
  //     description:
  //       "This review paper examines many elements of food supply chain management and  how blockchain may be used in supply chain management.",
  //   },
  // ],

  languages: ["English", "Tamil"],
  skills: [
    "Python",
    "C/C++",
    "HTML/CSS",
    "JavaScript",
    "TypeScript",
    "React/Next.js",
    "Node.js",
    "Express",
    "SQL",
    "PostgresSQL",
    "MongoDB",
    "Figma (UI/UX)",
  ],
  projects: [
    {
      title: "G Album Website",
      techStack: ["Side Project", "Framer", "Figma", "React", "API"],
      description:
        "A website for a photo album printing studio to showcase their work and services.",
      logo: GAlbumLogo,
      link: {
        label: "galbum.net",
        href: "https://galbum.net/",
      },
    },
    {
      title: "Maxsoft AG Website",
      techStack: ["Side Project", "Framer", "Figma", "Spline", "React", "API"],
      description:
        "A website for a IT solutions company to showcase their services based on Switzerland.",
      logo: MaxsoftLogo,
      link: {
        label: "maxsoft.ch",
        href: "https://www.maxsoft.ch/",
      },
    },
    {
      title: "Beny.one",
      techStack: ["Side Project", "Framer", "Figma", "React"],
      description: "My portfolio website to showcase my hobbies and passion. ",
      logo: BenyLogo,
      link: {
        label: "beny.one",
        href: "https://beny.one/",
      },
    },
    {
      title: "WatcherAI",
      techStack: [
        "Side Project",
        "Next.js",
        "shadcn-ui",
        "Tensorflow (COCO-SSD)",
      ],
      description:
        "A platform to detect and track objects in real-time to automate recording using a webcam.",
      logo: WatcherAILogo,
      link: {
        label: "watcher.beny.one",
        href: "https://watcher.beny.one/",
      },
    },
  ],
} as const;
