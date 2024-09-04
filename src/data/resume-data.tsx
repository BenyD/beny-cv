import {
  BenyLogo,
  GAlbumLogo,
  MaxsoftLogo,
  WatcherAILogo,
  CGPALogo,
} from "@/images/logos";
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
    {
      title: "Chat Collect",
      href: "https://chatcollect.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <GlobeIcon className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://zklyi3yqyaoeuhyg.public.blob.vercel-storage.com/benycv-8VfJfXQD281tm5sJyZN4mAqbmNd7L4.mp4",
    },
  ],
} as const;
