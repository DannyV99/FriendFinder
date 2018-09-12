// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var userData = require("../data/friends");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(userData);
    });

    app.post("/api/friends", function (req, res) {
        if (userData.length < 50) {
            userData.push(req.body);
            res.json(true);
        }
        else {
            alert('Too many friends!')
        }
    });

    app.post("/api/friends", function (req, res) {
        if (userData.length < 50) {
            userData.push(req.body);
            res.json(true);
        } else {
            alert('Too many friends!')
        }
    });
};