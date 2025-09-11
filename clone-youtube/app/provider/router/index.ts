import { createWebHistory, createRouter } from 'vue-router';

import HomePage from '@pages/home/ui/HomePage.vue';
import HistoryPage from '@pages/history/ui/HistoryPage.vue';
import LikedPage from '@pages/liked/ui/LikedPage.vue';
import PlaylistPage from '@pages/playlist/ui/PlaylistPage.vue';
import VideoPage from '@pages/video/ui/VideoPage.vue';
import SearchPage from '../../../pages/search/ui/SearchPage.vue';

const routes = [
	{ path: '/', component: HomePage },
	{ path: '/history', component: HistoryPage },
	{ path: '/playlists', component: PlaylistPage },
	{ path: '/liked', component: LikedPage },
	{ path: '/watch/:id', component: VideoPage, props: true },
	{ path: '/search', component: SearchPage },
];

export const router = createRouter({
	history: createWebHistory(),
	routes,
});
