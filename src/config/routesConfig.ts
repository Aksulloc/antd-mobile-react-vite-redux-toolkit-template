import ReactLazilyComponent from 'react-lazily-component';
import { Badge } from 'antd-mobile';
const commonRoutes = [
	{
		pathname: '/login',
		name: 'Login',
		title: '登录',
		component: ReactLazilyComponent(() => import('@/pages/login')),
	},
];

const mainRoutes = [
	{
		pathname: 'community',
		name: 'Community',
		title: 'Community',
		badge: undefined,
		component: ReactLazilyComponent(() => import('@/pages/community')),
		icon: '/src/assets/icons/ic_bottom_nav_community_unselected.svg',
		iconSelected: '/src/assets/icons/ic_bottom_nav_community_selected.svg',
		meta: {
			isChildren: true,
			parentPathname: '/main',
			fullPathname: '/main/community',
			navigation: 'community',
			requireAuth: true,
		},
	},
	{
		pathname: 'map',
		name: 'Map',
		title: 'Map',
		badge: undefined,
		component: ReactLazilyComponent(() => import('@/pages/map')),
		icon: '/src/assets/icons/ic_bottom_nav_map_unselected.svg',
		iconSelected: '/src/assets/icons/ic_bottom_nav_map_selected.svg',
		meta: {
			isChildren: true,
			parentPathname: '/main',
			fullPathname: '/main/map',
			navigation: 'map',
			requireAuth: true,
		},
	},
	{
		pathname: 'activity',
		name: 'Activity',
		title: 'Activity',
		badge: undefined,
		component: ReactLazilyComponent(() => import('@/pages/activity')),
		icon: '/src/assets/icons/ic_bottom_nav_activity_unselected.svg',
		iconSelected: '/src/assets/icons/ic_bottom_nav_activity_selected.svg',
		meta: {
			isChildren: true,
			parentPathname: '/main',
			fullPathname: '/main/activity',
			navigation: 'activity',
			requireAuth: true,
		},
	},
	{
		pathname: 'you',
		name: 'You',
		title: 'You',
		badge: Badge.dot,
		component: ReactLazilyComponent(() => import('@/pages/you')),
		icon: '/src/assets/icons/ic_bottom_nav_you_unselected.svg',
		iconSelected: '/src/assets/icons/ic_bottom_nav_you_selected.svg',
		meta: {
			isChildren: true,
			parentPathname: '/main',
			fullPathname: '/main/you',
			navigation: 'you',
			requireAuth: true,
		},
	},
];

export { commonRoutes, mainRoutes };
