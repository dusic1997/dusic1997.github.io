var wxCodeGlobal = ''
var wxEnvGlobal = ''


///此方法会导致ios微信内置浏览器无法打开首页 不用了
// function initWxEnvGLobal() {
//     var ua = navigator.userAgent.toLowerCase();
//     if (ua.match(/MicroMessenger/i) == "micromessenger") {
//         //必须在WeixinJSBridge回调后进行判断，否则小程序环境检测会不准确
//         if (!window.WeixinJSBridge || !WeixinJSBridge.invoke) {
//             document.addEventListener('WeixinJSBridgeReady', wechatReady, false);
//         } else {
//             ready();
//         }
//     } else {
//         console.log('不在微信浏览器内');
//     }


// }


function postMessage(message) {

    // wx.config({
    //     debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
    //     appId: 'wxdb5f7889828349dc', // 必填，公众号的唯一标识
    //     signature: '8cbee740120fc7da6580fe5a4c70420ff0c82f40',
    //     nonceStr: '9KltQ2Rh79f6oAcU',
    //     timestamp: 1699777554822,
    //     jsApiList: ['postMessage'] // 必填，需要使用的JS接口列表
    // })
    wxMpConfig()
    wx.ready(function () {
        // config信息验证后会执行ready方法，所有接口调用都必须在config接口获得结果之后，config是一个客户端的异步操作，所以如果需要在页面加载时就调用相关接口，则须把相关接口放在ready函数中调用来确保正确执行。对于用户触发时才调用的接口，则可以直接调用，不需要放在ready函数中。
        try {
            wx.miniProgram.navigateBack({ delta: 1 })
            wx.miniProgram.postMessage({

                data: JSON.parse(message),
            })
        } catch (error) {
            console.log('postMessage error:')
            console.log(error)
        }
    })

    wx.error(function (res) {
        // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
        console.log('wx.error')
    })



}

function isInWxMiniProgram() {
    // var env = window.__wxjs_environment;
    // console.log("window.__wxjs_environment=" + env)
    // return env === 'miniprogram';
    return wxEnvGlobal === 'miniprogram'
}

function wechatReady() {
    wxEnvGlobal = window.__wxjs_environment
}




function getWxEnv() {
    return wxEnvGlobal
}

var dscnoncestr = ''
var dsctimestamp = 0
var dscsignature = ''

function setDscSig(parmas) {
    console.log('setDscSig: ' + parmas)
    var data = JSON.parse(parmas)


    dscnoncestr = data.noncestr
    dsctimestamp = data.timestamp
    dscsignature = data.signature
}
function scanQRCode() {
    wxMpConfig()
    wx.ready(function () {
        wx.scanQRCode({
            needResult: 0, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
            scanType: ["qrCode", "barCode"], // 可以指定扫二维码还是一维码，默认二者都有
            success: function (res) {
                var result = res.resultStr // 当needResult 为 1 时，扫码返回的结果
                console.log('scanQRCode result=', res)

            }, fail: function (e) {
                console.log('scanQRCode error=', e)
            }
        })
    })
}
function wxMpConfig() {
    // var noncestr = 'Wm3WZYTPz0wzccnW'
    // var timestamp = parseInt(new Date().getTime() / 1000)
    // var parmas = `jsapi_ticket=LIKLckvwlJT9cWIhEQTwfLAobTrsYQpzOggH2CreaX-DkAc1-uhRYG-PElVbjOk3cRRPDlCQGhyVyN9EsYLZGA&noncestr=${noncestr}&timestamp=${timestamp}&url=https://h6hoxwdt2xh2shsh3.neiwangyun.net/`
    // var signature = sha1(parmas)

    wx.config({
        debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
        appId: 'wxdb5f7889828349dc', // 必填，公众号的唯一标识
        signature: dscsignature,
        nonceStr: dscnoncestr,
        timestamp: dsctimestamp,
        jsApiList: ['postMessage', 'scanQRCode'] // 必填，需要使用的JS接口列表
    })
    // wx.config({
    //     debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
    //     appId: 'wxdb5f7889828349dc', // 必填，公众号的唯一标识
    //     signature: signature,
    //     nonceStr: noncestr,
    //     timestamp: timestamp,
    //     jsApiList: ['postMessage'] // 必填，需要使用的JS接口列表
    // })
}

function wxLogin() {
    wx.login({
        success(res) {
            if (res.code) {
                //发起网络请求
                console.log('微信code=' + res.code)


                wxCodeGlobal = res.code
            } else {
                console.log('登录失败！' + res.errMsg)
            }
        }
    })
}


function getWxCodeGlobal() {
    return wxCodeGlobal
}


function resetWxCode() {
    wxCodeGlobal = ''
}