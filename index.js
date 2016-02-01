/* Copyright 2016 Christine S. MacNeill

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

  Unless required by appli cable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
*/

var NodeAPI = require('./api/NodeAPI.js');
var RegistrationAPI = require('./api/RegistrationAPI.js');
var QueryAPI = require('./api/QueryAPI.js');
var NodeRAMStore = require('./api/NodeRAMStore.js');

var ledger = {
  NodeAPI : NodeAPI,
  RegistrationAPI : RegistrationAPI,
  QueryAPI : QueryAPI,
  NodeRAMStore : NodeRAMStore,
  Node : require('./model/Node.js'),
  Device : require('./model/Device.js')
};

module.exports = ledger;
