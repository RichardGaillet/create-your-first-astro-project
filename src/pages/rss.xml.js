import rss, { pagesGlobToRssItems } from "@astrojs/rss"

export async function GET(context) {
  return rss({
    site: "https://richardgaillet.github.io",
    title: "Astro Learner | Blog",
    description: "Mon voyage d'apprentissage d'Astro",
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob("./**/*.md")),
    customData: `<language>fr</language>`,
  })
}
