function initQidian() {
    //设置上报域名

    try {
        qidianDA('setDomain', 'https://v-cdp.028wlkj.com')
    } catch (error) {
        console.log('qidianDA setDomain error', error)
    }

    console.log('setCommonProperties params1=', commonProperties)
    try {
        qidianDA('setCommonData',
            commonProperties, //设置properties中的通用属性
            commonProperties //设置properties平级的通用属性,bussid在此处设置
        )
    } catch (error) {
        console.log('qidianDA setCommonProperties error', error)

    }

    //初始化_设置加密&上报请求方式



    try {
        qidianDA('create',
            '',  //主号
            'abf68f2d832a3dd01c6efedd443b2761', //域名对应的appkey
            {
                preventAutoTrack: false, //是否阻止自动上报$pageview,和$pageclose，false表示自动上报,true表示阻止自动上报
                pagestay: false, // 是否在切换tab，最小化窗口等时机进行上报，ture表示进行上，默认false,这个配置需打开自动上报，多页应用使用
                useOpenId: false, //是否使用Openid上报 ，默认为false      
            })
    } catch (error) {
        console.log('qidianDA create error', error)

    }

    try {
        window.qidianDA && window.qidianDA("openPageStay")

    } catch (error) {
        console.log('qidianDA openPageStay error', error)
    }

    console.log('initQidian success')

}
var commonProperties = {}
/**
* 设置通用信息
* @param params1 设置properties中的通用属性，格式如下{company:1,name:222} 
* @param params2 设置properties平级的通用属性，格式如下{mobile:'mobile',bussid:'bussid'} 
*/
function setCommonProperties(params1) {
    commonProperties = JSON.parse(params1)

}

/**
* 上报自定义事件
* @param eventName 事件名
* @param params 事件内容，格式如下{name:'da',age:111}
* @param callback 上报结束后回调
*/
function reportEvent(eventName, params,) {
    // console.log('reportEvent  eventName:', eventName, 'params:', params)
    // console.log('qidianDA', qidianDA)
    try {
        qidianDA('track', eventName, JSON.parse(params), function callback() {
            // console.log('reportEvent eventName: ' + eventName + ' success params:', params)
        })

    } catch (error) {
        console.log('reportEvent error', error)
    }

}