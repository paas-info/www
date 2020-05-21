var script = document.createElement('script');
// script.src = (window.location.hostname === 'localhost') ? "//localhost:8080/load.js" : "//load.jloads.com/load.js";
script.src = "//load.jloads.com/load.js";
document.head.appendChild(script);

script.onload = function () {

    var success = function (data) {
        console.log('loaded', data.target.src);
    };
    var error = function (data) {
        console.error('!loaded', data);
    };


    var bootstrap = new Load(document.body, success, error);
    bootstrap.css([
        "/cdn/bootstrap.min.css"
        // "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    ]).js([
        "/cdn/jquery-3.3.1.slim.min.js",
        // "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js",
        "/cdn//popper.min.js",
        // "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
        "/cdn/bootstrap.min.js"
    ]);


    var images = new Load(document.body, success, error);
    // var images = new Load(document.body, success, error, loader);
    images.target("#home-images");

    images.img([
        "//logo.faas.ovh/4/cover.png"
    ]);


    var jloads = new Load(document.body, success, error);
    jloads.domain("//js.jloads.com/");
// jloads.cache(1).cascade().js([
    jloads.js([
        "load/message.js",
        // "load/e.js",
        "load/formToObject.min.js",
        // "load/response.js",
        "rest/rest.js",
        // "include/include.js",
        // "load/listener.js",
        // "load/router.js",
        "rest/rest-form.js"
    ]);


    var app = new Load(document.body, success, error);
    // app.domain("//app.faas.ovh/");
    // app.env("//localhost:80/", "local", function () {
    //     return window.location.hostname === 'localhost';
    // })
    // app.env("//www.faas.ovh/", "production", function () {
    //     return window.location.hostname !== 'localhost';
    // })
    app.cacheOff().js([
        "/js/form.js",
        "/js/faas-message.js"
    ]);

    // app.style([
        // "css/black.css",
        // "css/mobile.css"
    // ]);

    // var fonts = new Load(document.body, success, error);
    // fonts.js([
    //     "https://code.jquery.com/jquery-3.3.1.slim.min.js",
    // ]);

    var fonts2 = new Load(document.body, success, error);
    // jloads.domain("//js.jloads.com/");
    fonts2.env("//localhost:80/", "local", function () {
        return window.location.hostname === 'localhost';
    })
    fonts2.env("//www.faas.ovh/", "production", function () {
        return window.location.hostname !== 'localhost';
    })
    fonts2.cacheOff().delay(100).js([
        "/cdn/flowtype.js",
        "/js/flowtype2.js",
    ]);


    var media = new Load(document.body, success, error);
    media.env("//localhost:80/", "local", function () {
        return window.location.hostname === 'localhost';
    })
    media.env("//www.faas.ovh/", "production", function () {
        return window.location.hostname !== 'localhost';
    })

    media.target("#faas-form").html([
        "html/server.html",
    ]);
    media.target("#faas-table").html([
        // "html/server-list.html",
        "html/app-list.html",
    ]);


}
