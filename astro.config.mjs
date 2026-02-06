// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
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
