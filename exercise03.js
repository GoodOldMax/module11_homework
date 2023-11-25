function wrapper(a) {
    return function wrapped(b) {
        return a + b;
    }
}

result = wrapper(a=2)(b=3);

console.log(result);
