"use strict";

const urlParse = require('url').parse;
const urlResolve = require('url').resolve;
const slug = require('slug');
const path = require('path');
const cheerio = require('cheerio')

module.exports.urlToFilename = function urlToFilename(url){
    const parsedUrl = urlParse(url);
    const urlPath = parsedUrl.path.split('/')
        .filter(function(component){
            return component !== ''
        })
        .map(function(component){
            return slug(component,{remove:null});
        })
        .join('/');
    console.log(parsedUrl)
    let filename;
    if (parsedUrl.hostname) {
        filename = path.join(parsedUrl.hostname,urlPath);
    }else{
        filename = urlPath;
    }
    console.log(filename)
    if (!path.extname(filename).match(/htm/)) {
        filename +='.html';
    }
    return filename
}

module.exports.getLinkUrl = function getLinkUrl(currentUrl,element){
    const link = urlResolve(currentUrl,element.attribs.href || "");
    const parsedLink = urlParse(link);
    const currentParsedUrl = urlParse(currentUrl);
    if (parsedLink.hostname !== currentParsedUrl.hostname) {
        return null;
    }
    return link;
}