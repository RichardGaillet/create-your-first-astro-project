import { c as createComponent, d as renderComponent, e as renderTemplate, u as unescapeHTML } from './astro/server_DJ7T-eX3.mjs';
import 'kleur/colors';
import { $ as $$MarkdownPostLayout } from './MarkdownPostLayout_B25KddOp.mjs';

const html = () => "<p>Ce billet devrait apparaître avec mes autres billets de blog, car <code>import.meta.glob()</code> renvoie une liste de tous mes billets pour créer ma liste.</p>";

				const frontmatter = {"layout":"../../layouts/MarkdownPostLayout.astro","title":"Mon quatrième billet de blog","author":"Apprenti Astro","description":"Ce billet apparaîtra tout seul !","image":{"url":"https://docs.astro.build/default-og-image.png","alt":"Le mot « astro » sur fond d'illustration de planètes et d'étoiles."},"pubDate":"2022-08-08T00:00:00.000Z","tags":["astro","successes"]};
				const file = "/home/richard/Documents/dev/front/create-your-first-astro-project/src/pages/posts/post-4.md";
				const url = "/posts/post-4";
				function rawContent() {
					return "   \n                                              \n                                   \n                      \n                                               \n      \n                                                      \n                                                                           \n                   \n                            \n   \n\nCe billet devrait apparaître avec mes autres billets de blog, car `import.meta.glob()` renvoie une liste de tous mes billets pour créer ma liste.\n";
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

const __vite_glob_0_3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
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

export { __vite_glob_0_3 as _ };
