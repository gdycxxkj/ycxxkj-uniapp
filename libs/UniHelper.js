"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
// import MapHelper from "./map_helper";
var await_to_js_1 = require("await-to-js");
var UniHelper = {
    login: function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        uni.login({
                            provider: "weixin",
                            success: function (res) {
                                console.log(res.code);
                                resolve(res);
                            },
                            fail: function (res) {
                                reject(res);
                            }
                        });
                    })];
            });
        });
    },
    //扫描
    takePhoto: function () {
        return new Promise(function (resolve, reject) {
            uni.scanCode({
                scanType: ["qrcode"],
                success: function (res) {
                    resolve(res.result);
                }
            });
        });
    },
    copyText: function (data) {
        return new Promise(function (resolve, reject) {
            uni.setClipboardData({
                data: data,
                success: function () {
                    console.log("success");
                    resolve(true);
                }
            });
        });
    },
    previewImage: function (images, current) {
        if (current === void 0) { current = 0; }
        console.log("previewImage", images);
        uni.previewImage({
            urls: images,
            current: current,
            longPressActions: {
                itemList: ["发送给朋友", "保存图片", "收藏"],
                success: function (data) {
                    console.log("选中了第" + (data.tapIndex + 1) + "个按钮,第" + (data.index + 1) + "张图片");
                },
                fail: function (err) {
                    console.log(err.errMsg);
                }
            }
        });
    },
    ///========消息=============
    toast: function (title, duration, icon) {
        if (duration === void 0) { duration = 2000; }
        if (icon === void 0) { icon = "none"; }
        return new Promise(function (resolve, reject) {
            uni.showToast({
                title: title,
                duration: duration,
                icon: icon,
                success: function () {
                    resolve(true);
                }
            });
        });
    },
    //隐藏键盘
    hideKeyboard: function (timeout) {
        if (timeout === void 0) { timeout = 200; }
        return new Promise(function () {
            setTimeout(function () {
                uni.hideKeyboard();
            }, timeout);
        });
    },
    /**
     * 加载中
     * @param {*} title
     */
    loading: function (title) {
        if (title === void 0) { title = "加载中..."; }
        uni.showLoading({
            title: title,
            mask: true
        });
    },
    /**
     *  隐藏 loading 提示框
     */
    hideLoading: function () {
        uni.hideLoading();
    },
    /**
     * 消息提示，有确认按钮
     * @param {*} msg
     */
    alert: function (msg) {
        return new Promise(function (resolve, reject) {
            uni.showModal({
                content: msg,
                showCancel: false,
                success: function () {
                    resolve(true);
                }
            });
        });
    },
    /**
     * 消息二次确认
     * @param {*} title
     * @param {*} content
     * @returns
     */
    confirm: function (title, content) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        uni.showModal({
                            title: title,
                            content: content,
                            success: function (res) {
                                if (res.confirm) {
                                    console.log("用户点击确定");
                                    resolve(true);
                                }
                                else if (res.cancel) {
                                    console.log("用户点击取消");
                                    resolve(false);
                                }
                            }
                        });
                    })];
            });
        });
    },
    ////////==========上传============//////////////////////////
    /**
     * 选1张图片
     * @returns
     */
    simpleChooseImage: function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, err, res;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, (0, await_to_js_1.default)(this.chooseImage(1))];
                    case 1:
                        _a = _b.sent(), err = _a[0], res = _a[1];
                        console.log("simpleChooseImage", err, res);
                        return [2 /*return*/, res.tempFilePaths[0]];
                }
            });
        });
    },
    /**
     * 选图片，改promise
     * @param {*} count
     * @param {*} sizeType
     * @param {*} sourceType
     * @returns
     */
    chooseImage: function (count, sizeType, sourceType) {
        if (count === void 0) { count = 9; }
        if (sizeType === void 0) { sizeType = ["compressed"]; }
        if (sourceType === void 0) { sourceType = ["album", "camera "]; }
        return new Promise(function (resolve, reject) {
            uni.chooseImage({
                count: count,
                sizeType: sizeType,
                sourceType: ["album"],
                success: function (res) {
                    console.log(JSON.stringify(res.tempFilePaths));
                    resolve(res);
                }
            });
        });
    },
    scanCode: function (onlyFromCamera, scanType) {
        if (onlyFromCamera === void 0) { onlyFromCamera = false; }
        if (scanType === void 0) { scanType = ["qrCode", "barCode"]; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        uni.scanCode({
                            onlyFromCamera: onlyFromCamera,
                            scanType: scanType,
                            success: function (res) {
                                resolve(__assign({ code: 0 }, res));
                            },
                            fail: function (res) {
                                reject(__assign({ code: 999, msg: res.errMsg }, res));
                            }
                        });
                    })];
            });
        });
    }
    /* getLocation(type = "gcj02") {
        return new Promise((resolve, reject) => {
            uni.getLocation({
                geocode: true,
                success: async function (res) {
 
                    console.log("当前位置： res", res);
                    console.log("当前位置的经度：" + res.longitude);
                    console.log("当前位置的纬度：" + res.latitude);
                    let res1 = MapHelper.wgs84togcj02(res.latitude, res.longitude);
                    res.latitude = res1.lat;
                    res.longitude = res1.lon;
                    res.lat = res1.lat;
                    res.lng = res1.lon;
                    resolve(res);
                    // uni.showModal({
                    //     content: "当前位置的经度：" + res.longitude + "当前位置的纬度：" + res.latitude + "," + JSON.stringify(res1)
                    // })
 
                },
                fail: function (res) {
                    resolve(false);
                }
            });
        });
    } */
};
exports.default = UniHelper;
