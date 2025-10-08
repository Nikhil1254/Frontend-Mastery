const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");
const path = require("path");

const PROTO_PATH = path.resolve(__dirname,"../server","customers.proto");

// Load the protobuf file 
const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
    keepCase: true,
    longs: String,
    enums: String,
    arrays: true
});
const customerService = grpc.loadPackageDefinition(packageDefinition).CustomerService;
const client = new customerService(
    "0.0.0.0:3002",
    grpc.credentials.createInsecure()
)

module.exports = client;