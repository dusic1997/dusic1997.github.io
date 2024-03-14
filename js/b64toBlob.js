"use strict";
//  Ref: https://stackoverflow.com/a/16245768
// Object.defineProperty(exports, "__esModule", { value: true });
function b64toBlob(b64Data, contentType, sliceSize) {
    if (contentType === void 0) { contentType = ''; }
    if (sliceSize === void 0) { sliceSize = 512; }
    var byteCharacters = atob(b64Data);
    var byteArrays = [];
    for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
        var slice = byteCharacters.slice(offset, offset + sliceSize);
        var byteNumbers = Array.from({ length: slice.length });
        for (var i = 0; i < slice.length; i++)
            byteNumbers[i] = slice.charCodeAt(i);
        var byteArray = new Uint8Array(byteNumbers);
        byteArrays.push(byteArray);
    }
    var blob = new Blob(byteArrays, { type: contentType });
    return blob;
}
// exports.default = b64toBlob;