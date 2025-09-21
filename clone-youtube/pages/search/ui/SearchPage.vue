<template>
	<div class="py-2 px-10 h-screen overflow-y-auto">
		<SearchResults :videos="videos?.items" />
	</div>
</template>

<script lang="ts" setup>
import { onMounted, watch } from 'vue';
import { useSearchStore } from '@entities/search/store/searchStore';
import useSearchVideo from '@features/searchVideos/model/useSearchVideo';
import SearchResults from '@widgets/searchResults/ui/SearchResults.vue';
import { useRouter } from 'vue-router';
import { storeToRefs } from 'pinia';

const router = useRouter();
const searchStore = useSearchStore();
const { query } = storeToRefs(searchStore);

const { videos, fetchSearchVideos, resetVideos } = useSearchVideo();

onMounted(async () => {
	if (!query.value || query.value.trim() === '') {
		await router.push('/');
		return;
	}
	resetVideos();
	await fetchSearchVideos();
});

watch(query, async (newQuery) => { 
	if (newQuery.trim()) { 
		resetVideos();
		await fetchSearchVideos(); 
	} 
});


</script>