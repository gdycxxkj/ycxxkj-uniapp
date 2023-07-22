"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StringUtil = {
    arrayStringVal: function (data) {
        for (var index in data) {
            data[index] = String(data[index]);
        }
        return data;
    },
    parseString: function (obj) {
        if (!obj && typeof obj !== 'undefined' && obj != 0) {
            return '';
        }
        if (typeof obj === 'undefined') {
            return '';
        }
        if (typeof obj === 'number' && isNaN(obj)) {
            return '0';
        }
        return obj.toString();
    },
};
exports.default = StringUtil;
