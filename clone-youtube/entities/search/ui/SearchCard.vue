<template>
	<div class="cursor-pointer w-full">
		<div class="flex items-start gap-3">
			<div class="relative w-[360px] h-[202px] flex-shrink-0">
				<img
					class="w-full h-full rounded-[12px] transition-all hover:rounded-none object-cover"
					:src="preview"
					alt=""
				/>
				<div
					class="absolute right-1 bottom-1.5 px-1 rounded-[5px] bg-[#0f0f0f]/60"
				>
					<span class="text-white text-xs">{{ duration }}</span>
				</div>
			</div>
			<div class="flex flex-col w-full">
				<p
					class="clamp-2 text-white font-medium text-base sm:text-lg md:text-xl leading-snug"
				>
					{{ nameVideo }}
				</p>
				<div class="text-[#aaa] text-xs">
					<span>{{ viewCount }} просмотров</span> •
					<span>{{ publishedAt }}</span>
				</div>
				<div class="flex items-center mt-1 gap-2">
					<img
						class="w-6 h-6 rounded-full cursor-pointer object-cover flex-shrink-0"
						:src="avatarMap"
						alt=""
					/>
					<p
						@click.stop="goToChannel(channelId)"
						class="text-[#aaa] hover:text-[#f1f1f1] cursor-pointer text-xs"
					>
						{{ nameChannel }}
					</p>
				</div>
				<p class="text-[#aaa] text-xs sm:text-sm mt-2 clamp-2">
					{{ description }}
				</p>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';
import { useNavigation } from '../../../composable/useNavigation';

const { goToChannel } = useNavigation();

defineProps<{
	preview: string;
	nameVideo: string;
	nameChannel: string;
	publishedAt: string;
	channelId: string;
	duration?: string;
	viewCount?: string;
	avatarMap: string;
	description: string;
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
