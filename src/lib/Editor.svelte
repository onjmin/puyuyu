<script lang="ts">
    import type { Content } from "@tiptap/core";
    import { Editor } from "@tiptap/core";
    import StarterKit from "@tiptap/starter-kit";

    let editor = $state<Editor>();
    let element = $state<HTMLElement>();

    let {
        content = $bindable(null),
    }: {
        content: Content;
    } = $props();

    $effect(() => {
        if (!element) return;
        editor = new Editor({
            element,
            content: undefined,
            extensions: [StarterKit],
            editorProps: {
                attributes: {
                    // @tailwindcss/typography をインストールしている場合に使えるクラス
                    class: "prose max-w-full",
                },
            },
            onTransaction: ({ editor }) => {
                content = editor.getJSON();
            },
        });
        return () => {
            editor?.destroy();
        };
    });
</script>

<div bind:this={element} class="border-2"></div>
