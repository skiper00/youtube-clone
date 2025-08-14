<template>
	<div class="p-2 gap-5 grid grid-cols-3">
		<video-card 
		v-for="video in videos?.items"
		:key="video.id"
		:preview="video.snippet.thumbnails.high.url"
		:name-video="video.snippet.title"
		:name-channel="video.snippet.channelTitle"
		:published-at="video.snippet.publishedAt"
		:duration="video.contentDetails.duration"
		:view-count="+video.statistics.viewCount"
		:avatarMap="video.snippet.channelAvatar"
		/>
	</div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import getVideos from '@entities/video/api/video';
import VideoCard from '@features/videoFeed/ui/VideoCard.vue';

const { fetchVideos, videos } = getVideos();

onMounted(async() => {
	await fetchVideos()
	console.log('Все',videos.value)
	if(videos.value) {
		console.log('Инфа',videos.value.items);
	}
})

</script>
