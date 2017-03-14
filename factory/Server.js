/*jslint node: true */
/*jshint esversion: 6 */
'use strict';

let Promise = require('bluebird');  //jshint ignore:line

let express = require('express');
let bodyParser = require('body-parser');

let dConfig = require('../dConfig.js');
let Interaction = require('./Interaction.js');

class Server extends Interaction {
    constructor(node, api, options) {
        super(node, express(), api);

        this.framework.use('/api', this.framework.api(options));  //options to pass to express router

        // Additional
        this.framework.use(bodyParser.urlencoded({ extended: false }));   //parse application/x-www-form-urlencoded
        this.framework.use(bodyParser.json());  //parse application/json
    }

    listen() {
        return new Promise((resolve, reject) => {
            let config = dConfig[this.node].server;   //TODO etcd

            this.framework.listen(config.port);
            console.log(`Server listening on: ${config.port}`);
            resolve();
        });
    }
}

module.exports = Server;
