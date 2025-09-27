<template>
	<div class="h-screen">
		<div v-if="isLoading" class="fixed inset-0 flex items-center justify-center">
			<LoaderSearch />
		</div>
		<div v-else class="py-2 px-10 h-screen overflow-y-auto">
			<SearchResults :videos="videos?.items" />
		</div>
	</div> 
</template>

<script lang="ts" setup>
import { onMounted, watch } from 'vue';
import LoaderSearch from '@shared/ui/LoaderSearch.vue';
import { useSearchStore } from '@entities/search/store/searchStore';
import useSearchVideo from '@features/searchVideos/model/useSearchVideo';
import SearchResults from '@widgets/searchResults/ui/SearchResults.vue';
import { useRouter } from 'vue-router';
import { storeToRefs } from 'pinia';
import { useSearchVideosLoader } from '@features/searchVideos/store/loader';

const searchLoaderStore = useSearchVideosLoader();
const { isLoading } = storeToRefs(searchLoaderStore);

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