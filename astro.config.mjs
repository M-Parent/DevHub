// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://devhub.mpmk.app",
  vite: {
    server: {
      // expose dev server on network interfaces so the site is reachable via the machine IP
      host: "0.0.0.0",
      port: 4321,
    },
  },
  integrations: [
    starlight({
      title: "DevHub",
      favicon: "favicon.png",
      customCss: ["./src/styles/custom.css"],
      // Désactiver le toggle de thème - forcer le dark mode
      components: {
        ThemeSelect: "./src/components/EmptyThemeSelect.astro",
      },
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
        },
        {
          label: "Projects",
          autogenerate: { directory: "projects" },
          collapsed: true,
        },
        {
          label: "Guides",
          autogenerate: { directory: "guides" },
          collapsed: true,
        },
        {
          label: "Cheat Sheets",
          autogenerate: { directory: "cheatsheets" },
          collapsed: true,
        },
        {
          label: "Misc",
          autogenerate: { directory: "misc" },
          collapsed: true,
        },
      ],
    }),
  ],
});
