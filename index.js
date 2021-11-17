const Test = (function () {
    let instens;
    return function (txt) {
        if (instens) return instens;
        this.txt = txt;
        instens = this;
    }
})()
