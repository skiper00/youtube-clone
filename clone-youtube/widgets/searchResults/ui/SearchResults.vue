<template>
	<div class="">
		<div v-if="videos">
			<SearchCard
				v-for="video in videos || []"
				:key="video.id"
				@click="getToVideo(video.id)"
				:channel-id="video.snippet.channelId"
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
import { useNavigation } from '../../../composable/useNavigation';

const { getToVideo } = useNavigation();

defineProps<{
	videos: any[];
}>();
</script>
