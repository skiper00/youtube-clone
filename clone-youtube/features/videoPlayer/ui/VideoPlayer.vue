<template>
	<div>
		<iframe
			class="w-[800px] h-[500px] rounded-xl"
			:src="`https://www.youtube.com/embed/${videoId}`"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			allowfullscreen
		>
		</iframe>
	</div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';

defineProps<{ videoId: string }>();
</script>
