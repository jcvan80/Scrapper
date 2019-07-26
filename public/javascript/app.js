var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var express = require("express");
var app = express();

$(document).on("click" , "scrape-article" , function() {
    $.ajax({
        method:"GET" ,
        url: "/scrape"

    })
    .then(function(data) {
        location.reload();
    });
});
$.getJSON("/api/articles" , function(data) {
    for (var i=0; i<data.length; i++) {
        $("#articlescrape").append("<p date-id=")
    };
})
//Unable to finish still need to pull data and display to page


