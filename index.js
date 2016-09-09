var cellx = require('cellx');
module.exports = function (cell) {
    var newCell;
    if (cell instanceof cellx.Cell) {
        newCell = new cellx.Cell(function () { return cell.get() });
    } else {
        newCell = new cellx.Cell(function () {
            return cell()
        });
    }
    return function (cb) {
        if (cb) {
            newCell.subscribe(function () {
                cb(newCell.get());
            });
            return newCell.dispose.bind(newCell);
        }
        return newCell.get();
    }
}