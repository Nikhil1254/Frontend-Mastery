const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");
const { v4: uuidv4 } = require("uuid");
const path = require("path");

const PROTO_PATH = path.resolve(__dirname, "customers.proto");

// Load the protobuf file 
const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
    keepCase: true,
    longs: String,
    enums: String,
    arrays: true
});
const customersProto = grpc.loadPackageDefinition(packageDefinition);

// data
const customers = [{
    id: uuidv4().slice(0, 7),
    name: "Nikhil",
    age: 24,
    address: "Pune"
},
{
    id: uuidv4().slice(0, 7),
    name: "Sujit",
    age: 26,
    address: "Latur"
}]


// Implement methods
function getAll(call, callback) {
    callback(null, { customers });
}

function get(call, callback) {
    const customerId = call.request.id;
    const customer = customers.find((customer) => customer.id === customerId);
    if (customer)
        callback(null, { ...customer });
    else
        callback({
            status: grpc.status.NOT_FOUND,
            message: `customer with ${customerId} does not exist`,
        })
}

function update(call, callback) {
    const customerDetails = call.request;
    const customer = customers.find((customer) => customer.id === customerDetails.id);
    if (customer) {
        customer.name = customerDetails.name;
        customer.age = customerDetails.age;
        customer.address = customerDetails.address;
        callback(null, { customer });
    } else
        callback(new Error({
            status: grpc.status.NOT_FOUND,
            message: `customer with ${customerDetails.id} does not exist`,
        }))
}

function insert(call, callback) {
    const customer = call.request;
    customers.push({ id: uuidv4().slice(0, 7), ...customer });
    callback(null, { ...customers[customers.length - 1] });
}

function remove(call, callback) {
    const customerId = call.request.id;
    const idx = customers.findIndex(customer => customer.id === customerId);
    if (idx) {
        customers.splice(idx, 1);
        callback(null, {});
    } else
        callback({
            status: grpc.status.NOT_FOUND,
            message: `customer with ${customerId} does not exist`,
        })
}

// Create and start gRPC server
function main() {
    const server = new grpc.Server();
    server.addService(customersProto.CustomerService.service, { get, getAll, remove, insert, update });
    server.bindAsync('0.0.0.0:3002', grpc.ServerCredentials.createInsecure(), (err, port) => {
        if (err)
            console.log(`Error starting gRPC server: ${err}`);
        else {
            console.log(`gRPC server is listening on ${port}`);
        }
    });
}
main();