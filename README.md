# hyperscript-cellx
Cellx adapter for hyperscript observable

# Example

    var cellx = require('cellx');
    var h = require('hyperscript');
    var o = require('hyperscript-cellx');

    var color = cellx('green');
    var div = h('div', {
        style: {
            color: o(color)
        }
    }, [h('button', {
        onclick: function () {
            color('red');
        }
    }, "click me!"), "Lorem Ipsum"]);
    document.body.appendChild(div);