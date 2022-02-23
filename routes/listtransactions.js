const Transaction = require("../src/transaction");

function listtransactions(app) {
    app.get("/listtransactions", (request, response) => {
        let txStr = "";

        for (let i = 0; i < global.transactions.length; i++) {
            txStr += global.transactions[i].prettify();
        }

        response.status(200).send(txStr);
    });
}

module.exports = listtransactions;