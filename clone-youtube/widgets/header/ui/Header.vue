<template>
	<div class="py-1 px-[17px]">
		<div class="flex justify-between items-center">
			<div class="flex items-center gap-2">
				<div
					@click="toggleMenu"
					class="rounded-full cursor-pointer inline-block hover:bg-[#272727] p-2"
				>
					<Icon
						icon="material-symbols-light:menu"
						color="white"
						width="24"
						height="24"
					/>
				</div>
				<dropdown-menu @closeMenu="closeMenu" :isOpen="isOpen" />

				<router-link to="/">
					<img class="w-[91px]" src="/youtube-logo.svg" alt="Logo" />
				</router-link>
			</div>
			<div class="max-w-[400px] ml-10 w-full">
				<Input :placeholder="'Введите запрос'" />
			</div>
			<div class="flex items-center gap-3">
				<button
					class="py-1.5 px-2.5 flex items-center gap-1 rounded-full bg-[#272727] hover:bg-[#3f3f3f]"
				>
					<Icon
						icon="clarity:plus-line"
						width="24"
						height="24"
						style="color: #d8d7d7"
					/>
					<div class="text-white">Создать</div>
				</button>
				<img
					class="rounded-full w-8 h-8"
					src="https://avatars.mds.yandex.net/i?id=110b21e570fae558d4ea104a89f0c115dd2ed2b8-4551836-images-thumbs&n=13"
					alt="avatar"
				/>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { Icon } from '@iconify/vue';
import Input from '@shared/ui/Input.vue';
import DropdownMenu from '@widgets/dropdownMenu/ui/DropdownMenu.vue';

const isOpen = ref(false);

function toggleMenu() {
	isOpen.value = !isOpen.value;
}

function closeMenu() {
	isOpen.value = false;
}
</script>
