import { c as createComponent, d as renderComponent, e as renderTemplate, u as unescapeHTML } from './astro/server_DJ7T-eX3.mjs';
import 'kleur/colors';
import { $ as $$MarkdownPostLayout } from './MarkdownPostLayout_D-RBq1Ib.mjs';

const html = () => "<h1 id=\"mon-premier-article-de-blog\">Mon premier article de blog</h1>\n<p>Bienvenue sur mon <em>nouveau blog</em> dédié à l’apprentissage d’Astro ! Ici, je vais partager mon parcours d’apprentissage en construisant un nouveau site web.</p>\n<h2 id=\"ce-que-jai-accompli\">Ce que j’ai accompli</h2>\n<ol>\n<li>\n<p><strong>Installation d’Astro</strong> : Tout d’abord, j’ai créé un nouveau projet Astro et configuré mes comptes en ligne.</p>\n</li>\n<li>\n<p><strong>Création de pages</strong> : Ensuite, j’ai appris à créer des pages en créant de nouveaux fichiers <code>.astro</code> et en les plaçant dans le dossier <code>src/pages/</code>.</p>\n</li>\n<li>\n<p><strong>Création d’articles de blog</strong> : C’est mon premier article de blog ! J’ai maintenant des pages Astro et des articles en Markdown !</p>\n</li>\n</ol>\n<h2 id=\"ce-qui-vient-ensuite\">Ce qui vient ensuite</h2>\n<p>Je vais terminer le tutoriel Astro, puis continuer à ajouter plus d’articles. Restez à l’écoute pour en savoir plus.</p>";

				const frontmatter = {"layout":"../../layouts/MarkdownPostLayout.astro","title":"Mon premier article de blog","pubDate":"2022-07-01T00:00:00.000Z","description":"Il s'agit du premier article de mon nouveau blog Astro.","author":"Apprenti Astro","image":{"url":"https://docs.astro.build/assets/rose.webp","alt":"Le logo Astro sur un fond sombre avec une lueur rose."},"tags":["astro","blogging","learning in public"]};
				const file = "/home/richard/Documents/dev/front/create-your-first-astro-project/src/pages/posts/post-1.md";
				const url = "/posts/post-1";
				function rawContent() {
					return "   \n                                              \n                                    \n                   \n                                                                      \n                        \n      \n                                                  \n                                                              \n                                                 \n   \n\n# Mon premier article de blog\n\nBienvenue sur mon _nouveau blog_ dédié à l'apprentissage d'Astro ! Ici, je vais partager mon parcours d'apprentissage en construisant un nouveau site web.\n\n## Ce que j'ai accompli\n\n1. **Installation d'Astro** : Tout d'abord, j'ai créé un nouveau projet Astro et configuré mes comptes en ligne.\n\n2. **Création de pages** : Ensuite, j'ai appris à créer des pages en créant de nouveaux fichiers `.astro` et en les plaçant dans le dossier `src/pages/`.\n\n3. **Création d'articles de blog** : C'est mon premier article de blog ! J'ai maintenant des pages Astro et des articles en Markdown !\n\n## Ce qui vient ensuite\n\nJe vais terminer le tutoriel Astro, puis continuer à ajouter plus d'articles. Restez à l'écoute pour en savoir plus.\n";
				}
				async function compiledContent() {
					return await html();
				}
				function getHeadings() {
					return [{"depth":1,"slug":"mon-premier-article-de-blog","text":"Mon premier article de blog"},{"depth":2,"slug":"ce-que-jai-accompli","text":"Ce que j’ai accompli"},{"depth":2,"slug":"ce-qui-vient-ensuite","text":"Ce qui vient ensuite"}];
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

const __vite_glob_0_0 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
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

export { __vite_glob_0_0 as _ };
