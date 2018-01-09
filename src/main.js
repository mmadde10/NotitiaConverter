'use strict';
import * as cheerio from 'cheerio';
import {HTML} from './html/htmlDocument';
import * as fb from './fb/fbConverter';
import {AMP} from './amp/ampConverter';

class NotitiaConverter{
    constructor(contents){
        this.contents = contents;
    }
    //Corrects img, iframe and stlye tags, deletes dissallowed scripts, DOES NOT FIX HEAD
    createAMPDocument(contents){
        if(contents != null || contents != undefined){
            const document = new HTML(contents);
            const amps = new AMP(contents);
            let $ = amps.getHTML(contents);
            amps.quickDelete($);
            let amp = amps.quickFix($,1);
            return `<!DOCTYPE html><html ⚡ lang="en">${amp}</html>`;
        }
    }
    //Corrects img, iframe and style tags, deletes dissallowed scripts, returns body only   
    createAMPBody(contents){
        if(contents != null || contents != undefined){
            const document = new HTML(contents);
            const amps = new AMP(contents);
            let $ = amps.getHTML(contents);
            amps.quickDelete($);
            let ampBody = amps.quickFix($,2);
            return ampBody;
        }
    }
}
module.exports = NotitiaConverter;