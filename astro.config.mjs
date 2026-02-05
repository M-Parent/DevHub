// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "DevHub",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/M-Parent/DevHub",
        },
      ],
      sidebar: [
        {
          label: "Roadmaps",
          autogenerate: { directory: "roadmaps" },
          collapsed: true,
        },
        {
          label: "Guides",
          autogenerate: { directory: "guides" },
        },
        {
          label: "Cheat Sheets",
          autogenerate: { directory: "cheatsheets" },
        },
      ],
    }),
  ],
});
