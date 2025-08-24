<template>
	<div class="w-full">
		<div v-if="videos?.items" class="pa-3 gap-5 grid grid-cols-3">
			<video-card
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
			/>
		</div>
		<div v-else class="pa-3 gap-5 grid grid-cols-3">
			<v-skeleton-loader
				v-for="n in 50"
				:key="n"
				boilerplate
				type="image, list-item-avatar-two-line"
				elevation="3"
				class="rounded-lg w-full aspect-video bg-skeleton"
			/>
		</div>
		<div ref="loadMore" v-if="hasMore" class="h-16"></div>
	</div>
</template>

<script lang="ts" setup>
import { onMounted, onUnmounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import useVideoFeed from '@features/videoFeed/model/useVideoFeed.ts';
import VideoCard from '@features/videoFeed/ui/VideoCard.vue';

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

<style scoped>
:deep(.v-skeleton-loader) {
	padding: 0 !important;
	margin: 0 !important;
	display: block;
}

.bg-skeleton {
	background-color: #252525 !important;
}

</style>
