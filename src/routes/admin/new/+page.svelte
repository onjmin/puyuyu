<script lang="ts">
    import { goto } from "$app/navigation";
    import Editor from "$lib/Editor.svelte";
    import type { Content } from "@tiptap/core";

    let namespace = $state("");
    let content = $state<Content>(null);
    let pageHTML = $state("");

    function preview() {
        if (!namespace) return alert("名前空間を入力してください");
        // pageHTML = content;

        // localStorage.setItem(
        //     `page:${namespace}`,
        //     JSON.stringify({ content, mode }),
        // );

        // // ページ遷移
        // goto(`/${namespace}`);
    }
</script>

<h1 class="text-2xl font-bold mb-4">ページ作成</h1>

<div class="flex flex-col gap-4">
    <label>
        <div
            class="flex items-center border rounded overflow-hidden w-full max-w-md"
        >
            <span class="px-2 bg-gray-100 text-gray-600 select-none">
                {import.meta.env.VITE_BASE_URL}
            </span>
            <input
                class="flex-1 px-2 py-1 outline-none"
                bind:value={namespace}
                placeholder="puyuyu"
            />
        </div>
    </label>

    <Editor bind:content />

    <div class="flex gap-4">
        <button
            onclick={preview}
            class="bg-blue-600 text-white p-2 rounded hover:bg-blue-700 w-32"
        >
            プレビュー
        </button>
    </div>
</div>
{@html pageHTML}
