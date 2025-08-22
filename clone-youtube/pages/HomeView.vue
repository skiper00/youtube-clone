<template>
	<div class="relative">
		<div class="p-2 gap-5 grid grid-cols-3">
			<!-- <video-card 
			v-for="video in videos?.items" 
			:key="video.id"
			@click="getToVideo(video.id)" 
			:preview="video.snippet.thumbnails.high.url" 
			:name-video="video.snippet.title"
			:name-channel="video.snippet.channelTitle" 
			:published-at="video.snippet.publishedAt"
			:duration="video.contentDetails.duration" 
			:view-count="video.statistics.viewCount"
			:avatar-map="video.snippet.channelAvatar" 
			/> -->

				<Loader class="absolute top-1/2 left-[1000%] " ref="loadMore" v-if="hasMore" />
		</div>
	</div>
</template>

<script lang="ts" setup>
import { onMounted, onUnmounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import useVideoFeed from '@features/videoFeed/model/useVideoFeed.ts';
import VideoCard from '@features/videoFeed/ui/VideoCard.vue';
import Loader from '@shared/ui/Loader.vue';

const router = useRouter();

const { fetchVideos, videos, hasMore } = useVideoFeed();
const loadMore = ref(null);

const getToVideo = (videoId: string) => {
	router.push(`/watch/${videoId}`);
};

const observer = new IntersectionObserver(
	async (entries) => {
		if (entries[0].isIntersecting && hasMore.value) {
			await fetchVideos();
		}
	},
	{ threshold: 0 }
);

onMounted(async () => {
	await fetchVideos();
	if (loadMore.value) {
		observer.observe(loadMore.value);
	}
});

onUnmounted(() => {
	observer.disconnect();
});
</script>
