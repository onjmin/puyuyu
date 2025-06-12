<script lang="ts">
    import { type Headline, fixed } from "$lib/fixed";
    import * as unjStorage from "$lib/unj-storage";

    const pages: Map<string, Headline> = $state(new Map());
    let size = $state(0);

    $effect(() => {
        const { json } = unjStorage.headline;
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
    });
</script>

<h2 class="text-xl font-bold mt-8 mb-4 text-center">ページ一覧</h2>

{#if size > 0}
    <ul class="space-y-4">
        {#each pages as [namespace, page]}
            <li class="border p-0 rounded hover:bg-gray-100">
                <a
                    href={`/${namespace}`}
                    class="block p-4 no-underline text-inherit hover:bg-gray-100"
                >
                    <h2 class="font-bold text-lg">{namespace}</h2>
                    <div class="mt-2 text-sm">
                        {page.title.length <= 64
                            ? page.title
                            : page.title.slice(0, 64)}
                    </div>
                </a>
            </li>
        {/each}
    </ul>
{:else}
    <p class="text-center">投稿はまだありません。</p>
{/if}
