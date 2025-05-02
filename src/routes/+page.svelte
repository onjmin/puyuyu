<script lang="ts">
    import { goto } from "$app/navigation";

    let posts: { namespace: string; content: string; mode: string }[] = [];

    // セッションストレージから投稿データを取得
    $effect(() => {
        // ここで `sessionStorage` からデータを読み込む
        const storedData = Object.keys(sessionStorage)
            .filter((key) => key.startsWith("page:"))
            .map((key) => JSON.parse(sessionStorage.getItem(key)!));

        // 投稿データをセット
        posts = storedData;
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

{#if posts.length > 0}
    <ul class="space-y-4">
        {#each posts as post}
            <li
                class="border p-4 rounded hover:bg-gray-100 cursor-pointer"
                on:click={() => viewPost(post.namespace)}
            >
                <h2 class="font-bold text-lg">{post.namespace}</h2>
                <p class="text-sm text-gray-600">
                    {post.mode === "markdown" ? "Markdown 投稿" : "HTML 投稿"}
                </p>
                <div class="mt-2 text-sm">{post.content.slice(0, 100)}...</div>
                <!-- 投稿内容の先頭100文字表示 -->
            </li>
        {/each}
    </ul>
{:else}
    <p class="text-center">投稿はまだありません。</p>
{/if}
