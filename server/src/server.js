"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var apollo_server_express_1 = require("apollo-server-express");
var graphql_depth_limit_1 = __importDefault(require("graphql-depth-limit"));
var http_1 = require("http");
var compression_1 = __importDefault(require("compression"));
// import cors from 'cors';
var cors = require('cors');
var schema_1 = __importDefault(require("./schema"));
var app = (0, express_1.default)();
var server = new apollo_server_express_1.ApolloServer({
    schema: schema_1.default,
    validationRules: [(0, graphql_depth_limit_1.default)(7)]
});
app.use('*', cors());
app.use((0, compression_1.default)());
server.applyMiddleware({ app: app, path: '/graphql' });
var httpServer = (0, http_1.createServer)(app);
httpServer.listen({ port: 8000 }, function () { return console.log("server Start"); });
