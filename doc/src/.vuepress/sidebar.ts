import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    {
      text: "入门指南",
      collapsible: true,
      prefix: "docs/getting-started",
      children: [
        {
          text: `简介`,
          link: `/docs/getting-started/introduction`,
        },
        {
          text: `您的第一个应用`,
          link: `/docs/getting-started/your-first-app`,
        },
        {
          text: `使用前端库`,
          link: `/docs/getting-started/using-frontend-libraries`,
        },
      ],
    },
    {
      text: "原生 API",
      collapsible: true,
      prefix: "docs/api",
      children: "structure",
    },
    {
      text: "三方 API",
      collapsible: true,
      children: [
        {
          text: "neutralinojs",
          collapsible: true,
          prefix: "docs/neutralinojs/api/",
          children: `structure`,
        },
      ],
    },
  ],
});