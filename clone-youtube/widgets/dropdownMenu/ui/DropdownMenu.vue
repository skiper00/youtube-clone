<template>
	<div
		class="dropdown-menu relative inline-block"
		role="navigation"
		aria-label="Sidebar Menu"
	>
		<transition name="fade-slide">
			<div
				v-if="isOpen"
				class="menu-panel fixed top-0 left-0 h-screen w-[280px] bg-[#121212] text-white p-5 shadow-[2px_0_10px_rgba(0,0,0,0.7)] overflow-y-auto z-50"
				role="dialog"
				aria-modal="true"
			>
				<header class="flex gap-6 mb-5">
					<div
						class="active:bg-[#3f3f3f] rounded-full px-2 py-2 cursor-pointer"
					>
						<Icon
							@click="emit('closeMenu')"
							icon="material-symbols-light:menu"
							color="white"
							width="24"
							height="24"
						/>
					</div>
					<img class="w-[91px]" src="/youtube-logo.svg" alt="YouTube Logo" />
				</header>

				<nav class="flex flex-col gap-4">
					<ul class="space-y-2">
						<li
							class="px-2 py-2 cursor-pointer hover:bg-[#272727] rounded-[13px] font-semibold"
						>
							<router-link
								to="/"
								class="flex items-center gap-5"
								aria-label="Go to Home"
							>
								<Icon icon="codicon:home" width="24" height="24" />
								<p>Главная</p>
							</router-link>
						</li>
						<li
							class="px-2 py-2 flex items-center gap-4 mt-2 rounded-[13px] cursor-pointer hover:bg-[#272727]"
							aria-label="Go to Subscriptions"
						>
							<Icon
								icon="material-symbols-light:subscriptions-outline"
								width="24"
								height="24"
								style="color: #d8d7d7"
							/>
							<p>Подписки</p>
						</li>
					</ul>

					<hr class="border-t border-[#272727] my-3.75" />

					<section class="menu-section">
						<h3 class="font-bold mb-2">Вы</h3>
						<ul
							v-for="item in list"
							:key="item.id"
							class="list-none p-0 m-0 space-y-2"
						>
							<router-link :to="item.to">
								<li
									@click="emit('closeMenu')"
									class="flex items-center mt-2 px-2 py-2 hover:bg-[#272727] rounded-[13px] gap-5 cursor-pointer"
									aria-label="Go to History"
								>
									<Icon class="w-6 h-6" :icon="item.path" />
									<p>{{ item.name }}</p>
								</li>
							</router-link>
						</ul>
					</section>

					<hr class="border-t border-[#272727] my-3.75" />

					<section class="menu-section">
						<h3 class="font-bold mb-2">Подписки</h3>
						<div
							class="flex rounded-[13px] px-2 py-2 items-center gap-5 hover:bg-[#272727] cursor-pointer"
							aria-label="Go to ElvenKnigt Channel"
						>
							<img
								class="w-6 h-6 rounded-full"
								src="https://avatars.mds.yandex.net/i?id=35ff97c9dc14b7707834f4835484b77712665c3f-8484811-images-thumbs&n=13"
								alt="ElvenKnigt Avatar"
							/>
							<p>ElvenKnigt</p>
						</div>
					</section>
				</nav>
			</div>
		</transition>
	</div>
</template>

<script setup lang="ts">
import { defineEmits, defineProps } from 'vue';
import { Icon } from '@iconify/vue';

defineProps<{ isOpen: boolean }>();
const emit = defineEmits(['closeMenu']);

const list: Array<{ id: number; name: string; path: string; to: string }> = [
	{ id: 1, name: 'История', path: 'proicons:history', to: '/history' },
	{ id: 2, name: 'Плейлисты', path: 'solar:playlist-bold', to: '/playlists' },
	{
		id: 3,
		name: 'Понравившиеся',
		path: 'streamline-plump:like-1',
		to: '/liked',
	},
];
</script>

<style scoped>
.fade-slide-enter-active,
.fade-slide-leave-active {
	transition: all 0.3s ease;
}

.fade-slide-enter-from,
.fade-slide-leave-to {
	opacity: 0;
	transform: translateX(-10px);
}
</style>
