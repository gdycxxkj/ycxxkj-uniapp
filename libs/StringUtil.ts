const StringUtil = {
  arrayStringVal(data: Array<any>) {
    for (const index in data) {
      data[index] = String(data[index]);
    }
    return data;
  },
  parseString(obj: any) {
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
  }
  ,
};

export default StringUtil;
