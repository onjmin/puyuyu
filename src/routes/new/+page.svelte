<script lang="ts">
    import { goto } from "$app/navigation";

    let namespace = "";
    let content = "";
    let mode: "html" | "markdown" = "html";

    function preview() {
        if (!namespace) return alert("名前空間を入力してください");

        localStorage.setItem(
            `page:${namespace}`,
            JSON.stringify({ content, mode }),
        );

        // ページ遷移
        goto(`/${namespace}`);
    }

    function goHome() {
        goto("/");
    }
</script>

<h1 class="text-2xl font-bold mb-4">ページ作成</h1>

<div class="flex flex-col gap-4">
    <label>
        名前空間（英数字、スラッシュ、ドット含む）:
        <input
            bind:value={namespace}
            placeholder="例: user/abc.def"
            class="p-2 border rounded w-full"
        />
    </label>

    <label>
        本文（HTML または Markdown）:
        <textarea
            bind:value={content}
            class="p-2 border rounded w-full h-40 resize-y"
        ></textarea>
    </label>

    <label class="flex gap-2 items-center">
        <input type="radio" name="mode" value="html" bind:group={mode} />
        HTML
    </label>
    <label class="flex gap-2 items-center">
        <input type="radio" name="mode" value="markdown" bind:group={mode} />
        Markdown
    </label>

    <button
        onclick={preview}
        class="bg-blue-600 text-white p-2 rounded hover:bg-blue-700 w-32"
    >
        プレビュー
    </button>

    <button
        onclick={goHome}
        class="bg-gray-600 text-white p-2 rounded hover:bg-gray-700 w-32"
    >
        ホームへ戻る
    </button>
</div>
