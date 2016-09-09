var cellx = require('cellx');
var o = require('./../index');
var fixture1 = "fix", fixture2 = "fix2", fixture3 = "fix3";
describe("Observer", function () {
    it("get value", function () {
        var x = new cellx.Cell(fixture1);
        var obs = o(x);
        expect(obs()).toBe(fixture1);
        var x2 = cellx(fixture2);
        var obs = o(x2);
        expect(obs()).toBe(fixture2);
    })
    it("subscribe and dispose", function (done) {
        var x = cellx(fixture1);
        var obs = o(x);
        var cb = jasmine.createSpy();
        var dispose = obs(cb);
        x(fixture2);
        setTimeout(function () {
            expect(cb.calls.count()).toBe(1);
            expect(obs()).toBe(fixture2);
            dispose();
            x(fixture3);
            setTimeout(function () {
                expect(cb.calls.count()).toBe(1);
                expect(obs()).toBe(fixture3);
                done();
            })
        })
    })
})