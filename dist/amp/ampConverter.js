'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _cheerio = require('cheerio');

var cheerio = _interopRequireWildcard(_cheerio);

var _htmlDocument = require('../html/htmlDocument');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AMP = function () {
    function AMP(content) {
        _classCallCheck(this, AMP);

        this.content = content;
    }

    _createClass(AMP, [{
        key: 'getHTML',
        value: function getHTML(content) {
            var documents = new _htmlDocument.HTML();
            var $ = documents.loadDocument(content);
            return $;
        }
    }, {
        key: 'quickFix',
        value: function quickFix($, documentFlag) {
            $('body').find('img').each(function () {
                var img = {
                    stringSRC: String($(this).attr('src')),
                    width: 16,
                    height: 9,
                    layout: "responsive",
                    Content: $(this).html()
                };
                var ampIMG = '<amp-img src = ' + img.stringSRC + '  width = ' + img.width + '  height = ' + img.height + ' layout= ' + img.layout + '>  ' + img.Content + ' </amp-img>';
                $(this).replaceWith(ampIMG);
            });
            $('iframe').each(function (index, element) {
                var iframe = element.attribs;
                var ampiframe = '<amp-iframe width="16" height="9" sandbox="allow-scripts allow-same-origin" layout="responsive" title=' + iframe.title + ' id=' + iframe.id + ' src=' + iframe.src + '></amp-iframe>';
                $(this).replaceWith(ampiframe);
            });
            $('style:not([amp-boilerplate])').each(function () {
                var css = $(this).html();
                var ampStyle = '<style amp-custom>' + css + '</style>';
                $(this).replaceWith(ampStyle);
            });
            if (documentFlag == 2) {
                return $('body').html();
            } else {
                return $('html').html();
            }
        }
    }, {
        key: 'quickDelete',
        value: function quickDelete($) {
            $('script[type="text/template"]').each(function () {
                $(this).remove();
            });
            $('script[type="application/template"]').each(function () {
                $(this).remove();
            });
            $('script[type="text/javascript"]').each(function () {
                $(this).remove();
            });
            $('link[rel="stylesheet"]').each(function () {
                $(this).remove();
            });
            $('p').each(function () {
                $(this).removeAttr('style');
            });
            $('span').each(function () {
                $(this).removeAttr('style');
            });
            $('body').children('style').each(function () {
                $(this).remove();
            });
        }
    }]);

    return AMP;
}();

module.exports = { AMP: AMP };
//# sourceMappingURL=ampConverter.js.map