"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Reg = {
    phone: function (phoneNumber) {
        var pattern = /^1[3456789]\d{9}$/;
        return pattern.test(phoneNumber);
    }
};
exports.default = Reg;
