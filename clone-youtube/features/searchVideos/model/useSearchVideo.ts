import { ref } from 'vue';
import type { IYouTubeResponse } from '@/entities/video/model/types';
import { searchRepository } from '../api/searchRepository';
import { videoRepository } from '../../videoFeed/api/videoRepository';
import { useMapVideos } from '../../../composable/useMapVideos';
import { useSearchStore } from '../../../entities/search/store/searchStore';

export default function useSearchVideo() {
	const videos = ref<IYouTubeResponse | null>(null);
	const pageToken = ref<string | null>(null);
	const hasMore = ref(true);

	const searchStore = useSearchStore();
	const { buildAvatarMap, mapVideos } = useMapVideos();

	const fetchSearchVideos = async () => {
		if (!hasMore.value) return;

		const data: IYouTubeResponse = await searchRepository.searchVideos(
			searchStore.query
		);
		pageToken.value = data.nextPageToken || null;
		hasMore.value = !!pageToken.value;

		const channelsIds = data.items.map((item) => item.snippet.channelId);
		const channelsData = await videoRepository.fetchChannels(channelsIds);

		const avatarMap = buildAvatarMap(channelsData);
		const newVideos = mapVideos(data, avatarMap);

		if (!videos.value) {
			videos.value = { ...data, items: newVideos };
		} else {
			videos.value.items.push(...newVideos);
		}
	};

	return { videos, fetchSearchVideos, hasMore };
}
