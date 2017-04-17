export var foo = {
  bar: function bar(baz) {
    var format = function format(x) {
      return x.toLocaleString();
    };

    var numbers = [2001, 9001];

    numbers.map(format).forEach(function (x) {
      return console.log(x);
    });
  }
};