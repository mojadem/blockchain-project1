function chain(app) {
    app.get("/chain", (request, response) => {
        let chainStr = global.blockchain.prettify();

        response.status(200).send(chainStr);
    });
}

module.exports = chain;