<template>
	<div>
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


defineProps<{
	videos: any[];
}>();
</script>