<template>
	<div>
		<div v-if="videos?.items" class="wrapper-videos">
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
		<div v-else class="wrapper-videos">
			<div v-for="n in 50" :key="n" class="skeleton-wrapper">
				<v-skeleton-loader
					boilerplate
					type="image, list-item-avatar-two-line"
					elevation="3"
					class="rounded-lg w-full aspect-video skeleton-item"
				/>
			</div>
		</div>
		<div ref="loadMore" v-if="hasMore" class="h-16"></div>
	</div>
</template>

<script lang="ts" setup>
import { onMounted, onUnmounted, ref } from 'vue';
import useVideoFeed from '@features/videoFeed/model/useVideoFeed.ts';
import VideoCard from '@entities/video/ui/VideoCard.vue';
import { useNavigation } from '../../../composable/useNavigation';

const { getToVideo } = useNavigation();

const { fetchVideos, videos, hasMore } = useVideoFeed();
const loadMore = ref(null);


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
.skeleton-item {
	background-color: #252525 !important;
	width: 100% !important;
}

.wrapper-videos {
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 20px;
}

.wrapper-videos > * {
	width: 100%;
	max-width: 100%;
}

:deep(.v-skeleton-loader__image) {
	height: 100% !important;
	width: 100% !important;
	object-fit: cover;
}

@media (max-width: 1024px) {
	.wrapper-videos {
		grid-template-columns: repeat(2, 1fr);
	}
}

@media (max-width: 791px) {
	.wrapper-videos {
		grid-template-columns: 1fr;
	}
}
</style>
