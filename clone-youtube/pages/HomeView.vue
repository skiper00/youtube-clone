<template>
	<div class="p-2 gap-5 grid grid-cols-3">
		<video-card
			v-for="video in videos?.items"
			@click="getToVideo(video.id)"
			:key="video.id"
			:preview="video.snippet.thumbnails.high.url"
			:name-video="video.snippet.title"
			:name-channel="video.snippet.channelTitle"
			:published-at="video.snippet.publishedAt"
			:duration="video.contentDetails.duration"
			:view-count="+video.statistics.viewCount"
			:avatar-map="video.snippet.channelAvatar"
		/>
	</div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import {useVideoFeed} from '@/features/videoFeed/model/useVideoFeed';
import VideoCard from '@features/videoFeed/ui/VideoCard.vue';

const router = useRouter();

const { fetchVideos, videos } = useVideoFeed();

const getToVideo = (videoId: string) => {
	router.push(`/watch/${videoId}`);
};

onMounted(async () => {
	await fetchVideos();
});
</script>
