<template>
	<div>
		<editor-menu-bar :editor="editor" v-slot="{ commands, isActive }">
			<div class="space-x-4 border-b border-black ">
				<button
					:class="{ 'is-active': isActive.bold() }"
					@click="commands.bold"
				>
					Bold
				</button>
				<button
					:class="{ 'is-active': isActive.heading({ level: 1 }) }"
					@click="commands.heading({ level: 1 })"
				>
					H1
				</button>
			</div>
		</editor-menu-bar>
		<editor-content :editor="editor" class="editor_content" />
	</div>
</template>

<script>
import { Editor, EditorContent, EditorMenuBar } from 'tiptap';
import { Bold, Heading } from 'tiptap-extensions';

export default {
	components: {
		EditorMenuBar,
		EditorContent
	},
	data() {
		return {
			editor: new Editor({
				extensions: [new Heading(), new Bold()],
				content: `
					<h1> Hello World! </h1>
					<p> Hello World! </p>
					<b>Yes sir </b>
				`
			})
		};
	},
	beforeDestroy() {
		this.editor.destroy();
	}
};
</script>

<style>
*:focus {
	@apply outline-none;
}

.editor_content {
}

.editor_content > * {
	@apply p-2;
}

.editor_content h1 {
	@apply font-bold text-4xl my-1;
}
</style>
