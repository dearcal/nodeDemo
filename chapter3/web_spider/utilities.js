"use strict";

const urlParse = require('url').parse;
const slug = require('slug');
const path = require('path');

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