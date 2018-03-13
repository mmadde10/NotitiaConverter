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
        /* 
       
            Change all images into amp images
            
        */
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
        /* 
       
            Change all videos into amp videos
            
        */

        $('body').find('video').each(function(){
            let video = {
                stringSRC:String($(this).attr('src')), 
                width: 16, 
                height: 9, 
                layout:"responsive",
                content:$(this).html()
            };

            let videoSource = video.content;

            let src = $(videoSource).attr('src');


            let ampVideo = `<amp-video width = ${video.width}  height = ${video.height} layout= ${video.layout}>  
                ${videoSource}
            </amp-video>`;
            $(this).replaceWith(ampVideo);
        });



         /* 
       
            change iframe into amp iframes
            
        */
        $('iframe').each(function(index, element) {
            let iframe = element.attribs;
            let ampiframe = `<amp-iframe width="16" height="9" sandbox="allow-scripts allow-same-origin" layout="responsive" title=${iframe.title} id=${iframe.id} src=${iframe.src}></amp-iframe>`;
            $(this).replaceWith(ampiframe);
        });
         /* 
       
            change style tags into amp style tags 
            
        */
        $('style:not([amp-boilerplate])').each(function(){
                let css = $(this).html();
                let ampStyle = `<style amp-custom>${css}</style>`
                $(this).replaceWith(ampStyle);
        });
         /* 
       
            Change any share buttons into amp social share buttons
            
        */
        $('#socialButtons').each(function(){
            let facebookAppId = $('#facebookLink').attr('app_id');
            let ampSocialShare = `<div id="ampSocialButtons">
                <amp-social-share id="ampFacebookLink"  width="30" height="30"  type="facebook" data-param-app_id=${facebookAppId}></amp-social-share>
                <amp-social-share id="ampTwitterLink"  width="30" height="30"   type="twitter"></amp-social-share>
                <amp-social-share id="ampLinkedinLink"  width="30" height="30"  type="linkedin"></amp-social-share>
                </div>`;
            $(this).replaceWith(ampSocialShare);
        });

        if(documentFlag){
            return $('body').html();
        }

        else{
            return $('html').html();
        }       
    }
    quickDelete($){
         /* 
       
            remove unsupported scripts
            
        */
        $('script[type="text/template"]').each(function(){
            $(this).remove(); 
        });
        $('script[type="application/template"]').each(function(){
            $(this).remove();
        });
        $('script[type="text/javascript"]').each(function(){
            $(this).remove();
        });
         /* 
       
            remove external stylesheets
            
        */
        $('link[rel="stylesheet"]').each(function(){
            $(this).remove();
        });
        /* 
       
            remove inline CSS

        */
        $('p').each(function() {
            $(this).removeAttr('style');
        });
        $('span').each(function() {
            $(this).removeAttr('style');
        });
        $('table').each(function() {
            $(this).removeAttr('style');
        });
        $('td').each(function() {
            $(this).removeAttr('style');
        });
        $('tr').each(function() {
            $(this).removeAttr('style');
        });
        $('th').each(function() {
            $(this).removeAttr('style');
        });
        $('em').each(function() {
            $(this).removeAttr('style');
        });
        $('section').each(function() {
            $(this).removeAttr('style');
        });
        $('strong').each(function(){
            $(this).removeAttr('style');
            
        });
        $('b').each(function(){
            $(this).removeAttr('style');
        });
        $('a').each(function(){
            $(this).removeAttr('style');
        });
        $('h1').each(function(){
            $(this).removeAttr('style');
        });

         /* 
       
            remove CSS not in Head
            
        */
        $('body').children('style').each(function(){
            $(this).remove();
        });
        $('font').each(function(){
            $(this).remove();
        });
        $('span').each(function(){
            $(this).removeAttr('contenteditable');
        });
        $('ul').each(function(){
            $(this).removeAttr('type');
        });
        $('tbody').each(function(){
            $(this).removeAttr('valign');
        });   
    }
}
module.exports = {AMP};