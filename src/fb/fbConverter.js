'use strict';
import * as cheerio from 'cheerio';
import {HTML,Head} from '../html/htmlDocument';

class FaceBookInstantArticle{
    constructor(content){
        this.content = content;
    }

    getHTML(content){
        const html = new HTML();
        let $ = html.loadDocument(content);
        return $;
    }
    prepareInstantArticle($){
        $('body').find('img');

    }
    publishInstantArtcle($){
        
    }
}
module.exports = FaceBookInstantArticle;