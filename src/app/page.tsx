"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/ui/section";
import { GlobeIcon, MailIcon, PhoneIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RESUME_DATA } from "@/data/resume-data";
import { PrintDrawer } from "@/components/print-drawer";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

// Correctly typing dynamic imports
const ProjectCard = dynamic(
  () => import("@/components/project-card").then((mod) => mod.ProjectCard),
  {
    ssr: false,
  },
);

const CommandMenu = dynamic(
  () => import("@/components/command-menu").then((mod) => mod.CommandMenu),
  {
    ssr: false,
  },
);

export default function Page() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <main className="container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-12 md:p-16">
      <section className="mx-auto w-full max-w-2xl space-y-8 bg-white print:space-y-4 dark:bg-neutral-900">
        <div className="flex items-center justify-between">
          <div className="flex-1 space-y-1.5">
            <h1 className="text-2xl font-bold dark:text-white">
              {RESUME_DATA.name}
            </h1>
            <p className="max-w-md text-pretty font-mono text-sm text-muted-foreground print:text-[12px] dark:text-neutral-400">
              {RESUME_DATA.about}
            </p>
            <p className="max-w-md items-center text-pretty font-mono text-xs text-muted-foreground dark:text-neutral-400">
              <a
                className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
                href={RESUME_DATA.locationLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Location: ${RESUME_DATA.location}`}
              >
                <GlobeIcon className="size-3" aria-hidden="true" />
                {RESUME_DATA.location}
              </a>
            </p>
            <div className="flex gap-x-1 pt-1 font-mono text-sm text-muted-foreground print:hidden dark:text-neutral-400">
              {RESUME_DATA.contact.email && (
                <Button
                  className="size-8 dark:border-neutral-700 dark:bg-neutral-900 hover:dark:bg-neutral-700"
                  variant="outline"
                  size="icon"
                  asChild
                >
                  <a href={`mailto:${RESUME_DATA.contact.email}`}>
                    <MailIcon className="size-4" aria-hidden="true" />
                  </a>
                </Button>
              )}
              {RESUME_DATA.contact.tel && (
                <Button
                  className="size-8 dark:border-neutral-700 dark:bg-neutral-900 hover:dark:bg-neutral-700"
                  variant="outline"
                  size="icon"
                  asChild
                >
                  <a href={`tel:${RESUME_DATA.contact.tel}`}>
                    <PhoneIcon className="size-4" aria-hidden="true" />
                  </a>
                </Button>
              )}
              {RESUME_DATA.personalWebsiteUrl && (
                <Button
                  className="size-8 dark:border-neutral-700 dark:bg-neutral-900 hover:dark:bg-neutral-700"
                  variant="outline"
                  size="icon"
                  asChild
                >
                  <a href={`${RESUME_DATA.personalWebsiteUrl}`}>
                    <GlobeIcon className="size-4" aria-hidden="true" />
                  </a>
                </Button>
              )}
              {RESUME_DATA.contact.social.map((social) => (
                <Button
                  key={social.name}
                  className="size-8 dark:border-neutral-700 dark:bg-neutral-900 hover:dark:bg-neutral-700"
                  variant="outline"
                  size="icon"
                  asChild
                >
                  <a href={social.url} aria-label={social.name}>
                    <social.icon className="size-4" aria-hidden="true" />
                  </a>
                </Button>
              ))}
            </div>
            <div className="hidden flex-col gap-x-1 font-mono text-sm text-muted-foreground print:flex dark:text-neutral-400">
              {RESUME_DATA.contact.email && (
                <a href={`mailto:${RESUME_DATA.contact.email}`}>
                  <span className="underline">{RESUME_DATA.contact.email}</span>
                </a>
              )}
              {RESUME_DATA.contact.tel && (
                <a href={`tel:${RESUME_DATA.contact.tel}`}>
                  <span className="underline">{RESUME_DATA.contact.tel}</span>
                </a>
              )}
            </div>
          </div>

          <Avatar className="size-28">
            <Image
              alt={RESUME_DATA.name}
              src="/avatar.jpg"
              width={112}
              height={112}
            />
            <AvatarFallback>{RESUME_DATA.initials}</AvatarFallback>
          </Avatar>
        </div>
        <Section>
          <h2 className="text-xl font-bold dark:text-white">About</h2>
          <ReactMarkdown 
            className="text-pretty font-mono text-sm text-muted-foreground print:text-[12px] dark:text-neutral-400"
            components={{
              strong: ({node, ...props}) => <span className="text-foreground dark:text-white" {...props} />,
              a: ({node, ...props}) => <a className="text-foreground dark:text-white" {...props} />,
            }}
          >
            {RESUME_DATA.summary}
          </ReactMarkdown>
        </Section>
        <Section>
          <h2 className="text-xl font-bold dark:text-white">Work Experience</h2>
          {RESUME_DATA.work.map((work) => (
            <Card
              key={work.company}
              className="dark:bg-neutral-900 dark:text-neutral-400"
            >
              <CardHeader>
                <div className="flex items-center justify-between gap-x-2 text-base dark:text-white">
                  <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none">
                    <a className="hover:underline" href={work.link}>
                      {work.company}
                    </a>
                    <span className="inline-flex gap-x-1">
                      {work.badges.map((badge) => (
                        <Badge
                          className="align-middle text-xs print:px-1 print:text-[8px] print:leading-tight dark:bg-neutral-700 dark:text-neutral-300"
                          key={badge}
                          variant="secondary"
                        >
                          {badge}
                        </Badge>
                      ))}
                    </span>
                  </h3>
                  <div className="text-sm tabular-nums text-gray-500 dark:text-neutral-400">
                    {work.start} - {work.end ?? "Present"}
                  </div>
                </div>
                <h4 className="font-mono text-sm leading-none print:text-[12px] dark:text-neutral-300">
                  {work.title}
                </h4>
              </CardHeader>
              <CardContent className="mt-2 text-xs print:text-[10px] dark:text-neutral-400">
                {work.description}
              </CardContent>
            </Card>
          ))}
        </Section>
        <Section>
          <h2 className="text-xl font-bold dark:text-white">Education</h2>
          {RESUME_DATA.education.map((education) => (
            <Card
              key={education.school}
              className="dark:bg-neutral-900 dark:text-neutral-400"
            >
              <CardHeader>
                <div className="flex items-center justify-between gap-x-2 text-base dark:text-white">
                  <h3 className="font-semibold leading-none">
                    {education.school}
                  </h3>
                  <div className="text-sm tabular-nums text-gray-500 dark:text-neutral-400">
                    {education.start} - {education.end}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="mt-2 print:text-[12px] dark:text-neutral-400">
                {education.degree}
              </CardContent>
            </Card>
          ))}
        </Section>
        <Section>
          <h2 className="text-xl font-bold dark:text-white">Certifications</h2>
          {RESUME_DATA.certification.map((certification) => (
            <Card
              key={certification.name}
              className="dark:bg-neutral-900 dark:text-neutral-400"
            >
              <CardHeader>
                <div className="flex items-center justify-between gap-x-2 text-base dark:text-white">
                  <h3 className="font-semibold leading-none">
                    <a
                      className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
                      href={certification.link}
                      target="_blank"
                    >
                      {certification.name}
                    </a>
                  </h3>
                  <div className="text-sm tabular-nums text-gray-500 dark:text-neutral-400">
                    {certification.issueDate}{" "}
                    {certification.expirationDate
                      ? `- ${certification.expirationDate}`
                      : ""}
                  </div>
                </div>
                <h4 className="font-mono text-sm leading-none dark:text-neutral-300">
                  {certification.providerName}
                </h4>
              </CardHeader>
              <CardContent className="mt-2 dark:text-neutral-400">
                Certificate ID: {certification.certificateId}
              </CardContent>
            </Card>
          ))}
        </Section>
        <Section>
          <h2 className="text-xl font-bold dark:text-white">Languages</h2>
          <div className="flex flex-wrap gap-1">
            {RESUME_DATA.languages.map((language) => (
              <Badge
                className="print:text-[10px] dark:bg-neutral-700 dark:text-neutral-300"
                key={language}
              >
                {language}
              </Badge>
            ))}
          </div>
        </Section>
        <Section>
          <h2 className="text-xl font-bold dark:text-white">Skills</h2>
          <div className="flex flex-wrap gap-1">
            {RESUME_DATA.skills.map((skill) => (
              <Badge
                className="print:text-[10px] dark:bg-neutral-700 dark:text-neutral-300"
                key={skill}
              >
                {skill}
              </Badge>
            ))}
          </div>
        </Section>
        <Section className="print-force-new-page scroll-mb-16">
          <h2 className="text-xl font-bold dark:text-white">Projects</h2>
          <div className="-mx-3 grid grid-cols-1 gap-3 print:grid-cols-3 print:gap-2 md:grid-cols-2 lg:grid-cols-3">
            {isClient &&
              RESUME_DATA.projects.map((project) => (
                <ProjectCard
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  tags={project.techStack}
                  link={"link" in project ? project.link.href : undefined}
                  logo={project.logo}
                />
              ))}
          </div>
        </Section>
      </section>
      <footer className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} {RESUME_DATA.name}. All rights reserved.
      </footer>
      {isClient && (
        <>
          <CommandMenu
            links={[
              {
                url: RESUME_DATA.personalWebsiteUrl,
                title: "Personal Website",
              },
              ...RESUME_DATA.contact.social.map((socialMediaLink) => ({
                url: socialMediaLink.url,
                title: socialMediaLink.name,
              })),
            ]}
          />
          <PrintDrawer />
        </>
      )}
    </main>
  );
}
