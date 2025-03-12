import { _ as __vite_glob_0_0 } from '../../chunks/post-1_Cp3aVvVS.mjs';
import { _ as __vite_glob_0_1 } from '../../chunks/post-2_BAvnlrv1.mjs';
import { _ as __vite_glob_0_2 } from '../../chunks/post-3_B8CVwi9R.mjs';
import { _ as __vite_glob_0_3 } from '../../chunks/post-4_Cb-24zgX.mjs';
import { c as createComponent, a as createAstro, d as renderComponent, e as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_DJ7T-eX3.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_413vpErp.mjs';
import { $ as $$BlogPost } from '../../chunks/BlogPost_D-9WM-iF.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
async function getStaticPaths() {
  const allPosts = Object.values(
    [__vite_glob_0_0,__vite_glob_0_1,__vite_glob_0_2,__vite_glob_0_3]
  );
  const uniqueTags = [
    ...new Set(allPosts.map((post) => post.frontmatter.tags).flat())
  ];
  return uniqueTags.map((tag) => {
    const filteredPosts = allPosts.filter(
      (post) => post.frontmatter.tags.includes(tag)
    );
    return {
      params: { tag },
      props: { posts: filteredPosts }
    };
  });
}
const $$tag = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$tag;
  const { tag } = Astro2.params;
  const { posts } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": tag }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<p>Articles étiquetés avec ${tag}</p> <ul> ${posts.map((post) => renderTemplate`${renderComponent($$result2, "BlogPost", $$BlogPost, { "url": post.url, "title": post.frontmatter.title })}`)} </ul> ` })}`;
}, "/home/richard/Documents/dev/front/create-your-first-astro-project/src/pages/tags/[tag].astro", void 0);

const $$file = "/home/richard/Documents/dev/front/create-your-first-astro-project/src/pages/tags/[tag].astro";
const $$url = "/tags/[tag]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$tag,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
