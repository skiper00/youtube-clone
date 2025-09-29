<template>
	<div class="loader"></div>
</template>

<style scoped>
.loader {
	width: 70px;
	height: 70px;
	border-radius: 50%;
	border: 5px solid rgb(184, 179, 179);
	border-top-color: transparent;
	animation: rot1 1.2s linear infinite;
}

@keyframes rot1 {
	to {
		transform: rotate(360deg);
	}
}
</style>
