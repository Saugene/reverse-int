module.exports = function reverse (n) {
    n = Math.abs(n);
    let s = String(n).split('').reverse().join('');
    s = Number(s);
    return s;
}
