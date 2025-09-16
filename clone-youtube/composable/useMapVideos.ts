import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import relativeTime from 'dayjs/plugin/relativeTime';
import { formattedDuration } from '@features/videoFeed/utils/formattedDuration';
import { compactViews } from '@features/videoFeed/utils/compactViews';
import type { IVideo } from '@/entities/video/model/types';

dayjs.extend(duration);
dayjs.extend(relativeTime);
dayjs.locale('ru');

export function useMapVideos() {
	const buildAvatarMap = (cnannelsData: any): Record<string, string> => {
		const avatarMap: Record<string, string> = {};
		cnannelsData.items.forEach((ch: any) => {
			avatarMap[ch.id] = ch.snippet.thumbnails.default.url;
		});
		return avatarMap;
	};

	const mapVideos = (data: any, avatarMap: Record<string, string>) => {
		return data.items.map((item: any) => {
			const dur = dayjs.duration(item.contentDetails.duration);
			return {
				...item,
				snippet: {
					...item.snippet,
					publishedAt: dayjs(item.snippet.publishedAt).fromNow(),
					channelAvatar: avatarMap[item.snippet.channelId] || null,
					description: item.snippet.description.replace(/\n/g, ' '),
				},
				contentDetails: {
					...item.contentDetails,
					duration: formattedDuration(dur),
				},
				statistics: {
					viewCount: compactViews(item.statistics.viewCount),
				},
			} as IVideo;
		});
	};
	return { buildAvatarMap, mapVideos };
}
