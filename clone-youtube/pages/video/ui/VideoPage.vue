<template>
  <div class="bg-neutral-900 text-white min-h-screen">
    <div class="max-w-[1400px] mx-auto px-4 py-4 flex flex-col lg:flex-row gap-6">
      <!-- ЛЕВАЯ КОЛОНКА - Основной контент -->
      <div class="flex-1 min-w-0">
        <!-- Плеер с ограничением максимальной ширины -->
        <div class="w-full bg-black rounded-xl overflow-hidden mb-4">
          <div class="relative" style="padding-bottom: 56.25%;">
            <div class="absolute inset-0">
              <VideoPlayer :videoId="videoId" />
            </div>
          </div>
        </div>

        <!-- Информация о видео -->
        <VideoInfo />
        
        <!-- Похожие видео для мобильных -->
        <div class="lg:hidden">
          <RelatedVideos />
        </div>
        
        <!-- Комментарии -->
        <CommentsSection />
      </div>

      <!-- ПРАВАЯ КОЛОНКА - Похожие видео для десктопа -->
      <div class="hidden lg:block w-[400px] flex-shrink-0">
        <RelatedVideos />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import VideoPlayer from '@features/videoPlayer/ui/VideoPlayer.vue';
import useVideoFeed from '@features/videoFeed/model/useVideoFeed.ts';
import VideoInfo from '@features/videoInfo/ui/VideoInfo.vue';
import CommentsSection from '@features/comments/ui/CommentsSection.vue';
import RelatedVideos from '@features/relatedVideos/ui/RelatedVideos.vue';

const route = useRoute();
const videoId = route.params.id as string;

const { fetchVideos } = useVideoFeed();

onMounted(async () => {
	await fetchVideos();
});
</script>