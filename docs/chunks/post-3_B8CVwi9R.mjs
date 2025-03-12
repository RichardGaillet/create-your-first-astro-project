import { c as createComponent, d as renderComponent, e as renderTemplate, u as unescapeHTML } from './astro/server_DJ7T-eX3.mjs';
import 'kleur/colors';
import { $ as $$MarkdownPostLayout } from './MarkdownPostLayout_D-RBq1Ib.mjs';

const html = () => "<p>Ce n’était pas toujours tout rose, mais j’adore construire avec Astro. Et, la <a href=\"https://astro.build/chat\">communauté Discord</a> est vraiment sympathique et serviable !</p>";

				const frontmatter = {"layout":"../../layouts/MarkdownPostLayout.astro","title":"Mon troisième article de blog","author":"Apprenti Astro","description":"J'ai eu quelques défis, mais demander de l'aide à la communauté m'a vraiment aidé !","image":{"url":"https://docs.astro.build/assets/rays.webp","alt":"Le logo Astro sur un fond sombre avec un arc de cercle dégradé violet."},"pubDate":"2022-07-15T00:00:00.000Z","tags":["astro","learning in public","setbacks","community"]};
				const file = "/home/richard/Documents/dev/front/create-your-first-astro-project/src/pages/posts/post-3.md";
				const url = "/posts/post-3";
				function rawContent() {
					return "   \n                                              \n                                    \n                      \n                                                                                                  \n      \n                                                  \n                                                                               \n                   \n                                                              \n   \n\nCe n'était pas toujours tout rose, mais j'adore construire avec Astro. Et, la [communauté Discord](https://astro.build/chat) est vraiment sympathique et serviable !\n";
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

const __vite_glob_0_2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
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

export { __vite_glob_0_2 as _ };
