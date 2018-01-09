'use strict';
import * as cheerio from 'cheerio';
import {HTML,Head} from '../html/htmlDocument';

class AMP {
    constructor(content){
        this.content = content;
    }
    getHTML(content){
        const documents = new HTML();
        let $ = documents.loadDocument(content);
        return $;
    }
    quickFix($,documentFlag){
        $('body').find('img').each(function(){
            let img = {
                stringSRC:String($(this).attr('src')), 
                width: 16, 
                height: 9, 
                layout:"responsive",
                Content:$(this).html()
            };
            let ampIMG = `<amp-img src = ${img.stringSRC}  width = ${img.width}  height = ${img.height} layout= ${img.layout}>  ${img.Content} </amp-img>`;
            $(this).replaceWith(ampIMG);
            });
        $('iframe').each(function(index, element) {
            let iframe = element.attribs;
            let ampiframe = `<amp-iframe width="16" height="9" sandbox="allow-scripts allow-same-origin" layout="responsive" title=${iframe.title} id=${iframe.id} src=${iframe.src}></amp-iframe>`;
            $(this).replaceWith(ampiframe);
        });
        $('style:not([amp-boilerplate])').each(function(){
                let css = $(this).html();
                let ampStyle = `<style amp-custom>${css}</style>`
                $(this).replaceWith(ampStyle);
        });
        if(documentFlag == 2){
            return $('body').html();
        }
        else{
            return $('html').html();
        }       
    }
    quickDelete($){
        $('script[type="text/template"]').each(function(){
            $(this).remove(); 
        });
        $('script[type="application/template"]').each(function(){
            $(this).remove();
        });
        $('script[type="text/javascript"]').each(function(){
            $(this).remove();
        });
        $('link[rel="stylesheet"]').each(function(){
            $(this).remove();
        });
        $('p').each(function() {
            $(this).removeAttr('style');
        });
        $('body').children('style').each(function(){
            $(this).remove();
        });
    }
}
module.exports = {AMP};