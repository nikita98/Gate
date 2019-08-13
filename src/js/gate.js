// ----- Typical module

var $ = require('jquery');

module.exports = function () {
    let $gate = $('.b-gate-js'),
        $picker = $gate.find('.b-gate__picker-item'),
        $img = $gate.find('.b-gate__img-wrap');
    console.log($picker);

    let type = 1,
        picture = 1,
        color = 1;

    $picker.on('click', function () {
        let $this = $(this);
        if ($this.data('type')) {
            type = $this.data('type');
            picture = 1;
            color = 1;
        }
        if ($this.data('picture')) {
            picture = $this.data('picture');
            color = 1;
        }
        if ($this.data('color')) {
            color = $this.data('color');
        }
        $img.removeClass('active');
        $img.filter('[data-type="' + type + '"][data-picture="' + picture + '"][data-color="' + color + '"]').addClass('active');
        console.log(`type= ${type}, picture= ${picture}, color= ${color}`);
    })
};
