import { defineCollection, z } from "astro:content";
import { docsLoader } from "@astrojs/starlight/loaders";
import { docsSchema } from "@astrojs/starlight/schema";

export const collections = {
  docs: defineCollection({
    loader: docsLoader(),
    schema: docsSchema({
      extend: z.object({
        // Rend un champ de base obligatoire au lieu de facultatif.
        description: z.string(),
        // Ajoute un nouveau champ au schéma.
        category: z.enum(["tutoriel", "guide", "référence"]).optional(),
      }),
    }),
  }),
};
