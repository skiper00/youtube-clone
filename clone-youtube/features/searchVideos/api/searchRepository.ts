import type { IYouTubeResponse } from '@/entities/video/model/types';
import type { ISearchVieos } from '@/entities/search/api/searchRepository';
import { useSearchVideosLoader } from '../store/loader';

const apiKey = import.meta.env.VITE_API_KEY;

export const searchRepository: ISearchVieos = {
	async searchVideos(query: string): Promise<IYouTubeResponse> {
		const { setLoading } = useSearchVideosLoader();
		setLoading(true);
		try {
			const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=25&q=${encodeURIComponent(query)}&key=${apiKey}`;
			const res = await fetch(url);
			if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

			const searchData = await res.json();

			const ids = searchData.items
				.map((item: any) => item.id.videoId)
				.join(',');
			if (!ids) {
				return { ...searchData, items: [] };
			}
			const videoUrl = `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${ids}&key=${apiKey}`;
			const videoRes = await fetch(videoUrl);
			if (!videoRes.ok)
				throw new Error(`HTTP error! status: ${videoRes.status}`);
			const videoData = await videoRes.json();
			setLoading(false);
			return videoData as IYouTubeResponse;
		} catch (e) {
			console.error(e);
		}
	},
};
