<script lang="ts">
	import "../app.css";
	import { base } from "$app/paths";

	let { children } = $props();

	const title = "✋🥹 大家都是Puyuyu";
	const description = "ぷゆゆと共に作り上げる巨大サイト";
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

{@render children()}
