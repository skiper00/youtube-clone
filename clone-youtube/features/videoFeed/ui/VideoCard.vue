<template>
	<div class="max-w-[433px]">
		<div class="relative">
			<img
				class="rounded-[12px] transition-all hover:rounded-none"
				src="https://avatars.mds.yandex.net/i?id=5de231ea3e0a4bd440a0628dfad27677899420a7-4507619-images-thumbs&n=13"
				alt=""
			/>
			<div
				class="absolute right-1 bottom-1.5 px-1.5 rounded-[5px] bg-[#0f0f0f]/60"
			>
				<span class="text-white text-sm">38:14</span>
			</div>
		</div>
		<div class="flex items-start mt-[13px] gap-3">
			<img
				class="max-w-[36px] rounded-full cursor-pointer"
				src="https://avatars.mds.yandex.net/i?id=3a2bcf8e4848c36654663b9ba25a74e3e97089b0-4815706-images-thumbs&n=13"
				alt=""
			/>
			<div class="max-w-[400px]">
				<p class="clamp-2 text-white font-medium text-lg leading-[22px]">
					текст текст текст текст текст текст текст текст текст текст текст
					текст текст текст текст текст текст текст текст текст текст текст
					текст текст текст
				</p>
				<div>
					<p class="text-[#aaa] hover:text-[#f1f1f1] cursor-pointer">
						Artem Kozorezov
					</p>
					<div class="text-[#aaa]">
						<span>14 тыс. просмотров</span> • <span>4 месяца назад</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup></script>

<style scoped>
.clamp-2 {
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	overflow: hidden;
	white-space: normal;
	overflow-wrap: anywhere;
}
</style>
