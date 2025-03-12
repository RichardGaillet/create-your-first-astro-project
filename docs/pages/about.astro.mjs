import { c as createComponent, a as createAstro, b as addAttribute, r as renderHead, d as renderComponent, e as renderTemplate } from '../chunks/astro/server_DJ7T-eX3.mjs';
import 'kleur/colors';
/* empty css                                  */
import { $ as $$BaseLayout } from '../chunks/BaseLayout_ZmfLD2WQ.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$About = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  const pageTitle = "\xC0 propos de moi";
  const identity = {
    firstName: "Sarah",
    country: "Canada",
    occupation: "R\xE9dactrice technique",
    hobbies: ["photographie", "observation des oiseaux", "baseball"]
  };
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Astro",
    "R\xE9daction de documentation"
  ];
  return renderTemplate`<html lang="fr" data-astro-cid-kh7btl4r> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${pageTitle}</title>${renderHead()}</head> <body data-astro-cid-kh7btl4r> ${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": pageTitle, "data-astro-cid-kh7btl4r": true }, { "default": ($$result2) => renderTemplate` <h2 data-astro-cid-kh7btl4r>... et de mon nouveau site Astro !</h2> <p data-astro-cid-kh7btl4r>
Je suis en train de suivre le tutoriel d'introduction d'Astro. C'est la
        deuxième page de mon site web, et c'est la première que j'ai construite
        moi-même !
</p> <p data-astro-cid-kh7btl4r>
Ce site se mettra à jour au fur et à mesure que je compléterai davantage
        le tutoriel, alors revenez régulièrement voir comment se déroule mon
        parcours !
</p><p data-astro-cid-kh7btl4r>Voici quelques faits me concernant :</p> <ul data-astro-cid-kh7btl4r> <li data-astro-cid-kh7btl4r>Je m'appelle ${identity.firstName}.</li> <li data-astro-cid-kh7btl4r>
Je vis au ${identity.country} et je travaille en tant que ${identity.occupation}.
</li> ${identity.hobbies.length >= 2 && renderTemplate`<li data-astro-cid-kh7btl4r>
Deux de mes loisirs sont : ${identity.hobbies[0]} et${" "} ${identity.hobbies[1]} </li>`} </ul> <p data-astro-cid-kh7btl4r>Voici mes compétences :</p> <ul data-astro-cid-kh7btl4r> ${skills.map((skill) => renderTemplate`<li class="skill" data-astro-cid-kh7btl4r>${skill}</li>`)} </ul> ${renderTemplate`<p data-astro-cid-kh7btl4r>Je suis heureux d'apprendre Astro !</p>`}${renderTemplate`<p data-astro-cid-kh7btl4r>J'ai terminé ce tutoriel !</p>`}${renderTemplate`<p data-astro-cid-kh7btl4r>Mon objectif est de terminer en 3 jours.</p>` }` })} </body></html>`;
}, "/home/richard/Documents/dev/front/create-your-first-astro-project/src/pages/about.astro", void 0);

const $$file = "/home/richard/Documents/dev/front/create-your-first-astro-project/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
