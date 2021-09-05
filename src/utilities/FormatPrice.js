
const reverseString = (str) => {
    return str.split('').reverse().join('');
}

const FormatPrice = (price) => {
    const tmp = price.toString();
    const length = tmp.length - 1;
    let result = '';
    let count = 1;
    for (let i = length; i>=0; i--) {
        result += tmp[i];
        if (count === 3 && i !== 0) {
            result += ',';
            count = 0;
        }
        count++;
    }
    return reverseString(result);
}
export default FormatPrice;
