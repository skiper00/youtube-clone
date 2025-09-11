<template>
	<div class="video-card cursor-pointer w-full">
		<div class="relative w-full">
			<img
				class="w-full rounded-[12px] transition-all hover:rounded-none"
				:src="preview"
				alt=""
			/>
			<div
				class="absolute right-1 bottom-1.5 px-1 rounded-[5px] bg-[#0f0f0f]/60"
			>
				<span class="text-white text-xs sm:text-sm">{{ duration }}</span>
			</div>
		</div>

		<div class="flex items-start mt-3 gap-3">
			<img
				class="w-9 h-9 rounded-full cursor-pointer object-cover flex-shrink-0"
				:src="avatarMap"
				alt=""
			/>
			<div class="flex flex-col w-full min-w-0">
				<p
					class="clamp-2 text-white font-medium text-sm sm:text-base md:text-lg leading-snug"
				>
					{{ nameVideo }}
				</p>
				<div>
					<p
						class="text-[#aaa] hover:text-[#f1f1f1] cursor-pointer text-xs sm:text-sm"
					>
						{{ nameChannel }}
					</p>
					<div class="text-[#aaa] text-xs sm:text-sm">
						<span>{{ viewCount }} просмотров</span> •
						<span>{{ publishedAt }}</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';

defineProps<{
	preview: string;
	nameVideo: string;
	nameChannel: string;
	duration: string;
	publishedAt: string;
	avatarMap: string;
	viewCount: string;
}>();
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
</style>
