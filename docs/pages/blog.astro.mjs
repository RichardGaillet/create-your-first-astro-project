import { _ as __vite_glob_0_0 } from '../chunks/post-1_Cp3aVvVS.mjs';
import { _ as __vite_glob_0_1 } from '../chunks/post-2_BAvnlrv1.mjs';
import { _ as __vite_glob_0_2 } from '../chunks/post-3_B8CVwi9R.mjs';
import { _ as __vite_glob_0_3 } from '../chunks/post-4_Cb-24zgX.mjs';
import { c as createComponent, a as createAstro, b as addAttribute, r as renderHead, d as renderComponent, e as renderTemplate } from '../chunks/astro/server_DJ7T-eX3.mjs';
import 'kleur/colors';
/* empty css                                  */
import { $ as $$BaseLayout } from '../chunks/BaseLayout_413vpErp.mjs';
import { $ as $$BlogPost } from '../chunks/BlogPost_D-9WM-iF.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Blog = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Blog;
  const allPosts = Object.values(
    [__vite_glob_0_0,__vite_glob_0_1,__vite_glob_0_2,__vite_glob_0_3]
  );
  const pageTitle = "Mon blog d\u2019apprentissage Astro";
  return renderTemplate`<html lang="fr"> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${pageTitle}</title>${renderHead()}</head> <body> ${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": pageTitle }, { "default": ($$result2) => renderTemplate` <p>Voici où je vais publier mon parcours d'apprentissage d'Astro.</p> <ul> ${allPosts.map((post) => renderTemplate`${renderComponent($$result2, "BlogPost", $$BlogPost, { "url": post.url, "title": post.frontmatter.title })}`)} </ul> ` })} </body></html>`;
}, "/home/richard/Documents/dev/front/create-your-first-astro-project/src/pages/blog.astro", void 0);

const $$file = "/home/richard/Documents/dev/front/create-your-first-astro-project/src/pages/blog.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Blog,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
