export default [
	{
		name: '登录',
		method: 'login',
		path: '/auth/login',
		type: 'post',
	},
	{
		name: '获取验证信息',
		method: 'info',
		path: '/auth/info',
		type: 'get'
	},
	{
		name: '修改密码',
		method: 'changePassword',
		path: '/auth/changePassword',
		type: 'post'
	},
	{
		name: '退出登录',
		method: 'logout',
		path: '/auth/logout',
		type: 'get'
	}
]
