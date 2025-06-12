<script lang="ts">
	import "../app.css";
	import { base } from "$app/paths";
	import { page } from "$app/state";
	import { type Headline, fixed } from "$lib/fixed";
	import { UnjStorage, headline } from "$lib/unj-storage";

	let { children } = $props();

	const defaultTitle = "✋🥹 大家都是Puyuyu";
	let title = $state(defaultTitle);
	let pageHTML: string | undefined = $state();
	const description = "ぷゆゆと共に作り上げる巨大サイト";

	const pages: Map<string, Headline> = $state(new Map());
	let size = $state(0);

	$effect(() => {
		const { json } = headline;
		const userData = json
			? Object.entries(json).map(([namespace, title]) => ({
					namespace,
					title,
				}))
			: [];
		for (const data of [...userData, ...fixed]) {
			pages.set(data.namespace, data);
		}
		size = pages.size;
		const currentPage = pages.get(page.url.pathname.slice(1));
		if (currentPage) {
			title = currentPage.title;
			const value = new UnjStorage(`test###${currentPage.namespace}`)
				?.value;
			if (value) pageHTML = value;
		} else {
			title = defaultTitle;
		}
	});
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />

	<!-- Open Graph -->
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="{base}/" />
	<meta property="og:image" content="{base}/puyuyu.png" />

	<!-- Twitter Card -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content="{base}/puyuyu.png" />

	<!-- Apple Touch Icon -->
	<link rel="apple-touch-icon" href="{base}/puyuyu.png" />

	<!-- PWA 対応 -->
	<link rel="manifest" href="{base}/manifest.json" />
	<meta name="theme-color" content="#f09199" />
</svelte:head>

<header class="bg-gray-900 text-white px-6 py-4 shadow">
	<nav class="flex justify-between items-center max-w-6xl mx-auto">
		<a href="/" class="text-xl font-bold">{title}</a>
		<ul class="flex gap-4 text-sm">
			<li><a href="/" class="hover:underline">ページ一覧</a></li>
			<li>
				<a href="/admin/new" class="hover:underline">新規作成</a>
			</li>
		</ul>
	</nav>
</header>

{#if pageHTML}
	{@html pageHTML}
{:else}
	{@render children()}
{/if}
