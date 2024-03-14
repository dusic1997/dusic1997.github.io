// function detectBarcode(dataUrl, callback) {

//     // call here your favorite javascript barcode scan library
//     // input must be an image dataUrl
//     // output must be a single String
//     const img = new Image()
//     img.src = dataUrl
//     img.onload = function () {
//         console.log('detectBarcode：image loaded url=' + dataUrl)
//         const canvas = document.createElement('canvas')
//         const ctx = canvas.getContext('2d')
//         canvas.width = img.width
//         canvas.height = img.height
//         ctx.drawImage(img, 0, 0, img.width, img.height)
//         const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
//         const code = jsQR(imageData.data, imageData.width, imageData.height)
//         if (code) {
//             console.log(code.data)
//             callback(code.data)
//             return code.data
//         } else {
//             console.error('No barcode found.')
//             return null
//         }
//     }
//     // don't forget to trigger the call back in order to get the result
//     // callback(barcode)
// }