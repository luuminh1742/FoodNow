export default Util = {
    formatPrice(price) {
        const tmp = price.toString();
        const length = tmp.length - 1;
        let result = '';
        let count = 1;
        for (let i = length; i >= 0; i--) {
            result += tmp[i];
            if (count === 3 && i !== 0) {
                result += ',';
                count = 0;
            }
            count++;
        }
        return result.split('').reverse().join('');
    },
    formatName(name, end) {
        let result = name.slice(0, end);
        if (end < name.length - 1)
            result += ' ...'
        return result;
    }
}