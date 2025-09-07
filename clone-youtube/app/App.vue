<template>
	<div class="flex flex-col bg-[#0f0f0f]">
		<Header class="border-2" />
		<div class="flex">
			<Sidebar class="" />
			<router-view class="" />
		</div>
	</div>
</template>

<script lang="ts" setup>
import Header from '@widgets/header/ui/Header.vue';
import Sidebar from '@widgets/sidebar/ui/Sidebar.vue';
</script>

<style scoped></style>
