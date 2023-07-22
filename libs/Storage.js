"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prifix = "";
var randomString = function (len) {
    len = len || 32;
    var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678'; /****默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/
    var maxPos = $chars.length;
    var pwd = '';
    for (var i = 0; i < len; i++) {
        pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
    }
    return pwd;
};
var Storage = {
    getPrifix: function (len) {
        if (len === void 0) { len = 2; }
        if (!prifix) {
            prifix = uni.getStorageSync("prifix") || randomString(len) + "_";
            uni.setStorageSync("prifix", prifix);
        }
        return prifix;
    },
    set: function (key, data) {
        uni.setStorageSync(this.getPrifix() + key, data);
    },
    get: function (key) {
        return uni.getStorageSync(this.getPrifix() + key);
    },
    remove: function (key) {
        return uni.removeStorageSync(this.getPrifix() + key);
    },
    clear: function () {
        var _this = this;
        uni.getStorageInfoSync().keys.forEach(function (key) {
            if (key.indexOf(_this.getPrifix()) == 0) {
                uni.removeStorageSync(key);
            }
        });
        // return uni.clearStorageSync();
    }
};
exports.default = Storage;
