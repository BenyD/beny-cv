"use client";

import Image from "next/image";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/ui/section";
import { GlobeIcon, MailIcon, PhoneIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RESUME_DATA } from "@/data/resume-data";
import { useEffect, useState, useRef } from "react";
import ReactMarkdown from "react-markdown";
import { Link, Element, animateScroll as scroll } from "react-scroll";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { Pointer } from "@/components/magicui/pointer";
import { motion, useMotionValue } from "motion/react";
import { FadeText } from "@/components/magicui/fade-text";
import { useCursor } from "@/components/CursorContext";

const BLUR_FADE_DELAY = 0.04;

// Client-side wrapper for the Pointer component
function CustomPointer({ children }: { children: React.ReactNode }) {
  const { showCustomCursor } = useCursor();

  if (!showCustomCursor) return null;

  return <Pointer>{children}</Pointer>;
}

export default function Page() {
  const [isClient, setIsClient] = useState(false);
  const [currentTime, setCurrentTime] = useState("");
  const lastUpdated = "July 2025";
  const [isHoveringLink, setIsHoveringLink] = useState(false);

  // Create a ref to track the main container
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Add effect to detect when hovering over links
  useEffect(() => {
    const mainElement = mainRef.current;
    if (!mainElement) return;

    const handleMouseOver = (e: MouseEvent) => {
      // Check if hovering over a link or button
      const target = e.target as HTMLElement;
      const isLink =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button");
      setIsHoveringLink(!!isLink);
    };

    const handleMouseOut = () => {
      setIsHoveringLink(false);
    };

    mainElement.addEventListener("mouseover", handleMouseOver);
    mainElement.addEventListener("mouseout", handleMouseOut);

    return () => {
      mainElement.removeEventListener("mouseover", handleMouseOver);
      mainElement.removeEventListener("mouseout", handleMouseOut);
    };
  }, [isClient]);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      setCurrentTime(
        now.toLocaleTimeString("en-US", options) + " IST (UTC +5:30)",
      );
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <main
      ref={mainRef}
      className="container relative mx-auto scroll-my-12 overflow-auto p-4 pt-8 md:p-16"
    >
      <section className="mx-auto w-full max-w-2xl space-y-8 bg-white dark:bg-neutral-900">
        <CustomPointer>
          <motion.div
            animate={
              isHoveringLink
                ? {
                    scale: 1.2,
                    transition: { duration: 0.2 },
                  }
                : {
                    scale: 1,
                    transition: { duration: 0.2 },
                  }
            }
            className="relative"
          >
            <motion.div
              className={`h-6 w-6 rounded-full border ${
                isHoveringLink
                  ? "border-white/50 bg-gray-500/40"
                  : "border-white/30 bg-gray-500/30"
              } backdrop-blur-sm dark:border-white/30 dark:bg-gray-600/30`}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
            />
          </motion.div>
        </CustomPointer>
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="w-full flex-1 space-y-1.5 text-center md:text-left">
            <div className="mb-6 flex justify-center md:hidden">
              {" "}
              {/* Center avatar for mobile */}
              <BlurFade delay={BLUR_FADE_DELAY * 6}>
                <Avatar className="size-36">
                  <Image
                    alt={RESUME_DATA.name}
                    src="/avatar.jpg"
                    width={144}
                    height={144}
                    className="rounded-full"
                  />
                  <AvatarFallback>{RESUME_DATA.initials}</AvatarFallback>
                </Avatar>
              </BlurFade>
            </div>
            <BlurFadeText
              delay={BLUR_FADE_DELAY}
              className="w-full text-center text-2xl font-bold md:text-left dark:text-white"
              yOffset={8}
              text={RESUME_DATA.name}
            />
            <BlurFadeText
              className="mx-auto max-w-md text-pretty font-mono text-sm text-muted-foreground md:mx-0 dark:text-neutral-400"
              delay={BLUR_FADE_DELAY * 2}
              text={RESUME_DATA.about}
            />
            <BlurFade delay={BLUR_FADE_DELAY * 3}>
              <p className="mx-auto text-pretty font-mono text-xs text-muted-foreground md:mx-0 dark:text-neutral-400">
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
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 4}>
              <div className="flex justify-center gap-x-1 pt-1 font-mono text-sm text-muted-foreground md:justify-start dark:text-neutral-400">
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
            </BlurFade>
          </div>
          <BlurFade delay={BLUR_FADE_DELAY * 6} className="hidden md:block">
            <Avatar className="size-28">
              <Image
                alt={RESUME_DATA.name}
                src="/avatar.jpg"
                width={112}
                height={112}
              />
              <AvatarFallback>{RESUME_DATA.initials}</AvatarFallback>
            </Avatar>
          </BlurFade>
        </div>
        <Section>
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold dark:text-white">About</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 8}>
            <ReactMarkdown
              className="text-pretty font-mono text-sm text-muted-foreground dark:text-neutral-400"
              components={{
                strong: ({ node, ...props }) => (
                  <span
                    className="text-foreground dark:text-white"
                    {...props}
                  />
                ),
                a: ({ node, href, ...props }) =>
                  href === "#certifications" ? (
                    <Link
                      to="certifications"
                      smooth={true}
                      duration={800}
                      offset={-50}
                    >
                      <span
                        className="cursor-pointer text-foreground dark:text-white"
                        {...props}
                      />
                    </Link>
                  ) : (
                    <a
                      href={href}
                      className="text-foreground dark:text-white"
                      {...props}
                    />
                  ),
              }}
            >
              {RESUME_DATA.summary}
            </ReactMarkdown>
          </BlurFade>
        </Section>
        <Section>
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold dark:text-white">
              Work Experience
            </h2>
          </BlurFade>
          {RESUME_DATA.work.map((work, id) => (
            <BlurFade
              key={work.company}
              delay={BLUR_FADE_DELAY * 10 + id * 0.05}
            >
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
                      <span className="inline-flex gap-x-1 px-1">
                        {work.badges.map((badge) => (
                          <Badge
                            className="align-middle text-xs dark:bg-neutral-700 dark:text-neutral-300"
                            key={badge}
                            variant="outline"
                          >
                            {badge}
                          </Badge>
                        ))}
                      </span>
                    </h3>
                    <div className="hidden text-sm tabular-nums text-gray-500 md:block dark:text-neutral-400">
                      {work.start} - {work.end ?? "Present"}
                    </div>
                  </div>
                  <h4 className="font-mono text-sm leading-none dark:text-neutral-300">
                    {work.title}
                  </h4>
                </CardHeader>
                <CardContent className="mt-2 text-xs dark:text-neutral-400">
                  {work.description}
                </CardContent>
                <CardFooter className="mt-2 md:hidden">
                  <Badge variant="secondary" className="text-xs">
                    {work.start} - {work.end ?? "Present"}
                  </Badge>
                </CardFooter>
              </Card>
            </BlurFade>
          ))}
        </Section>
        <Section>
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <h2 className="text-xl font-bold dark:text-white">Education</h2>
          </BlurFade>
          {RESUME_DATA.education.map((education, id) => (
            <BlurFade
              key={education.school}
              delay={BLUR_FADE_DELAY * 12 + id * 0.05}
            >
              <Card
                key={education.school}
                className="dark:bg-neutral-900 dark:text-neutral-400"
              >
                <CardHeader>
                  <div className="flex items-center justify-between gap-x-2 text-base dark:text-white">
                    <h3 className="font-semibold leading-none">
                      {education.school}
                    </h3>
                    <div className="hidden text-sm tabular-nums text-gray-500 md:block dark:text-neutral-400">
                      {education.start} - {education.end}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="mt-2 dark:text-neutral-400">
                  {education.degree}
                </CardContent>
                <CardFooter className="mt-2 md:hidden">
                  <Badge variant="secondary" className="text-xs">
                    {education.start} - {education.end}
                  </Badge>
                </CardFooter>
              </Card>
            </BlurFade>
          ))}
        </Section>
        <Element name="certifications">
          <Section id="certifications">
            <BlurFade delay={BLUR_FADE_DELAY * 13}>
              <h2 className="text-xl font-bold dark:text-white">
                <Link
                  to="certifications"
                  smooth={true}
                  duration={800}
                  offset={-50}
                  className="cursor-pointer"
                >
                  Certifications
                </Link>
              </h2>
            </BlurFade>
            {RESUME_DATA.certification.map((certification, id) => (
              <BlurFade
                key={certification.name}
                delay={BLUR_FADE_DELAY * 14 + id * 0.05}
              >
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
                      <div className="hidden text-sm tabular-nums text-gray-500 md:block dark:text-neutral-400">
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
                  <CardFooter className="mt-2 md:hidden">
                    <Badge variant="secondary" className="text-xs">
                      {certification.issueDate}{" "}
                      {certification.expirationDate
                        ? `- ${certification.expirationDate}`
                        : ""}
                    </Badge>
                  </CardFooter>
                </Card>
              </BlurFade>
            ))}
          </Section>
        </Element>
        <Section>
          <BlurFade delay={BLUR_FADE_DELAY * 15}>
            <h2 className="text-xl font-bold dark:text-white">Languages</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-1">
            {RESUME_DATA.languages.map((language, id) => (
              <BlurFade key={language} delay={BLUR_FADE_DELAY * 16 + id * 0.05}>
                <Badge
                  className="dark:bg-neutral-700 dark:text-neutral-300"
                  key={language}
                >
                  {language}
                </Badge>
              </BlurFade>
            ))}
          </div>
        </Section>
        <Section>
          <BlurFade delay={BLUR_FADE_DELAY * 17}>
            <h2 className="text-xl font-bold dark:text-white">Skills</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-1">
            {RESUME_DATA.skills.map((skill, id) => (
              <BlurFade key={skill} delay={BLUR_FADE_DELAY * 18 + id * 0.05}>
                <Badge
                  className="dark:bg-neutral-700 dark:text-neutral-300"
                  key={skill}
                >
                  {skill}
                </Badge>
              </BlurFade>
            ))}
          </div>
        </Section>
        <Section>
          <BlurFade delay={BLUR_FADE_DELAY * 19}>
            <h2 className="text-xl font-bold dark:text-white">Achievements</h2>
          </BlurFade>
          {RESUME_DATA.achievements.map((achievement, id) => (
            <BlurFade
              key={achievement.title}
              delay={BLUR_FADE_DELAY * 20 + id * 0.05}
            >
              <Card
                key={achievement.title}
                className="dark:bg-neutral-900 dark:text-neutral-400"
              >
                <CardHeader>
                  <div className="flex items-center justify-between gap-x-2 text-base dark:text-white">
                    <h3 className="font-semibold leading-none">
                      {achievement.title}
                    </h3>
                    <div className="hidden text-sm tabular-nums text-gray-500 md:block dark:text-neutral-400">
                      {achievement.date}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="mt-2 text-xs dark:text-neutral-400">
                  {achievement.description}
                </CardContent>
                <CardFooter className="mt-2 md:hidden">
                  <Badge variant="secondary" className="text-xs">
                    {achievement.date}
                  </Badge>
                </CardFooter>
              </Card>
            </BlurFade>
          ))}
        </Section>
        <Section className="scroll-mb-16">
          <BlurFade delay={BLUR_FADE_DELAY * 21}>
            <h2 className="text-xl font-bold dark:text-white">Projects</h2>
          </BlurFade>
          <div className="mx-auto grid max-w-[800px] grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-2">
            {isClient &&
              RESUME_DATA.projects.map((project, id) => (
                <BlurFade
                  key={project.title}
                  delay={BLUR_FADE_DELAY * 22 + id * 0.05}
                >
                  <ProjectCard
                    key={project.title}
                    title={project.title}
                    href={project.href}
                    description={project.description}
                    dates={project.dates}
                    tags={project.technologies}
                    image={project.image}
                    video={project.video}
                    links={project.links}
                  />
                </BlurFade>
              ))}
          </div>
        </Section>
      </section>
      <footer className="mt-8 dark:border-neutral-800">
        <div className="mx-auto w-full max-w-2xl">
          {/* Top row - Last updated (left) and Time/Menu (right) */}
          <div className="flex flex-col justify-between gap-4 border-t border-gray-100 pt-4 md:flex-row dark:border-neutral-800">
            {/* Left - Last updated */}
            <div className="text-center text-sm text-gray-500 md:text-left dark:text-gray-400">
              <div>Last Updated</div>
              <div className="text-xs">{lastUpdated}</div>
            </div>

            {/* Right - Current time and keyboard shortcut */}
            <div className="flex flex-col items-center text-sm text-gray-500 md:items-end dark:text-gray-400">
              <div>{currentTime}</div>
              <div className="mt-1 hidden items-center md:flex">
                <span className="text-xs">Press</span>
                <kbd className="mx-1 inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-70 hover:opacity-100 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-300">
                  <span className="text-xs">
                    {navigator.userAgent.indexOf("Mac") !== -1 ? "⌘" : "Ctrl"}+K
                  </span>
                </kbd>
                <span className="text-xs">for commands</span>
              </div>
            </div>
          </div>

          {/* Bottom row - Copyright */}
          <div className="mt-4 border-t border-gray-100 pb-20 pt-4 text-center text-xs text-gray-500 dark:border-neutral-800 dark:text-gray-400">
            © {new Date().getFullYear()} {RESUME_DATA.name}. All rights
            reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
