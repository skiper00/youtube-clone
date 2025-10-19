<template>
	<div class="bg-neutral-900 text-white">
		<div
			class="max-w-[1400px] mx-auto px-4 py-4 flex flex-col xl:flex-row gap-6"
		>
			<!-- ===== ЛЕВАЯ КОЛОНКА ===== -->
			<div class="flex-1 min-w-0">
				<!-- Видео плеер -->
				<div class="w-full bg-black rounded-xl overflow-hidden mb-4">
					<div class="relative" style="padding-bottom: 56.25%">
						<div class="absolute inset-0">
							<VideoPlayer :videoId="videoId" />
						</div>
					</div>
				</div>

				<!-- Информация о видео -->
				<VideoInfo />

				<!-- ===== Похожие видео для мобильных (адаптив <1200px) ===== -->
				<div
					class="block xl:hidden mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
				>
					<!-- Мобильная версия карточек -->
					<div
						v-for="video in videos?.items || []"
						:key="video.id"
						class="video-card cursor-pointer w-full"
					>
						<div class="relative w-full">
							<img
								class="w-full rounded-[12px] transition-all hover:rounded-none"
								:src="video.snippet.thumbnails.high.url"
								alt=""
							/>
							<div
								class="absolute right-1 bottom-1.5 px-1 rounded-[5px] bg-[#0f0f0f]/60"
							>
								<span class="text-white text-xs sm:text-sm">
									{{ video.contentDetails.duration }}
								</span>
							</div>
						</div>

						<!-- Без аватарки канала -->
						<div class="mt-3">
							<p
								class="clamp-2 text-white font-medium text-sm sm:text-base md:text-lg leading-snug"
							>
								{{ video.snippet.title }}
							</p>
							<div class="text-[#aaa] text-xs sm:text-sm mt-1">
								<span>{{ video.statistics.viewCount }} просмотров</span> •
								<span>{{ video.snippet.publishedAt }}</span>
							</div>
						</div>
					</div>
				</div>

				<!-- Комментарии -->
				<CommentsSection />
			</div>

			<!-- ===== ПРАВАЯ КОЛОНКА (≥1200px) ===== -->
			<div class="hidden xl:block w-[400px] flex-shrink-0 space-y-4">
				<!-- Десктопная версия карточек -->
				<div
					v-for="video in videos?.items || []"
					:key="video.id"
					class="cursor-pointer flex gap-3"
				>
					<!-- Превью видео -->
					<div class="relative w-[170px] h-[95px] flex-shrink-0">
						<img
							class="w-full h-full rounded-[10px] object-cover"
							:src="video.snippet.thumbnails.high.url"
							alt=""
						/>
						<div
							class="absolute right-1 bottom-1.5 px-1 rounded-[5px] bg-[#0f0f0f]/60"
						>
							<span class="text-white text-[10px]">
								{{ video.contentDetails.duration }}
							</span>
						</div>
					</div>

					<!-- Информация о видео -->
					<div class="flex flex-col justify-between min-w-0 flex-1">
						<p
							class="text-white text-sm font-medium line-clamp-2 leading-tight"
						>
							{{ video.snippet.title }}
						</p>
						<div class="text-[#aaa] text-xs mt-1">
							<span>{{ video.statistics.viewCount }} просмотров</span> •
							<span>{{ video.snippet.publishedAt }}</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';

import VideoPlayer from '@features/videoPlayer/ui/VideoPlayer.vue';
import VideoInfo from '@features/videoInfo/ui/VideoInfo.vue';
import CommentsSection from '@features/comments/ui/CommentsSection.vue';

import useVideoFeed from '@features/videoFeed/model/useVideoFeed.ts';

const route = useRoute();
const videoId = route.params.id as string;

// Одни и те же видео — для обеих секций
const { videos, fetchVideos } = useVideoFeed();

onMounted(async () => {
	await fetchVideos();
});
</script>

<style scoped>
.clamp-2 {
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	overflow: hidden;
	white-space: normal;
	overflow-wrap: anywhere;
}

/* ======= Адаптивная сетка ======= */
@media (max-width: 1200px) {
	.xl\:flex-row {
		flex-direction: column !important;
	}
}

/* ======= Отступы и сетка для адаптива ======= */
@media (max-width: 1024px) {
	.grid {
		grid-template-columns: repeat(2, 1fr);
	}
}

@media (max-width: 768px) {
	.grid {
		grid-template-columns: repeat(1, 1fr);
	}
}
</style>
