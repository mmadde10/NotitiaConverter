'use strict';
import * as cheerio from 'cheerio';
class HTML {
    constructor(contents){
        this.contents=contents;
    }
    
    loadDocument(contents){
        const $ = cheerio.load(contents);
        return $;
    }

    getElement($){
        if($.root().length != 0){
            let root = $.root().html();
            return root;
        }
    }
    getLanguage($){
        if($.root().length != 0){
            let languange = $('html').attr('lang');
            return languange;
        }
    }
}
module.exports = {HTML}