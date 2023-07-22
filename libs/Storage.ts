let prifix = "";
let randomString = (len: number) => {
	len = len || 32;
	let $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';    /****默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/
	let maxPos = $chars.length;
	let pwd = '';
	for (let i = 0; i < len; i++) {
		pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
	}
	return pwd;
}
const Storage = {
	getPrifix(len:number=2): string {
		if (!prifix ) {
			prifix = uni.getStorageSync("prifix") || randomString(len) + "_";
			uni.setStorageSync("prifix", prifix);
		}
		return prifix;
	},
	set(key: string, data: string): void {
		uni.setStorageSync(this.getPrifix() + key, data);
	},
	get(key: string): any {
		return uni.getStorageSync(this.getPrifix() + key);
	},
	remove(key: string): void {
		return uni.removeStorageSync(this.getPrifix() + key);
	},
	clear(): void {
		uni.getStorageInfoSync().keys.forEach((key) => {
			if (key.indexOf(this.getPrifix()) == 0) {
				uni.removeStorageSync(key);
			}
		});
		// return uni.clearStorageSync();
	}
};
export default Storage;
