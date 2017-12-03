'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _cheerio = require('cheerio');

var cheerio = _interopRequireWildcard(_cheerio);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HTML = function () {
    function HTML(contents) {
        _classCallCheck(this, HTML);

        this.contents = contents;
    }

    _createClass(HTML, [{
        key: 'loadDocument',
        value: function loadDocument(contents) {
            var $ = cheerio.load(contents);
            return $;
        }
    }, {
        key: 'getElement',
        value: function getElement($) {
            if ($.root().length != 0) {
                var root = $.root().html();
                return root;
            }
        }
    }, {
        key: 'getLanguage',
        value: function getLanguage($) {
            if ($.root().length != 0) {
                var languange = $('html').attr('lang');
                return languange;
            }
        }
    }]);

    return HTML;
}();

module.exports = { HTML: HTML };
//# sourceMappingURL=htmlDocument.js.map