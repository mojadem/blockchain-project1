function mine(app) {
    app.get("/mine", (request, response) => {
        global.blockchain.addBlock();

        global.transactions = [];

        let msg = `Block added: ${global.blockchain.getLastBlock().prettify()}`;
        response.status(200).send(msg);
    });
}

module.exports = mine;