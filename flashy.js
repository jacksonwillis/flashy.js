Array.prototype.rotate = (function () {
  var unshift = Array.prototype.unshift,
    splice = Array.prototype.splice;
  return function (count) {
    var len = this.length >>> 0,
      count = count >> 0;
    unshift.apply(this, splice.call(this, count % len, len));
    return this;
  };
})();

$flashy = {
  rainbow:   ["f00", "f60", "ff0", "6f0", "0ff", "06f", "00f"],
  grayscale: ["000", "111", "222", "333", "444", "555", "666", "777",
              "888", "999", "aaa", "bbb", "ccc", "ddd", "eee", "fff"],

  MY_EYES: function (el, time, border_width, colors) {
    // Default values
    colors = (colors || $flashy.rainbow);
    time = (time || 50);
    border_width = (border_width || 10);

    var id = String(Math.random()).split('0.')[1];
    var update = 0;

    $(el).wrap("<div class='flashy-wrapper-" + id + "' />");

    var i, _i, _len;
    for (_i = 0, _len = colors.length; _i < _len; _i++) {
      var i = colors[_i];
      $(el).wrap("<div class='flashy' />");
    }

    setInterval(function () {
      $('.flashy-wrapper-' + id + ' .flashy').each(function (i, el) {
        $(el).css('border', border_width + 'px solid #' + colors[i])
      });
      colors.rotate(1);
    }, time);
  }
};
