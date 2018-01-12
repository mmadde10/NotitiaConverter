'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _cheerio = require('cheerio');

var cheerio = _interopRequireWildcard(_cheerio);

var _htmlDocument = require('../html/htmlDocument');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FaceBookInstantArticle = function () {
    function FaceBookInstantArticle(content) {
        _classCallCheck(this, FaceBookInstantArticle);

        this.content = content;
    }

    _createClass(FaceBookInstantArticle, [{
        key: 'getHTML',
        value: function getHTML(content) {
            var html = new _htmlDocument.HTML();
            var $ = html.loadDocument(content);
            return $;
        }
    }, {
        key: 'prepareInstantArticle',
        value: function prepareInstantArticle($) {
            $('body').find('img');
        }
    }, {
        key: 'publishInstantArtcle',
        value: function publishInstantArtcle($) {}
    }]);

    return FaceBookInstantArticle;
}();

module.exports = FaceBookInstantArticle;
//# sourceMappingURL=fbConverter.js.map