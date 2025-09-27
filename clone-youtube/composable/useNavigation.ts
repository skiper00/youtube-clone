import { useRouter } from 'vue-router';

export function useNavigation() {
    const router = useRouter();
    const getToVideo = (videoId: string) => {
        router.push(`/watch/${videoId}`);
    };

    return { getToVideo };
}