'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _cheerio = require('cheerio');

var cheerio = _interopRequireWildcard(_cheerio);

var _htmlDocument = require('./html/htmlDocument');

var _fbConverter = require('./fb/fbConverter');

var fb = _interopRequireWildcard(_fbConverter);

var _ampConverter = require('./amp/ampConverter');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NotitiaConverter = function () {
    function NotitiaConverter() {
        _classCallCheck(this, NotitiaConverter);
    }

    _createClass(NotitiaConverter, [{
        key: 'createAMPDocument',


        //Corrects img, iframe and stlye tags, deletes dissallowed scripts, DOES NOT FIX HEAD
        value: function createAMPDocument(contents) {
            if (contents != null || contents != undefined) {
                var document = new _htmlDocument.HTML(contents);
                var amps = new _ampConverter.AMP(contents);
                var $ = amps.getHTML(contents);
                amps.quickDelete($);
                var amp = amps.quickFix($, 1);
                return '<!DOCTYPE html><html \u26A1 lang="en">' + amp + '</html>';
            }
        }
        //Corrects img, iframe and style tags, deletes dissallowed scripts, returns body only   

    }, {
        key: 'createAMPBody',
        value: function createAMPBody(contents) {
            if (contents != null || contents != undefined) {
                var document = new _htmlDocument.HTML(contents);
                var amps = new _ampConverter.AMP(contents);
                var $ = amps.getHTML(contents);
                amps.quickDelete($);
                var ampBody = amps.quickFix($, 2);
                return '<body>' + ampBody + '</body>';
            }
        }
    }]);

    return NotitiaConverter;
}();

module.exports = { NotitiaConverter: NotitiaConverter };
//# sourceMappingURL=main.js.map