import { c as createComponent, d as renderComponent, e as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DJ7T-eX3.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_413vpErp.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const pageTitle = "Page d'accueil";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": pageTitle }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h2>Mon sous-titre de blog génial</h2> ` })}`;
}, "/home/richard/Documents/dev/front/create-your-first-astro-project/src/pages/index.astro", void 0);

const $$file = "/home/richard/Documents/dev/front/create-your-first-astro-project/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
