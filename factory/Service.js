/*jslint node: true */
/*jshint esversion: 6 */
'use strict';

let Promise = require('bluebird');  //jshint ignore:line

let seneca = require('seneca');

let dConfig = require('../dConfig.js');
let Interaction = require('Interaction.js');

class Service extends Interaction {
    constructor(node, api, options) {
        super(node, seneca(), api);

        this.framework.use(this.api, options);  //options to pass to seneca plugin
        this.client = this.framework.client();  //seneca client to act upon other service nodes
    }

    prepare() {
        return new Promise((resolve, reject) => {
            //Discover IPs related to this node : [{"host": string, "port": int }]
            let schema = dConfig.SERVICE_SCHEMA[this.node];          //TODO etcd, here hardcoded
            for(let socket of schema.service) {
                this.client(socket);    //client discovers node
            }
            resolve();
        });
    }

    listen() {
        return new Promise((resolve, reject) => {
            let config = dConfig[this.node].service;    //TODO etcd, here hardcoded

            this.service
                .listen(config);
            console.log("API Seneca Listening");
            resolve();
        });
    }
}

module.exports = Service;
