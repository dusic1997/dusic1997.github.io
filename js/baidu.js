var baiduLocationObj = {}


function baiduLocate() {

    // AMap.plugin('AMap.Geolocation', function() {
    //     var geolocation = new AMap.Geolocation({
    //         // 是否使用高精度定位，默认：true
    //         enableHighAccuracy: true,
    //         // 设置定位超时时间，默认：无穷大
    //         timeout: 10000,
    //         // 定位按钮的停靠位置的偏移量，默认：Pixel(10, 20)
    //         buttonOffset: new AMap.Pixel(10, 20),
    //         //  定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
    //         zoomToAccuracy: true,
    //         //  定位按钮的排放位置,  RB表示右下
    //         buttonPosition: 'RB'
    //     })
    //     console.log(geolocation)
    //     geolocation.getCurrentPosition()
    //     AMap.event.addListener(geolocation, 'complete', onComplete)
    //     AMap.event.addListener(geolocation, 'error', onError)

    //     function onComplete(data) {
    //         // data是具体的定位信息
    //         console.log(data)
    //     }

    //     function onError(data) {
    //         // 定位出错
    //         console.log(data)

    //     }
    // })
    var geolocation = new BMap.Geolocation();
    // 开启SDK辅助定位
    geolocation.enableSDKLocation();
    geolocation.getCurrentPosition(function(r) {
        if (this.getStatus() == BMAP_STATUS_SUCCESS) {

            console.log('您的位置：' + r.point.lng + ',' + r.point.lat);
            var now = new Date();
            var timeString = now.toLocaleTimeString();
            console.log(timeString);
            baiduLocationObj.lng = r.point.lng;
            baiduLocationObj.lat = r.point.lat;
        } else {
            console.log('failed' + this.getStatus());
        }
    })

    // navigator.geolocation.getCurrentPosition(function(success) {
    //     console.log(success);
    // }, function(error) {
    //     console.log(error);

    // }, {

    //     enableHighAccuracy: true, // 精确查找，默认false

    // })
}

function getBaiduLocationObj() {
    return JSON.stringify(baiduLocationObj);
}