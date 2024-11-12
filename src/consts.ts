import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "JihyukLab",
  EMAIL: "s23066@gsm.hs.kr",
  NUM_POSTS_ON_HOMEPAGE: 4,
  NUM_WORKS_ON_HOMEPAGE: 0,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "JihyukLab 공식 블로그 입니다 🧪",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "JihyukLab의 블로그입니다. 여러 주제에 대해 다룹니다.",
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "withJihyuk의 작업물을 소개합니다.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "withJihyuk이 진행했던 프로젝트들을 소개합니다.",
};

export const SOCIALS: Socials = [
  {
    NAME: "github",
    HREF: "https://github.com/withJihyuk",
  },
  {
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/%EC%A7%80%ED%98%81-%EC%9D%B4-049b6b278/",
  },
];
