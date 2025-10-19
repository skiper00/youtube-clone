<template>
	<aside class="space-y-4">
		<div class="gap-2 flex flex-col">
			<h3 class="text-lg font-semibold mb-3">Похожие видео</h3>

			<div v-for="i in 8" :key="i" class="flex gap-3">
				<div
					class="w-32 h-20 lg:w-40 lg:h-24 bg-neutral-800 rounded-lg flex-shrink-0 overflow-hidden"
				>
					<img
						src="https://via.placeholder.com/160x96"
						alt="preview"
						class="w-full h-full object-cover"
					/>
				</div>
				<div class="flex-1 min-w-0">
					<p class="text-sm font-medium line-clamp-2 mb-1 leading-tight">
						{{ getVideoTitle(i) }}
					</p>
					<p class="text-xs text-neutral-400 mb-1">{{ getChannelName(i) }}</p>
					<p class="text-xs text-neutral-400">{{ getVideoStats(i) }}</p>
				</div>
			</div>
		</div>
	</aside>
</template>

<script lang="ts" setup>
const getVideoTitle = (index: number) => {
	const titles = [
		'АНГЛИЙСКИЙ ЯЗЫК ДО АВТОМАТИЗМА УРОК 96',
		'УПРАЖНЕНИЯ АНГЛИЙСКИЙ ЯЗЫК ДО АВТОМАТИЗМА',
		'Nothing Else Matters',
		'Metallica - Fade To Black',
		'АНГЛИЙСКИЙ ЯЗЫК С НУЛЯ ДО АВТОМАТИЗМА',
		'ТЕОРИЯ - АНГЛИЙСКИЙ ЯЗЫК ДО АВТОМАТИЗМА',
		'Past Simple упражнения',
		'Английская грамматика для начинающих',
	];
	return titles[index - 1] || `Похожее видео ${index}`;
};

const getChannelName = (index: number) => {
	return 'АНГЛИЙСКИЙ ЯЗЫК ПО ПЛЕЙЛИСТАМ';
};

const getVideoStats = (index: number) => {
	const stats = [
		'124 тыс. просмотров • 8 лет назад',
		'98 тыс. просмотров • 8 лет назад',
		'150 тыс. просмотров • 1 год назад',
		'2 млн просмотров • 2 года назад',
		'500 тыс. просмотров • 1 год назад',
		'75 тыс. просмотров • 7 лет назад',
		'210 тыс. просмотров • 3 года назад',
		'180 тыс. просмотров • 4 года назад',
	];
	return stats[index - 1] || '100 тыс. просмотров • 1 год назад';
};
</script>
