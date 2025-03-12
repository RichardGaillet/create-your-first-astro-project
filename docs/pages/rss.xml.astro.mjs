import rss, { pagesGlobToRssItems } from '@astrojs/rss';
export { renderers } from '../renderers.mjs';

async function GET(context) {
  return rss({
    site: "https://richardgaillet.github.io",
    title: "Astro Learner | Blog",
    description: "Mon voyage d'apprentissage d'Astro",
    site: context.site,
    items: await pagesGlobToRssItems(/* #__PURE__ */ Object.assign({"./posts/post-1.md": () => import('../chunks/post-1_Cj-br8UY.mjs').then(n => n._),"./posts/post-2.md": () => import('../chunks/post-2_BbC-ZoHE.mjs').then(n => n._),"./posts/post-3.md": () => import('../chunks/post-3_CXakrNE9.mjs').then(n => n._),"./posts/post-4.md": () => import('../chunks/post-4_CBkvwr6N.mjs').then(n => n._)})),
    customData: `<language>fr</language>`,
  })
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
