<template>
	<div class="loader"></div>
</template>

<style scoped>
.loader {
	width: 55px;
	height: 55px;
	border-radius: 50%;
	border: 3px solid rgba(255, 255, 255, 0.26);
	border-top-color: transparent;
	animation: rot1 1.2s linear infinite;
}

@keyframes rot1 {
	to {
		transform: rotate(360deg);
	}
}
</style>
