<template>
	<section class="mb-6">
		<!-- Заголовок видео -->
		<h1 class="text-xl font-bold mb-2">
			АНГЛИЙСКИЙ ЯЗЫК ДО АВТОМАТИЗМА УРОК 95 Время Past Simple вопрос, Did в
			английском языке
		</h1>

		<!-- Просмотры и дата - ВНЕ блока описания -->
		<div class="flex items-center gap-2 text-sm text-neutral-400 mb-4">
			<span class="font-medium">118 тыс. просмотров</span>
			<span class="font-medium">8 лет назад</span>
		</div>

		<!-- Блок действий -->
		<div class="flex flex-wrap items-center gap-2 mb-6">
			<!-- Лайки/дизлайки -->
			<div class="flex items-center bg-[#292929] rounded-full overflow-hidden">
				<button
					class="flex items-center gap-2 px-3 py-2 hover:!bg-[#3f3f3f] transition-colors duration-200"
				>
					<Icon icon="iconamoon:like-thin" width="24" height="24" />
					<span class="text-sm font-medium">7,2 тыс.</span>
				</button>
				<div class="h-6 w-px bg-neutral-700"></div>
				<button
					class="rotate-180 px-3 py-2 hover:!bg-neutral-700 transition-colors duration-200"
				>
					<Icon icon="iconamoon:like-thin" width="24" height="24" />
				</button>
			</div>
			<button
				class="flex items-center gap-1 px-2 py-1 rounded-full !bg-[#292929] hover:!bg-[#3f3f3f]"
			>
				<Icon icon="mdi-light:share" width="32" height="32" />
				<span> Поделиться </span>
			</button>
			<button
				class="flex items-center gap-1 px-2 py-2 rounded-full !bg-[#292929] hover:!bg-[#3f3f3f]"
			>
				<Icon icon="mdi-light:download" width="24" height="24" />
				<span> Скачать </span>
			</button>
			<button
				class="flex items-center gap-1 px-2 py-2 rounded-full responsive-hide-clip !bg-[#292929] hover:!bg-[#3f3f3f]"
			>
				<Icon icon="ion:cut-sharp" width="24" height="24" />
				<span>Создать клип</span>
			</button>
		</div>

		<div
			class="flex items-center justify-between border-t border-neutral-700 pt-4 mb-4"
		>
			<div class="flex items-center gap-3">
				<img
					src="https://via.placeholder.com/48"
					alt="avatar"
					class="w-10 h-10 rounded-full object-cover"
				/>
				<div>
					<p class="font-medium">АНГЛИЙСКИЙ ЯЗЫК ПО ПЛЕЙЛИСТАМ</p>
					<p class="text-sm text-neutral-400">2.71 млн подписчиков</p>
				</div>
			</div>
			<button
				class="!bg-[#292929] text-white px-4 py-2 rounded-full text-sm font-semibold hover:!bg-[#3f3f3f]"
			>
				Подписаться
			</button>
		</div>

		<div class="bg-neutral-800 pa-2 rounded-lg">
			<p
				class="text-sm text-neutral-200 leading-relaxed overflow-hidden transition-all duration-500 ease-in-out"
				:style="descriptionStyle"
				ref="descriptionText"
			>
				Отрабатывайте весь пройденный материал на практике в приложении English
				Galaxy! Скачайте приложение бесплатно по ссылке: Android:
				https://play.google.com/store/apps/de... IOS:
				https://apps.apple.com/i/app/learn-e... Если ссылка не работает -
				введите в поиске вашего Play Market или AppStore - English Galaxy и
				установите приложение. Узнать больше о приложении English Galaxy и
				приобрести Premium: https://enggalaxy.com Наш уникальный разговорный
				курс: https://speaking.enggalaxy.com Рабочие тетради к плейлистам с
				озвучкой носителей: https://boosty.to/englishplaylists - для России ● /
				englishplaylists - для других стран https://vk.com/im?sel=98069659 -
				чтобы начать, просто скажи нашему боту "Привет" - подпишитесь на
				рассылку в ВК и получайте конспекты к каждому новому уроку Следите за
				всеми новостями в ВК и получайте дополнительные полезные материалы:
				https://vk.com/englishgalaxyru Сообщество Александра Бебриса -
				https://vk.com/alexandrbebris В Телеграм канале мы публикуем тесты к
				новому курсу и много полезных постов для изучения английского:
				https://t.me/englishgalaxy_school Личный телеграм канал автора канала
				"Английский язык по плейлистам": https://t.me/engplaylists По
				предложениям о партнерстве и коллаборациям - пишите на почту:
				pr@enggalaxy.com Пол верните наш канал, чтобы мы создавали для вас еще
				больше полезных курсов:
			</p>

			<button
				v-if="!isDescriptionExpanded && isDescriptionLong"
				class="mt-2 text-sm font-medium text-blue-400 hover:text-blue-300"
				@click="expandDescription"
			>
				Ещё
			</button>
			<button
				v-else-if="isDescriptionExpanded"
				class="mt-2 text-sm font-medium text-blue-400 hover:text-blue-300"
				@click="isDescriptionExpanded = false"
			>
				Свернуть
			</button>
		</div>
	</section>
</template>

<script lang="ts" setup>
import { ref, onMounted, nextTick, computed } from 'vue';
import { Icon } from '@iconify/vue';

const isDescriptionExpanded = ref(false);
const descriptionText = ref<HTMLElement>();
const isDescriptionLong = ref(false);

const descriptionStyle = computed(() => {
	if (isDescriptionExpanded.value) {
		return {
			maxHeight: `${descriptionText.value?.scrollHeight}px`,
		};
	} else {
		return {
			maxHeight: '80px',
		};
	}
});

const expandDescription = () => {
	isDescriptionExpanded.value = true;
};

onMounted(async () => {
	await nextTick();
	if (descriptionText.value) {
		isDescriptionLong.value = descriptionText.value.scrollHeight > 80;
	}
});
</script>

<style scoped>
@media (max-width: 1091px) and (min-width: 1022px) {
	.responsive-hide-clip {
		display: none;
	}
}
</style>
