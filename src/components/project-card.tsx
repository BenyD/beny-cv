import {
  Card,
  CardHeader,
  CardContent,
  CardDescription,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import React from "react";
import Image from "next/image";

interface Props {
  title: string;
  description: string;
  tags: readonly string[];
  link?: string;
  logo: any; // Add this line
}

export const ProjectCard = React.memo(
  ({ title, description, tags, link, logo }: Props) => {
    return (
      <Card className="flex flex-col overflow-hidden border p-3 dark:border-neutral-700 dark:bg-neutral-900">
        <CardHeader>
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              {logo && (
                <Image
                  src={logo}
                  alt={`${title} logo`}
                  width={24}
                  height={24}
                  className="rounded-sm"
                />
              )}
              <CardTitle className="text-base dark:text-white">
                {link ? (
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 hover:underline"
                  >
                    {title}{" "}
                    <span className="size-1 rounded-full bg-green-500"></span>
                  </a>
                ) : (
                  title
                )}
              </CardTitle>
            </div>
            <div className="hidden font-mono text-xs underline print:visible dark:text-neutral-400">
              {link
                ?.replace("https://", "")
                .replace("www.", "")
                .replace("/", "")}
            </div>
            <CardDescription className="font-mono text-xs print:text-[10px] dark:text-neutral-400">
              {description}
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent className="mt-auto flex">
          <div className="mt-2 flex flex-wrap gap-1">
            {tags.map((tag) => (
              <Badge
                className="px-1 py-0 text-[10px] print:px-1 print:py-0.5 print:text-[8px] print:leading-tight dark:bg-neutral-700 dark:text-neutral-300"
                key={tag}
                variant="secondary"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    );
  }
);

ProjectCard.displayName = "ProjectCard";
