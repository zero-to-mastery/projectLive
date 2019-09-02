const mongoose = require("mongoose")
const nodeMediaServer = require("node-media-server")
const config = require("./config").rtmp_server

let nms = new nodeMediaServer(config);

nms.run()