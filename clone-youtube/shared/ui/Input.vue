<template>
	<div class="flex justify-center flex-1">
		<div
			class="flex items-center w-full max-w-[600px] border border-[#303030] rounded-[20px] overflow-hidden transition-all duration-200 focus-within:border-none focus-within:ring-1 focus-within:ring-[#65a3e8] focus-within:ring-offset-1 focus-within:ring-offset-[#121212]"
		>
			<span class="pl-3">
				<Icon
					icon="material-symbols:search"
					class="text-white"
					width="20"
					height="20"
				/>
			</span>
			<input
				v-model="input"
				@keyup.enter="onSearch"
				type="text"
				:placeholder="props.placeholder"
				class="w-full bg-transparent text-white placeholder-[#707070] text-sm py-2 px-3 focus:outline-none"
			/>

			<button
				v-if="input"
				@click="clearSearch"
				class="pr-3 text-gray-400 hover:text-gray-200 cursor-pointer"
			>
				<Icon icon="material-symbols:close" width="18" height="18" />
			</button>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { defineProps, ref } from 'vue';
import { Icon } from '@iconify/vue';
import { useRouter } from 'vue-router';
import { storeToRefs } from 'pinia';
import { useSearchStore } from '@entities/search/store/searchStore';

const searchStore = useSearchStore();
const { query } = storeToRefs(searchStore);
const input = ref(query.value);
const router = useRouter();

const props = defineProps<{
	placeholder?: string;
}>();

async function onSearch() {
	if (!input.value.trim()) return;
	searchStore.setQuery(input.value);
	await router.push({ path: '/search', query: { q: input.value } });
}

function clearSearch() {
	input.value = '';
	searchStore.setQuery('');
}
</script>

<style scoped></style>
