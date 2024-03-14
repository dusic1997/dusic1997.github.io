// function _downloadSplitJs(url) {
//     return new Promise((resolve, reject) => {
//         const xhr = new XMLHttpRequest()
//         xhr.open("get", url, true)
//         xhr.onreadystatechange = () => {
//             if (xhr.readyState == 4) {
//                 if (xhr.status >= 200 && xhr.status < 300 || xhr.status == 304) {
//                     resolve(xhr.responseText)
//                 }
//             }
//         }
//         xhr.onerror = reject
//         xhr.ontimeout = reject
//         xhr.send()
//     })
// }

// function getJsFiles() {


//     _retryCount = 0

//     const promises = Object.keys(jsManifest).filter(key => /main.dart_\d.js/g.test(key)).sort().map(key => `${assetBase}${jsManifest[key]}`).map(this._downloadSplitJs)
//     Promise.all(promises).then((values) => {
//         const contents = values.join("")
//         const script = document.createElement("script")
//         script.text = contents
//         script.type = "text/javascript"

//         this._didCreateEngineInitializerResolve = resolve
//         script.addEventListener("error", reject)
//         document.body.appendChild(script)
//     }).catch(() => {
//         // console.error("main.dart.js download fail，refresh and try again");

//         // retry again
//         if (++this._retryCount > 3) {
//             const element = document.createElement("a")
//             element.href = "javascript:location.reload()"
//             element.style.textAlign = "center"
//             element.style.margin = "50px auto"
//             element.style.display = "block"
//             element.style.color = "#f89800"
//             element.innerText = "加载失败，点击重新请求页面"
//             document.body.appendChild(a)
//         } else {
//             this._loadEntrypoint(entrypointUrl)
//         }
//     })

// }