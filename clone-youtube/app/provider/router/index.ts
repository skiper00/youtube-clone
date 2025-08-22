import { createMemoryHistory, createRouter } from 'vue-router';

import HomeView from '@pages/HomeView.vue';
import History from '@pages/History.vue';
import Liked from '@pages/Liked.vue';
// import PlaylistPage from '@pages/PlaylistPage.vue';
import PageVideo from '@pages/PageVideo.vue';

const routes = [
	{ path: '/', component: HomeView },
	{ path: '/history', component: History },
	// { path: '/playlists', component: PlaylistPage },
	{ path: '/liked', component: Liked },
	{ path: '/watch/:id', component: PageVideo, props: true },
];

export const router = createRouter({
	history: createMemoryHistory(),
	routes,
});
