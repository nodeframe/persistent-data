'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _bson = require('bson');

var _bson2 = _interopRequireDefault(_bson);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _deepmerge = require('deepmerge');

var _deepmerge2 = _interopRequireDefault(_deepmerge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var bson = new _bson2.default();

var defaultPath = __dirname + '/./data.bson';

var Data = function () {
  function Data(data) {
    var path = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultPath;
    var mergeOption = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    _classCallCheck(this, Data);

    this.defaultData = data;
    this.path = path;
    this.mergeOption = mergeOption;
  }

  _createClass(Data, [{
    key: 'merge',
    value: function merge(data, options) {
      this.load();
      var newData = (0, _deepmerge2.default)(this.data, data, options || this.mergeOption);
      _fs2.default.writeFileSync(this.path, bson.serialize(newData));
      return newData;
    }
  }, {
    key: 'load',
    value: function load() {
      if (!_fs2.default.existsSync(this.path)) {
        return this.save();
      } else {
        return this.data = bson.deserialize(_fs2.default.readFileSync(this.path));
      }
    }
  }, {
    key: 'save',
    value: function save(data) {
      var newData = data || this.defaultData;
      _fs2.default.writeFileSync(this.path, bson.serialize(newData));
      return newData;
    }
  }, {
    key: 'remove',
    value: function remove() {
      _fs2.default.unlink(this.path);
    }
  }]);

  return Data;
}();

exports.default = Data;
//# sourceMappingURL=index.js.map