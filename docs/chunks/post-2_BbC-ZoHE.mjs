import { c as createComponent, d as renderComponent, e as renderTemplate, u as unescapeHTML } from './astro/server_DJ7T-eX3.mjs';
import 'kleur/colors';
import { $ as $$MarkdownPostLayout } from './MarkdownPostLayout_B25KddOp.mjs';

const html = () => "<p>Après une première semaine réussie d’apprentissage d’Astro, j’ai décidé d’en faire un peu plus. J’ai écrit et importé un petit composant de mémoire !</p>";

				const frontmatter = {"layout":"../../layouts/MarkdownPostLayout.astro","title":"Mon deuxième article de blog","author":"Apprenti Astro","description":"Après avoir appris Astro, je ne pouvais plus m'arrêter !","image":{"url":"https://docs.astro.build/assets/arc.webp","alt":"Le logo Astro sur un fond sombre avec un arc de cercle dégradé violet."},"pubDate":"2022-07-08T00:00:00.000Z","tags":["astro","blogging","learning in public","successes"]};
				const file = "/home/richard/Documents/dev/front/create-your-first-astro-project/src/pages/posts/post-2.md";
				const url = "/posts/post-2";
				function rawContent() {
					return "   \n                                              \n                                   \n                      \n                                                                       \n      \n                                                 \n                                                                               \n                   \n                                                              \n   \n\nAprès une première semaine réussie d'apprentissage d'Astro, j'ai décidé d'en faire un peu plus. J'ai écrit et importé un petit composant de mémoire !\n";
				}
				async function compiledContent() {
					return await html();
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${renderComponent(result, 'Layout', $$MarkdownPostLayout, {
								file,
								url,
								content,
								frontmatter: content,
								headings: getHeadings(),
								rawContent,
								compiledContent,
								'server:root': true,
							}, {
								'default': () => renderTemplate`${unescapeHTML(html())}`
							})}`;
				});

const __vite_glob_0_1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content,
	compiledContent,
	default: Content,
	file,
	frontmatter,
	getHeadings,
	rawContent,
	url
}, Symbol.toStringTag, { value: 'Module' }));

export { __vite_glob_0_1 as _ };
