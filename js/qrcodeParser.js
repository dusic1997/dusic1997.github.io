"use strict";
// Object.defineProperty(exports, "__esModule", { value: true });
// var b64toBlob_1 = require("./b64toBlob");
// var utils_1 = require("./utils");

async function qrcodeParser(input) {
    var blob;
    if (input instanceof File &&
        Object.prototype.toString.call(input) === '[object File]') {
        blob = input.slice();
        return (0, blob2text)(blob);
    } else if (typeof input === 'string' && (0, isBase64)(input)) {
        blob = b64toBlob(input);
        const ret = await (0, blob2text)(blob);
        // ret.then(function(ret) { return console.log('qrcodeParser: ret=' + ret); })
        // console.log('qrcodeParser: ret=' + ret);
        return ret;
    } else if (typeof input === 'string' && (0, isUrl)(input)) {
        return new Promise(function(resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.open('GET', input);
            xhr.responseType = 'blob'; // force the HTTP response, response-type header to be blob
            xhr.onload = function() {
                if (xhr.status >= 200 && xhr.status < 300) {
                    blob = xhr.response; // xhr.response is now a blob object
                    (0, blob2text)(blob)
                    .then(function(ret) { return resolve(ret); })
                        .catch(function(e) { return reject(e); });
                } else {
                    reject(xhr.statusText);
                }
            };
            xhr.onerror = function() { return reject(xhr.statusText); };
            xhr.send();
        });
    } else {
        return Promise.reject(new Error('The input type is invalid'));
    }
}