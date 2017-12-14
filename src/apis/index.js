import Global from './global'
import auth from './auth'

export default [
	{
		module: 'global',
    name: '全局服务',
    list: Global
	}, {
		module: 'auth',
    name: '验证服务',
    list: auth
	}
]
