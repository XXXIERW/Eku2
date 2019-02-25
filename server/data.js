var r = require("config.js"), e = require("request.js"), o = {
    otherProgram: r.server_url + "/program/other_program"
}, t = {
    otherProgram: function(r) {
        e.get(o.otherProgram, {}, {
            success: function(e) {
                e && 0 == e.error && r(e.list);
            },
            fail: function(r) {},
            complete: function(r) {}
        });
    }
};

module.exports = t;