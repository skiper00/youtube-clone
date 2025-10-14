<template>
  <section class="mb-6">
    <!-- Заголовок видео -->
    <h1 class="text-xl font-bold mb-2">
      АНГЛИЙСКИЙ ЯЗЫК ДО АВТОМАТИЗМА УРОК 95 Время Past Simple вопрос, Did в английском языке
    </h1>

    <!-- Просмотры и дата - ВНЕ блока описания -->
    <div class="flex items-center gap-2 text-sm text-neutral-400 mb-4">
      <span class="font-medium">118 тыс. просмотров</span>
      <span>•</span>
      <span class="font-medium">8 лет назад</span>
    </div>

    <!-- Блок действий -->
    <div class="flex flex-wrap items-center gap-2 mb-6">
      <!-- Лайки/дизлайки -->
      <div class="flex items-center bg-neutral-800 rounded-full overflow-hidden">
        <button class="flex items-center gap-2 px-3 py-2 hover:bg-neutral-700">
          <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M2 21h4V9H2v12zM23 10c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 2 7.59 8.59C7.22 8.95 7 9.45 7 10v8c0 1.1.9 2 2 2h7c.86 0 1.6-.54 1.86-1.33L23 10z"/>
          </svg>
          <span class="text-sm font-medium">7,2 тыс.</span>
        </button>
        <div class="h-6 w-px bg-neutral-700"></div>
        <button class="px-3 py-2 hover:bg-neutral-700">
          <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M15 3H6c-1.11 0-2 .89-2 2v12l4-4h7c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2z"/>
          </svg>
        </button>
      </div>

      <!-- Остальные кнопки -->
      <button class="flex items-center gap-2 bg-neutral-800 hover:bg-neutral-700 px-3 py-2 rounded-full">
        <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M5 5v14l11-7z"/>
        </svg>
        <span class="text-sm font-medium">Поделиться</span>
      </button>

      <button class="flex items-center gap-2 bg-neutral-800 hover:bg-neutral-700 px-3 py-2 rounded-full">
        <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M5 20h14v-2H5v2zM5 6h14V4H5v2z"/>
        </svg>
        <span class="text-sm font-medium">Скачать</span>
      </button>
    </div>

    <!-- Блок канала и подписки -->
    <div class="flex items-center justify-between border-t border-neutral-700 pt-4 mb-4">
      <div class="flex items-center gap-3">
        <img src="https://via.placeholder.com/48" alt="avatar" class="w-10 h-10 rounded-full object-cover" />
        <div>
          <p class="font-medium">АНГЛИЙСКИЙ ЯЗЫК ПО ПЛЕЙЛИСТАМ</p>
          <p class="text-sm text-neutral-400">2.71 млн подписчиков</p>
        </div>
      </div>
      <button class="bg-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-red-700">
        Подписаться
      </button>
    </div>

    <!-- Описание видео -->
    <div class="bg-neutral-800 pa-2 rounded-lg">
      <p 
        class="text-sm text-neutral-200 leading-relaxed overflow-hidden transition-all duration-500 ease-in-out"
        :style="descriptionStyle"
        ref="descriptionText"
      >
        Отрабатывайте весь пройденный материал на практике в приложении English Galaxy! Скачайте приложение бесплатно по ссылке:
        Android: https://play.google.com/store/apps/de...
        IOS: https://apps.apple.com/i/app/learn-e... Если ссылка не работает - введите в поиске вашего Play Market или AppStore - English Galaxy и установите приложение.

        Узнать больше о приложении English Galaxy и приобрести Premium: https://enggalaxy.com
        Наш уникальный разговорный курс: https://speaking.enggalaxy.com

        Рабочие тетради к плейлистам с озвучкой носителей: https://boosty.to/englishplaylists - для России
        ● / englishplaylists - для других стран

        https://vk.com/im?sel=98069659 - чтобы начать, просто скажи нашему боту "Привет" - подпишитесь на рассылку в ВК и получайте конспекты к каждому новому уроку

        Следите за всеми новостями в ВК и получайте дополнительные полезные материалы: https://vk.com/englishgalaxyru
        Сообщество Александра Бебриса - https://vk.com/alexandrbebris

        В Телеграм канале мы публикуем тесты к новому курсу и много полезных постов для изучения английского:
        https://t.me/englishgalaxy_school

        Личный телеграм канал автора канала "Английский язык по плейлистам":
        https://t.me/engplaylists

        По предложениям о партнерстве и коллаборациям - пишите на почту: pr@enggalaxy.com

        Пол верните наш канал, чтобы мы создавали для вас еще больше полезных курсов:
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

const isDescriptionExpanded = ref(false);
const descriptionText = ref<HTMLElement>();
const isDescriptionLong = ref(false);

const descriptionStyle = computed(() => {
  if (isDescriptionExpanded.value) {
    return {
      maxHeight: `${descriptionText.value?.scrollHeight}px`
    };
  } else {
    return {
      maxHeight: '80px'
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