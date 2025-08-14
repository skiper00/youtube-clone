import type { IYouTubeResponse } from "../model/types";
import { ref } from "vue";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import duration from "dayjs/plugin/duration";
import "dayjs/locale/ru";

export default function getVideos() {
    const videos = ref<IYouTubeResponse | null>(null);
    dayjs.extend(relativeTime);
    dayjs.extend(duration);
    dayjs.locale("ru");

    const fetchVideos = async () => {
        const apiKey = import.meta.env.VITE_API_KEY;
        try {
            const videosRes = await fetch(
                `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=50&key=${apiKey}`
            );
            if (!videosRes.ok) {
                throw new Error(`HTTP error! status: ${videosRes.status}`);
            }
            const data: IYouTubeResponse = await videosRes.json();

            const cnannelsIds = data.items.map((item) => item.snippet.channelId).join(",")
            const cnannelsRes = await fetch(
                `https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${cnannelsIds}&key=${apiKey}`
            );
            if (!cnannelsRes.ok) {
                throw new Error(`HTTP error! status: ${cnannelsRes.status}`)
            }
            const channelsData = await cnannelsRes.json();

            const avatarMap: Record<string, string> = {};

            channelsData.items.map((channel: any) => {
                avatarMap[channel.id] = channel.snippet.thumbnails.default.url
            });


            videos.value = {
                ...data,
                items: data.items.map((item) => {
                    const dur = dayjs.duration(item.contentDetails.duration);
                    const formattedDuration = dur.asSeconds() >= 3600
                        ? dur.format("H:mm:ss") 
                        : dur.format("m:ss");   

                    return {
                        ...item,
                        snippet: {
                            ...item.snippet,
                            publishedAt: dayjs(item.snippet.publishedAt).fromNow(),
                            channelAvatar: avatarMap[item.snippet.channelId] || null,
                        },
                        contentDetails: {
                            ...item.contentDetails,
                            duration: formattedDuration,
                        },
                    };
                }),
            };
        } catch (error) {
            console.error("Error fetching videos:", error);
            throw new Error("Failed to fetch videos");
        }
    }
    return {
        fetchVideos,
        videos
    }
}


