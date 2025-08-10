import { createMemoryHistory, createRouter } from 'vue-router';

import HomeView from '@pages/HomeView.vue';
import History from '@pages/History.vue';
import Playlists from '@pages/Playlists.vue';
import Liked from '@pages/Liked.vue';

const routes = [
	{ path: '/', component: HomeView },
	{ path: '/history', component: History },
	{ path: '/playlists', component: Playlists },
	{ path: '/liked', component: Liked },
];

export const router = createRouter({
	history: createMemoryHistory(),
	routes,
});
