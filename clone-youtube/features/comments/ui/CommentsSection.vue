<template>
	<section class="mt-8">
		<h2 class="text-xl font-semibold mb-6">224 комментария</h2>

		<!-- Поле ввода комментария -->
		<div class="flex items-start gap-3 mb-8">
			<div
				class="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-neutral-700 flex items-center justify-center text-sm text-neutral-300 flex-shrink-0"
			>
				Д
			</div>
			<input
				placeholder="Добавьте комментарий..."
				class="flex-1 bg-transparent border-b border-neutral-600 pb-2 text-sm text-white placeholder:text-neutral-500 outline-none focus:border-neutral-400"
			/>
		</div>

		<!-- Список комментариев -->
		<div class="space-y-6">
			<div class="flex gap-3 mb-6">
				<img
					src="https://via.placeholder.com/40"
					alt="avatar"
					class="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover flex-shrink-0"
				/>
				<div class="flex-1">
					<div class="mb-2">
						<p class="text-sm font-semibold">graferalded107</p>
						<p class="text-xs text-neutral-400">4 года назад</p>
					</div>
					<p class="text-sm text-neutral-200 mb-3">
						Как мне нравится когда Александр говорит "так, вспоминаем слово" и
						тут ты слышишь acquaintance...<br />
						Впервые в жизни.<br />
						Александр верит в нас, в то, что мы умнее, чем есть на самом деле)))
					</p>
					<div class="flex items-center gap-4 text-xs text-neutral-400">
						<button class="flex items-center gap-1 hover:text-white">
							<svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
								<path
									d="M2 21h4V9H2v12zM23 10c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 2 7.59 8.59C7.22 8.95 7 9.45 7 10v8c0 1.1.9 2 2 2h7c.86 0 1.6-.54 1.86-1.33L23 10z"
								/>
							</svg>
							<span>157</span>
						</button>
						<button class="hover:text-white">Ответить</button>
					</div>
				</div>
			</div>

			<div class="flex gap-3">
				<img
					src="https://via.placeholder.com/40"
					alt="avatar"
					class="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover flex-shrink-0"
				/>
				<div class="flex-1">
					<div class="mb-2">
						<p class="text-sm font-semibold">Rostislav</p>
						<p class="text-xs text-neutral-400">1 день назад</p>
					</div>
					<p class="text-sm text-neutral-200 mb-3">
						Отличный разбор темы, спасибо!
					</p>
					<div class="flex items-center gap-4 text-xs text-neutral-400">
						<button class="flex items-center gap-1 hover:text-white">
							<svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
								<path
									d="M2 21h4V9H2v12zM23 10c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 2 7.59 8.59C7.22 8.95 7 9.45 7 10v8c0 1.1.9 2 2 2h7c.86 0 1.6-.54 1.86-1.33L23 10z"
								/>
							</svg>
							<span>12</span>
						</button>
						<button class="hover:text-white">Ответить</button>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script lang="ts" setup></script>
