<template>
	<div id="app">
		<LKNav />
		<main class="mt-20 mx-36">
			<router-view></router-view>
		</main>
	</div>
</template>

<script>
import { LKNav } from './components';
export default {
	components: {
		LKNav
	}
};
</script>
