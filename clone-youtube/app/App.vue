<template>
	<div class="flex flex-col bg-[#0f0f0f]">
		<Header class="" />
		<div class="flex">
			<Sidebar class="" />
			<router-view class="" />
		</div>
	</div>
</template>

<script lang="ts" setup>
import { watch, computed } from 'vue';
import { useRoute } from 'vue-router';
import { useSearchStore } from '@entities/search/store/searchStore';
import Header from '@widgets/header/ui/Header.vue';
import Sidebar from '@widgets/sidebar/ui/Sidebar.vue';

// const searchStore = useSearchStore();
// const route = useRoute();
// const isRoutePath = computed(() => route.path);


// 	watch(isRoutePath, async (newPath) => {
// 		if (newPath !== '/search') {
// 			searchStore.resetQuery();
// 		}
// 	});
</script>

<style scoped></style>
