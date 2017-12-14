//TODO 获取站点目录名称
export function getContextPath () {
    var contextPath = document.location.pathname
    //这个地方可能有问题，要根据具体项目适当修改
    contextPath = contextPath.substr(0, contextPath.substr(1).indexOf("/") + 1)
    return contextPath
}
//TODO 是否为空
export function isNull (val) {
	if (null === val 
		|| typeof(val) === 'undefined'
		|| '' === val
		|| (typeof(val) === 'string') && '' === val.replace(/(^\s+)|(\s+$)/g,"")) {
		return true
	}
	return false
}
//TODO 控制台输出
export function debug (val) {
	let dev_mode = true
	try {
		dev_mode = DEV_MODE
	} catch (error) {
		
	}
	if (dev_mode) {
		console.log(val)
	}
}
//TODO 数组是否存在不包含
export function inOf (arr, targetArr) {
    let res = true
    arr.map(item => {
        if (targetArr.indexOf(item) < 0) {
            res = false
        }
    })
    return res
}
//TODO 数组是否包含
export function oneOf (ele, targetArr) {
    if (targetArr.indexOf(ele) >= 0) {
        return true
    } else {
        return false
    }
}
//TODO 改变title
export function changeTitle (title) {
    title = title || 'vue starter'
    window.document.title = title
}
//TODO 当前语言
export function handleTitle (vm, item) {
    if (typeof item.title === 'object') {
        return vm.$t(item.title.i18n)
    } else {
        return item.title
    }
}

export default {
	getContextPath,
	isNull,
	debug,
	inOf,
	oneOf,
	changeTitle,
	handleTitle
}
