const Reg = {
	phone(phoneNumber: string) {
		var pattern = /^1[3456789]\d{9}$/;
		return pattern.test(phoneNumber);
	}
};

export default Reg;
