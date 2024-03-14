"use strict"

// const { jsQR } = require("./jsQr");

// Object.defineProperty(exports, "__esModule", { value: true });
// exports.isUrl = exports.isBase64 = exports.blob2text = void 0;
// var jsqr_1 = require("./jsQr");
const apiLocation = 'https://h5.028wlkj.com/minappserver'
// const apiLocation = 'https://admin-uat.028wlkj.com:1020/api'

function changeSiteName(name) {
    document.title = name
}

function changeSiteTitle() {
    // 一个包含查询参数的 URL
    var urlString = window.location.href
    urlString = urlString.replace("#/", "")
    // 创建一个 URL 对象
    var url = new URL(urlString)

    // 获取查询参数
    var params = new URLSearchParams(url.search)
    var communityNumber = params.get("communityNumber")

    // 获取特定参数的值
    var title = params.get("siteName") // 获
    console.log("changeSiteTitle title=" + title)
    if (title != null && title != undefined) { document.title = title } else {
        document.title = '嗨耍成都'
    }

    if (communityNumber != null && communityNumber != '') {
        fetch(apiLocation + "/base/society/detail/" + communityNumber)
            .then(response => response.text())
            .then(data => {
                console.log(data)
                var config = JSON.parse(data)
                title = config.societyName
                if (title != null && title != undefined) { document.title = title } else {
                    document.title = '嗨耍成都'
                }

            })
            .catch(error => console.error(error))
    }
}

function blob2text(blob) {
    return new Promise(function (resolve, reject) {
        var image = new Image()
        image.src = URL.createObjectURL(blob)
        image.addEventListener('load', function () {
            try {
                var canvas = document.createElement('canvas')
                canvas.width = image.width
                canvas.height = image.height
                var context = canvas.getContext('2d')
                if (!context)
                    return reject(new Error('decode failed'))
                context.imageSmoothingEnabled = false
                context.drawImage(image, 0, 0)
                var imageData = context.getImageData(0, 0, image.width, image.height)
                var code = jsQR(imageData.data, image.width, image.height)
                if (code !== null)
                    return resolve(code.data)
                else
                    return reject(new Error('decode failed'))
            } catch (err) {
                if (typeof err === 'string')
                    return reject(new Error(err))
                if (err instanceof Error)
                    return reject(new Error(err.message))
            }
        })
    })
}
// exports.blob2text = blob2text;

function isBase64(str) {
    try {
        return btoa(atob(str)) === str
    } catch (err) {
        return false
    }
}
// exports.isBase64 = isBase64;
// Copy from https://github.com/sindresorhus/is-url-superb
function isUrl(string) {
    if (typeof string !== 'string')
        throw new TypeError('Expected a string')
    string = string.trim()
    if (string.includes(' '))
        return false
    try {
        new URL(string) // eslint-disable-line no-new
        return true
    } catch (_a) {
        return false
    }
}
// exports.isUrl = isUrl;


function copyToClipboard(text) {
    navigator.clipboard.writeText(text)
        .then(() => {
            console.log('文本已复制到剪贴板')
        })
        .catch((err) => {
            console.error('无法复制文本: ', err)
        })
}

