<template>
	<div>
		<!-- <div v-if="isLoading" class="text-center text-xl font-semibold text-gray-600 mt-10">
			Loading...
		</div>
		<div v-else-if="!videos.length" class="text-center text-xl font-semibold text-gray-600 mt-10">
		No videos found.
	</div> -->
	<div v-if="videos" class="">
		<SearchCard
			v-for="video in videos || []"
			:key="video.id"
			:preview="video.snippet.thumbnails.high.url"
			:name-video="video.snippet.title"
			:name-channel="video.snippet.channelTitle"
			:published-at="video.snippet.publishedAt"
			:duration="video.contentDetails?.duration"
			:view-count="video.statistics?.viewCount"
			:avatar-map="video.snippet.channelAvatar"
			:description="video.snippet.description"
			class="mt-3"
		/>
	</div>
	</div>
</template>

<script lang="ts" setup>
import SearchCard from '@entities/search/ui/SearchCard.vue';
import { useSearchVideosLoader } from '@features/searchVideos/store/loader';

const isLoading = useSearchVideosLoader();

defineProps<{
	videos: any[];
}>();
</script>