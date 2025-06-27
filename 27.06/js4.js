function chain(value) {
    return {
        add(n) {
            value=value+n;
            return this;
        },
        subtract(n) {
            value=value-n;
            return this;
        },
        result() {
            return value;
        }
    };
}

console.log(chain(5).add(2).subtract(1).result()); 
