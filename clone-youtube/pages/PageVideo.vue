<template>
	<div class="pa-4">
		<VideoPlayer :videoId="videoId" />
	</div>
</template>

<script lang="ts" setup>
import { computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import VideoPlayer from '@features/videoPlayer/ui/VideoPlayer.vue';
import useVideoFeed from '@features/videoFeed/model/useVideoFeed.ts';

const route = useRoute();
const videoId = route.params.id as string;

const { fetchVideos, videos } = useVideoFeed();

onMounted(async () => {
	await fetchVideos();
});

const videoData = computed(() =>
	videos.value?.items.find((v) => v.id === videoId)
);
</script>
