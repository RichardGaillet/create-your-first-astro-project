import { c as createComponent, a as createAstro, m as maybeRenderHead, b as addAttribute, e as renderTemplate } from './astro/server_DJ7T-eX3.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro();
const $$BlogPost = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BlogPost;
  const { title, url } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li> <a${addAttribute(url, "href")}>${title}</a> </li>`;
}, "/home/richard/Documents/dev/front/create-your-first-astro-project/src/components/BlogPost.astro", void 0);

export { $$BlogPost as $ };
