export const page404 = {
	path: '*',
    name: 'error-404',
    meta: {
        title: '404-页面不存在'
    },
    component: resolve => { 
    	require(['@/views/error-page/404.vue'], resolve) 
    }
}

export const page403 = {
    path: '/403',
    meta: {
        title: '403-权限不足'
    },
    name: 'error-403',
    component: resolve => { 
    	require(['@/views/error-page/403.vue'], resolve) 
    }
}

export const page500 = {
    path: '/500',
    meta: {
        title: '500-服务端错误'
    },
    name: 'error-500',
    component: resolve => { 
    	require(['@/views/error-page/500.vue'], resolve) 
    }
}

