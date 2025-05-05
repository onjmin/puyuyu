<script lang="ts">
    import { goto } from "$app/navigation";
    import * as mylib from "$lib";

    let pages: Map<string, mylib.Headline> = $state(new Map());
    let size = $state(0);

    $effect(() => {
        const { json } = mylib.headline;
        const userData = json
            ? Object.entries(json).map(([namespace, title]) => ({
                  namespace,
                  title,
              }))
            : [];
        for (const data of [...userData, ...mylib.fixed]) {
            pages.set(data.namespace, data);
        }
        size = pages.size;
    });

    function viewPost(namespace: string) {
        // 名前空間をクリックした時にその詳細ページに遷移
        goto(`/${namespace}`);
    }
</script>

<!-- アプリタイトル -->
<h1 class="text-2xl font-bold mb-4 text-center">✋🥹 大家都是Puyuyu</h1>
<p class="text-center text-gray-600">ぷゆゆと共に作り上げる巨大サイト</p>

<!-- 新規作成ボタン -->
<div class="text-center mt-4">
    <a href="/new" class="bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >新規作成</a
    >
</div>

<!-- 投稿一覧 -->
<h2 class="text-xl font-bold mt-8 mb-4 text-center">投稿一覧</h2>

{#if size > 0}
    <ul class="space-y-4">
        {#each pages as [namespace, page]}
            <li class="border p-0 rounded hover:bg-gray-100">
                <a
                    href={`/post/${namespace}`}
                    class="block p-4 no-underline text-inherit hover:bg-gray-100"
                >
                    <h2 class="font-bold text-lg">{namespace}</h2>
                    <div class="mt-2 text-sm">
                        {page.title.slice(0, 100)}...
                    </div>
                </a>
            </li>
        {/each}
    </ul>
{:else}
    <p class="text-center">投稿はまだありません。</p>
{/if}
