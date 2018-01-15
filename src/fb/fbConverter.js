'use strict';
import * as cheerio from 'cheerio';
import {HTML} from '../html/htmlDocument';

class FaceBookInstantArticle {
    constructor(content){
        this.content = content;
    }

    getHTML(content){
        const html = new HTML();
        let $ = html.loadDocument(content);
        return $;
    }
    prepareInstantArticle($){
        const html = new HTML();
        let lang = html.getLanguage($);
        return lang;

    }
}
module.exports = FaceBookInstantArticle;