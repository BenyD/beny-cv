import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";
import { GlobeIcon } from "lucide-react";

export const RESUME_DATA = {
  name: "Beny Dishon K",
  initials: "BD",
  location: "Chennai, India, IST (UTC+5:30)",
  locationLink: "https://www.google.com/maps/place/chennai",
  about:
    "Software Engineer and Full Stack Developer. Passionate about innovation and learning. Actively building solutions that enhance lives worldwide.",
  summary:
    "In 2024, I continued my journey as a software engineer, focusing on innovative full-stack development. I specialize in building and scaling impactful solutions, leveraging my diverse skill set. I've completed [multiple certifications from Microsoft, Google, and Meta](#certifications) and contributed to [various small-scale projects](https://github.com/BenyD). I love creating new things and constantly strive to learn. My work is driven by the goal of enhancing lives through technology. Complete information can be found in my [personal website](https://www.beny.one/).",
  personalWebsiteUrl: "https://www.beny.one",
  contact: {
    email: "benydishon@gmail.com",
    tel: "+919884819912",
    website: "https://www.beny.one",
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
      company: "Maxsoft AG",
      link: "https://www.maxsoft.ch/",
      badges: ["Remote"],
      title: "Software Engineer",
      start: "2023",
      end: "Present",
      description:
        "Developed multiple website with different uses cases for the switzerland based company.",
    },
  ],
  certification: [
    {
      name: "Microsoft Certified: Security, Compliance, and Identity Fundamentals",
      providerName: "Microsoft",
      link: "https://learn.microsoft.com/en-gb/users/benyd/credentials/e0e79b7cc9d3a4b1",
      issueDate: "Jun 2024",
      expirationDate: "",
      certificateId: "E0E79B7CC9D3A4B1",
    },
    {
      name: "Microsoft Cybersecurity Analyst Specialization",
      providerName: "Microsoft",
      link: "https://www.coursera.org/account/accomplishments/specialization/certificate/E6MFAJ9UMJYW",
      issueDate: "Jun 2024",
      expirationDate: "",
      certificateId: "E6MFAJ9UMJYW",
    },
    {
      name: "Google Specialization - IT Support",
      providerName: "Google",
      link: "https://www.coursera.org/account/accomplishments/specialization/certificate/G2ZSSFQ5UVPT",
      issueDate: "Jan 2024",
      expirationDate: "",
      certificateId: "G2ZSSFQ5UVPT",
    },
    {
      name: "Meta Certificate - Full-Stack Engineer",
      providerName: "Meta",
      link: "https://www.credly.com/badges/69cfb9d7-825e-4d13-88f0-952da25a826b/linked_in_profile",
      issueDate: "Jan 2024",
      expirationDate: "",
      certificateId: "69cfb9d7-825e-4d13-88f0-952da25a826b",
    },
    {
      name: "Meta Specialization - Back-End Developer",
      providerName: "Meta",
      link: "https://www.coursera.org/account/accomplishments/specialization/certificate/RTGRUUVVSLBS",
      issueDate: "Dec 2023",
      expirationDate: "",
      certificateId: "RTGRUUVVSLBS",
    },
    {
      name: "Meta Specialization - Front-End Developer",
      providerName: "Meta",
      link: "https://www.coursera.org/account/accomplishments/specialization/certificate/PDL3GAR82CEL",
      issueDate: "Jul 2023",
      expirationDate: "",
      certificateId: "PDL3GAR82CEL",
    },
    {
      name: "Version Control with Git",
      providerName: "Atlassian",
      link: "https://www.coursera.org/account/accomplishments/certificate/XLZ7ERRTSR9N",
      issueDate: "Jul 2023",
      expirationDate: "",
      certificateId: "XLZ7ERRTSR9N",
    },
  ],
  languages: ["English", "Tamil"],
  skills: [
    "React",
    "Next.js",
    "JavaScript",
    "Typescript",
    "Node.js",
    "Express",
    "MongoDB",
    "Java",
    "Python",
    "GO",
    "Git",
    "Docker",
    "Kubernetes",
    "Testing",
    "CI/CD",
    "Version Control",
    "DevOps",
    "Cloud Computing",
    "AWS",
    "Azure",
    "Cybersecurity",
  ],
  projects: [
    // Beny's CV Website
    {
      title: "Beny's CV Website",
      href: "https://cv.beny.one",
      dates: "January 2024",
      active: true,
      description:
        "A clean and professional CV website designed to showcase my skills, experience, and projects. It offers a centralized digital resume for potential employers and collaborators.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://cv.beny.one",
          icon: <GlobeIcon className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://zklyi3yqyaoeuhyg.public.blob.vercel-storage.com/BenyCV-ZLyF0PHXy5PGbl8XVuLvUvsAwqmz1J.mp4",
    },

    // Beny's Personal Website
    {
      title: "Beny's Personal Website",
      href: "https://www.beny.one/",
      dates: "September 2024",
      active: true,
      description:
        "An interactive terminal like personal website that provides insights into my professional journey and projects. It showcases my portfolio and personal brand in an engaging and immersive way.",
      technologies: [
        "Next.js",
        "TypeScript",
        "TailwindCSS",
        "MDX",
        "API",
        "Prisma",
        "Supabase",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.beny.one/",
          icon: <GlobeIcon className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://zklyi3yqyaoeuhyg.public.blob.vercel-storage.com/BenyPortfolio-XSpPo1kPzSTswdoTTbrAtiBDn6OsL8.mp4",
    },

    // G Album Website
    {
      title: "G Album",
      href: "https://galbum.net",
      dates: "November 2023",
      active: true,
      description:
        "A business website for a photo album company to tell their story and showcase products. It focuses on user experience and aesthetic appeal to engage potential clients.",
      technologies: ["Framer", "Figma", "React", "API"],
      links: [
        {
          type: "Website",
          href: "https://galbum.net",
          icon: <GlobeIcon className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://zklyi3yqyaoeuhyg.public.blob.vercel-storage.com/Galbum-oq1Ur9wMa3h2Rdrw5nfJ1UED3h7t3x.mp4",
    },

    // G Album Gallery Website
    {
      title: "G Album Gallery Website",
      href: "https://photos.galbum.net",
      dates: "April 2024",
      active: true,
      description:
        "A comprehensive gallery website hosting thousands of sample photos for client showcase. Includes an admin dashboard for managing the gallery content smoothly and efficiently.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI",
        "Firebase",
      ],
      links: [
        {
          type: "Website",
          href: "https://photos.galbum.net",
          icon: <GlobeIcon className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://zklyi3yqyaoeuhyg.public.blob.vercel-storage.com/Galbum-Gallery-Ypsbr94zUsk37KL9QJm10OsmzgyC3O.mp4",
    },

    // RapidResume Website
    {
      title: "RapidResume",
      href: "https://rapidresume.beny.one",
      dates: "July 2024",
      active: true,
      description:
        "A resume builder for the Indian market with ATS compliance in mind. Users can create professional resumes in minutes with built-in ATS scoring.",
      technologies: ["Next.js", "React", "Redux", "Typescript", "TailwindCSS"],
      links: [
        {
          type: "Website",
          href: "https://rapidresume.beny.one",
          icon: <GlobeIcon className="size-3" />,
        },
        {
          type: "GitHub",
          href: "https://github.com/BenyD/RapidResume",
          icon: <GitHubIcon className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://zklyi3yqyaoeuhyg.public.blob.vercel-storage.com/rapidResume-kKWY2mbUhqoVYJTchARL8NL4lA9gsG.mp4",
    },

    // CGPA Calculator Website
    {
      title: "CGPA Calculator",
      href: "https://cgpa.beny.one/",
      dates: "May 2024",
      active: true,
      description:
        "A simple web app for students to calculate their CGPA accurately. Provides a clean and intuitive user interface for fast and reliable results.",
      technologies: ["Next.js", "Typescript", "TailwindCSS", "Shadcn UI"],
      links: [
        {
          type: "Website",
          href: "https://cgpa.beny.one/",
          icon: <GlobeIcon className="size-3" />,
        },
        {
          type: "GitHub",
          href: "https://github.com/BenyD/CGPA-Calculator",
          icon: <GitHubIcon className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://zklyi3yqyaoeuhyg.public.blob.vercel-storage.com/cgpa-TqjHM5wm5aijm6bAOiT62lg0ynrTcp.mp4",
    },

    // // WatcherAI Website
    // {
    //   title: "WatcherAI",
    //   href: "https://watcher.beny.one",
    //   dates: "December 2023",
    //   active: true,
    //   description:
    //     "A web app demonstrating object detection technology for enhancing surveillance systems. It offers a unique approach to improving traditional security cameras.",
    //   technologies: [
    //     "Next.js",
    //     "Typescript",
    //     "TailwindCSS",
    //     "Tensorflow",
    //     "COCO-SSD",
    //   ],
    //   links: [
    //     {
    //       type: "Website",
    //       href: "https://rapidresume.beny.one",
    //       icon: <GlobeIcon className="size-3" />,
    //     },
    //     {
    //       type: "GitHub",
    //       href: "https://github.com/BenyD/RapidResume",
    //       icon: <GitHubIcon className="size-3" />,
    //     },
    //   ],
    //   image: "",
    //   video:
    //     "https://zklyi3yqyaoeuhyg.public.blob.vercel-storage.com/benycv-8VfJfXQD281tm5sJyZN4mAqbmNd7L4.mp4",
    // },

    // Maxsoft Website
    {
      title: "Maxsoft AG",
      href: "https://www.maxsoft.ch/",
      dates: "December 2023",
      active: true,
      description:
        "A corporate website for a Swiss IT company, showcasing their services and expertise. Provides an interactive and professional experience for potential clients.",
      technologies: ["Framer", "Figma", "Spline", "React", "API"],
      links: [
        {
          type: "Website",
          href: "https://www.maxsoft.ch/",
          icon: <GlobeIcon className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://zklyi3yqyaoeuhyg.public.blob.vercel-storage.com/Maxsoft-1HGgnzOFD0jJTCLTWmPrNOmhPJqdeL.mp4",
    },

    // // Advisory AG Website
    // {
    //   title: "Advisory AG",
    //   href: "https://rapidresume.beny.one",
    //   dates: "March 2024",
    //   active: true,
    //   description:
    //     "An informative website for an insurance firm, highlighting their services and unique approaches. Focuses on trust and transparency to engage potential clients.",
    //   technologies: ["Framer", "Figma", "Spline", "React", "API"],
    //   links: [
    //     {
    //       type: "Website",
    //       href: "https://rapidresume.beny.one",
    //       icon: <GlobeIcon className="size-3" />,
    //     },
    //     {
    //       type: "GitHub",
    //       href: "https://github.com/BenyD/RapidResume",
    //       icon: <GitHubIcon className="size-3" />,
    //     },
    //   ],
    //   image: "",
    //   video:
    //     "https://zklyi3yqyaoeuhyg.public.blob.vercel-storage.com/benycv-8VfJfXQD281tm5sJyZN4mAqbmNd7L4.mp4",
    // },
  ],
} as const;
