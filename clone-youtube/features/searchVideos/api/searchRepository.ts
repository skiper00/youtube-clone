import type { IYouTubeResponse } from '@/entities/video/model/types';
import type { ISearchVieos } from '@/entities/search/api/searchRepository';
import { useSearchVideosLoader } from '../store/loader';

const apiKey = import.meta.env.VITE_API_KEY;
const { setLoading } = useSearchVideosLoader();

export const searchRepository: ISearchVieos = {
	async searchVideos(query: string): Promise<IYouTubeResponse> {
		setLoading(true);
		try {
			const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=25&q=${encodeURIComponent(query)}&key=${apiKey}`;
			const res = await fetch(url);
			if (!res.ok) {
				throw new Error(`HTTP error! status: ${res.status}`);
			}
			setLoading(false);
			return await res.json();
		} catch (e) {
			console.error(e);
		}
	},
};
