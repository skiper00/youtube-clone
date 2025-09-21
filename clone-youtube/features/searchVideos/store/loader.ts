import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useSearchVideosLoader = defineStore('searchVideosLoader', () => {
	const isLoading = ref(false);

	const setLoading = (value: boolean) => {
		isLoading.value = value;
	};

	return { isLoading, setLoading };
});
