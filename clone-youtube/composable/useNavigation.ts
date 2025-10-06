import { useRouter } from 'vue-router';

export function useNavigation() {
	const router = useRouter();
	const getToVideo = (videoId: string) => {
		router.push(`/watch/${videoId}`);
	};

	const goToChannel = (channelId: string) => {
		console.log('Go to channel', channelId);
		router.push(`/channel/${channelId}`);
	};

	return { getToVideo, goToChannel };
}
