module.exports = {

    //NODES
    NODE_SESSION_MANAGER: {"service": {"host": "localhost", "port": 5000}, "server": {"host": "localhost", "port": 8080}},
    NODE_METADATA_MANAGER: {"service": {"host": "localhost", "port": 5001}, "server": {"host": "localhost", "port": 8081}},
    NODE_DB_CONTROLLER: {"service": {"host": "localhost", "port": 5002}, "server": {"host": "localhost", "port": 8082}},
    NODE_INTELLIGENCE: {"service": {"host": "localhost", "port": 5003}, "server": {"host": "localhost", "port": 8083}},
    NODE_MPD_GENERATOR: {"service": {"host": "localhost", "port": 5004}, "server": {"host": "localhost", "port": 8084}},
    NODE_TRANSCODER: {"service": {"host": "localhost", "port": 5005}, "server": {"host": "localhost", "port": 8085}},
    NODE_REPLICATOR: {"service": {"host": "localhost", "port": 5006}, "server": {"host": "localhost", "port": 8086}},
    NODE_DISTRIB: {"service": {"host": "localhost", "port": 5007}, "server": {"host": "localhost", "port": 8087}},

    //SERVICE
    SERVICE_SCHEMA: {
        "NODE_SESSION_MANAGER": [NODE_DB_CONTROLLER, NODE_MPD_GENERATOR],
        "NODE_METADATA_MANAGER": [NODE_DB_CONTROLLER],
        "NODE_DATABASE_CONTROLLER": [],
        "NODE_INTELLIGENCE": [NODE_DB_CONTROLLER, NODE_SESSION_MANAGER, NODE_TRANSCODER],
        "NODE_TRANSCODER": [NODE_REPLICATOR],
        "NODE_REPLICATOR": [NODE_DISTRIB],
        "NODE_DISTRIB": []
    }
};
