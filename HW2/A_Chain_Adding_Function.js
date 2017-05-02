function add(value) {
    function fn(num) {
        return add(value + num)
    };
    fn.valueOf = function() {
        return value
    };
    return fn;
}
