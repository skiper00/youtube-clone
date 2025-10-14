import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useSearchStore = defineStore('search', () => {
	const query = ref('');
	const setQuery = (value: string) => {
		query.value = value.trim();
	};

	const resetQuery = () => {
		query.value = '';
	};

	return { query, setQuery, resetQuery };
});
