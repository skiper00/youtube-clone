<template>
	<div class="max-w-[433px] cursor-pointer">
		<div class="relative">
			<img
				class="rounded-[12px] transition-all hover:rounded-none"
				:src="preview"
				alt=""
			/>
			<div
				class="absolute right-1 bottom-1.5 px-1 rounded-[5px] bg-[#0f0f0f]/60"
			>
				<span class="text-white text-sm">{{ duration }}</span>
			</div>
		</div>
		<div class="flex items-start mt-[13px] gap-3">
			<img
				class="max-w-[36px] rounded-full cursor-pointer"
				:src="avatarMap"
				alt=""
			/>
			<div class="max-w-[400px]">
				<p class="clamp-2 text-white font-medium text-lg leading-[22px]">
					{{ nameVideo }}
				</p>
				<div>
					<p class="text-[#aaa] hover:text-[#f1f1f1] cursor-pointer">
						{{ nameChannel }}
					</p>
					<div class="text-[#aaa]">
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
