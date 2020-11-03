"use strict";

const request = require('request');
const fs = require('fs');
const mkdirp = require('mkdirp');
const path = require('path');
const utilities = require('./utilities');

function spider(url){
    const filename = utilities.urlToFilename(url);
}

spider(process.argv[2])