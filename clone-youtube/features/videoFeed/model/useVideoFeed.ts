import { ref } from 'vue';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import duration from 'dayjs/plugin/duration';
import 'dayjs/locale/ru';

import type { IYouTubeResponse, IVideo } from '@/entities/video/model/types';
import { videoRepository } from '@/features/videoFeed/api/videoRepository';

dayjs.extend(relativeTime);
dayjs.extend(duration);
dayjs.locale('ru');

export default function useVideoFeed() {
    const videos = ref<IYouTubeResponse | null>(null); //переменная которая хранит данные о видео

    //получение видео с апи
    const fetchVideos = async () => {
        //отправляем запрос
        videos.value = await videoRepository.fetchPopular();
        //извлекаем ID каналов, чтобы позже подгрузить их аватарки
        const channelsIds = videos.value.items.map((item) => item.snippet.channelId)
        const channelsData = await videoRepository.fetchChannels(channelsIds);

        const avatarMap: Record<string, string> = {};

        channelsData.map((ch: any) => {
            avatarMap[ch.id] = ch.snippet.thumbnails.default.url;
        })

        videos.value = {
            ...videos.value,
            items: videos.value.items.map((item) => {
                const dur = dayjs.duration(item.contentDetails.duration);
                const formattedDuration =
                    dur.asSeconds() >= 3600 ? dur.format("H:mm:ss") : dur.format("m:ss");

                return {
                    ...item,
                    snippet: {
                        ...item.snippet,
                        publishedAt: dayjs(item.snippet.publishedAt).fromNow(), // форматируем дату
                        channelAvatar: avatarMap[item.snippet.channelId] || null, // добавляем аватарку канала
                    },
                    contentDetails: {
                        ...item.contentDetails,
                        duration: formattedDuration,
                    },
                } as IVideo
            }),
        }
    };

    return { videos, fetchVideos };
}