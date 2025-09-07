<template>
	<div class="sidebar text-white px-[3px] text-[10px]">
		<div class="mt-1 w-full">
			<div
				v-for="item in list"
				:key="item.id"
				class="flex cursor-pointer flex-col py-3 p-1 rounded-[10px] leading-4 items-center hover:bg-[#272727]"
			>
				<router-link
					:to="item.to"
					class="flex flex-col items-center w-full h-full"
				>
					<Icon class="w-6 h-6" :icon="item.path" />
					<span class="text-[9px]">{{ item.name }}</span>
				</router-link>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { Icon } from '@iconify/vue';

const list: Array<{ id: number; name: string; path: string; to: string }> = [
	{ id: 1, name: 'Главная', path: 'mdi:home', to: '/' },
	{ id: 2, name: 'История', path: 'mdi:history', to: '/history' },
	{ id: 3, name: 'Плейлисты', path: 'solar:playlist-bold', to: '/playlists' },
	{
		id: 4,
		name: 'Понравившиеся',
		path: 'streamline-plump:like-1',
		to: '/liked',
	},
];
</script>

<style scoped>
@media (max-width: 1024px) {
	.sidebar {
		display: none;
	}
}
</style>
