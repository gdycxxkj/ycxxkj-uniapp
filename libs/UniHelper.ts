// import MapHelper from "./map_helper";
import to from "await-to-js";
const UniHelper = {
	async login() {
		return new Promise((resolve, reject) => {
			uni.login({
				provider: "weixin",
				success: (res) => {
					console.log(res.code);
					resolve(res);
				},
				fail: (res) => {
					reject(res);
				}
			});
		});
	},
	//扫描
	takePhoto() {
		return new Promise((resolve, reject) => {
			uni.scanCode({
				scanType: ["qrcode"],
				success: (res) => {
					resolve(res.result);
				}
			});
		});
	},
	copyText(data: string) {
		return new Promise((resolve, reject) => {
			uni.setClipboardData({
				data: data,
				success: function () {
					console.log("success");
					resolve(true);
				}
			});
		});
	},
	previewImage(images: Array<string>, current = 0) {
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
	toast(title: string, duration = 2000, icon: any = "none") {
		return new Promise((resolve, reject) => {
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
	hideKeyboard(timeout: number = 200) {
		return new Promise(() => {
			setTimeout(() => {
				uni.hideKeyboard();
			}, timeout);
		});
	},
	/**
	 * 加载中
	 * @param {*} title
	 */
	loading(title: string = "加载中...") {
		uni.showLoading({
			title: title,
			mask: true
		});
	},
	/**
	 *  隐藏 loading 提示框
	 */
	hideLoading() {
		uni.hideLoading();
	},
	/**
	 * 消息提示，有确认按钮
	 * @param {*} msg
	 */
	alert(msg: string) {
		return new Promise((resolve, reject) => {
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
	async confirm(title: string, content: string) {
		return new Promise((resolve, reject) => {
			uni.showModal({
				title: title,
				content: content,
				success: function (res) {
					if (res.confirm) {
						console.log("用户点击确定");
						resolve(true);
					} else if (res.cancel) {
						console.log("用户点击取消");
						resolve(false);
					}
				}
			});
		});
	},
	////////==========上传============//////////////////////////
	/**
	 * 选1张图片
	 * @returns
	 */
	async simpleChooseImage() {
		let [err, res]: [any, any] = await to(this.chooseImage(1));
		console.log("simpleChooseImage", err, res);
		return res.tempFilePaths[0];
	},
	/**
	 * 选图片，改promise
	 * @param {*} count
	 * @param {*} sizeType
	 * @param {*} sourceType
	 * @returns
	 */
	chooseImage(count: number = 9, sizeType = ["compressed"], sourceType = ["album", "camera "]) {
		return new Promise((resolve, reject) => {
			uni.chooseImage({
				count, //默认9
				sizeType, //: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
				sourceType: ["album"], //从相册选择
				success: function (res) {
					console.log(JSON.stringify(res.tempFilePaths));
					resolve(res);
				}
			});
		});
	},
	async scanCode(onlyFromCamera: boolean = false, scanType: string[] = ["qrCode", "barCode"]) {
		return new Promise((resolve, reject) => {
			uni.scanCode({
				onlyFromCamera,
				scanType,
				success: function (res) {
					resolve({ code: 0, ...res });
				},
				fail: function (res) {
					reject({ code: 999, msg: res.errMsg, ...res });
				}
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

export default UniHelper;
