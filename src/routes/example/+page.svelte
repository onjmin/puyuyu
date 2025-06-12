<script lang="ts">
    let url = $state("https://i.imgur.com/Airoz1ks.png");

    const handleClick = () => {
        alert(1);
    };
</script>

<div
    class="max-w-xl mx-auto mt-16 p-6 border rounded-2xl shadow bg-white space-y-6"
>
    <h1 class="text-2xl font-bold text-gray-800">例のダウンローダ</h1>

    <div class="space-y-4">
        <label class="block text-sm font-medium text-gray-700"
            >ファイルの相対パス</label
        >
        <div class="flex items-center border rounded overflow-hidden">
            <span
                class="px-3 bg-gray-100 text-gray-600 text-sm whitespace-nowrap"
            >
                aiueo
            </span>
            <input
                type="text"
                bind:value={url}
                placeholder="/some/file.zip"
                class="flex-1 px-3 py-2 outline-none text-sm"
            />
        </div>

        <button
            onclick={handleClick}
            class="mt-4 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded hover:bg-blue-700"
        >
            ダウンロード
        </button>
    </div>

    <div class="text-sm text-gray-500">
        実際のURL: <code class="break-all text-gray-700">{url}</code>
    </div>
</div>
